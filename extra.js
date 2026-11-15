/* Extra vraagvormen zoals bij het CBR: getal invullen, aanwijzen, volgorde en meerdere antwoorden */
(function () {
  const T = id => window.TOPICS.find(t => t.id === id);
  const add = (topic, q) => T(topic).questions.push(q);
  const B = '#2f6fd6', G = '#2f9e44';
  const me = (p, m) => ({ t: 'car', p, m: m || 'straight', me: 1 });
  const N = (id, card, qn, qe, n, un, ue, wn, we, signs) => ({ id, card, type: 'num', q: { nl: qn, en: qe }, n, unit: { nl: un, en: ue }, why: { nl: wn, en: we }, signs });
  const M = (id, card, qn, qe, opts, a, wn, we) => ({ id, card, type: 'multi', q: { nl: qn, en: qe }, o: opts.map(o => ({ nl: o[0], en: o[1] })), a, why: { nl: wn, en: we } });
  const SP = (id, card, scene, qn, qe, a, wn, we) => ({ id, card, type: 'spot', scene, q: { nl: qn, en: qe }, a, why: { nl: wn, en: we } });
  const OR = (id, card, scene, order, wn, we) => ({ id, card, type: 'order', scene, order, q: { nl: 'In welke volgorde mogen ze rijden?', en: 'In what order may they go?' }, why: { nl: wn, en: we } });

  /* ---- Aanwijzen ---- */
  add('voorrang', SP('x1', 'c4', { arms: 'NESW', actors: [me('S'), { t: 'car', p: 'N', m: 'straight', c: B }, { t: 'bike', p: 'E', m: 'straight' }] },
    'Er zijn geen borden. Wie mag als eerste?', 'There are no signs. Who goes first?', 1,
    'De blauwe auto heeft niemand van rechts. De fietser wacht op de blauwe auto. Jij wacht op de fietser.', 'The blue car has nobody on its right. The cyclist waits for the blue car. You wait for the cyclist.'));
  add('voorrang', SP('x2', 'c6', { arms: 'NESW', tram: 1, actors: [me('S'), { t: 'tram', p: 'W', m: 'straight' }, { t: 'car', p: 'E', m: 'straight', c: B }] },
    'Er zijn geen borden. Wie mag als eerste?', 'There are no signs. Who goes first?', 1,
    'Op een gelijkwaardig kruispunt geven alle bestuurders voorrang aan de tram.', 'At an equal junction all drivers give way to the tram.'));
  add('voorrang', SP('x3', 'c8', { arms: 'NESW', signs: [{ s: 'B6', p: 'S' }], haai: 'S', actors: [me('S'), { t: 'car', p: 'W', m: 'straight', c: B }] },
    'Jij hebt bord B6 en haaientanden. Wie mag als eerste?', 'You have sign B6 and shark\'s teeth. Who goes first?', 1,
    'B6 en haaientanden: jij geeft voorrang aan bestuurders op de kruisende weg.', 'B6 and shark\'s teeth: you give way to drivers on the crossing road.'));
  add('voorrang', SP('x4', 'c11', { arms: 'NS', zebra: 1, actors: [me('S'), { t: 'ped', x: 165, y: 128 }] },
    'Wie mag als eerste?', 'Who goes first?', 1,
    'Een voetganger op het zebrapad laat je voor gaan.', 'You let a pedestrian on the zebra crossing go first.'));
  add('voorrang', SP('x5', 'c12', { arms: 'NESW', light: 'green', actors: [me('S'), { t: 'amb', p: 'W', m: 'straight' }] },
    'Jouw licht is groen. De ambulance heeft zwaailicht en sirene aan. Wie mag als eerste?', 'Your light is green. The ambulance has its lights and siren on. Who goes first?', 1,
    'Een hulpdienst met zwaailicht én sirene laat je altijd voor gaan.', 'You always let an emergency vehicle with lights AND siren go first.'));
  add('voorrang', SP('x6', 'c10', { type: 'uitrit', actors: [{ t: 'car', x: 150, y: 250, r: 0, m: 'straight', me: 1 }, { t: 'bike', x: 60, y: 196, r: 90 }, { t: 'ped', x: 232, y: 214 }] },
    'Je rijdt een uitrit uit. Wie moet wachten?', 'You are driving out of an exit. Who has to wait?', 0,
    'Uit een uitrit laat jij al het verkeer voor gaan. Jij wacht dus.', 'Coming out of an exit you let all traffic go first. So you wait.'));

  /* ---- Volgorde ---- */
  add('voorrang', OR('x7', 'c4', { arms: 'NESW', actors: [me('S'), { t: 'car', p: 'E', m: 'straight', c: B }, { t: 'bike', p: 'W', m: 'straight' }] }, [1, 0, 2],
    'De blauwe auto heeft niemand van rechts: die gaat eerst. Jij wacht op de blauwe auto. De fietser wacht op jou, want jij komt voor hem van rechts.', 'The blue car has nobody on its right: it goes first. You wait for the blue car. The cyclist waits for you, because you come from their right.'));
  add('voorrang', OR('x8', 'c6', { arms: 'NESW', tram: 1, actors: [me('S'), { t: 'tram', p: 'W', m: 'straight' }, { t: 'car', p: 'E', m: 'straight', c: B }] }, [1, 2, 0],
    'De tram gaat eerst. Daarna de blauwe auto, want die komt voor jou van rechts. Jij gaat als laatste.', 'The tram goes first. Then the blue car, because it comes from your right. You go last.'));
  add('voorrang', OR('x9', 'c9', { arms: 'NESW', actors: [me('S', 'left'), { t: 'car', p: 'N', m: 'straight', c: B }, { t: 'bike', p: 'E', m: 'straight' }] }, [1, 2, 0],
    'De blauwe auto heeft niemand van rechts: die gaat eerst. De fietser wacht op de blauwe auto. Jij slaat linksaf en wacht op de fietser van rechts en op je tegenligger.', 'The blue car has nobody on its right: it goes first. The cyclist waits for the blue car. You turn left and wait for the cyclist from the right and for the oncoming car.'));
  add('voorrang', OR('x10', 'c5', { arms: 'NESW', unpaved: 'E', actors: [me('S'), { t: 'car', p: 'E', m: 'straight', c: B }, { t: 'bike', p: 'W', m: 'straight' }] }, [0, 2, 1],
    'De blauwe auto komt van een onverharde weg en wacht op iedereen. Jij komt voor de fietser van rechts, dus jij gaat eerst. Dan de fietser.', 'The blue car comes from an unpaved road and waits for everyone. You come from the cyclist\'s right, so you go first. Then the cyclist.'));

  /* ---- Getal invullen ---- */
  add('snelheid', N('x11', 's1', 'Hoe hard mag je maximaal binnen de bebouwde kom, als er geen borden staan?', 'What is the speed limit inside a built-up area, if there are no signs?', 50, 'km/h', 'km/h', 'Binnen de bebouwde kom geldt 50 km/h.', 'Inside built-up areas the limit is 50 km/h.', ['H1']));
  add('snelheid', N('x12', 's1', 'Hoe hard mag je maximaal op een erf?', 'What is the speed limit in a home zone (erf)?', 15, 'km/h', 'km/h', 'Op een erf mag je niet harder dan 15 km/h.', 'In a home zone you may not drive faster than 15 km/h.'));
  add('snelheid', N('x13', 's1', 'Hoe hard mag je maximaal op een autosnelweg, als er geen snelheidsborden staan?', 'What is the speed limit on a motorway, if there are no speed signs?', 130, 'km/h', 'km/h', 'Zonder borden geldt op de autosnelweg 130 km/h. Vaak staat er overdag een bord met 100.', 'Without signs the motorway limit is 130 km/h. Often a sign shows 100 during the day.', ['G1']));
  add('snelheid', N('x14', 's3', 'Hoe hard mag je maximaal op de autosnelweg met een caravan?', 'What is the speed limit on the motorway when towing a caravan?', 90, 'km/h', 'km/h', 'Met een aanhanger of caravan tot 3500 kg mag je 90 km/h op autoweg en autosnelweg.', 'With a trailer or caravan up to 3,500 kg you may drive 90 km/h on expressways and motorways.'));
  add('snelheid', N('x15', 's6', 'Hoeveel seconden afstand houd je minstens tot de auto voor je?', 'How many seconds do you keep at least behind the car in front?', 2, 'seconden', 'seconds', 'De vuistregel is 2 seconden. Bij slecht weer meer.', 'The rule of thumb is 2 seconds. More in bad weather.'));
  add('parkeren', N('x16', 'k3', 'Binnen hoeveel meter van een kruispunt mag je niet parkeren?', 'Within how many metres of a junction may you not park?', 5, 'meter', 'metres', 'Binnen 5 meter van een kruispunt mag je niet parkeren.', 'You may not park within 5 metres of a junction.'));
  add('licht', N('x17', 'v3', 'Het mistachterlicht mag aan als het zicht minder is dan … meter.', 'The rear fog light may be on when visibility is less than … metres.', 50, 'meter', 'metres', 'Bij mist of sneeuwval, als het zicht minder dan 50 meter is.', 'In fog or snowfall, when visibility is less than 50 metres.'));
  add('veilig', N('x18', 'r2', 'Hoeveel promille alcohol mag een beginnend bestuurder maximaal in zijn bloed hebben?', 'What is the maximum blood alcohol level for a novice driver, in per mille?', 0.2, 'promille', 'per mille', 'Voor beginnende bestuurders is de grens 0,2 promille.', 'For novice drivers the limit is 0.2 per mille.'));
  add('auto', N('x19', 'a5', 'Hoeveel millimeter profiel moeten je banden minstens hebben?', 'How many millimetres of tread must your tyres have at least?', 1.6, 'mm', 'mm', 'De wettelijke minimale profieldiepte is 1,6 millimeter.', 'The legal minimum tread depth is 1.6 millimetres.'));
  add('auto', N('x20', 'a1', 'Hoeveel kilo mag een aanhanger maximaal wegen, als je hem altijd met rijbewijs B mag trekken?', 'How many kilos may a trailer weigh at most, if you may always tow it with licence B?', 750, 'kg', 'kg', 'Een aanhanger tot 750 kg mag altijd met rijbewijs B.', 'A trailer up to 750 kg is always allowed with licence B.'));

  /* ---- Meerdere antwoorden goed ---- */
  add('voorrang', M('x21', 'c1', 'Wie zijn bestuurders?', 'Who counts as a driver?', [['Een fietser', 'A cyclist'], ['Een trambestuurder', 'A tram driver'], ['Een voetganger', 'A pedestrian']], [0, 1],
    'Iedereen in het verkeer is bestuurder, behalve voetgangers.', 'Every road user is a driver, except pedestrians.'));
  add('plaats', M('x22', 'p4', 'Wanneer moet je richting aangeven?', 'When must you indicate?', [['Als je wegrijdt', 'When you drive off'], ['Als je van rijstrook wisselt', 'When you change lanes'], ['Als je remt voor een verkeerslicht', 'When you brake for a traffic light']], [0, 1],
    'Je geeft richting aan bij elke beweging opzij. Remmen is geen beweging opzij.', 'You indicate with every sideways movement. Braking is not a sideways movement.'));
  add('plaats', M('x23', 'p6', 'Welke zijn bijzondere manoeuvres?', 'Which of these are special manoeuvres?', [['Achteruitrijden', 'Reversing'], ['Keren', 'Turning around'], ['Rechtdoor rijden op een voorrangsweg', 'Driving straight on along a priority road']], [0, 1],
    'Achteruitrijden en keren zijn bijzondere manoeuvres. Je laat dan al het andere verkeer voor gaan.', 'Reversing and turning around are special manoeuvres. You then let all other traffic go first.'));
  add('parkeren', M('x24', 'k2', 'Waar mag je niet stilstaan?', 'Where may you not stop?', [['Op een fietsstrook', 'On a cycle lane'], ['Op een zebrapad', 'On a zebra crossing'], ['Op een parkeerplaats', 'In a parking space']], [0, 1],
    'Op een fietsstrook en op een zebrapad mag je niet stilstaan.', 'You may not stop on a cycle lane or on a zebra crossing.'));
  add('licht', M('x25', 'v4', 'Het is dag. Het regent zo hard dat je bijna niets ziet. Welke lichten mogen aan?', 'It is daytime. It is raining so hard that you can hardly see. Which lights may be on?', [['Dimlicht', 'Dipped headlights'], ['Mistlampen aan de voorkant', 'Front fog lights'], ['Mistachterlicht', 'Rear fog light']], [0, 1],
    'Dimlicht en mistlampen voor mogen bij zware regen. Het mistachterlicht mag alleen bij mist of sneeuwval.', 'Dipped headlights and front fog lights are allowed in heavy rain. The rear fog light only in fog or snowfall.'));
  add('snelheid', M('x26', 's7', 'Wat maakt je remweg langer?', 'What makes your braking distance longer?', [['Een nat wegdek', 'A wet road'], ['Versleten banden', 'Worn tyres'], ['Dimlicht aan', 'Dipped headlights on']], [0, 1],
    'Minder grip betekent een langere remweg. Je lichten hebben daar geen invloed op.', 'Less grip means a longer braking distance. Your lights have no effect on that.'));
  add('auto', M('x27', 'a3', 'Welke papieren moet je bij je hebben als je rijdt?', 'Which documents must you carry when you drive?', [['Rijbewijs', 'Driving licence'], ['Kentekenbewijs', 'Vehicle registration card'], ['APK-rapport', 'APK test report']], [0, 1],
    'Rijbewijs en kentekenbewijs zijn verplicht. Het APK-rapport hoef je in Nederland niet bij je te hebben.', 'Driving licence and registration card are required. You do not need to carry the APK report in the Netherlands.'));
})();
