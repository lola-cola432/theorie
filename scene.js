/* Tekent verkeerssituaties als SVG (bovenaanzicht). */
(function () {
  const ROAD = '#6b6f76', LINE = '#ffffff', GRASS = '#cfe3b4', SAND = '#d9b77a', BIKE = '#c8735f', WALK = '#d8d4cc';
  const POS = { S: [170, 240, 0], E: [240, 130, -90], W: [60, 170, 90], N: [130, 60, 180] };
  const BIKEPOS = { S: [178, 246, 0], E: [244, 120, -90], W: [56, 180, 90], N: [122, 54, 180], SB: [205, 250, 0] };

  function arrow(m) {
    const d = m === 'left' ? 'M0,-28 Q0,-110 -90,-110' : m === 'right' ? 'M0,-28 Q0,-70 88,-70' : 'M0,-28 L0,-92';
    return `<path d="${d}" fill="none" stroke="#1b1b1b" stroke-width="5" stroke-linecap="round" marker-end="url(#ah)" opacity=".85"/>`;
  }
  function label(txt) {
    return `<g transform="translate(0,38)"><rect x="-22" y="-11" width="44" height="22" rx="6" fill="#fff" stroke="#1b1b1b" stroke-width="2"/><text x="0" y="6" text-anchor="middle" font-size="14" font-weight="700" fill="#1b1b1b">${txt}</text></g>`;
  }
  function car(c, me) {
    const col = me ? '#e0442f' : (c || '#2f6fd6');
    return `<rect x="-13" y="-22" width="26" height="44" rx="7" fill="${col}" stroke="#1b1b1b" stroke-width="2"/>
      <rect x="-9" y="-14" width="18" height="9" rx="2" fill="#dbe9f7"/>
      <rect x="-9" y="8" width="18" height="7" rx="2" fill="#dbe9f7"/>`;
  }
  function amb() {
    return `<rect x="-14" y="-24" width="28" height="48" rx="5" fill="#ffffff" stroke="#1b1b1b" stroke-width="2"/>
      <rect x="-14" y="2" width="28" height="6" fill="#ffd400"/>
      <rect x="-10" y="-18" width="20" height="8" rx="2" fill="#dbe9f7"/>
      <circle cx="-6" cy="-4" r="4" fill="#1e6bff"><animate attributeName="opacity" values="1;.2;1" dur="0.8s" repeatCount="indefinite"/></circle>
      <circle cx="6" cy="-4" r="4" fill="#1e6bff"><animate attributeName="opacity" values=".2;1;.2" dur="0.8s" repeatCount="indefinite"/></circle>`;
  }
  function bike() { return `<g transform="scale(1.35)">${bike0()}</g>`; }
  function bike0() {
    return `<rect x="-3" y="-15" width="6" height="30" rx="3" fill="#1b1b1b"/>
      <rect x="-10" y="-9" width="20" height="4" rx="2" fill="#1b1b1b"/>
      <circle cx="0" cy="2" r="7" fill="#f2a900" stroke="#1b1b1b" stroke-width="2"/>`;
  }
  function tram() {
    return `<rect x="-15" y="-48" width="30" height="96" rx="8" fill="#f2c200" stroke="#1b1b1b" stroke-width="2"/>
      <rect x="-11" y="-42" width="22" height="10" rx="2" fill="#dbe9f7"/>
      <line x1="-15" y1="0" x2="15" y2="0" stroke="#1b1b1b" stroke-width="2"/>`;
  }
  function ped() {
    return `<circle cx="0" cy="-10" r="7" fill="#7a3fb8" stroke="#1b1b1b" stroke-width="2"/>
      <rect x="-7" y="-2" width="14" height="18" rx="5" fill="#7a3fb8" stroke="#1b1b1b" stroke-width="2"/>`;
  }
  function actor(a, L) {
    let x, y, r;
    if (a.p) { const P = (a.t === 'bike' ? BIKEPOS : POS)[a.p]; [x, y, r] = P; if (a.t === 'tram') { y = 170; x = 50; } }
    else { x = a.x; y = a.y; r = a.r || 0; }
    let body = a.t === 'car' ? car(a.c, a.me) : a.t === 'amb' ? amb() : a.t === 'bike' ? bike() : a.t === 'tram' ? tram() : ped();
    const arr = a.m && a.t !== 'ped' ? arrow(a.m) : '';
    const lab = a.me ? `<g transform="rotate(${-r})">${label(L.me)}</g>` : '';
    return `<g transform="translate(${x},${y}) rotate(${r})">${arr}${body}${lab}</g>`;
  }
  function sign(s, p) {
    const at = { S: [214, 228], E: [226, 88], W: [74, 212], N: [86, 72] }[p];
    let g = '';
    if (s === 'B6') g = `<polygon points="-16,-12 16,-12 0,15" fill="#fff" stroke="#d1121b" stroke-width="5" stroke-linejoin="round"/>`;
    if (s === 'B7') g = `<polygon points="-7,-17 7,-17 17,-7 17,7 7,17 -7,17 -17,7 -17,-7" fill="#d1121b" stroke="#fff" stroke-width="2"/><text x="0" y="5" text-anchor="middle" font-size="10" font-weight="800" fill="#fff">STOP</text>`;
    if (s === 'B3') g = `<polygon points="0,-17 17,13 -17,13" fill="#fff" stroke="#d1121b" stroke-width="5" stroke-linejoin="round"/><rect x="-2.5" y="-8" width="5" height="17" fill="#1b1b1b"/><rect x="-8" y="1" width="16" height="2" fill="#1b1b1b"/>`;
    if (s === 'B1') g = `<rect x="-13" y="-13" width="26" height="26" transform="rotate(45)" fill="#fff" stroke="#1b1b1b" stroke-width="1.5"/><rect x="-8" y="-8" width="16" height="16" transform="rotate(45)" fill="#f7c600"/>`;
    return `<g transform="translate(${at[0]},${at[1]})"><rect x="-1.5" y="12" width="3" height="16" fill="#555"/>${g}</g>`;
  }
  function haai(p) {
    let out = '';
    for (let i = 0; i < 4; i++) {
      const o = 5 + i * 10;
      if (p === 'S') out += `<polygon points="${150 + o - 4},194 ${150 + o + 4},194 ${150 + o},204" fill="${LINE}"/>`;
      if (p === 'N') out += `<polygon points="${110 + o - 4},106 ${110 + o + 4},106 ${110 + o},96" fill="${LINE}"/>`;
      if (p === 'E') out += `<polygon points="194,${110 + o - 4} 194,${110 + o + 4} 204,${110 + o}" fill="${LINE}"/>`;
      if (p === 'W') out += `<polygon points="106,${150 + o - 4} 106,${150 + o + 4} 96,${150 + o}" fill="${LINE}"/>`;
    }
    return out;
  }
  function light(state) {
    const on = c => state === c ? c === 'red' ? '#e3241b' : c === 'green' ? '#21b14b' : '#f6a400' : '#3a3a3a';
    const blink = state === 'blink' ? `<animate attributeName="fill" values="#f6a400;#3a3a3a;#f6a400" dur="1s" repeatCount="indefinite"/>` : '';
    return `<g transform="translate(244,214)"><rect x="-1.5" y="20" width="3" height="20" fill="#555"/><rect x="-10" y="-26" width="20" height="48" rx="5" fill="#1b1b1b"/>
      <circle cx="0" cy="-14" r="6" fill="${on('red')}"/><circle cx="0" cy="-1" r="6" fill="${state === 'blink' ? '#f6a400' : on('orange')}">${blink}</circle><circle cx="0" cy="12" r="6" fill="${on('green')}"/></g>`;
  }
  function agent() {
    return `<g transform="translate(150,150)"><circle r="16" fill="#fff" stroke="#1b1b1b" stroke-width="2"/>
      <circle cx="0" cy="-3" r="6" fill="#1d3f8f"/><rect x="-5" y="2" width="10" height="9" rx="2" fill="#1d3f8f"/>
      <rect x="-2" y="8" width="4" height="26" rx="2" fill="#1d3f8f" transform="rotate(0)"/>
      <rect x="-9" y="30" width="18" height="6" rx="3" fill="#fff" stroke="#1d3f8f" stroke-width="2"/></g>`;
  }
  function crossroads(o) {
    const arms = o.arms || 'NESW';
    let s = `<rect width="300" height="300" fill="${GRASS}"/>`;
    // stoepen rond de wegen
    const arm = {
      N: [110, 0, 80, 110], S: [110, 190, 80, 110], E: [190, 110, 110, 80], W: [0, 110, 110, 80]
    };
    for (const k of 'NESW') if (arms.includes(k)) {
      const [x, y, w, h] = arm[k];
      const v = k === 'N' || k === 'S';
      s += `<rect x="${v ? x - 8 : x}" y="${v ? y : y - 8}" width="${v ? w + 16 : w}" height="${v ? h : h + 16}" fill="${WALK}"/>`;
    }
    s += `<rect x="102" y="102" width="96" height="96" fill="${WALK}"/>`;
    for (const k of 'NESW') if (arms.includes(k)) {
      const [x, y, w, h] = arm[k];
      const sand = o.unpaved === k;
      s += `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${sand ? SAND : ROAD}"/>`;
      if (sand) for (let i = 0; i < 14; i++) s += `<circle cx="${x + 8 + (i * 37) % (w - 12)}" cy="${y + 8 + (i * 23) % (h - 12)}" r="2.2" fill="#a9844a"/>`;
      else {
        const v = k === 'N' || k === 'S';
        s += v ? `<line x1="150" y1="${y + 6}" x2="150" y2="${y + h - 6}" stroke="${LINE}" stroke-width="3" stroke-dasharray="12 10"/>`
               : `<line x1="${x + 6}" y1="150" x2="${x + w - 6}" y2="150" stroke="${LINE}" stroke-width="3" stroke-dasharray="12 10"/>`;
      }
    }
    s += `<rect x="110" y="110" width="80" height="80" fill="${ROAD}"/>`;
    if (o.bikepath) s += `<rect x="198" y="190" width="18" height="110" fill="${BIKE}"/><rect x="198" y="110" width="18" height="80" fill="${BIKE}" opacity=".55"/><rect x="198" y="0" width="18" height="110" fill="${BIKE}"/>`;
    if (o.tram) s += `<line x1="0" y1="164" x2="300" y2="164" stroke="#2b2b2b" stroke-width="2.5"/><line x1="0" y1="176" x2="300" y2="176" stroke="#2b2b2b" stroke-width="2.5"/>`;
    if (o.zebra) for (let i = 0; i < 8; i++) s += `<rect x="${112 + i * 10}" y="112" width="6" height="34" fill="${LINE}"/>`;
    if (o.stopline) s += `<rect x="150" y="192" width="40" height="5" fill="${LINE}"/>`;
    if (o.haai) s += haai(o.haai);
    return s;
  }
  function rotonde() {
    let s = `<rect width="300" height="300" fill="${GRASS}"/>`;
    s += `<rect x="110" y="0" width="80" height="300" fill="${ROAD}"/><rect x="0" y="110" width="300" height="80" fill="${ROAD}"/>`;
    s += `<circle cx="150" cy="150" r="78" fill="${ROAD}"/><circle cx="150" cy="150" r="40" fill="${GRASS}" stroke="${LINE}" stroke-width="3"/>`;
    // rijrichting op de rotonde (tegen de klok in)
    s += `<path d="M158,209 A59,59 0 0 0 209,158" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="7 6" marker-end="url(#ahw)"/>`;
    s += `<path d="M142,91 A59,59 0 0 0 91,142" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="7 6" marker-end="url(#ahw)"/>`;
    return s;
  }
  function uitrit() {
    let s = `<rect width="300" height="300" fill="${GRASS}"/>`;
    s += `<rect x="0" y="100" width="300" height="76" fill="${ROAD}"/><line x1="0" y1="138" x2="300" y2="138" stroke="${LINE}" stroke-width="3" stroke-dasharray="12 10"/>`;
    s += `<rect x="0" y="182" width="300" height="20" fill="${BIKE}"/>`;
    s += `<rect x="0" y="202" width="300" height="24" fill="${WALK}"/>`;
    s += `<rect x="110" y="226" width="80" height="74" fill="#8b8f96"/>`;
    s += `<rect x="110" y="202" width="80" height="24" fill="#bfbab1"/>`; // verlaagde stoep (uitrit)
    s += `<rect x="20" y="236" width="70" height="56" rx="6" fill="#8b8f96"/><text x="55" y="275" text-anchor="middle" font-size="34" font-weight="800" fill="#fff">P</text>`;
    return s;
  }
  window.drawScene = function (o, L) {
    if (!o) return '';
    let bg = o.type === 'rotonde' ? rotonde() : o.type === 'uitrit' ? uitrit() : crossroads(o);
    let fg = '';
    (o.signs || []).forEach(z => fg += sign(z.s, z.p));
    if (o.light) fg += light(o.light);
    if (o.agent) fg += agent();
    (o.actors || []).forEach(a => fg += actor(a, L));
    return `<svg viewBox="0 0 300 300" role="img" aria-label="${L.aria}" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="ah" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 z" fill="#1b1b1b"/></marker>
      <marker id="ahw" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 z" fill="#fff"/></marker></defs>
      ${bg}${fg}</svg>`;
  };

  /* Losse borden voor de kaartjes en vragen. Code bv. 'B6', 'A1:50', 'X:rood' */
  const RING = (inner) => `<circle r="25" fill="#fff" stroke="#d1121b" stroke-width="7"/>${inner || ''}`;
  const BLUE = '#1356a8';
  const TRI = (inner) => `<polygon points="0,-24 25,19 -25,19" fill="#fff" stroke="#d1121b" stroke-width="6" stroke-linejoin="round"/>${inner || ''}`;
  const SQ = (inner) => `<rect x="-24" y="-24" width="48" height="48" rx="5" fill="${BLUE}" stroke="#fff" stroke-width="2"/>${inner || ''}`;
  const carIcon = (x, c) => `<g transform="translate(${x},0)"><rect x="-8" y="-3" width="16" height="9" rx="2" fill="${c}"/><rect x="-5" y="-9" width="10" height="7" rx="2" fill="${c}"/></g>`;
  function signSvg(code) {
    const [k, arg] = code.split(':');
    const M = {
      B1: `<rect x="-20" y="-20" width="40" height="40" transform="rotate(45)" fill="#fff" stroke="#1b1b1b" stroke-width="2"/><rect x="-12" y="-12" width="24" height="24" transform="rotate(45)" fill="#f7c600"/>`,
      B2: `<rect x="-20" y="-20" width="40" height="40" transform="rotate(45)" fill="#fff" stroke="#1b1b1b" stroke-width="2"/><rect x="-12" y="-12" width="24" height="24" transform="rotate(45)" fill="#f7c600"/><line x1="-22" y1="22" x2="22" y2="-22" stroke="#1b1b1b" stroke-width="5"/>`,
      B3: TRI(`<rect x="-3.5" y="-11" width="7" height="24" fill="#1b1b1b"/><rect x="-12" y="2" width="24" height="3" fill="#1b1b1b"/>`),
      B4: TRI(`<rect x="-3.5" y="-11" width="7" height="24" fill="#1b1b1b"/><rect x="-12" y="2" width="10" height="3" fill="#1b1b1b"/>`),
      B5: TRI(`<rect x="-3.5" y="-11" width="7" height="24" fill="#1b1b1b"/><rect x="2" y="2" width="10" height="3" fill="#1b1b1b"/>`),
      B6: `<polygon points="-25,-18 25,-18 0,24" fill="#fff" stroke="#d1121b" stroke-width="7" stroke-linejoin="round"/>`,
      B7: `<polygon points="-10,-24 10,-24 24,-10 24,10 10,24 -10,24 -24,10 -24,-10" fill="#d1121b" stroke="#fff" stroke-width="2.5"/><text x="0" y="5" text-anchor="middle" font-size="13" font-weight="800" fill="#fff">STOP</text>`,
      H: `<rect x="-26" y="-14" width="52" height="28" fill="#6b6f76" rx="3"/><polygon points="-20,-8 -12,-8 -16,6" fill="#fff"/><polygon points="-6,-8 2,-8 -2,6" fill="#fff"/><polygon points="8,-8 16,-8 12,6" fill="#fff"/>`,
      A1: RING(`<text x="0" y="8" text-anchor="middle" font-size="${(arg || '50').length > 2 ? 19 : 23}" font-weight="800" fill="#1b1b1b">${arg || '50'}</text>`),
      C1: RING(),
      C2: `<circle r="27" fill="#d1121b" stroke="#fff" stroke-width="2"/><rect x="-18" y="-5" width="36" height="10" fill="#fff"/>`,
      C3: SQ(`<path d="M0,-17 L11,-3 H4 V17 H-4 V-3 H-11 Z" fill="#fff"/>`),
      D1: `<circle r="27" fill="${BLUE}" stroke="#fff" stroke-width="2"/><g fill="none" stroke="#fff" stroke-width="5">` +
          [0, 120, 240].map(a => `<path transform="rotate(${a})" d="M-4.5,-14.3 A15,15 0 0 0 -14.6,3.4"/>`).join('') + `</g>` +
          [0, 120, 240].map(a => `<polygon transform="rotate(${a})" points="-21,1 -8,2 -15,11" fill="#fff"/>`).join(''),
      E1: `<circle r="25" fill="${BLUE}" stroke="#d1121b" stroke-width="7"/><line x1="-17" y1="-17" x2="17" y2="17" stroke="#d1121b" stroke-width="7"/>`,
      E2: `<circle r="25" fill="${BLUE}" stroke="#d1121b" stroke-width="7"/><line x1="-17" y1="-17" x2="17" y2="17" stroke="#d1121b" stroke-width="7"/><line x1="17" y1="-17" x2="-17" y2="17" stroke="#d1121b" stroke-width="7"/>`,
      E4: SQ(`<text x="0" y="13" text-anchor="middle" font-size="36" font-weight="800" fill="#fff">P</text>`),
      F1: RING(carIcon(-9, '#d1121b') + carIcon(9, '#1b1b1b')),
      F5: RING(`<path d="M-8,14 L-15,3 H-11 V-14 H-5 V3 H-1 Z" fill="#1b1b1b"/><path d="M8,-14 L15,-3 H11 V14 H5 V-3 H1 Z" fill="#d1121b"/>`),
      F6: SQ(`<path d="M-9,13 L-15,4 H-11.500 V-13 H-6.500 V4 H-3 Z" fill="#d1121b"/><path d="M8,-17 L17,-4 H12 V17 H4 V-4 H-1 Z" fill="#fff"/>`),
      G1: SQ(`<path d="M-10,19 L-4,-8 H-1.500 L-3,19 Z M10,19 L4,-8 H1.500 L3,19 Z" fill="#fff"/><rect x="-18" y="-13" width="36" height="5" fill="#fff"/><rect x="-18" y="-8" width="3" height="6" fill="#fff"/><rect x="15" y="-8" width="3" height="6" fill="#fff"/>`),
      G3: SQ(`<rect x="-15" y="-2" width="30" height="11" rx="3" fill="#fff"/><path d="M-10,-2 L-7,-11 H7 L10,-2 Z" fill="#fff"/><rect x="-13" y="9" width="6" height="6" fill="#fff"/><rect x="7" y="9" width="6" height="6" fill="#fff"/>`),
      G11: `<circle r="27" fill="${BLUE}" stroke="#fff" stroke-width="2"/><g fill="none" stroke="#fff" stroke-width="2.600"><circle cx="-11" cy="6" r="7.500"/><circle cx="11" cy="6" r="7.500"/><path d="M-11,6 L-4,-6 H7 L11,6 M-4,-6 L2,6 H-11 M7,-6 L5,-11 H10 M-7,-9 H-1"/></g>`,
      H1: `<rect x="-28" y="-15" width="56" height="30" rx="3" fill="${BLUE}" stroke="#fff" stroke-width="2"/><text x="0" y="5" text-anchor="middle" font-size="12" font-weight="800" fill="#fff">Leek</text>`,
      J: TRI(`<rect x="-2.500" y="-9" width="5" height="15" fill="#1b1b1b"/><circle cx="0" cy="11" r="3" fill="#1b1b1b"/>`),
      X: `<rect x="-22" y="-22" width="44" height="44" rx="5" fill="#1b1b1b"/>` + (arg === 'groen'
          ? `<path d="M0,16 L-12,0 H-5 V-16 H5 V0 H12 Z" fill="#21b14b"/>`
          : `<path d="M-13,-13 L13,13 M13,-13 L-13,13" stroke="#e3241b" stroke-width="7" stroke-linecap="round"/>`),
      L: (() => { const on = c => arg === c; return `<rect x="-11" y="-27" width="22" height="54" rx="6" fill="#1b1b1b"/><circle cy="-16" r="6.500" fill="${on('rood') ? '#e3241b' : '#3a3a3a'}"/><circle cy="0" r="6.500" fill="${on('geel') ? '#f6a400' : '#3a3a3a'}"/><circle cy="16" r="6.500" fill="${on('groen') ? '#21b14b' : '#3a3a3a'}"/>`; })()
    };
    return M[k] || '';
  }
  const CAP = { H: '▽▽▽', X: '', L: '', J: 'J37', H1: 'H1' };
  window.drawSignRow = function (list) {
    const one = code => { const k = code.split(':')[0];
      return `<figure class="sg"><svg viewBox="-30 -30 60 60" width="64" height="64" aria-hidden="true">${signSvg(code)}</svg><figcaption>${k in CAP ? CAP[k] : k}</figcaption></figure>`; };
    return `<div class="signrow">${list.map(one).join('')}</div>`;
  };
})();
