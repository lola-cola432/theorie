/* Hulpjes om lesstof kort te noteren (gebruikt in t2.js t/m t9.js) */
window.C = (id, tn, te, ln, le, wn, we, terms, src, signs) => ({ id, title: { nl: tn, en: te }, text: { nl: ln, en: le }, why: { nl: wn, en: we }, terms, src, signs });
window.Q = (id, card, qn, qe, opts, a, wn, we, signs) => ({ id, card, q: { nl: qn, en: qe }, o: opts.map(o => ({ nl: o[0], en: o[1] })), a, why: { nl: wn, en: we }, signs });
/* Lesstof: Voorrang. Alle regels gecontroleerd tegen het RVV 1990.
   Elke tekst staat in het Nederlands (nl) en Engels (en). */
window.TOPICS = window.TOPICS || [];
window.TOPICS.push({
  id: 'voorrang',
  title: { nl: 'Voorrang', en: 'Right of way' },

  /* ---------- 1. WETEN (Grammatica): de feiten ---------- */
  cards: [
    {
      id: 'c1', scene: null, icon: 'people',
      title: { nl: 'Wie is een bestuurder?', en: 'Who counts as a driver?' },
      text: {
        nl: ['Een <b>bestuurder</b> is iedereen in het verkeer, <b>behalve een voetganger</b>.',
             'Auto, fiets, brommer, scooter, motor en tram: allemaal bestuurders.',
             'Ook een <b>ruiter</b> op een paard is een bestuurder. En iemand die met een paard aan de hand loopt ook.',
             '<b>Voorrang</b> geldt alleen tussen bestuurders.'],
        en: ['In Dutch traffic law, a <b>driver</b> is every road user <b>except a pedestrian</b>.',
             'Car, bicycle, moped, scooter, motorbike and tram: all of them count as drivers. So a cyclist is a driver too.',
             'A <b>horse rider</b> is a driver as well. So is someone leading a horse by hand.',
             '<b>Right of way</b> only applies between drivers.']
      },
      why: {
        nl: 'Bij elke voorrangsvraag kijk je eerst: is de ander een bestuurder? Is het een voetganger? Dan gaat het niet over voorrang, maar over "voor laten gaan".',
        en: 'With every right-of-way question, first check: is the other person a driver? If it is a pedestrian, it is not about right of way, but about letting them go first.'
      },
      terms: ['bestuurder', 'voetganger', 'ruiter'],
      src: 'RVV 1990, art. 1'
    },
    {
      id: 'c2', scene: null, icon: 'yield',
      title: { nl: 'Wat is voorrang verlenen?', en: 'What does giving way mean?' },
      text: {
        nl: ['<b>Voorrang verlenen</b> betekent: de ander kan gewoon doorrijden.',
             'Hij hoeft niet te remmen of uit te wijken voor jou.',
             '<b>Voorrang krijgen</b> betekent: jij mag eerst.'],
        en: ['<b>Giving way</b> means: the other driver can simply carry on.',
             'They do not have to brake or swerve because of you.',
             '<b>Having right of way</b> means: you may go first.']
      },
      why: {
        nl: 'Het gaat er niet om dat jij stilstaat. Het gaat erom dat de ander geen last van jou heeft. Rem daarom op tijd en rustig af, zodat de ander ziet dat je wacht.',
        en: 'It is not about you standing still. It is about the other driver not being hindered by you. So slow down early and calmly, so they can see you are waiting.'
      },
      terms: ['voorrang verlenen', 'voorrang krijgen'],
      src: 'RVV 1990, art. 1'
    },
    {
      id: 'c3', scene: null, icon: 'ped',
      title: { nl: 'Voorrang of voor laten gaan?', en: 'Right of way, or letting someone go first?' },
      text: {
        nl: ['<b>Voorrang</b> gaat over bestuurders.',
             'Bij voetgangers en bij bijzondere situaties heet het <b>voor laten gaan</b>.',
             'Voorbeelden: een voetganger op het zebrapad, een ambulance met zwaailicht en sirene, of jij die uit een uitrit rijdt.',
             'Voor laten gaan betekent: de ander gaat eerst.'],
        en: ['<b>Right of way</b> is about drivers.',
             'With pedestrians and in special situations the law says: <b>let them go first</b>.',
             'Examples: a pedestrian on a zebra crossing, an ambulance with blue lights and siren, or you driving out of an exit.',
             'Letting someone go first means: the other one goes before you.']
      },
      why: {
        nl: 'In de wet zijn dit twee verschillende woorden. In een examenvraag is het woord dus een hint. Lees goed welk woord er staat.',
        en: 'In Dutch law these are two different terms. So in an exam question, the term itself is a clue. Read carefully which one is used.'
      },
      terms: ['voorrang', 'voor laten gaan', 'uitrit'],
      src: 'RVV 1990, art. 1, 49, 50 en 54'
    },
    {
      id: 'c4', scene: { arms: 'NESW', actors: [{ t: 'car', p: 'S', m: 'straight', me: 1 }, { t: 'car', p: 'E', m: 'straight', c: '#2f6fd6' }] },
      title: { nl: 'Rechts gaat voor', en: 'Traffic from the right goes first' },
      text: {
        nl: ['Een kruispunt zonder borden, lichten of haaientanden heet een <b>gelijkwaardig kruispunt</b>.',
             'Daar geef je voorrang aan bestuurders die <b>van rechts</b> komen.',
             'Ook aan een fietser van rechts.'],
        en: ['A junction without signs, traffic lights or shark\'s teeth is an <b>equal junction</b>.',
             'There you give way to drivers coming <b>from your right</b>.',
             'That includes a cyclist from the right.']
      },
      why: {
        nl: 'Als iedereen dezelfde regel volgt, weet je zonder praten wie eerst mag. Daarom kijk je op zo\'n kruispunt altijd goed naar rechts.',
        en: 'If everyone follows the same rule, everyone knows who goes first without talking. That is why you always check your right at such a junction.'
      },
      terms: ['gelijkwaardig kruispunt', 'rechts gaat voor'],
      src: 'RVV 1990, art. 15 lid 1'
    },
    {
      id: 'c5', scene: { arms: 'NESW', unpaved: 'E', actors: [{ t: 'car', p: 'S', m: 'straight', me: 1 }, { t: 'car', p: 'E', m: 'straight', c: '#2f6fd6' }] },
      title: { nl: 'Uitzondering 1: het zandpad', en: 'Exception 1: the dirt road' },
      text: {
        nl: ['Kom je van een <b>onverharde weg</b>, zoals een zandpad?',
             'Dan geef je voorrang aan iedereen op de <b>verharde weg</b>.',
             'Ook als die van links komt.'],
        en: ['Are you coming from an <b>unpaved road</b>, like a dirt track?',
             'Then you give way to everyone on the <b>paved road</b>.',
             'Even if they come from your left.']
      },
      why: {
        nl: 'Op de verharde weg zie je vaak slecht dat er iemand van een zandpad komt. Daarom moet degene op het zandpad altijd wachten.',
        en: 'On the paved road it is often hard to see someone coming from a dirt track. That is why the person on the dirt track always has to wait.'
      },
      terms: ['onverharde weg', 'verharde weg'],
      src: 'RVV 1990, art. 15 lid 2a'
    },
    {
      id: 'c6', scene: { arms: 'NESW', tram: 1, actors: [{ t: 'car', p: 'S', m: 'straight', me: 1 }, { t: 'tram', p: 'W', m: 'straight' }] },
      title: { nl: 'Uitzondering 2: de tram', en: 'Exception 2: the tram' },
      text: {
        nl: ['Op een gelijkwaardig kruispunt geef je <b>voorrang aan de tram</b>.',
             'Ook als de tram van links komt.',
             'Staat er voor de tram een bord of haaientanden? Dan moet ook de tram dat volgen.'],
        en: ['At an equal junction you <b>give way to the tram</b>.',
             'Even if the tram comes from your left.',
             'Is there a sign or shark\'s teeth for the tram? Then the tram must follow that too.']
      },
      why: {
        nl: 'Een tram is zwaar en rijdt op rails. Hij kan niet uitwijken en heeft een lange remweg.',
        en: 'A tram is heavy and runs on rails. It cannot swerve and needs a long distance to stop.'
      },
      terms: ['tram', 'gelijkwaardig kruispunt'],
      src: 'RVV 1990, art. 15 lid 2b en art. 80'
    },
    {
      id: 'c7', scene: null, icon: 'signsHave',
      title: { nl: 'Borden: jij hebt voorrang', en: 'Signs: you have right of way' },
      text: {
        nl: ['<b>B1</b> (gele ruit): je rijdt op een voorrangsweg. Je hebt voorrang op elk kruispunt, tot bord B2.',
             '<b>B2</b> (ruit met streep): einde voorrangsweg.',
             '<b>B3</b>: je hebt alleen voorrang op het <b>volgende</b> kruispunt.',
             '<b>B4</b> en <b>B5</b>: ook voorrang op het volgende kruispunt. De zijweg is links (B4) of rechts (B5).'],
        en: ['<b>B1</b> (yellow diamond): you are on a priority road. You have right of way at every junction, until sign B2.',
             '<b>B2</b> (diamond with a line): end of the priority road.',
             '<b>B3</b>: you only have right of way at the <b>next</b> junction.',
             '<b>B4</b> and <b>B5</b>: also right of way at the next junction. The side road is on the left (B4) or on the right (B5).']
      },
      why: {
        nl: 'Op een drukke weg wil je niet bij elk zijweggetje hoeven wachten. Met deze borden kan het verkeer op de grote weg doorrijden.',
        en: 'On a busy road you do not want to stop for every little side road. These signs let the traffic on the main road keep moving.'
      },
      terms: ['voorrangsweg', 'voorrangskruispunt'],
      src: 'RVV 1990, bijlage 1 (borden B1 t/m B5)'
    },
    {
      id: 'c8', scene: null, icon: 'signsGive',
      title: { nl: 'Borden: jij geeft voorrang', en: 'Signs: you give way' },
      text: {
        nl: ['<b>B6</b> (driehoek op zijn punt): geef voorrang aan bestuurders op de kruisende weg. Komt er niemand? Dan mag je doorrijden.',
             '<b>B7</b> (STOP): je moet <b>altijd stoppen</b>, vóór de stopstreep. Daarna geef je voorrang.',
             '<b>Haaientanden</b> op de weg betekenen hetzelfde als B6. De punten wijzen naar jou.'],
        en: ['<b>B6</b> (triangle pointing down): give way to drivers on the crossing road. Nobody coming? Then you may drive on.',
             '<b>B7</b> (STOP): you must <b>always stop</b>, before the stop line. Then you give way.',
             '<b>Shark\'s teeth</b> (white triangles) on the road mean the same as B6. The points face you.']
      },
      why: {
        nl: 'Bij drukke of onoverzichtelijke kruispunten is "rechts gaat voor" niet veilig genoeg. Dan kiest de wegbeheerder met borden wie moet wachten.',
        en: 'At busy or unclear junctions "right goes first" is not safe enough. Then the road authority uses signs to decide who has to wait.'
      },
      terms: ['haaientanden', 'voorrang verlenen'],
      src: 'RVV 1990, bijlage 1 (B6, B7), art. 79 en 80'
    },
    {
      id: 'c9', scene: { arms: 'NESW', bikepath: 1, actors: [{ t: 'car', p: 'S', m: 'right', me: 1 }, { t: 'bike', p: 'SB', m: 'straight' }] },
      title: { nl: 'Afslaan: rechtdoor gaat voor', en: 'Turning: straight on goes first' },
      text: {
        nl: ['Sla je af? Dan laat je verkeer dat <b>op dezelfde weg rechtdoor</b> gaat eerst gaan.',
             'Ook de fietser naast je op het fietspad.',
             'Ga jij linksaf en slaat je tegenligger rechtsaf dezelfde weg in? Dan gaat de tegenligger eerst: <b>de korte bocht gaat voor</b>.',
             'Deze regels gelden niet voor de tram.'],
        en: ['Are you turning? Then you let traffic that goes <b>straight on along the same road</b> go first.',
             'That includes the cyclist next to you on the cycle path.',
             'You turn left and the oncoming driver turns right into the same road? Then the oncoming driver goes first: <b>the short turn goes first</b>.',
             'These rules do not apply to trams.']
      },
      why: {
        nl: 'Wie rechtdoor gaat, verwacht niet dat jij ineens voor hem langs gaat. Jij verandert van richting, dus jij moet opletten.',
        en: 'Someone going straight on does not expect you to suddenly cut in front of them. You are changing direction, so you are the one who must watch out.'
      },
      terms: ['afslaan', 'korte bocht'],
      src: 'RVV 1990, art. 18'
    },
    {
      id: 'c10', scene: { type: 'uitrit', actors: [{ t: 'car', x: 150, y: 250, r: 0, m: 'straight', me: 1 }, { t: 'bike', x: 60, y: 196, r: 90 }, { t: 'ped', x: 232, y: 214 }] },
      title: { nl: 'Uit een uitrit rijden', en: 'Driving out of an exit' },
      text: {
        nl: ['Een <b>uitrit</b> is bijvoorbeeld de uitgang van een parkeerplaats, een tankstation of een oprit.',
             'Je rijdt dan vaak over de stoep of een verhoogde rand.',
             'Je laat dan <b>al het verkeer</b> voor gaan, ook voetgangers.'],
        en: ['An <b>exit</b> is for example the way out of a car park, a petrol station or a driveway.',
             'You often drive over the pavement or a raised kerb.',
             'You then let <b>all traffic</b> go first, pedestrians too.']
      },
      why: {
        nl: 'Uit een uitrit de weg oprijden is een "bijzondere manoeuvre". Het verkeer op de weg verwacht jou niet. Daarom wacht jij.',
        en: 'Driving out of an exit onto the road is a "special manoeuvre". Traffic on the road does not expect you. That is why you wait.'
      },
      terms: ['uitrit', 'bijzondere manoeuvre'],
      src: 'RVV 1990, art. 54'
    },
    {
      id: 'c11', scene: { arms: 'NS', zebra: 1, actors: [{ t: 'car', p: 'S', m: 'straight', me: 1 }, { t: 'ped', x: 165, y: 128 }] },
      title: { nl: 'Het zebrapad', en: 'The zebra crossing' },
      text: {
        nl: ['Staat een voetganger op het zebrapad, of loopt hij het op?',
             'Dan laat je hem <b>voor gaan</b>.',
             'Dat geldt ook voor iemand in een scootmobiel of rolstoel die daar oversteekt.'],
        en: ['Is a pedestrian on the zebra crossing, or stepping onto it?',
             'Then you <b>let them go first</b>.',
             'The same goes for someone in a mobility scooter or wheelchair crossing there.']
      },
      why: {
        nl: 'Een voetganger heeft geen bescherming. Het zebrapad is de plek waar hij veilig moet kunnen oversteken.',
        en: 'A pedestrian has no protection. The zebra crossing is the place where they must be able to cross safely.'
      },
      terms: ['zebrapad', 'voetgangersoversteekplaats'],
      src: 'RVV 1990, art. 49'
    },
    {
      id: 'c12', scene: { arms: 'NESW', actors: [{ t: 'car', p: 'S', m: 'straight', me: 1 }, { t: 'amb', p: 'W', m: 'straight' }] },
      title: { nl: 'Hulpdiensten', en: 'Emergency vehicles' },
      text: {
        nl: ['Politie, brandweer of ambulance met <b>blauw zwaailicht én sirene</b>?',
             'Laat hem <b>altijd voor gaan</b>. Maak ruimte, maar blijf veilig.',
             'Zonder zwaailicht en sirene is het een gewone auto.'],
        en: ['Police, fire engine or ambulance with <b>blue flashing lights AND siren</b>?',
             '<b>Always let it go first</b>. Make room, but stay safe.',
             'Without lights and siren it is just a normal vehicle.']
      },
      why: {
        nl: 'Zij zijn onderweg om mensen te helpen. Elke seconde telt.',
        en: 'They are on their way to help people. Every second counts.'
      },
      terms: ['voorrangsvoertuig'],
      src: 'RVV 1990, art. 29 en 50'
    },
    {
      id: 'c13', scene: null, icon: 'ladder',
      title: { nl: 'Wat gaat voor wat?', en: 'What beats what?' },
      text: {
        nl: ['1. <b>Aanwijzingen</b> van politie of verkeersregelaar.',
             '2. <b>Verkeerslichten</b>.',
             '3. <b>Verkeersborden en haaientanden</b>.',
             '4. De gewone <b>verkeersregels</b>, zoals rechts gaat voor.',
             'Werkt het licht niet, of knippert het oranje? Volg dan de borden. Geen borden? Dan rechts gaat voor.'],
        en: ['1. <b>Instructions</b> from police or a traffic controller.',
             '2. <b>Traffic lights</b>.',
             '3. <b>Traffic signs and shark\'s teeth</b>.',
             '4. The normal <b>traffic rules</b>, such as right goes first.',
             'Light not working, or flashing orange? Then follow the signs. No signs? Then right goes first.']
      },
      why: {
        nl: 'Een mens ziet wat er nu gebeurt. Een lamp reageert op het verkeer. Een bord staat er altijd. Een regel is de basis. Hoe "levendiger", hoe hoger.',
        en: 'A person sees what is happening right now. A light responds to traffic. A sign is always there. A rule is the basis. The more "live", the higher it ranks.'
      },
      terms: ['aanwijzingen', 'verkeerslichten'],
      src: 'RVV 1990, art. 63, 64 en 84'
    }
  ],

  /* ---------- 2. BEGRIJPEN (Logica): de voorrangsladder ---------- */
  ladder: [
    { q: { nl: 'Komt er een hulpdienst met zwaailicht én sirene?', en: 'Is an emergency vehicle coming with lights AND siren?' },
      yes: { nl: 'Laat hem voor gaan. Klaar.', en: 'Let it go first. Done.' }, card: 'c12' },
    { q: { nl: 'Staat er een agent of verkeersregelaar die aanwijzingen geeft?', en: 'Is a police officer or traffic controller giving instructions?' },
      yes: { nl: 'Doe wat hij aangeeft. Ook als het licht iets anders zegt.', en: 'Do what they tell you. Even if the light says something else.' }, card: 'c13' },
    { q: { nl: 'Zijn er verkeerslichten die werken?', en: 'Are there traffic lights that are working?' },
      yes: { nl: 'Volg het licht.', en: 'Follow the light.' }, card: 'c13' },
    { q: { nl: 'Zijn er voorrangsborden of haaientanden?', en: 'Are there priority signs or shark\'s teeth?' },
      yes: { nl: 'Volg de borden. B1, B3, B4, B5: jij gaat. B6, B7, haaientanden: jij wacht.', en: 'Follow the signs. B1, B3, B4, B5: you go. B6, B7, shark\'s teeth: you wait.' }, card: 'c8' },
    { q: { nl: 'Kom je uit een uitrit?', en: 'Are you coming out of an exit?' },
      yes: { nl: 'Laat al het verkeer voor gaan, ook voetgangers.', en: 'Let all traffic go first, pedestrians too.' }, card: 'c10' },
    { q: { nl: 'Is er een tram?', en: 'Is there a tram?' },
      yes: { nl: 'De tram gaat eerst.', en: 'The tram goes first.' }, card: 'c6' },
    { q: { nl: 'Komt een van beide van een zandpad (onverhard)?', en: 'Is one of you coming from a dirt road (unpaved)?' },
      yes: { nl: 'Wie van het zandpad komt, wacht.', en: 'Whoever comes from the dirt road waits.' }, card: 'c5' },
    { q: { nl: 'Sla je af en gaat de ander op dezelfde weg rechtdoor?', en: 'Are you turning while the other goes straight on along the same road?' },
      yes: { nl: 'Rechtdoor gaat voor. Jij wacht.', en: 'Straight on goes first. You wait.' }, card: 'c9' }
  ],
  ladderEnd: { nl: 'Niets van dit alles? Dan geldt: <b>rechts gaat voor</b>.', en: 'None of these? Then: <b>traffic from the right goes first</b>.' },

  /* ---------- 3. TOEPASSEN (Retorica): oefenvragen ---------- */
  questions: [
    { id: 'q1', card: 'c4',
      scene: { arms: 'NESW', actors: [{ t: 'car', p: 'S', m: 'straight', me: 1 }, { t: 'car', p: 'E', m: 'straight', c: '#2f6fd6' }] },
      q: { nl: 'Er zijn geen borden, lichten of haaientanden. Wie mag eerst?', en: 'There are no signs, lights or shark\'s teeth. Who goes first?' },
      o: [{ nl: 'Ik', en: 'Me' }, { nl: 'De blauwe auto', en: 'The blue car' }], a: 1,
      why: { nl: 'Dit is een gelijkwaardig kruispunt. De blauwe auto komt van rechts. Rechts gaat voor.', en: 'This is an equal junction. The blue car comes from your right. Right goes first.' } },
    { id: 'q2', card: 'c1',
      scene: { arms: 'NESW', actors: [{ t: 'car', p: 'S', m: 'straight', me: 1 }, { t: 'bike', p: 'E', m: 'straight' }] },
      q: { nl: 'Een fietser komt van rechts. Er zijn geen borden. Moet je hem voorrang geven?', en: 'A cyclist comes from the right. There are no signs. Must you give way?' },
      o: [{ nl: 'Ja', en: 'Yes' }, { nl: 'Nee, een auto gaat voor', en: 'No, a car goes first' }], a: 0,
      why: { nl: 'Een fietser is een bestuurder. Hij komt van rechts, dus hij gaat voor.', en: 'A cyclist counts as a driver. They come from the right, so they go first.' } },
    { id: 'q3', card: 'c4',
      scene: { arms: 'NESW', actors: [{ t: 'car', p: 'S', m: 'straight', me: 1 }, { t: 'bike', p: 'W', m: 'straight' }] },
      q: { nl: 'Een fietser komt van links. Er zijn geen borden. Wie mag eerst?', en: 'A cyclist comes from the left. There are no signs. Who goes first?' },
      o: [{ nl: 'Ik', en: 'Me' }, { nl: 'De fietser', en: 'The cyclist' }], a: 0,
      why: { nl: 'Jij komt voor de fietser van rechts. Dus jij gaat voor. Let wel goed op of hij echt wacht.', en: 'For the cyclist, you come from the right. So you go first. Do check that they really wait.' } },
    { id: 'q4', card: 'c11',
      scene: { arms: 'NS', zebra: 1, actors: [{ t: 'car', p: 'S', m: 'straight', me: 1 }, { t: 'ped', x: 165, y: 128 }] },
      q: { nl: 'Er loopt een voetganger op het zebrapad. Wat doe je?', en: 'A pedestrian is walking on the zebra crossing. What do you do?' },
      o: [{ nl: 'Ik laat hem voor gaan', en: 'I let them go first' }, { nl: 'Ik rijd door, hij is geen bestuurder', en: 'I drive on, a pedestrian is not a driver' }], a: 0,
      why: { nl: 'Op het zebrapad laat je voetgangers voor gaan. Dat is geen voorrang, maar "voor laten gaan".', en: 'At a zebra crossing you let pedestrians go first. The law does not call this right of way, but letting them go first.' } },
    { id: 'q5', card: 'c5',
      scene: { arms: 'NESW', unpaved: 'E', actors: [{ t: 'car', p: 'S', m: 'straight', me: 1 }, { t: 'car', p: 'E', m: 'straight', c: '#2f6fd6' }] },
      q: { nl: 'De blauwe auto komt van rechts, over een zandpad. Wie mag eerst?', en: 'The blue car comes from the right, on a dirt road. Who goes first?' },
      o: [{ nl: 'Ik', en: 'Me' }, { nl: 'De blauwe auto', en: 'The blue car' }], a: 0,
      why: { nl: 'Wie van een onverharde weg komt, geeft voorrang aan de verharde weg. Ook als hij van rechts komt.', en: 'Whoever comes from an unpaved road gives way to the paved road. Even when coming from the right.' } },
    { id: 'q6', card: 'c6',
      scene: { arms: 'NESW', tram: 1, actors: [{ t: 'car', p: 'S', m: 'straight', me: 1 }, { t: 'tram', p: 'W', m: 'straight' }] },
      q: { nl: 'Er komt een tram van links. Er zijn geen borden. Wie mag eerst?', en: 'A tram comes from the left. There are no signs. Who goes first?' },
      o: [{ nl: 'Ik, ik kom van rechts', en: 'Me, I come from the right' }, { nl: 'De tram', en: 'The tram' }], a: 1,
      why: { nl: 'Op een gelijkwaardig kruispunt geef je voorrang aan de tram. Ook als hij van links komt.', en: 'At an equal junction you give way to the tram. Even if it comes from the left.' } },
    { id: 'q7', card: 'c8',
      scene: { arms: 'NESW', signs: [{ s: 'B6', p: 'S' }], haai: 'S', actors: [{ t: 'car', p: 'S', m: 'straight', me: 1 }, { t: 'car', p: 'W', m: 'straight', c: '#2f6fd6' }] },
      q: { nl: 'Je ziet bord B6 en haaientanden. De blauwe auto komt van links. Wie mag eerst?', en: 'You see sign B6 and shark\'s teeth. The blue car comes from the left. Who goes first?' },
      o: [{ nl: 'Ik', en: 'Me' }, { nl: 'De blauwe auto', en: 'The blue car' }], a: 1,
      why: { nl: 'B6 en haaientanden zeggen: geef voorrang aan de kruisende weg. Dat geldt voor links én rechts.', en: 'B6 and shark\'s teeth say: give way to the crossing road. That counts for left AND right.' } },
    { id: 'q8', card: 'c8',
      scene: { arms: 'NESW', signs: [{ s: 'B7', p: 'S' }], stopline: 1, actors: [{ t: 'car', p: 'S', m: 'straight', me: 1 }] },
      q: { nl: 'Je ziet bord B7 (STOP). Er komt niemand aan. Moet je stoppen?', en: 'You see sign B7 (STOP). Nobody is coming. Must you stop?' },
      o: [{ nl: 'Ja, altijd', en: 'Yes, always' }, { nl: 'Nee, alleen als er iemand komt', en: 'No, only if someone is coming' }], a: 0,
      why: { nl: 'Bij B7 moet je altijd stoppen. Ook als er niemand komt. Daarna geef je voorrang.', en: 'At B7 you must always stop. Even if nobody is coming. Then you give way.' } },
    { id: 'q9', card: 'c7',
      scene: { arms: 'NESW', signs: [{ s: 'B3', p: 'S' }], haai: 'E', actors: [{ t: 'car', p: 'S', m: 'straight', me: 1 }, { t: 'car', p: 'E', m: 'straight', c: '#2f6fd6' }] },
      q: { nl: 'Jij hebt bord B3. De blauwe auto van rechts heeft haaientanden. Wie mag eerst?', en: 'You have sign B3. The blue car from the right has shark\'s teeth. Who goes first?' },
      o: [{ nl: 'Ik', en: 'Me' }, { nl: 'De blauwe auto', en: 'The blue car' }], a: 0,
      why: { nl: 'Borden gaan boven de regel "rechts gaat voor". Jij hebt voorrang op dit kruispunt.', en: 'Signs beat the rule "right goes first". You have right of way at this junction.' } },
    { id: 'q10', card: 'c13',
      scene: { arms: 'NESW', light: 'green', agent: 1, actors: [{ t: 'car', p: 'S', m: 'straight', me: 1 }] },
      q: { nl: 'Jouw licht is groen. Een agent geeft je een stopteken. Wat doe je?', en: 'Your light is green. A police officer signals you to stop. What do you do?' },
      o: [{ nl: 'Ik stop', en: 'I stop' }, { nl: 'Ik rijd door, het is groen', en: 'I drive on, it is green' }], a: 0,
      why: { nl: 'Aanwijzingen van een agent gaan boven verkeerslichten.', en: 'Instructions from a police officer beat traffic lights.' } },
    { id: 'q11', card: 'c12',
      scene: { arms: 'NESW', light: 'green', actors: [{ t: 'car', p: 'S', m: 'straight', me: 1 }, { t: 'amb', p: 'W', m: 'straight' }] },
      q: { nl: 'Jouw licht is groen. Van links komt een ambulance met zwaailicht en sirene. Wat doe je?', en: 'Your light is green. From the left comes an ambulance with lights and siren. What do you do?' },
      o: [{ nl: 'Ik laat de ambulance voor gaan', en: 'I let the ambulance go first' }, { nl: 'Ik rijd door, ik heb groen', en: 'I drive on, I have green' }], a: 0,
      why: { nl: 'Een hulpdienst met zwaailicht én sirene laat je altijd voor gaan.', en: 'You always let an emergency vehicle with lights AND siren go first.' } },
    { id: 'q12', card: 'c10',
      scene: { type: 'uitrit', actors: [{ t: 'car', x: 150, y: 250, r: 0, m: 'straight', me: 1 }, { t: 'bike', x: 60, y: 196, r: 90 }, { t: 'ped', x: 232, y: 214 }] },
      q: { nl: 'Je rijdt een parkeerplaats af, over de stoep. Er komen een fietser en een voetganger. Wie gaat eerst?', en: 'You drive out of a car park, over the pavement. A cyclist and a pedestrian are coming. Who goes first?' },
      o: [{ nl: 'De fietser en de voetganger', en: 'The cyclist and the pedestrian' }, { nl: 'Ik, de fietser komt van links', en: 'Me, the cyclist comes from the left' }], a: 0,
      why: { nl: 'Uit een uitrit laat je al het verkeer voor gaan. Ook voetgangers en verkeer van links.', en: 'Out of an exit you let all traffic go first. Pedestrians and traffic from the left too.' } },
    { id: 'q13', card: 'c9',
      scene: { arms: 'NESW', actors: [{ t: 'car', p: 'S', m: 'left', me: 1 }, { t: 'car', p: 'N', m: 'straight', c: '#2f6fd6' }] },
      q: { nl: 'Jij gaat linksaf. Je tegenligger gaat rechtdoor. Wie mag eerst?', en: 'You turn left. The oncoming car goes straight on. Who goes first?' },
      o: [{ nl: 'Ik', en: 'Me' }, { nl: 'De tegenligger', en: 'The oncoming car' }], a: 1,
      why: { nl: 'Wie afslaat, laat verkeer dat op dezelfde weg rechtdoor gaat voor.', en: 'Whoever turns lets traffic going straight on along the same road go first.' } },
    { id: 'q14', card: 'c9',
      scene: { arms: 'NESW', actors: [{ t: 'car', p: 'S', m: 'left', me: 1 }, { t: 'car', p: 'N', m: 'right', c: '#2f6fd6' }] },
      q: { nl: 'Jij gaat linksaf. Je tegenligger slaat rechtsaf, dezelfde weg in. Wie mag eerst?', en: 'You turn left. The oncoming car turns right, into the same road. Who goes first?' },
      o: [{ nl: 'Ik', en: 'Me' }, { nl: 'De tegenligger', en: 'The oncoming car' }], a: 1,
      why: { nl: 'De korte bocht gaat voor de lange bocht. De tegenligger maakt de korte bocht.', en: 'The short turn goes before the long turn. The oncoming car makes the short turn.' } },
    { id: 'q15', card: 'c9',
      scene: { arms: 'NESW', bikepath: 1, actors: [{ t: 'car', p: 'S', m: 'right', me: 1 }, { t: 'bike', p: 'SB', m: 'straight' }] },
      q: { nl: 'Jij gaat rechtsaf. Naast je rijdt een fietser rechtdoor op het fietspad. Wie mag eerst?', en: 'You turn right. Next to you a cyclist goes straight on along the cycle path. Who goes first?' },
      o: [{ nl: 'Ik', en: 'Me' }, { nl: 'De fietser', en: 'The cyclist' }], a: 1,
      why: { nl: 'De fietser gaat op dezelfde weg rechtdoor. Rechtdoor gaat voor. Kijk altijd in je spiegel én over je schouder.', en: 'The cyclist goes straight on along the same road. Straight on goes first. Always check your mirror AND over your shoulder.' } },
    { id: 'q16', card: 'c4',
      scene: { type: 'rotonde', actors: [{ t: 'car', x: 170, y: 248, r: 0, m: 'straight', me: 1 }, { t: 'car', x: 112, y: 190, r: 135, c: '#2f6fd6' }] },
      q: { nl: 'Een rotonde zonder borden en zonder haaientanden. De blauwe auto rijdt op de rotonde en komt van links. Wie mag eerst?', en: 'A roundabout without signs and without shark\'s teeth. The blue car is on the roundabout, coming from your left. Who goes first?' },
      o: [{ nl: 'Ik', en: 'Me' }, { nl: 'De blauwe auto', en: 'The blue car' }], a: 0,
      why: { nl: 'Zonder borden geldt ook op een rotonde: rechts gaat voor. Meestal staan er wel borden en haaientanden. Volg die dan.', en: 'Without signs, the rule also applies on a roundabout: right goes first. Usually there are signs and shark\'s teeth. Then follow those.' } },
    { id: 'q17', card: 'c13',
      scene: { arms: 'NESW', light: 'blink', signs: [{ s: 'B6', p: 'S' }], haai: 'S', actors: [{ t: 'car', p: 'S', m: 'straight', me: 1 }, { t: 'car', p: 'W', m: 'straight', c: '#2f6fd6' }] },
      q: { nl: 'Het verkeerslicht knippert oranje. Jij hebt bord B6. De blauwe auto komt van links. Wie mag eerst?', en: 'The traffic light is flashing orange. You have sign B6. The blue car comes from the left. Who goes first?' },
      o: [{ nl: 'Ik', en: 'Me' }, { nl: 'De blauwe auto', en: 'The blue car' }], a: 1,
      why: { nl: 'Knippert het licht oranje, dan volg je de borden. B6 zegt: jij geeft voorrang.', en: 'If the light flashes orange, you follow the signs. B6 says: you give way.' } },
    { id: 'q18', card: 'c3',
      scene: { arms: 'NESW', actors: [{ t: 'car', p: 'S', m: 'straight', me: 1 }, { t: 'ped', x: 232, y: 98 }] },
      q: { nl: 'Op een kruispunt zonder zebrapad wil een voetganger van rechts oversteken. Heeft hij voorrang?', en: 'At a junction without a zebra crossing, a pedestrian on the right wants to cross. Does the pedestrian have right of way?' },
      o: [{ nl: 'Ja, hij komt van rechts', en: 'Yes, they come from the right' }, { nl: 'Nee, voorrang is alleen tussen bestuurders', en: 'No, right of way is only between drivers' }], a: 1,
      why: { nl: 'Een voetganger is geen bestuurder, dus "rechts gaat voor" geldt niet voor hem. Let wel goed op: je mag nooit gevaar veroorzaken.', en: 'A pedestrian is not a driver, so "right goes first" does not apply to them. Do stay alert: you must never cause danger.' } },
    { id: 'q19', card: 'c7',
      scene: { arms: 'NESW', signs: [{ s: 'B1', p: 'S' }], actors: [{ t: 'car', p: 'S', m: 'straight', me: 1 }] },
      q: { nl: 'Je rijdt langs bord B1. Tot wanneer heb je voorrang?', en: 'You pass sign B1. Until when do you have right of way?' },
      o: [{ nl: 'Tot bord B2', en: 'Until sign B2' }, { nl: 'Alleen op het volgende kruispunt', en: 'Only at the next junction' }], a: 0,
      why: { nl: 'B1 is een voorrangsweg. Die loopt door tot bord B2. Alleen op het volgende kruispunt: dat is B3.', en: 'B1 is a priority road. It continues until sign B2. "Only the next junction" is B3.' } }
  ]
});
