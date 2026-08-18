/* 传灯 Chuándēng · Cloudflare Worker（轻后端）
 * 职责：用 KV 存学员（统一 schema）+ 传灯关系图，向地图/App 提供数据。
 * KV 绑定名：CDB（在 wrangler.toml 中配置）
 * 端点：
 *   GET  /api/students      -> {app,students:[...]}
 *   GET  /api/data.json     -> {app,version,updatedAt,students,edges:[{from,to}]}
 *   POST /api/students      -> upsert 一名学员（body: 统一 schema 字段）
 * 全球可达、CORS 放开（部署后可按需收紧域名）。
 */

const HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json; charset=utf-8'
};

function jsonErr(msg, code) {
  return new Response(JSON.stringify({ ok: false, error: msg }), { status: code, headers: HEADERS });
}

async function getStudents() {
  const raw = await CDB.get('students');
  return raw ? JSON.parse(raw) : [];
}

async function handleGetStudents() {
  const list = await getStudents();
  return new Response(JSON.stringify({ app: 'chuandeng', students: list }), HEADERS);
}

async function handleGetData() {
  const list = await getStudents();
  const edges = list.filter(s => s.fromId).map(s => ({ from: s.fromId, to: s.id }));
  return new Response(JSON.stringify({
    app: 'chuandeng', version: 1, updatedAt: Date.now(), students: list, edges: edges
  }), HEADERS);
}

async function handlePostStudent(req) {
  let body;
  try { body = await req.json(); } catch (e) { return jsonErr('invalid JSON', 400); }
  if (!body || !body.id || !body.name) return jsonErr('missing id or name', 400);

  const list = await getStudents();
  const idx = list.findIndex(s => s.id === String(body.id));
  const now = Date.now();
  const rec = {
    id: String(body.id),
    name: String(body.name),
    city: body.city ? String(body.city) : '',
    family: body.family ? String(body.family) : '',
    lamps: {
      jianchi: Number((body.lamps && body.lamps.jianchi) || 0),
      jinjie: Number((body.lamps && body.lamps.jinjie) || 0),
      juezhao: Number((body.lamps && body.lamps.juezhao) || 0)
    },
    fromId: body.fromId ? String(body.fromId) : null,
    forwardCount: Number(body.forwardCount || 0),
    createdAt: idx >= 0 ? list[idx].createdAt : now,
    updatedAt: now
  };
  if (idx >= 0) list[idx] = rec; else list.push(rec);
  await CDB.put('students', JSON.stringify(list));
  return new Response(JSON.stringify({ ok: true, student: rec }), HEADERS);
}

addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (event.request.method === 'OPTIONS') {
    return event.respondWith(new Response(null, { status: 204, headers: HEADERS }));
  }
  if (url.pathname === '/api/students' && event.request.method === 'GET') {
    return event.respondWith(handleGetStudents());
  }
  if (url.pathname === '/api/data.json' && event.request.method === 'GET') {
    return event.respondWith(handleGetData());
  }
  if (url.pathname === '/api/students' && event.request.method === 'POST') {
    return event.respondWith(handlePostStudent(event.request));
  }
  return event.respondWith(new Response(JSON.stringify({ error: 'not found' }), { status: 404, headers: HEADERS }));
});
