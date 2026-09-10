const eventDate = new Date('2027-05-29T00:00:00+02:00');

function updateCountdown() {
  const now = new Date();
  let diff = eventDate.getTime() - now.getTime();

  if (diff <= 0) {
    diff = 0;
    document.getElementById('countdown').classList.add('event-started');
  }

  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  document.getElementById('days').textContent = String(days).padStart(3, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
navToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const languageSwitcher = document.querySelector('.language-switcher');
const languageCurrent = document.querySelector('.language-current');
languageCurrent.addEventListener('click', () => {
  const open = languageSwitcher.classList.toggle('open');
  languageCurrent.setAttribute('aria-expanded', String(open));
});

document.addEventListener('click', e => {
  if (!languageSwitcher.contains(e.target)) {
    languageSwitcher.classList.remove('open');
    languageCurrent.setAttribute('aria-expanded', 'false');
  }
});

const translations = {
  sk: {
    sponsorTitle: 'Hlavný sponzor eventu',
    navAbout:'O EVENTE', navProgramme:'ČO VÁS ČAKÁ', navCity:'BANSKÁ BYSTRICA',
    heroEyebrow:'29. MÁJ 2027 · BANSKÁ BYSTRICA', heroLine1:'STREDOSLOVENSKÝ', heroLine2:'GEOVÍKEND', heroLead:'Víkend plný geocachingu v srdci Slovenska.',
    countdownKicker:'DO ZAČIATKU EVENTU', days:'DNÍ', hours:'HODÍN', minutes:'MINÚT', seconds:'SEKÚND', discover:'OBJAVTE GEOVÍKEND', whatAwaits:'ČO VÁS ČAKÁ?',
    heartKicker:'STRETNEME SA V SRDCI SLOVENSKA', introTitle:'Príďte spoznať stredné Slovensko a užiť si víkend plný geocachingu.', introText:'V máji 2027 sa stretneme v Banskej Bystrici na veľkom stretnutí geocacherov zo Slovenska aj zo zahraničia. Hlavný event bude centrom celého víkendu, no zďaleka nebude jeho jedinou časťou.', monthMay:'MÁJ 2027', venue:'AMFITEÁTER BANSKÁ BYSTRICA',
    featuresKicker:'JEDEN EVENT NÁM NESTAČÍ', featuresTitle:'ČO VÁS ČAKÁ?', featuresIntro:'Program pre lovcov kešiek, zberateľov, súťaživé typy, milovníkov prírody aj všetkých, ktorí sa radi stretnú s ľuďmi, ktorých poznajú najmä podľa nickov.',
    cardGamesTitle:'Hry a súťaže', cardGamesText:'Geocachingové aj negeocachingové výzvy pre jednotlivcov i tímy.', cardFireTitle:'Opekačka a posedenie', cardFireText:'Čas odložiť GPSku, stretnúť starých známych a spoznať nových.', cardCachesTitle:'Nové kešky a Adventure Lab', cardCachesText:'Ďalšie dôvody vyraziť objavovať Banskú Bystricu a jej okolie.', cardTalksTitle:'Prednášky a diskusie', cardTalksText:'Geocachingové témy, skúsenosti, príbehy a zaujímaví hostia.', cardXwgTitle:'Výmena xWG', cardXwgText:'Priestor na výmenu drevených koliesok a rozšírenie zbierok.', cardNatureTitle:'Von do prírody', cardNatureText:'Spoločne vyrazíme objavovať prírodu v okolí Banskej Bystrice.', cardSideTitle:'Sprievodné eventy a ďalšie aktivity', cardSideText:'Geocachingový program chceme rozložiť na celý víkend. Ďalšie stretnutia a aktivity budeme postupne predstavovať.',
    cityKicker:'ZOSTAŇTE NA VÍKEND', cityTitle:'OBJAVTE BANSKÚ BYSTRICU', cityText:'Historické centrum, mestské kešky, výhľady, lesy, kopce aj horské chodníky. Banská Bystrica je skvelým východiskovým bodom na objavovanie stredného Slovenska.', cityQuote:'Príďte na event. Zostaňte na víkend. Objavte s nami srdce Slovenska.', footerDate:'29. máj 2027 · Banská Bystrica · GCBXNZQ', backTop:'↑ HORE'
  },
  en: {
    sponsorTitle: 'Primary event sponsor',
    navAbout:'ABOUT', navProgramme:'WHAT TO EXPECT', navCity:'BANSKÁ BYSTRICA',
    heroEyebrow:'29 MAY 2027 · BANSKÁ BYSTRICA', heroLine1:'STREDOSLOVENSKÝ', heroLine2:'GEOVÍKEND', heroLead:'A weekend full of geocaching in the heart of Slovakia.',
    countdownKicker:'UNTIL THE EVENT', days:'DAYS', hours:'HOURS', minutes:'MIN', seconds:'SEC', discover:'DISCOVER THE GEOWEEKEND', whatAwaits:'WHAT TO EXPECT?',
    heartKicker:'MEET US IN THE HEART OF SLOVAKIA', introTitle:'Come and discover Central Slovakia and enjoy a weekend full of geocaching.', introText:'In May 2027, we will meet in Banská Bystrica for a big gathering of geocachers from Slovakia and abroad. The main event will be at the centre of the weekend, but it will be far from the only part of it.', monthMay:'MAY 2027', venue:'BANSKÁ BYSTRICA AMPHITHEATRE',
    featuresKicker:'ONE EVENT IS NOT ENOUGH', featuresTitle:'WHAT CAN YOU LOOK FORWARD TO?', featuresIntro:'A programme for cache hunters, collectors, competitive spirits, nature lovers and everyone who enjoys meeting the people they usually know only by their geocaching nicknames.',
    cardGamesTitle:'Games and competitions', cardGamesText:'Geocaching and non-geocaching challenges for individuals and teams.', cardFireTitle:'Barbecue and socialising', cardFireText:'Time to put the GPS aside, catch up with old friends and meet new ones.', cardCachesTitle:'New caches and Adventure Labs', cardCachesText:'More reasons to explore Banská Bystrica and its surroundings.', cardTalksTitle:'Talks and discussions', cardTalksText:'Geocaching topics, experiences, stories and interesting guests.', cardXwgTitle:'xWG trading', cardXwgText:'A place to trade wooden geocoins and grow your collection.', cardNatureTitle:'Into the great outdoors', cardNatureText:'Together we will explore the countryside around Banská Bystrica.', cardSideTitle:'Side events and more', cardSideText:'We want to spread the geocaching programme across the whole weekend. More gatherings and activities will be announced gradually.',
    cityKicker:'STAY FOR THE WEEKEND', cityTitle:'DISCOVER BANSKÁ BYSTRICA', cityText:'A historic centre, urban caches, viewpoints, forests, hills and mountain trails. Banská Bystrica is a great base for discovering Central Slovakia.', cityQuote:'Come for the event. Stay for the weekend. Discover the heart of Slovakia with us.', footerDate:'29 May 2027 · Banská Bystrica · GCBXNZQ', backTop:'↑ TOP'
  },
  cs: {
    sponsorTitle: 'Hlavní sponzor eventu',
    navAbout:'O EVENTU', navProgramme:'CO VÁS ČEKÁ', navCity:'BANSKÁ BYSTRICA',
    heroEyebrow:'29. KVĚTNA 2027 · BANSKÁ BYSTRICA', heroLine1:'STREDOSLOVENSKÝ', heroLine2:'GEOVÍKEND', heroLead:'Víkend plný geocachingu v srdci Slovenska.', countdownKicker:'DO ZAČÁTKU EVENTU', days:'DNÍ', hours:'HODIN', minutes:'MINUT', seconds:'SEKUND', discover:'OBJEVTE GEOVÍKEND', whatAwaits:'CO VÁS ČEKÁ?',
    heartKicker:'SETKÁME SE V SRDCI SLOVENSKA', introTitle:'Přijeďte poznat střední Slovensko a užít si víkend plný geocachingu.', introText:'V květnu 2027 se setkáme v Banské Bystrici na velkém setkání geocacherů ze Slovenska i ze zahraničí. Hlavní event bude centrem celého víkendu, ale zdaleka nebude jeho jedinou částí.', monthMay:'KVĚTEN 2027', venue:'AMFITEÁTR BANSKÁ BYSTRICA',
    featuresKicker:'JEDEN EVENT NÁM NESTAČÍ', featuresTitle:'CO VÁS ČEKÁ?', featuresIntro:'Program pro lovce keší, sběratele, soutěživé typy, milovníky přírody i všechny, kteří se rádi setkají s lidmi, které znají hlavně podle nicků.', cardGamesTitle:'Hry a soutěže', cardGamesText:'Geocachingové i negeocachingové výzvy pro jednotlivce i týmy.', cardFireTitle:'Opékání a posezení', cardFireText:'Čas odložit GPSku, potkat staré známé a poznat nové.', cardCachesTitle:'Nové keše a Adventure Lab', cardCachesText:'Další důvody vyrazit objevovat Banskou Bystrici a okolí.', cardTalksTitle:'Přednášky a diskuse', cardTalksText:'Geocachingová témata, zkušenosti, příběhy a zajímaví hosté.', cardXwgTitle:'Výměna xWG', cardXwgText:'Prostor na výměnu dřevěných koleček a rozšíření sbírek.', cardNatureTitle:'Vzhůru do přírody', cardNatureText:'Společně vyrazíme objevovat přírodu v okolí Banské Bystrice.', cardSideTitle:'Doprovodné eventy a další aktivity', cardSideText:'Geocachingový program chceme rozložit na celý víkend. Další setkání a aktivity budeme postupně představovat.', cityKicker:'ZŮSTAŇTE NA VÍKEND', cityTitle:'OBJEVTE BANSKOU BYSTRICI', cityText:'Historické centrum, městské keše, vyhlídky, lesy, kopce i horské stezky. Banská Bystrica je skvělým výchozím bodem k objevování středního Slovenska.', cityQuote:'Přijeďte na event. Zůstaňte na víkend. Objevte s námi srdce Slovenska.', footerDate:'29. května 2027 · Banská Bystrica · GCBXNZQ', backTop:'↑ NAHORU'
  },
  de: {
    sponsorTitle: 'Hauptsponsor des Events',
    navAbout:'ÜBER DAS EVENT', navProgramme:'WAS ERWARTET EUCH', navCity:'BANSKÁ BYSTRICA',
    heroEyebrow:'29. MAI 2027 · BANSKÁ BYSTRICA', heroLine1:'STREDOSLOVENSKÝ', heroLine2:'GEOVÍKEND', heroLead:'Ein Wochenende voller Geocaching im Herzen der Slowakei.', countdownKicker:'BIS ZUM EVENT', days:'TAGE', hours:'STD', minutes:'MIN', seconds:'SEK', discover:'GEOWOCHENENDE ENTDECKEN', whatAwaits:'WAS ERWARTET EUCH?',
    heartKicker:'TREFFT UNS IM HERZEN DER SLOWAKEI', introTitle:'Kommt und entdeckt die Mittelslowakei und genießt ein Wochenende voller Geocaching.', introText:'Im Mai 2027 treffen wir uns in Banská Bystrica zu einem großen Treffen von Geocachern aus der Slowakei und dem Ausland. Das Hauptevent steht im Mittelpunkt des Wochenendes, ist aber längst nicht alles.', monthMay:'MAI 2027', venue:'AMPHITHEATER BANSKÁ BYSTRICA',
    featuresKicker:'EIN EVENT IST UNS NICHT GENUG', featuresTitle:'WAS ERWARTET EUCH?', featuresIntro:'Ein Programm für Cache-Jäger, Sammler, Wettkampffreunde, Naturliebhaber und alle, die gerne Menschen treffen, die sie sonst meist nur unter ihrem Geocaching-Nickname kennen.', cardGamesTitle:'Spiele und Wettbewerbe', cardGamesText:'Geocaching- und andere Herausforderungen für Einzelpersonen und Teams.', cardFireTitle:'Grillen und Beisammensein', cardFireText:'Zeit, das GPS beiseitezulegen, alte Freunde zu treffen und neue kennenzulernen.', cardCachesTitle:'Neue Caches und Adventure Labs', cardCachesText:'Noch mehr Gründe, Banská Bystrica und seine Umgebung zu entdecken.', cardTalksTitle:'Vorträge und Diskussionen', cardTalksText:'Geocaching-Themen, Erfahrungen, Geschichten und interessante Gäste.', cardXwgTitle:'xWG-Tausch', cardXwgText:'Platz zum Tauschen von Wooden Geocoins und zum Erweitern der Sammlung.', cardNatureTitle:'Raus in die Natur', cardNatureText:'Gemeinsam entdecken wir die Natur rund um Banská Bystrica.', cardSideTitle:'Begleitevents und weitere Aktivitäten', cardSideText:'Wir möchten das Geocaching-Programm über das ganze Wochenende verteilen. Weitere Treffen und Aktivitäten werden nach und nach angekündigt.', cityKicker:'BLEIBT DAS WOCHENENDE', cityTitle:'ENTDECKT BANSKÁ BYSTRICA', cityText:'Historisches Zentrum, Stadtcaches, Aussichtspunkte, Wälder, Hügel und Bergwege. Banská Bystrica ist ein idealer Ausgangspunkt, um die Mittelslowakei zu entdecken.', cityQuote:'Kommt zum Event. Bleibt das Wochenende. Entdeckt mit uns das Herz der Slowakei.', footerDate:'29. Mai 2027 · Banská Bystrica · GCBXNZQ', backTop:'↑ NACH OBEN'
  },
  pl: {
    sponsorTitle: 'Główny sponsor eventu',
    navAbout:'O EVENCIE', navProgramme:'CO NA WAS CZEKA', navCity:'BAŃSKA BYSTRZYCA', heroEyebrow:'29 MAJA 2027 · BAŃSKA BYSTRZYCA', heroLine1:'STREDOSLOVENSKÝ', heroLine2:'GEOVÍKEND', heroLead:'Weekend pełen geocachingu w sercu Słowacji.', countdownKicker:'DO ROZPOCZĘCIA EVENTU', days:'DNI', hours:'GODZ', minutes:'MIN', seconds:'SEK', discover:'ODKRYJ GEOWEEKEND', whatAwaits:'CO NA WAS CZEKA?', heartKicker:'SPOTKAMY SIĘ W SERCU SŁOWACJI', introTitle:'Przyjedźcie odkryć środkową Słowację i spędzić weekend pełen geocachingu.', introText:'W maju 2027 spotkamy się w Bańskiej Bystrzycy na dużym spotkaniu geocacherów ze Słowacji i z zagranicy. Główny event będzie centrum weekendu, ale zdecydowanie nie jego jedyną częścią.', monthMay:'MAJ 2027', venue:'AMFITEATR W BAŃSKIEJ BYSTRZYCY', featuresKicker:'JEDEN EVENT TO ZA MAŁO', featuresTitle:'CO NA WAS CZEKA?', featuresIntro:'Program dla poszukiwaczy keszy, kolekcjonerów, miłośników rywalizacji i przyrody oraz wszystkich, którzy lubią spotykać ludzi znanych głównie po geocachingowych nickach.', cardGamesTitle:'Gry i konkursy', cardGamesText:'Geocachingowe i inne wyzwania dla uczestników indywidualnych i drużyn.', cardFireTitle:'Ognisko i wspólne spotkanie', cardFireText:'Czas odłożyć GPS, spotkać starych znajomych i poznać nowych.', cardCachesTitle:'Nowe kesze i Adventure Lab', cardCachesText:'Jeszcze więcej powodów, by odkrywać Bańską Bystrzycę i okolice.', cardTalksTitle:'Prelekcje i dyskusje', cardTalksText:'Tematy geocachingowe, doświadczenia, historie i ciekawi goście.', cardXwgTitle:'Wymiana xWG', cardXwgText:'Miejsce na wymianę drewnianych geocoinów i rozwijanie kolekcji.', cardNatureTitle:'Wyruszamy w teren', cardNatureText:'Wspólnie będziemy odkrywać przyrodę wokół Bańskiej Bystrzycy.', cardSideTitle:'Eventy towarzyszące i inne atrakcje', cardSideText:'Chcemy rozłożyć geocachingowy program na cały weekend. Kolejne spotkania i atrakcje będziemy stopniowo ogłaszać.', cityKicker:'ZOSTAŃCIE NA WEEKEND', cityTitle:'ODKRYJCIE BAŃSKĄ BYSTRZYCĘ', cityText:'Historyczne centrum, miejskie kesze, punkty widokowe, lasy, wzgórza i górskie szlaki. Bańska Bystrzyca jest świetną bazą do odkrywania środkowej Słowacji.', cityQuote:'Przyjedźcie na event. Zostańcie na weekend. Odkryjcie z nami serce Słowacji.', footerDate:'29 maja 2027 · Bańska Bystrzyca · GCBXNZQ', backTop:'↑ DO GÓRY'
  },
  hu: {
    sponsorTitle: 'Az event főszponzora',
    navAbout:'AZ EVENTRŐL', navProgramme:'MI VÁR RÁTOK', navCity:'BESZTERCEBÁNYA', heroEyebrow:'2027. MÁJUS 29. · BESZTERCEBÁNYA', heroLine1:'STREDOSLOVENSKÝ', heroLine2:'GEOVÍKEND', heroLead:'Geocachinggel teli hétvége Szlovákia szívében.', countdownKicker:'AZ EVENT KEZDETÉIG', days:'NAP', hours:'ÓRA', minutes:'PERC', seconds:'MP', discover:'FEDEZD FEL A GEOHÉTVÉGÉT', whatAwaits:'MI VÁR RÁTOK?', heartKicker:'SZLOVÁKIA SZÍVÉBEN TALÁLKOZUNK', introTitle:'Gyertek, fedezzétek fel Közép-Szlovákiát, és töltsetek el egy geocachinggel teli hétvégét.', introText:'2027 májusában Besztercebányán találkozunk a szlovákiai és külföldi geocacherek nagyszabású találkozóján. A fő event a hétvége központja lesz, de messze nem az egyetlen része.', monthMay:'2027. MÁJUS', venue:'BESZTERCEBÁNYAI AMFITEÁTRUM', featuresKicker:'EGY EVENT NEM ELÉG', featuresTitle:'MI VÁR RÁTOK?', featuresIntro:'Program ládavadászoknak, gyűjtőknek, versengő kedvű résztvevőknek, természetbarátoknak és mindenkinek, aki szeretne személyesen találkozni az év nagy részében csak nicknévről ismert emberekkel.', cardGamesTitle:'Játékok és versenyek', cardGamesText:'Geocachinges és egyéb kihívások egyéni résztvevőknek és csapatoknak.', cardFireTitle:'Sütögetés és kikapcsolódás', cardFireText:'Ideje félretenni a GPS-t, találkozni régi ismerősökkel és újakat megismerni.', cardCachesTitle:'Új geoládák és Adventure Labok', cardCachesText:'Még több ok Besztercebánya és környékének felfedezésére.', cardTalksTitle:'Előadások és beszélgetések', cardTalksText:'Geocachinges témák, tapasztalatok, történetek és érdekes vendégek.', cardXwgTitle:'xWG-csere', cardXwgText:'Lehetőség Wooden Geocoinok cseréjére és a gyűjtemény bővítésére.', cardNatureTitle:'Irány a természet!', cardNatureText:'Közösen fedezzük fel Besztercebánya környékének természeti értékeit.', cardSideTitle:'Kísérő eventek és további programok', cardSideText:'A geocachinges programot az egész hétvégére szeretnénk kiterjeszteni. További találkozókat és programokat fokozatosan jelentünk be.', cityKicker:'MARADJATOK A HÉTVÉGÉRE', cityTitle:'FEDEZZÉTEK FEL BESZTERCEBÁNYÁT', cityText:'Történelmi belváros, városi ládák, kilátópontok, erdők, dombok és hegyi túraútvonalak. Besztercebánya remek kiindulópont Közép-Szlovákia felfedezéséhez.', cityQuote:'Gyertek el az eventre. Maradjatok a hétvégére. Fedezzétek fel velünk Szlovákia szívét!', footerDate:'2027. május 29. · Besztercebánya · GCBXNZQ', backTop:'↑ FEL'
  }
};

function setLanguage(lang) {
  const t = translations[lang] || translations.sk;
  document.documentElement.lang = lang === 'cs' ? 'cs' : lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  languageCurrent.firstChild.textContent = lang === 'cs' ? 'CZ ' : `${lang.toUpperCase()} `;
  localStorage.setItem('geovikend-lang', lang);
  languageSwitcher.classList.remove('open');
  languageCurrent.setAttribute('aria-expanded', 'false');
}

document.querySelectorAll('[data-lang]').forEach(button => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});

setLanguage(localStorage.getItem('geovikend-lang') || 'sk');
