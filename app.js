(function(){
  const TOPICS = window.TOPICS;
  const UI = {
    nl:{ title:'Theorie Stap voor Stap', me:'JIJ', aria:'Tekening van de verkeerssituatie',
      welcome:'Kies een onderwerp', intro:'Elk onderwerp leer je in 3 stappen. Eerst de <b>feiten</b>. Dan het <b>waarom</b>. Dan <b>oefenen</b>. Neem de tijd. Er is geen tijdsdruk.',
      s1:'Weten', s1d:'De regels, kort en duidelijk', s2:'Begrijpen', s2d:'Waarom is het zo?', s3:'Toepassen', s3d:'Oefenvragen met uitleg',
      read:'Lees voor', stop:'Stop', next:'Volgende', prev:'Vorige', got:'Ik snap het', why:'Waarom?', src:'Bron', exam:'Examenwoord',
      card:'Kaartje', of:'van', back:'Terug', ladder:'De voorrangsladder', ladderD:'Loop de vragen van boven naar beneden af. Bij het eerste "ja" weet je het antwoord.',
      yes:'Ja', no:'Nee', again:'Opnieuw', whyCards:'Waarom-kaartjes', whyCardsD:'Lees het waarom. Probeer het daarna zelf uit te leggen.',
      explain:'Leg het in je eigen woorden uit. Zeg het hardop, of aan je maatje.', showEx:'Laat de regel zien',
      start:'Start oefenen', pIntro:'Je krijgt 10 vragen. Na elke vraag zie je waarom het antwoord klopt.', q:'Vraag', good:'Goed!', bad:'Niet goed. Geen probleem, deze komt nog een keer terug.',
      rule:'Lees de regel', result:'Klaar!', score:'goed', more:'Nog een ronde', home:'Naar het begin', weak:'Vragen die je nog lastig vond komen vaker terug.',
      settings:'Instellingen', size:'Lettergrootte', theme:'Achtergrond', cream:'Crème', white:'Wit', dark:'Donker',
      auto:'Automatisch voorlezen', off:'Uit', on:'Aan', speed:'Snelheid voorlezen', slow:'Rustig', normal:'Normaal', close:'Sluiten', reset:'Voortgang wissen',
      resetQ:'Weet je het zeker? Alle voortgang wordt gewist.', noVoice:'Op dit toestel is geen voorleesstem gevonden.', done:'gedaan', topic:'Onderwerp',
      exTitle:'Proefexamen', exD:'50 vragen door elkaar, net als bij het CBR', exIntro:'Het proefexamen heeft <b>50 vragen</b> over alle onderwerpen. Je bent geslaagd met <b>44 goed</b>. Je ziet de uitleg pas aan het eind.',
      exNote:'De vragen zijn zelf gemaakt in examenstijl. Het zijn niet de echte CBR-vragen.', ex30:'Start: 30 minuten', ex45:'Start: 45 minuten (extra tijd)',
      exLeft:'Tijd over', exStop:'Examen stoppen', exStopQ:'Wil je het examen stoppen? Je krijgt dan meteen de uitslag.', exPass:'Geslaagd!', exFail:'Nog niet geslaagd',
      exNeed:'Je hebt 44 goed nodig.', exPer:'Per onderwerp', exWrong:'Bekijk je fouten', exNone:'Geen fouten. Knap gedaan!', yours:'Jouw antwoord', right:'Goed antwoord', noAns:'geen antwoord', exBest:'Beste score',
      hMulti:'Er kunnen meer antwoorden goed zijn. Tik alle goede antwoorden aan.', hNum:'Typ het getal.', hSpot:'Tik in de tekening het goede antwoord aan.', hOrder:'Tik ze aan in de goede volgorde. Begin met wie als eerste mag.',
      check:'Controleer', redo:'Opnieuw tikken', rightIs:'Het goede antwoord', meName:'Ik', n_car:'De blauwe auto', n_tram:'De tram', n_bike:'De fietser', n_ped:'De voetganger', n_amb:'De ambulance',
      secToday:'Vandaag herhalen', revBtn:'Vandaag herhalen', revN:'vragen staan klaar', revNone:'Je bent bij voor vandaag. Goed bezig!', revD:'Vragen die je eerder maakte komen op het goede moment terug.', revTitle:'Herhalen',
      secLearn:'Leren', secTest:'Toetsen', sgTitle:'Bordentrainer', sgD:'Borden snel leren herkennen', sgIntro:'Je krijgt 10 borden. Soms kies je de betekenis, soms tik je het goede bord aan.', sgQ1:'Wat betekent dit bord?', sgQ2:'Welk bord betekent:', cards:'kaartjes', qs:'vragen',
      jokeAnna:'Doe dit voor je examen: maak een vuist met je hand en maak voor je hoofd een draaiende beweging. Klaar! Nu slaag je sowieso.', jokeJan:'Rock out! With your cock! Out!' },
    en:{ title:'Theory Step by Step', me:'YOU', aria:'Drawing of the traffic situation',
      welcome:'Choose a topic', intro:'You learn each topic in 3 steps. First the <b>facts</b>. Then the <b>why</b>. Then <b>practice</b>. Take your time. There is no time pressure.',
      s1:'Know', s1d:'The rules, short and clear', s2:'Understand', s2d:'Why is it like this?', s3:'Apply', s3d:'Practice questions with explanations',
      read:'Read aloud', stop:'Stop', next:'Next', prev:'Back', got:'I get it', why:'Why?', src:'Source', exam:'Dutch exam word',
      card:'Card', of:'of', back:'Back', ladder:'The right-of-way ladder', ladderD:'Go through the questions from top to bottom. At the first "yes" you have your answer.',
      yes:'Yes', no:'No', again:'Again', whyCards:'"Why" cards', whyCardsD:'Read the why. Then try to explain it yourself.',
      explain:'Explain it in your own words. Say it out loud, or to your study buddy.', showEx:'Show the rule',
      start:'Start practising', pIntro:'You get 10 questions. After each one you see why the answer is right.', q:'Question', good:'Correct!', bad:'Not quite. No problem, this one will come back.',
      rule:'Read the rule', result:'Done!', score:'correct', more:'Another round', home:'Back to start', weak:'Questions you found hard come back more often.',
      settings:'Settings', size:'Text size', theme:'Background', cream:'Cream', white:'White', dark:'Dark',
      auto:'Read aloud automatically', off:'Off', on:'On', speed:'Reading speed', slow:'Calm', normal:'Normal', close:'Close', reset:'Clear progress',
      resetQ:'Are you sure? All progress will be cleared.', noVoice:'No reading voice was found on this device.', done:'done', topic:'Topic',
      exTitle:'Mock exam', exD:'50 mixed questions, just like at the CBR', exIntro:'The mock exam has <b>50 questions</b> on all topics. You pass with <b>44 correct</b>. You only see the explanations at the end.',
      exNote:'The questions are our own, written in exam style. They are not the real CBR questions.', ex30:'Start: 30 minutes', ex45:'Start: 45 minutes (extra time)',
      exLeft:'Time left', exStop:'Stop exam', exStopQ:'Do you want to stop the exam? You will get your result straight away.', exPass:'Passed!', exFail:'Not passed yet',
      exNeed:'You need 44 correct.', exPer:'Per topic', exWrong:'Review your mistakes', exNone:'No mistakes. Well done!', yours:'Your answer', right:'Correct answer', noAns:'no answer', exBest:'Best score',
      hMulti:'More than one answer can be right. Tap all the correct answers.', hNum:'Type the number.', hSpot:'Tap the correct answer in the drawing.', hOrder:'Tap them in the right order. Start with who goes first.',
      check:'Check', redo:'Tap again', rightIs:'The correct answer', meName:'Me', n_car:'The blue car', n_tram:'The tram', n_bike:'The cyclist', n_ped:'The pedestrian', n_amb:'The ambulance',
      secToday:'Review today', revBtn:'Review today', revN:'questions are ready', revNone:'You are up to date for today. Well done!', revD:'Questions you answered before come back at the right moment.', revTitle:'Review',
      secLearn:'Learn', secTest:'Test', sgTitle:'Sign trainer', sgD:'Learn to recognise signs quickly', sgIntro:'You get 10 signs. Sometimes you choose the meaning, sometimes you tap the correct sign.', sgQ1:'What does this sign mean?', sgQ2:'Which sign means:', cards:'cards', qs:'questions',
      jokeAnna:'Do this before your exam: make a fist and make a turning movement in front of your head. Done! Now you will pass for sure.', jokeJan:'Rock out! With your cock! Out!' }
  };

  /* ---------- opslag ---------- */
  const KEY = 'tsbs_v1';
  let S = { lang:'nl', fs:20, theme:'', auto:false, rate:0.9, cards:{}, why:{}, ladder:false, q:{}, sg:{}, best:null };
  try { const raw = localStorage.getItem(KEY); if (raw) S = Object.assign(S, JSON.parse(raw)); } catch(e){}
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch(e){} };

  const $ = s => document.querySelector(s);
  const app = $('#app');
  const L = () => UI[S.lang];
  const tx = o => o[S.lang];
  const plain = h => h.replace(/<[^>]+>/g,'').replace(/[▽⌂›✓✗→]/g,'');
  const shuffle = a => { a = a.slice(); for (let i = a.length-1; i > 0; i--) { const j = Math.floor(Math.random()*(i+1)); [a[i],a[j]] = [a[j],a[i]]; } return a; };
  const findCard = id => { for (const t of TOPICS) { const c = t.cards.find(x => x.id === id); if (c) return c; } };

  const ALLQ = () => TOPICS.flatMap(t => t.questions);
  /* ---------- slim herhalen: goed = later terug (1, 3, 7, 14 dagen), fout = morgen terug ---------- */
  const today = () => Math.floor((Date.now() - new Date().getTimezoneOffset()*60000) / 86400000);
  const STEPS = [1, 3, 7, 14];
  function record(q, ok){
    if (q.gen) { const g = S.sg[q.code] || { ok:0, bad:0 }; ok ? g.ok++ : g.bad++; S.sg[q.code] = g; save(); return; }
    const s = S.q[q.id] || { ok:0, bad:0, last:null, box:0 };
    if (ok) { s.ok++; s.box = Math.min((s.box || 0) + 1, 4); s.due = today() + STEPS[s.box - 1]; }
    else { s.bad++; s.box = 0; s.due = today() + 1; }
    s.last = ok ? 1 : 0; S.q[q.id] = s; save();
  }
  function dueList(){ const d = today(); return ALLQ().filter(q => { const s = S.q[q.id]; return s && (s.due !== undefined ? s.due <= d : s.last === 0); }); }

  /* ---------- vraagvormen ---------- */
  const actName = a => a.me ? L().meName : L()['n_' + a.t];
  const numVal = v => parseFloat(String(v).replace(',', '.'));
  const numTxt = n => String(n).replace('.', S.lang === 'nl' ? ',' : '.');
  const same = (a, b) => a.length === b.length && a.every((x, i) => x === b[i]);
  function isRight(q, ans){
    if (ans === null || ans === undefined) return false;
    if (q.type === 'num') return numVal(ans) === q.n;
    if (q.type === 'multi') return same(ans.slice().sort(), q.a.slice().sort());
    if (q.type === 'order') return same(ans, q.order);
    return ans === q.a;
  }
  function isComplete(q, ans){
    if (ans === null || ans === undefined) return false;
    if (q.type === 'num') return ans !== '' && !isNaN(numVal(ans));
    if (q.type === 'multi') return ans.length > 0;
    if (q.type === 'order') return ans.length === q.scene.actors.length;
    return true;
  }
  function ansText(q, ans){
    if (ans === null || ans === undefined || (Array.isArray(ans) && !ans.length) || ans === '') return L().noAns;
    const opt = k => q.o[k].sign ? q.o[k].sign.split(':')[0] : tx(q.o[k]);
    if (q.type === 'num') return ans + ' ' + tx(q.unit);
    if (q.type === 'multi') return ans.slice().sort().map(opt).join(' + ');
    if (q.type === 'order') return ans.map((i, n) => (n+1) + '. ' + actName(q.scene.actors[i])).join(' · ');
    if (q.type === 'spot') return actName(q.scene.actors[ans]);
    return opt(ans);
  }
  const rightAns = q => q.type === 'num' ? numTxt(q.n) : q.type === 'order' ? q.order : q.a;
  function hint(q){ const l = L(); return q.type === 'multi' ? l.hMulti : q.type === 'num' ? l.hNum : q.type === 'spot' ? l.hSpot : q.type === 'order' ? l.hOrder : ''; }
  function newItem(q){ return { q, order: q.o ? shuffle(q.o.map((_, k) => k)) : null, ans: null }; }
  function sayText(it){ const q = it.q; return tx(q.q) + ' ' + hint(q) + ' ' + (q.o && !q.o[0].sign ? it.order.map((k, n) => (n+1) + '. ' + tx(q.o[k])).join('. ') : ''); }

  /* Tekent één vraag. onChange(direct) wordt geroepen als het antwoord verandert. */
  function widget(it, onChange){
    const q = it.q, type = q.type || 'mc', el = document.createElement('div');
    let locked = false;
    const GOOD = '#1f7a3a', BAD = '#a3361f', SEL = '#2b4c7e';
    const sceneBox = document.createElement('div');
    function drawSc(){
      if (!q.scene) return;
      let marks = {};
      if (type === 'spot') {
        if (locked) { marks[q.a] = { c: GOOD, t: '✓' }; if (it.ans !== null && it.ans !== q.a) marks[it.ans] = { c: BAD, t: '✗' }; }
        else if (it.ans !== null) marks[it.ans] = { c: SEL, t: '✓' };
      } else if (type === 'order') {
        if (locked) q.order.forEach((i, n) => marks[i] = { c: GOOD, t: String(n+1) });
        else (it.ans || []).forEach((i, n) => marks[i] = { c: SEL, t: String(n+1) });
      }
      const tap = !locked && (type === 'spot' || type === 'order');
      sceneBox.className = 'scene'; sceneBox.innerHTML = drawScene(q.scene, Object.assign({}, L(), { tap, marks }));
      if (tap) sceneBox.querySelectorAll('.act').forEach(g => g.addEventListener('click', () => {
        const i = +g.dataset.i;
        if (type === 'spot') { it.ans = i; drawSc(); onChange(true); }
        else { it.ans = it.ans || []; if (!it.ans.includes(i)) { it.ans.push(i); drawSc(); onChange(false); } }
      }));
    }
    if (q.scene) { drawSc(); el.appendChild(sceneBox); } else if (q.signs) el.appendChild(h(drawSignRow(q.signs)));
    el.appendChild(h(`<h3>${tx(q.q)}</h3>${hint(q) ? `<p class="hint">${hint(q)}</p>` : ''}`));
    el.appendChild(sayBtn(sayText(it)));
    let opts = null, disp = null;
    if (type === 'mc' || type === 'multi') {
      opts = document.createElement('div'); opts.className = 'opts' + (q.o[0].sign ? ' signopts' : '');
      it.order.forEach(k => {
        const o = q.o[k], b = mk('opt', o.sign ? drawSignRow([o.sign], true) : (type === 'multi' ? '<span class="box"></span>' : '') + tx(o), () => {
          if (type === 'mc') { it.ans = k; paint(); onChange(true); }
          else { it.ans = it.ans || []; it.ans = it.ans.includes(k) ? it.ans.filter(x => x !== k) : it.ans.concat(k); paint(); onChange(false); }
        });
        if (o.sign) b.setAttribute('aria-label', o.sign.split(':')[0]);
        b.dataset.k = k; opts.appendChild(b);
      });
      el.appendChild(opts);
    }
    if (type === 'num') {
      disp = h(`<div class="numdisp"><span class="val"></span> <span class="unit">${tx(q.unit)}</span></div>`).firstChild;
      const pad = document.createElement('div'); pad.className = 'pad';
      ['1','2','3','4','5','6','7','8','9',',','0','⌫'].forEach(c => pad.appendChild(mk('key', c, () => {
        if (locked) return; let v = it.ans || '';
        if (c === '⌫') v = v.slice(0, -1); else if (c === ',') { if (v && !v.includes(',')) v += ','; } else if (v.length < 5) v += c;
        it.ans = v; paint(); onChange(false);
      })));
      el.append(disp, pad);
    }
    if (type === 'order') el.appendChild(mk('say', '↺ ' + L().redo, () => { if (locked) return; it.ans = []; drawSc(); onChange(false); }));
    function paint(){
      if (opts) opts.querySelectorAll('.opt').forEach(b => {
        const k = +b.dataset.k, on = type === 'mc' ? it.ans === k : (it.ans || []).includes(k);
        b.classList.toggle('sel', on && !locked);
        if (locked) { b.disabled = true; const good = type === 'mc' ? k === q.a : q.a.includes(k); b.classList.toggle('good', good); b.classList.toggle('bad', on && !good); }
      });
      if (disp) { disp.querySelector('.val').textContent = it.ans || '…'; if (locked) disp.classList.add(isRight(q, it.ans) ? 'good' : 'bad'); }
    }
    paint();
    return { el, lock(){ locked = true; paint(); drawSc();
      if (type === 'num' && !isRight(q, it.ans)) el.appendChild(h(`<p class="pass"><b>${L().rightIs}: ${numTxt(q.n)} ${tx(q.unit)}</b></p>`)); } };
  }

  /* ---------- bordentrainer: maakt vragen uit de bordenlijst ---------- */
  function signQuestions(n){
    const SG = window.SIGNS, w = g => { const r = S.sg[g.code]; return r ? r.bad*2 - r.ok : 1; };
    const pick = shuffle(SG).sort((a, b) => w(b) - w(a)).slice(0, n);
    return shuffle(pick).map((g, i) => {
      const others = shuffle(SG.filter(x => x.code !== g.code)).sort((a, b) => (b.g === g.g) - (a.g === g.g));
      const nm = ({ J: 'J37', Z30: 'A1 (zone)' })[g.code.split(':')[0]] || g.code.split(':')[0];
      const why = { nl: `Bord ${nm}: ${g.nl}.`, en: `Sign ${nm}: ${g.en}.` };
      if (i % 2 === 0) return { id: 'sg:' + g.code, gen: true, code: g.code, signs: [g.code], q: { nl: L0('sgQ1','nl'), en: L0('sgQ1','en') },
        o: [g].concat(others.slice(0, 2)).map(x => ({ nl: x.nl, en: x.en })), a: 0, why };
      return { id: 'sg:' + g.code, gen: true, code: g.code, q: { nl: L0('sgQ2','nl') + ' ' + g.nl + '?', en: L0('sgQ2','en') + ' ' + g.en + '?' },
        o: [g].concat(others.slice(0, 3)).map(x => ({ sign: x.code })), a: 0, why };
    });
  }
  const L0 = (k, lang) => UI[lang][k];

  /* ---------- voorlezen ---------- */
  const synth = window.speechSynthesis;
  function voiceFor(lang){
    if (!synth) return null;
    const vs = synth.getVoices(), w = lang === 'nl' ? ['nl-nl','nl_nl','nl'] : ['en-us','en_us','en'];
    for (const p of w) { const v = vs.find(v => v.lang.toLowerCase().startsWith(p)); if (v) return v; }
    return null;
  }
  function resetSay(){ document.querySelectorAll('.say.on').forEach(b => { b.classList.remove('on'); b.innerHTML = '🔊 ' + L().read; }); }
  function speak(text, btn){
    if (!synth) { if (btn) msg(L().noVoice); return; }
    synth.cancel(); resetSay();
    const u = new SpeechSynthesisUtterance(plain(text));
    u.lang = S.lang === 'nl' ? 'nl-NL' : 'en-US';
    const v = voiceFor(S.lang); if (v) u.voice = v;
    u.rate = S.rate;
    if (btn){ btn.classList.add('on'); btn.innerHTML = '⏹ ' + L().stop;
      u.onend = u.onerror = () => { btn.classList.remove('on'); btn.innerHTML = '🔊 ' + L().read; }; }
    synth.speak(u);
  }
  function sayBtn(text){
    const b = document.createElement('button'); b.className = 'say'; b.innerHTML = '🔊 ' + L().read;
    b.onclick = () => { if (b.classList.contains('on')) { synth && synth.cancel(); resetSay(); } else speak(text, b); };
    return b;
  }
  function autoSay(text){ if (S.auto && synth) setTimeout(() => speak(text), 250); }

  /* ---------- helpers ---------- */
  function h(html){ const d = document.createElement('div'); d.innerHTML = html; return d; }
  function mk(cls, label, fn){ const b = document.createElement('button'); b.className = cls; b.innerHTML = label; b.onclick = fn; return b; }
  function row(...btns){ const r = document.createElement('div'); r.className = 'row'; r.append(...btns); return r; }
  function screen(nodes){
    if (synth) synth.cancel();
    app.innerHTML = ''; const w = document.createElement('div'); w.className = 'fade';
    nodes.forEach(n => w.appendChild(typeof n === 'string' ? h(n) : n)); app.appendChild(w); window.scrollTo(0,0);
  }
  let redraw = () => {};
  function nav(fn, ...a){ redraw = () => fn(...a); fn(...a); }
  function termChips(c){
    if (S.lang !== 'en' || !c.terms) return '';
    return `<div class="terms">${c.terms.map(t => `<span class="term"><span>${L().exam}:</span> <b>${t}</b></span>`).join('')}</div>`;
  }
  function visual(c){
    if (c.scene) return `<div class="scene">${drawScene(c.scene, L())}</div>`;
    if (c.icon === 'signsHave') return drawSignRow(['B1','B2','B3','B4','B5']);
    if (c.icon === 'signsGive') return drawSignRow(['B6','B7','H']);
    if (c.signs) return drawSignRow(c.signs);
    return '';
  }
  const pct = (a,b) => b ? Math.round(a/b*100) : 0;
  function stats(t){
    const c = t.cards.filter(x => S.cards[x.id]).length;
    const wn = t.cards.length + (t.ladder ? 1 : 0);
    const w = t.cards.filter(x => S.why[x.id]).length + (t.ladder && S.ladder ? 1 : 0);
    const q = t.questions.filter(x => S.q[x.id] && S.q[x.id].ok > 0).length;
    return { c: pct(c, t.cards.length), w: pct(w, wn), q: pct(q, t.questions.length), all: pct(c + w + q, t.cards.length + wn + t.questions.length) };
  }
  function stepBtn(n, t, d, p, fn){
    const b = document.createElement('button'); b.className = 'step';
    b.innerHTML = `<span class="num">${n}</span><span class="t"><b>${t}</b><small>${d}</small>${p === null ? '' : `<span class="prog" aria-hidden="true"><i style="width:${p}%"></i></span>`}</span><span aria-hidden="true">›</span>`;
    b.setAttribute('aria-label', `${n}. ${t}. ${d}.${p === null ? '' : ' ' + p + '% ' + L().done}`);
    b.onclick = fn; return b;
  }

  /* ---------- home ---------- */
  function home(){
    const l = L(), due = dueList();
    const rev = due.length
      ? stepBtn('↻', `${l.revBtn}: ${due.length}`, `${due.length} ${l.revN}`, null, () => startSession({ title: l.revTitle, qs: shuffle(due).slice(0, 20), back: () => nav(home) }))
      : h(`<div class="card calm"><b>✓ ${l.revNone}</b><div class="hint">${l.revD}</div></div>`).firstChild;
    if (due.length) rev.classList.add('examcard');
    const list = document.createElement('div'); list.className = 'tlist';
    TOPICS.forEach((t, i) => list.appendChild(stepBtn(i+1, tx(t.title), `${t.cards.length} ${l.cards} · ${t.questions.length} ${l.qs}`, stats(t).all, () => nav(topic, t))));
    const test = document.createElement('div'); test.className = 'tlist';
    test.append(stepBtn('▲', l.sgTitle, l.sgD, null, () => nav(signIntro)),
                stepBtn('★', l.exTitle, l.exD + (S.best !== null ? ` · ${l.exBest}: ${S.best}/50` : ''), null, () => nav(examIntro)));
    const fun = document.createElement('div'); fun.className = 'fun';
    fun.append(mk('', 'Anna', () => joke('Anna', l.jokeAnna, '✊')), mk('', 'Jan Smeerlap', () => joke('Jan Smeerlap', l.jokeJan, '🤘')));
    screen([h(`<h2 class="sec">${l.secToday}</h2>`), rev, h(`<h2 class="sec">${l.secLearn}</h2><p class="hint">${l.intro}</p>`), list, h(`<h2 class="sec">${l.secTest}</h2>`), test, fun]);
  }
  function signIntro(){
    const l = L();
    screen([h(`<h2>${l.sgTitle}</h2><div class="card"><p>${l.sgIntro}</p></div>`), sayBtn(l.sgIntro),
      row(mk('btn ghost', '‹ ' + l.back, () => nav(home)), mk('btn', l.start, () => startSession({ title: l.sgTitle, qs: signQuestions(10), back: () => nav(home), again: () => startSession({ title: l.sgTitle, qs: signQuestions(10), back: () => nav(home) }) })))]);
  }
  function joke(name, text, emoji){
    openDlg(`<h3>${name}</h3><div class="joke"><div style="font-size:3rem">${emoji}</div>${text}</div><div class="row"><button class="btn" data-close>😂 ${L().close}</button></div>`);
  }
  function topic(t){
    const l = L(), st = stats(t), steps = document.createElement('div'); steps.className = 'steps';
    steps.append(stepBtn(1, l.s1, l.s1d, st.c, () => nav(weten, t, 0)),
                 stepBtn(2, l.s2, l.s2d, st.w, () => t.ladder ? nav(begrijpen, t) : nav(whyCard, t, 0)),
                 stepBtn(3, l.s3, l.s3d, st.q, () => nav(toepassen, t)));
    screen([h(`<div class="counter">${l.topic}</div><h2 style="margin-top:4px">${tx(t.title)}</h2>`), steps, row(mk('btn ghost', '‹ ' + l.back, () => nav(home)))]);
  }

  /* ---------- 1. Weten ---------- */
  function weten(t, i){
    const l = L(), c = t.cards[i], n = t.cards.length, lines = tx(c.text);
    const body = h(`<div class="counter">${tx(t.title)} · ${l.card} ${i+1} ${l.of} ${n} ${S.cards[c.id] ? '· <span class="done-badge">✓</span>' : ''}</div>
      <div class="card"><h3>${tx(c.title)}</h3>${visual(c)}
      <ul class="lines">${lines.map(x => `<li>${x}</li>`).join('')}</ul>${termChips(c)}
      <div class="src">${l.src}: ${c.src}</div></div>`);
    const say = tx(c.title) + '. ' + lines.join(' ');
    const prev = mk('btn ghost', l.prev, () => i === 0 ? nav(topic, t) : nav(weten, t, i-1));
    const got = mk('btn', i < n-1 ? l.got + ' ›' : l.got + ' ✓', () => { S.cards[c.id] = 1; save(); i < n-1 ? nav(weten, t, i+1) : nav(topic, t); });
    screen([body, sayBtn(say), row(prev, got)]);
    autoSay(say);
  }

  /* ---------- 2. Begrijpen ---------- */
  function begrijpen(t){
    const l = L(), st = document.createElement('div'); st.className = 'steps';
    const w = t.cards.filter(x => S.why[x.id]).length;
    st.append(stepBtn('A', l.ladder, l.ladderD, S.ladder ? 100 : 0, () => nav(ladder, t, 0)),
              stepBtn('B', l.whyCards, l.whyCardsD, pct(w, t.cards.length), () => nav(whyCard, t, 0)));
    screen([h(`<h2>2. ${l.s2}</h2>`), st, row(mk('btn ghost', '‹ ' + l.back, () => nav(topic, t)))]);
  }
  function ladder(t, i){
    const l = L(), list = document.createElement('div');
    t.ladder.forEach((r, k) => {
      if (k > i) return;
      const cur = k === i;
      const c = h(`<div class="card"${cur ? '' : ' style="opacity:.55"'}><div class="counter">${k+1} / ${t.ladder.length}</div><div class="ladder-q">${tx(r.q)}</div>${cur ? '' : `<p class="hint">${l.no}</p>`}</div>`).firstChild;
      if (cur){ c.appendChild(sayBtn(tx(r.q)));
        c.appendChild(row(mk('btn', l.yes, () => nav(ladderAnswer, t, i)), mk('btn ghost', l.no, () => i+1 < t.ladder.length ? nav(ladder, t, i+1) : nav(ladderAnswer, t, -1)))); }
      list.appendChild(c);
    });
    screen([h(`<h2>${l.ladder}</h2><p class="hint">${l.ladderD}</p>`), list]);
    autoSay(tx(t.ladder[i].q));
    const last = list.lastChild; if (last && i > 0) last.scrollIntoView({ block:'center' });
  }
  function ladderAnswer(t, i){
    const l = L(), ans = i < 0 ? tx(t.ladderEnd) : tx(t.ladder[i].yes);
    const card = findCard(i < 0 ? 'c4' : t.ladder[i].card);
    S.ladder = true; save();
    const box = h(`<h2>${l.ladder}</h2>${i >= 0 ? `<div class="card" style="opacity:.6"><div class="ladder-q">${tx(t.ladder[i].q)}</div><p class="hint">${l.yes}</p></div>` : ''}
      <div class="card" style="border-color:var(--good)"><div class="ladder-q">→ ${ans}</div>
      <div class="why"><h4>${l.why}</h4>${tx(card.why)}</div><div class="src">${l.src}: ${card.src}</div></div>`);
    screen([box, sayBtn(ans + ' ' + tx(card.why)), row(mk('btn ghost', l.back, () => nav(begrijpen, t)), mk('btn', l.again, () => nav(ladder, t, 0)))]);
    autoSay(ans);
  }
  function whyCard(t, i){
    const l = L(), c = t.cards[i], n = t.cards.length, back = () => t.ladder ? nav(begrijpen, t) : nav(topic, t);
    const body = h(`<div class="counter">${tx(t.title)} · ${l.card} ${i+1} ${l.of} ${n} ${S.why[c.id] ? '· <span class="done-badge">✓</span>' : ''}</div>
      <div class="card"><h3>${tx(c.title)}</h3>${visual(c)}
      <div class="why"><h4>${l.why}</h4>${tx(c.why)}</div>
      <p><b>${l.explain}</b></p><div id="ex"></div></div>`);
    const ex = body.querySelector('#ex');
    const show = mk('btn ghost', l.showEx, () => { ex.innerHTML = `<ul class="lines">${tx(c.text).map(x => `<li>${x}</li>`).join('')}</ul>${termChips(c)}<div class="src">${l.src}: ${c.src}</div>`; });
    ex.appendChild(show);
    const say = tx(c.title) + '. ' + tx(c.why);
    screen([body, sayBtn(say), row(mk('btn ghost', l.prev, () => i === 0 ? back() : nav(whyCard, t, i-1)),
      mk('btn', i < n-1 ? l.got + ' ›' : l.got + ' ✓', () => { S.why[c.id] = 1; save(); i < n-1 ? nav(whyCard, t, i+1) : back(); }))]);
    autoSay(say);
  }

  /* ---------- 3. Toepassen, herhalen en bordentrainer: één oefensessie ---------- */
  let ses = null;
  function qVisual(q){ return q.scene ? `<div class="scene">${drawScene(q.scene, L())}</div>` : q.signs ? drawSignRow(q.signs) : ''; }
  function toepassen(t){
    const l = L();
    screen([h(`<div class="counter">${tx(t.title)}</div><h2 style="margin-top:4px">3. ${l.s3}</h2><p>${l.pIntro}</p><p class="hint">${l.weak}</p>`),
      row(mk('btn ghost', '‹ ' + l.back, () => nav(topic, t)), mk('btn', l.start, () => topicSession(t)))]);
  }
  function topicSession(t){
    const score = q => { const s = S.q[q.id]; if (!s) return 1; return s.bad*2 - s.ok + (s.last === 0 ? 3 : 0); };
    startSession({ title: tx(t.title), qs: shuffle(t.questions).sort((a,b) => score(b) - score(a)).slice(0, 10), back: () => nav(topic, t), again: () => topicSession(t) });
  }
  function startSession(o){
    ses = { title: o.title, back: o.back, again: o.again, list: o.qs.map(newItem), i: 0, ok: 0, total: 0, retried: {}, done: false };
    nav(question);
  }
  function question(){
    const l = L(), it = ses.list[ses.i], q = it.q, instant = !q.type || q.type === 'mc' || q.type === 'spot';
    const card = h('<div class="card"></div>').firstChild, fb = document.createElement('div');
    const chk = mk('btn', l.check, () => submit(true)); chk.disabled = !isComplete(q, it.ans);
    const w = widget(it, direct => { if (ses.done) return; if (direct) submit(true); else chk.disabled = !isComplete(q, it.ans); });
    card.appendChild(w.el); if (!instant) card.appendChild(row(chk)); card.appendChild(fb);
    function submit(fresh){
      const ok = isRight(q, it.ans); ses.done = true; w.lock(); chk.remove();
      if (fresh){
        record(q, ok);
        if (!ses.retried[q.id]) { ses.total++; if (ok) ses.ok++; }
        if (!ok && !ses.retried[q.id]) { ses.retried[q.id] = 1; ses.list.splice(Math.min(ses.i + 3, ses.list.length), 0, newItem(q)); }
      }
      const c = q.card ? findCard(q.card) : null;
      fb.innerHTML = `<div class="verdict ${ok?'good':'bad'}">${ok ? '✓ ' + l.good : '✗ ' + l.bad}</div>
        <div class="why"><h4>${l.why}</h4>${tx(q.why)}</div><div class="src">${l.src}: ${c ? c.src : 'RVV 1990, bijlage 1'}</div>`;
      fb.appendChild(sayBtn((ok ? l.good : l.bad) + ' ' + tx(q.why)));
      const nx = mk('btn', l.next + ' ›', () => { ses.i++; ses.done = false; ses.i < ses.list.length ? nav(question) : nav(result); });
      fb.appendChild(c ? row(mk('btn ghost', l.rule, () => openDlg(`<h3>${tx(c.title)}</h3>${visual(c)}<ul class="lines">${tx(c.text).map(x=>`<li>${x}</li>`).join('')}</ul>${termChips(c)}<div class="row"><button class="btn" data-close>${l.close}</button></div>`)), nx) : row(nx));
      if (fresh){ autoSay((ok ? l.good : l.bad) + ' ' + tx(q.why)); fb.scrollIntoView({ behavior:'smooth', block:'nearest' }); }
    }
    screen([h(`<div class="counter">${ses.title} · ${l.q} ${ses.i+1} ${l.of} ${ses.list.length}</div>`), card]);
    if (ses.done) submit(false); else autoSay(tx(q.q) + ' ' + hint(q));
  }
  function result(){
    const l = L(), m = `${ses.ok} / ${ses.total} ${l.score}`;
    screen([h(`<h2>${l.result}</h2><div class="card"><p style="font-size:1.6rem;font-weight:700;margin:0">${m}</p><p class="hint" style="margin-top:8px">${l.weak}</p></div>`),
      ses.again ? row(mk('btn ghost', l.back, ses.back), mk('btn', l.more, ses.again)) : row(mk('btn', l.back, ses.back))]);
    autoSay(l.result + ' ' + m);
  }

  /* ---------- Proefexamen ---------- */
  let ex = null, tick = null;
  function examIntro(){
    const l = L();
    screen([h(`<h2>${l.exTitle}</h2><div class="card"><p>${l.exIntro}</p><p class="hint">${l.exNote}</p>${S.best !== null ? `<p><b>${l.exBest}: ${S.best} / 50</b></p>` : ''}</div>`),
      sayBtn(l.exIntro), row(mk('btn', l.ex30, () => startExam(30))), row(mk('btn ghost', l.ex45, () => startExam(45))), row(mk('btn ghost', '‹ ' + l.back, () => nav(home)))]);
  }
  function startExam(min){
    // eerlijk verdeeld over de onderwerpen, daarna door elkaar
    const per = Math.floor(50 / TOPICS.length); let list = [], rest = [];
    TOPICS.forEach(t => { const s = shuffle(t.questions); list.push(...s.slice(0, per).map(q => ({ q, t }))); rest.push(...s.slice(per).map(q => ({ q, t }))); });
    list.push(...shuffle(rest).slice(0, 50 - list.length));
    ex = { list: shuffle(list).map(x => Object.assign(newItem(x.q), { t: x.t })), i: 0, end: Date.now() + min*60000, done: false };
    clearInterval(tick); tick = setInterval(examTick, 1000);
    nav(examQ);
  }
  function left(){ const s = Math.max(0, Math.round((ex.end - Date.now())/1000)); return String(Math.floor(s/60)).padStart(2,'0') + ':' + String(s%60).padStart(2,'0'); }
  function examTick(){
    if (!ex || ex.done) { clearInterval(tick); return; }
    const el = document.getElementById('tleft'); if (el) el.textContent = left();
    if (Date.now() >= ex.end) finishExam();
  }
  function finishExam(){ clearInterval(tick); ex.done = true; if (dlg.open) dlg.close(); nav(examResult); }
  function examQ(){
    const l = L(), it = ex.list[ex.i];
    const card = h('<div class="card"></div>').firstChild; card.appendChild(widget(it, () => {}).el);
    const prev = mk('btn ghost', l.prev, () => { ex.i--; nav(examQ); }); prev.disabled = ex.i === 0;
    const next = mk('btn', ex.i < 49 ? l.next + ' ›' : l.result + ' ✓', () => { if (ex.i < 49) { ex.i++; nav(examQ); } else finishExam(); });
    const stop = mk('say', l.exStop, () => { openDlg(`<p>${l.exStopQ}</p><div class="row"><button class="btn ghost" data-close>${l.no}</button><button class="btn" id="exy">${l.yes}</button></div>`); $('#exy').onclick = finishExam; });
    screen([h(`<div class="timer"><span>${l.q} ${ex.i+1} ${l.of} 50</span><span>${l.exLeft}: <span id="tleft">${left()}</span></span></div>`), card, row(prev, next), h('<div style="height:18px"></div>'), stop]);
    autoSay(tx(it.q.q) + ' ' + hint(it.q));
  }
  function examResult(){
    const l = L(), good = x => isRight(x.q, x.ans), ok = ex.list.filter(good).length, pass = ok >= 44;
    if (S.best === null || ok > S.best) { S.best = ok; save(); }
    ex.list.forEach(x => { if (!x.counted && isComplete(x.q, x.ans)) { record(x.q, good(x)); x.counted = 1; } });
    const rows = TOPICS.map(t => { const m = ex.list.filter(x => x.t === t); if (!m.length) return ''; return `<tr><td>${tx(t.title)}</td><td>${m.filter(good).length} / ${m.length}</td></tr>`; }).join('');
    const wrong = ex.list.filter(x => !good(x));
    const rev = document.createElement('div');
    wrong.forEach(x => { const q = x.q, c = findCard(q.card), ra = rightAns(q);
      let pic = qVisual(q);
      if (q.scene && (q.type === 'spot' || q.type === 'order')) { const marks = {}; if (q.type === 'spot') marks[q.a] = { c:'#1f7a3a', t:'✓' }; else q.order.forEach((i, n) => marks[i] = { c:'#1f7a3a', t:String(n+1) }); pic = `<div class="scene">${drawScene(q.scene, Object.assign({}, L(), { marks }))}</div>`; }
      rev.appendChild(h(`<div class="card">${pic}<h3>${tx(q.q)}</h3>
        <p class="fail">✗ ${l.yours}: ${ansText(q, x.ans)}</p><p class="pass">✓ ${l.right}: ${q.type === 'num' ? ra + ' ' + tx(q.unit) : ansText(q, ra)}</p>
        <div class="why"><h4>${l.why}</h4>${tx(q.why)}</div><div class="src">${l.src}: ${c.src}</div></div>`).firstChild); });
    screen([h(`<h2 class="${pass ? 'pass' : 'fail'}">${pass ? '✓ ' + l.exPass : l.exFail}</h2>
      <div class="card"><p style="font-size:1.8rem;font-weight:700;margin:0">${ok} / 50</p><p class="hint">${l.exNeed}</p></div>
      <div class="card"><h3>${l.exPer}</h3><table class="res">${rows}</table></div>
      <h3 style="margin-top:20px">${l.exWrong}</h3>${wrong.length ? '' : `<p>${l.exNone}</p>`}`), rev,
      row(mk('btn ghost', l.home, () => nav(home)), mk('btn', l.again, () => nav(examIntro)))]);
    autoSay(`${pass ? l.exPass : l.exFail} ${ok} / 50.`);
  }

  /* ---------- dialoog en instellingen ---------- */
  const dlg = $('#dlg');
  function openDlg(html){ $('#dlgBody').innerHTML = html; if (!dlg.open) dlg.showModal(); dlg.querySelectorAll('[data-close]').forEach(b => b.onclick = () => dlg.close()); }
  function msg(t){ openDlg(`<p>${t}</p><div class="row"><button class="btn" data-close>${L().close}</button></div>`); }
  dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
  function settings(){
    const l = L();
    const seg = (key, items) => `<div class="seg">${items.map(([v,t]) => `<button data-k="${key}" data-v="${v}" aria-pressed="${String(S[key])===String(v)}">${t}</button>`).join('')}</div>`;
    openDlg(`<h3>${l.settings}</h3>
      <div>${l.size}</div>${seg('fs', [[18,'A'],[20,'A+'],[23,'A++'],[26,'A+++']])}
      <div>${l.theme}</div>${seg('theme', [['',l.cream],['wit',l.white],['donker',l.dark]])}
      <div>${l.auto}</div>${seg('auto', [[false,l.off],[true,l.on]])}
      <div>${l.speed}</div>${seg('rate', [[0.8,l.slow],[0.9,l.normal],[1,'+']])}
      <div class="row"><button class="btn ghost" id="rst">${l.reset}</button><button class="btn" data-close>${l.close}</button></div>`);
    dlg.querySelectorAll('.seg button').forEach(b => b.onclick = () => {
      const k = b.dataset.k; let v = b.dataset.v;
      if (k === 'fs' || k === 'rate') v = Number(v); if (k === 'auto') v = v === 'true';
      S[k] = v; save(); applyLook(); settings();
    });
    $('#rst').onclick = () => { if (window.confirm(l.resetQ)) { S.cards = {}; S.why = {}; S.ladder = false; S.q = {}; S.sg = {}; S.best = null; save(); dlg.close(); nav(home); } };
  }
  function applyLook(){
    document.documentElement.style.setProperty('--fs', S.fs + 'px');
    document.body.className = S.theme || '';
    document.documentElement.lang = S.lang;
    $('#appTitle').textContent = L().title;
    $('#lnNL').setAttribute('aria-pressed', S.lang === 'nl'); $('#lnEN').setAttribute('aria-pressed', S.lang === 'en');
    $('#setBtn').setAttribute('aria-label', L().settings);
  }
  function setLang(lg){ S.lang = lg; save(); applyLook(); redraw(); }
  $('#lnNL').onclick = () => setLang('nl');
  $('#lnEN').onclick = () => setLang('en');
  $('#homeBtn').onclick = () => { if (ex && !ex.done) { openDlg(`<p>${L().exStopQ}</p><div class="row"><button class="btn ghost" data-close>${L().no}</button><button class="btn" id="exy">${L().yes}</button></div>`); $('#exy').onclick = finishExam; } else nav(home); };
  $('#setBtn').onclick = settings;

  window.__test = qs => startSession({ title: 'Test', qs, back: () => nav(home) });
  applyLook(); nav(home);
  if ('serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('sw.js').catch(()=>{});
})();
