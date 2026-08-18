/* 传灯 · 多语言字典
 * 规则：zh 严格保留现有中文（不改一字）；en 为海外版补全。
 * 用法：t('key', {n:1}) 做变量替换；CD_LANG 自动检测（URL ?lang=zh|en > 浏览器语言，默认 zh）。
 */
window.CD_I18N = {
  zh: {
    title: '受的三毒 · 星星之火',
    h1: '受的三毒 · 星星之火',
    sub: '一盏灯，是一份觉察；一座城第一位点亮的人，是点灯人。灯灯相续，便是星火。',
    demoBtn: '载入示例',
    importBtn: '导入学员数据',
    baseTencent: '底图：腾讯',
    baseOsm: '底图：OSM',
    sLamp: '点亮总盏数',
    sCity: '覆盖城市',
    drophint: '把学员从 MVP2 导出的 JSON 文件拖到这里，或点「导入学员数据」',
    secTitle: '各城灯火 · 点灯人',
    emptyList: '尚未汇入数据。<br>点「载入示例」先看效果。',
    legend1: '<span style="font-size:14px">🏮</span> <b>灯笼</b> = 城市灯火，由该城第一位点亮者（点灯人）点亮；灯笼越大，灯火越旺',
    legend2: '<b style="color:var(--qing)">点灯人</b> 标签 = 该城最先点亮的人',
    legend3: '🏠 家庭也可各自点灯，汇入城市总灯火。',
    legend4: '底图：国内腾讯 / 海外 OpenStreetMap。',
    footer: '底图 © 腾讯地图（国内）· OpenStreetMap（海外）｜ 本页不绘制任何行政边界，仅以城市光点点亮。',
    mapFail: '地图库加载失败，请检查网络（Leaflet CDN）。',
    noData: '没有识别到带城市的学员数据。',
    unlocTitle: '📍 待定位城市（{n}）',
    unlocNote: '以下城市暂未录入坐标，灯笼未显示在地图上。请补充坐标或联系管理员。',
    repOk: '✓ 成功 {n} 份',
    repNoCity: '｜ {n} 份缺城市字段未上图',
    repSkip: '｜ 跳过 {n} 份',
    repSkipReason: '不是有效 JSON',
    repReadFail: '文件读取失败',
    popupLamp: '灯火 {n} 盏',
    popupLamps: '坚持 {a} · 进阶 {b} · 觉照 {c}',
    popupFirst: '点灯人：',
    popupFamily: '｜🏠 {n} 户家庭',
    popupSpread: '传灯给：{list}',
    popupNoSpread: '他还没有把灯传给别人——点亮自己，也是一份光。',
    cardLamps: '坚持灯 {a} ｜ 进阶灯 {b} ｜ 觉照灯 {c}',
    cardFirst: '点灯人：',
    firstTag: '点灯人',
    teacherView: '教师完整视图',
    publicView: '公开视图（隐名）',
    cloudLoaded: '已载入云端数据',
    cloudFail: '（未检测到云端数据，使用本地 / 示例数据）',
    navStar: '星火',
    backApp: '🏮 回到传灯 App（练习 / 点灯 / 传灯）'
  },
  en: {
    title: 'The Three Poisons · Starfire',
    h1: 'The Three Poisons · Starfire',
    sub: 'A lamp is a moment of awareness. The first to light a city is its Lampkeeper. Lamp after lamp, a prairie fire.',
    demoBtn: 'Load Demo',
    importBtn: 'Import Student Data',
    baseTencent: 'Base: Tencent',
    baseOsm: 'Base: OSM',
    sLamp: 'Total Lamps Lit',
    sCity: 'Cities Reached',
    drophint: 'Drag the JSON exported from MVP2 here, or click “Import Student Data”.',
    secTitle: 'City Lamps · Lampkeepers',
    emptyList: 'No data yet.<br>Click “Load Demo” to preview.',
    legend1: '<span style="font-size:14px">🏮</span> <b>Lantern</b> = a city’s lamps, lit by its first lighter (Lampkeeper); bigger = more lamps.',
    legend2: '<b style="color:var(--qing)">Lampkeeper</b> tag = the first person to light this city.',
    legend3: '🏠 Families can each light a lamp, joining the city total.',
    legend4: 'Base maps: Tencent (China) / OpenStreetMap (overseas).',
    footer: 'Base © Tencent Maps (China) · OpenStreetMap (overseas) ｜ This page draws no administrative borders, only city lamps.',
    mapFail: 'Map library failed to load. Check your network (Leaflet CDN).',
    noData: 'No student data with a city was recognized.',
    unlocTitle: '📍 Unlocated cities ({n})',
    unlocNote: 'These cities have no coordinates yet, so their lanterns are not shown. Please add coordinates or contact the admin.',
    repOk: '✓ {n} imported',
    repNoCity: '｜ {n} missing city field',
    repSkip: '｜ {n} skipped',
    repSkipReason: 'not valid JSON',
    repReadFail: 'file read failed',
    popupLamp: '{n} lamps lit',
    popupLamps: 'Persist {a} · Advance {b} · Awaken {c}',
    popupFirst: 'Lampkeeper: ',
    popupFamily: '｜🏠 {n} families',
    popupSpread: 'Passed the lamp to: {list}',
    popupNoSpread: 'Has not yet passed the lamp to others — lighting oneself is also light.',
    cardLamps: 'Persist {a} ｜ Advance {b} ｜ Awaken {c}',
    cardFirst: 'Lampkeeper: ',
    firstTag: 'Lampkeeper',
    teacherView: 'Teacher view',
    publicView: 'Public view (masked)',
    cloudLoaded: 'Cloud data loaded',
    cloudFail: '(no cloud data detected; using local / demo)',
    navStar: 'Star Map',
    backApp: '🏮 Back to 传灯 App (practice / lamps / sharing)'
  }
};

/* 语言自动检测：URL ?lang=zh|en 优先，否则按浏览器语言，默认中文 */
window.CD_LANG = (function () {
  try {
    var p = new URLSearchParams(location.search).get('lang');
    if (p === 'zh' || p === 'en') return p;
    var nav = (navigator.language || 'zh-CN').toLowerCase();
    return nav.indexOf('zh') === 0 ? 'zh' : 'en';
  } catch (e) { return 'zh'; }
})();

/* 翻译函数：t('key', {n:1}) 变量替换；缺省回退到 zh，再回退到 key 本身 */
window.t = function (key, vars) {
  var all = window.CD_I18N || { zh: {} };
  var dict = all[window.CD_LANG] || all.zh || {};
  var s = (dict[key] != null) ? dict[key] : ((all.zh && all.zh[key] != null) ? all.zh[key] : key);
  if (vars) { for (var k in vars) { s = s.split('{' + k + '}').join(vars[k]); } }
  return s;
};
