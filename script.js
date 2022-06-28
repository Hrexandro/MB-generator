// to add:
// corpse looting
// bad habits
// broken bodies
// terrible traits
// random encounters/ varied by regions - add some monsters to default, add defaults to nondefault as well

const generateButton = document.getElementById("generate-button");
const nameDisplay = document.getElementById("name-display");
const categoryPicker = document.getElementById("kategoria");
const numberPicker = document.getElementById("liczba");

categoryPicker.addEventListener("change", (e) => {
  category = categoryPicker.value;
});

numberPicker.addEventListener("change", (e) => {
  numberGenerated = numberPicker.value;
});

let numberGenerated = 5;
let category = "MBNames";

function k(sides, exploding = false) {
  let result = Math.floor(Math.random() * sides) + 1
  if (exploding === true){
    if (result === sides){
      result = result + k(sides, true)
    }
  }

  return result;
}

class Roll {
  constructor(result) {
    this.result = result;
  }
}

//Category: names

const MBNames = {
  type: "mixer",
  prefix: [
    "Al",
    "Adal",
    "The",
    "Tor",
    "Tö",
    "Ur",
    "Dru",
    "Vik",
    "Va",
    "Vo",
    "Vra",
    "Vre",
    "We",
    "Ske",
    "Bur",
    "Burd",
    "Jau",
    "Ja",
    "Thro",
    "Tar",
    "Yv",
    "Gre",
    "Li",
    "Ga",
    "Or",
    "Mor",
    "Fe",
    "Wak",
    "Sun",
    "Gra",
    "Kran",
    "Kra",
    "Gne",
    "Kluv",
    "Qift-",
    "Mar",
    "Klo",
    "Dö",
    "Aerg-",
    "Ag",
    "Schlef",
    "Schle",
    "Bel",
    "Dom",
    "Vük",
    "Vü",
    "Bör",
    "Dae",
    "Kath",
    "Fel",
    "Got",
    "Sen",
    "Gri",
    "Haer",
    "Har",
    "Jot",
    "Kar",
    "Kat",
    "Kef",
    "Ku",
    "Kve",
    "Ly",
    "Mer",
    "Nag",
    "Ni",
    "Nif",
    "Prü",
    "Qill",
    "Ri",
    "Svi",
    "Illalukt",
    "Näs",
    "Kjell",
    "Mod",
    "Mund",
    "Eggar",
    "Ulf",
    "Som",
    "Göd",
    "Ärn",
    "Ödh",
    "Ærn",
    "Ylia",
    "Odhen",
    "Pe",
    "Orm",
    "Folk",
    "Gerul",
    "Det",
    "Le",
    "Ra",
    "An",
    "Les",
    "Josil",
    "Sig",
    "Sagso",
    "Hon",
    "Bon",
  ],
  suffix: [
    "ras",
    "fa",
    "rg",
    "vul",
    "rn",
    "m",
    "gel",
    "gal",
    "tan",
    "n",
    "kh",
    "si",
    "tor",
    "mut",
    "lh",
    "der",
    "er",
    "rk",
    "urk",
    "vl",
    "tuk",
    "kin",
    "til",
    "lt",
    "en",
    "gar",
    "gan",
    "ta",
    "ust",
    "vuld",
    "ngel",
    "gul",
    "th",
    "rist",
    "mol",
    "dul",
    "van",
    "lun",
    "tval",
    "zum",
    "sum",
    "kan",
    "buth",
    "kkan",
    "da",
    "ru",
    "an",
    "ban",
    "vel",
    "kil",
    "ttr",
    "rü",
    "gha",
    "mug",
    "na",
    "g",
    "la",
    "tar",
    "rt",
    "tz",
    "tin",
    "kari",
    "l",
    "duk",
    "uk",
    "ehl",
    "nach",
    "sten",
    "nd",
    "ande",
    "sig",
    "biorn",
    "u",
    "her",
    "gärdh",
    "dus",
    "ger",
    "mar",
    "ika",
    "gun",
    "dis",
    "karl",
    "lög",
    "biörn",
    "phus",
    "don",
    "dona",
    "on",
    "chela",
    "dy",
    "bert",
    "berta",
    "fúm",
    "ker",
  ],
};

const MBTowns = {
  type: "mixer",
  prefix: [
    "Alli",
    "Galgen",
    "Schles",
    "Ker",
    "On",
    "Gro",
    "Tor",
    "Skar",
    "Stur",
    "Draken",
    "Ebel",
    "Kal",
    "Breid",
    "Laug",
    "Ravn",
    "Esse",
    "Ful",
    "Hul",
    "Sten",
    "Kale",
    "Kirke",
    "Kirk",
    "Kli",
    "Langa",
    "Lund",
    "Akra",
    "Sand",
    "Alb",
    "Al",
    "Alt",
    "Amor",
    "Creuz",
    "Arn",
    "Aren",
    "Arz",
    "Auer",
    "Wind",
    "Bel",
    "Ber",
    "Berg",
    "Bergen",
    "Dürre",
    "Dürk",
    "Brücke",
    "Freien",
    "Staffel",
    "Borgen",
    "Baier",
    "Hers",
    "Bremer",
    "Breu",
    "Bra",
    "Bor",
    "Bott",
    "Born",
    "Braun",
    "Blanken",
    "Falken",
    "Clin",
    "Da",
    "Die",
    "Dür",
    "Dül",
    "Düssel",
    "Ehren",
    "Eckart",
    "Eber",
    "Enger",
    "Enne",
    "Eppel",
    "Eus",
    "Esch",
    "Filder",
    "Franken",
    "Frönden",
    "Fürsten",
    "Füs",
    "Füssen",
    "Furt",
    "Frank",
    "Gammer",
    "Gail",
    "Geisel",
    "Gel",
    "Geld",
    "Glau",
    "Gerolz",
    "Grün",
    "Güglin",
    "Glad",
    "Greven",
    "Grö",
    "Hagen",
    "Hada",
    "Halden",
    "Haldens",
    "Held",
    "Helm",
    "Hirsch",
    "Hochen",
    "Havel",
    "Heidel",
    "Hun",
    "Ingol",
    "Kalten",
    "Karben",
    "Karl",
    "Kir",
    "Kraut",
    "Krani",
    "Kon",
    "Kupfer",
    "König",
    "Kempt",
    "Kempt",
    "Kelster",
    "Kelk",
    "Kuppen",
    "Langa",
    "Leuten",
    "Lü",
    "Litchen",
    "Lauen",
    "Lange",
    "Lauf",
    "Linden",
    "Lüt",
    "Mans",
    "Mitten",
    "Min",
    "Markt",
    "Mühlen",
    "Mon",
    "Münche",
    "Mun",
    "Neuen",
    "Neu",
    "Nieder",
    "Nieden",
    "Nort",
    "Nitten",
    "Nier",
    "Nien",
    "Nord",
    "Ober",
    "Oberz",
    "Oster",
    "Osten",
    "Oppen",
    "Olden",
    "Orn",
    "Orten",
    "Oder",
    "Pfung",
    "Rabe",
    "Rade",
    "Rends",
    "Rasten",
    "Rie",
    "Roten",
    "Rein",
    "Schau",
    "Stadt",
    "Schram",
    "Schrap",
    "Stein",
    "Teu",
    "Tete",
    "Taun",
    "Tan",
    "Traun",
    "Uffen",
    "Un",
    "Ummer",
    "Vel",
    "Vils",
    "Vissel",
    "Voh",
    "Vre",
    "Volk",
    "Volks",
    "Volker",
    "Wald",
    "Witten",
    "Wissen",
    "Winter",
    "Wermel",
    "Wern",
    "Witt",
    "Wein",
    "Wermel",
    "Wals",
    "Wolfem",
    "Wol",
    "Wolken",
    "Wurz",
    "Wasser",
    "Ziegen",
    "Zeren",
    "Zirn",
    "Zitt",
    "Zwingen",
    "Zwei",
    "Zei",
    "Goblin",
    "Lusi",
    "Arkh",
    "Gorgh",
    "Gorghen",
    "Arkhen",
    "Lusen",
    "Verhu",
    "Verhen",
    "Chrypt",
    "Chrypten",
    "Josil",
    "Josilf",
    "Grav",
    "Grift",
    "Griften",
    "Sigfúm",
    "Anthelia",
    "Fathmu",
    "Aldon",
    "Seth",
    "Bent",
    "Wrat",
    "Belze",
    "Nodh",
    "Thinx",
    "Aland",
  ],
  suffix: [
    "", //only prefix, short one syllable name
    "ans",
    "nes",
    "beck",
    "wig",
    "güs",
    "da",
    "vi",
    "por",
    "de",
    "la",
    "toft",
    "brek",
    "dal",
    "by",
    "gard",
    "garde",
    "hus",
    "kot",
    "bo",
    "nes",
    "vik",
    "sun",
    "torp",
    "berg",
    "heim",
    "dorf",
    "haus",
    "stadt",
    "stedt",
    "feld",
    "leben",
    "steig",
    "kirchen",
    "bach",
    "burg",
    "helm",
    "zig",
    "ka",
    "nau",
    "walde",
    "stein",
    "haven",
    "vörde",
    "kel",
    "kum",
    "rom",
    "schweig",
    "schau",
    "gen",
    "un",
    "shagen",
    "men",
    "en",
    "thal",
    "sen ",
    "wangen",
    "furt",
    "men",
    "münden",
    "chau",
    "broich",
    "mühlen",
    "ditz",
    "enau",
    "mar",
    "stel",
    "stanz",
    "ten",
    "dau",
    "zen",
    "den",
    "schau",
    "ster",
    "sulm",
    "rade",
    "mark",
    "kloster",
    "horn",
    "lau",
    "den",
    "borg",
    "a",
    "ia",
    "um",
    "glo",
    "blod",
    "blud",
  ],
};

const VOTENobleNames = {
  //VOTE Veins of the Earth Noble Names
  type: "firstMiddleLastNameTripleMixer",
  prefix: [
    "Sötsbarkgrotten",
    "Vatnajökull",
    "Veshtoroc",
    "Bodagrottorna",
    "Chichicasapan",
    "Dongryong-gul",
    "Golondrinas",
    "Kanchanaburi",
    "Karangbolong",
    "Kolkbläser",
    "Konepruske",
    "Pollaraftra",
    "Pollnagollum",
    "Rushmangat",
    "Soldatskaya",
    "Thabazimbi",
    "Soifjorden",
    "Chandang-gul",
    "Caroajoapan",
    "Majilis",
    "Abisimo",
    "Balangangan",
    "Foglepole",
    "Niigata",
    "Resumidero",
    "Santoanos",
    "Sima",
    "Sumidero",
    "Torca",
    "Tunel",
    "Uanh",
    "Gorgoroth",
    "Gragareth",
    "Isgrotten",
    "Jashchick",
    "Nidlenloch",
    "Pinargozu",
    "Pollnacrom",
    "Zolushika",
    "Zsamboly",
    "Yolhafiri",
    "Gharkniz",
    "Skocjanske",
    "Guptesway",
    "Höolloch",
    "Düdenuik",
    "Ferenec",
    "Alexander",
    "Aggtelek",
    "Maxwelton",
    "Grotter", //
    "Darius", //
    "Marius", //
    "Malevanor", //
    "Julian",//
    "Julius",//
    "Julianus",//
    "Grotto",//
    "Khan",//
    "Noyan",//
    "Orestes",//
    "Romulus",//
    "Remus",//
    "Aetius",//
    "Majoran",//
    "Yarmouz",//
    "Alphonse",//
    "Jonathan",//
    "Menaquinone",
    "Septimus",
    "Severus",
    "Bey",
    "Constantius",
    "Valens",
    "Gratian",
    "Theodosius",
    "Arcadius",
    "Belisarius",
    "Basiliscus",
    "Anastasius",
    "Tiberius",
    "Justinian",
    "Anastasios",
    "Leon",
    "Irene",
    "Romanos",
    "Theodoros",
    "Isaac",
    "Andronikos",
    "Dragaš",
    "Lanius",
    "Ghorghor",
    "Wismerhill",
    "Salahudin",
    "Allahudin",
    "Ilamus",
    "Kaisar",
    "Ledroit",
    "Froideval",
    "Eleonora",
    "Hammurabi",
    "Sargon",
    "Erishum",
    "Ashur",
    "Shamshi-Adad",
    "Ishme-Dagan",
    "Morgan",
    "Mursilis",
    "Yamhad",
    "Marduk",
    "Shupiluliuma",
    "Ninurta",
    "Pileser",
    "Nabopolassar",
    "Nabonidus",
    "Abraham",
    "David",
    "Kanesh",
    "Tudhaliya",
    "Thaddeus",
    "Shalmaneser",
    "Yariri",
    "Wasusarma",
    "Mugallu",
    "Telipinu",
    "Gudea",
    "Natufia",
    "Shulgi",
    "Meskalamdug",
    "Akalamdug",
    "Imant",
    "Nathaniel",
    "Zechariah",
    "Yahaziel",
    "Ephron",
    "Nashon",
    "Salomon"
  ],
  middle: [
    "Don",
    "Doom",
    "Et",
    "Von",
    "Te",
    "Vin-Der",
    "Of",
    "Des",
    "Bone",
    "Da",
    "Mock",
    "Echt",
    "Yr",
    "Bok",
    "El",
    "De",
    "Spel",
    "Cut",
    "Des",
    "By",
    "Org",
    "Le",
    "Al",
    "Ken",
    "Th'",
    "Art",
    "Fault",
    "Is",
    "Hect",
    "Ig",
    "Cry",
    "Vry",
    "Pseu",
    "Ten",
    "Eon",
    "Op",
    "Hy",
    "Grot",
    "Com",
    "Ot",
    "Gen",
    "Cut",
    "An",
    "Der-Von",
    "Done",
    "Drone",
    "Myco",
    "Vero",
    "Psy",
    "Gul",
    "Hurt",
    "Ibn",//
    "Abu",//
    "Del",//
    "Della",//
    "Af",
    "Ben",
    "Wan",
    "Bey",
    "Ur"
  ],
  suffix: [
    "Juvenal",
    "Kaua",
    "Tseb",
    "Humbolt",
    "Pahu",
    "Linth",
    "Laraboro",
    "Tenebres",
    "Norman",
    "Diamante",
    "Huagpo",
    "Uchkupisjo",
    "Ogof",
    "Pipe",
    "Goranan",
    "Juxtlahuaca",
    "Precipico",
    "Aire",
    "Pins",
    "Frosen",
    "Nita",
    "Pot",
    "Jinn",
    "Karst",
    "Toxin",
    "Nogal",
    "Milpo",
    "Atikpak",
    "Jornas",
    "Sumidors",
    "Claonite",
    "Kananda",
    "Discoschacht",
    "Monsterhöle",
    "Urrielto",
    "Ahuihuitzrapa",
    "Ambatoharanana",
    "Kulogorskaya",
    "Mangawhitikau",
    "Antsatrabonko",
    "Schwyzerschacht",
    "Siebenhengste",
    "Rouagrottorna",
    "Angurtidorgius",
    "Jordbrungrotten",
    "Kappasjokkgrotten",
    "Huehuentenango",
    "Kel'Ketchkhen",
    "Simmons-Mingo-Mg",
    "Kamenitim",
    "Harrington", //
    "Julianes",//
    "Hohenheim",//
    "Droktenbrot",//
    "Julianus",
    "Grotto",
    "Grotter",
    "Singh",
    "Augustulus",
    "Manzikert",
    "Briskortz",
    "Borg",
    "Gabana",
    "Galbani",
    "Versace",
    "Gochugan",
    "Yamnaya",
    "Bey",
    "Isauros",
    "Makedon",
    "Amorian",
    "Laskaris",
    "Dragaš",
    "Kaisar",
    "Ledroit",
    "Froideval",
    "Hammurabi",
    "Sargon",
    "Ur",
    "Khan",
    "Noyan",
    "Morgan",
    "Hattuša",
    "Yamhad",
    "Ginzburg",
    "Carchemish",
    "Har-Tira",
    "Even-Vered",
    "Amithai"


  ],
};

const wizardNames = {
  //czarodzieje magowie leki nazwy leków
  type: "picker",
  list: [
    "Venalex",
    "Furagina",
    "Dicoflor",
    "Narivent",
    "Ibuprofen",
    "Paracetamol",
    "Sinecod",
    "Sirdalud",
    "Dicortineff",
    "Folik",
    "Propolis",
    "Aspargin",
    "Magnefar",
    "Neosine",
    "Sanostol",
    "Prospan",
    "Hederasal",
    "Herdripsan",
    "Tasectan",
    "Biofenac",
    "Berodual",
    "Fluconazol",
    "Efferalgan",
    "Diclofenac",
    "Fenistil",
    "Betahistyna",
    "Cortineff",
    "Baclofen",
    "Codeina",
    "Gynalgin",
    "Acodin",
    "Borasol",
    "Clatra",
    "Clotrimazol",
    "Pimafucort",
    "Klacid",
    "Triderm",
    "Protopic",
    "Fucidin",
    "Herpex",
    "Chrypex",
    "Vesicare",
  ],
};

//random encounters losowe spotkania

const MBRandomEncounters = function () {
  return {
    type: "pickerRoller",
    list: [
      //Overland Travel
      "Nie dzieje się nic konkretnego, świat jest szary.",
      "Pogorszenie pogody.",
      "Zmiana pogody.",// na??
      "Droga się rozwidla, znaki są nieczytelne (przerzut).",
      "Klasztor przy drodze (Mnisi i zakonnice są kultystami Nechrubela).",
      "Ruiny zamku odznaczają się na tle nieba (zamieszkują je dzikie wrony, w jednej wieży, która przetrwała mieszka ślepy alchemik).",
      "Religijna procesja biczowników i pustelników (Zmierzają do NIEGO, ale zgubili drogę).",
      "Brudni rolnicy w drodze na targ.",
      "Po drugiej stronie drogi trwa walka pomiędzy bandą obdartych ze skóry kultystów a watahą kundlaków.",
      "Troll Adnah atakuje z zaskoczenia.",
      `${k(6)} racji żywności/wody się psuje.`,
      `${k(6) + 1} łowców niewolników prowadzi ${k(11) + 1} niewolników, połowa pobita niemal na śmierć, połowa świeżo złapanych.`,
      `Grupa najemników i ich ${k(6)} strażników (wszyscy zainfekowani pasożytem mózgu).`,
      `Opuszczony cmentarz (w kaplicy znajduje się odwrócony złoty krzyż wart 50s. ${k(8)} zombie ukrywa się w krypcie.`,
      "Pochód pogrzebowy bezzębnych wieśniaków niosących bardzo wielką trumnę (olbrzym wewnątrz jest martwy, lecz śniący).",
      `Dwoje zwłok u boku drogi, w kieszeni jednego z nich znajduje się: ${pickFromList(MBCorpseLoot)}`

    ],
  };
};

// Other other

const MBWeather = {
  type: "picker",
  list: [
    "Martwa szarość",
    "Walący deszcz",
    "Przeszywający wiatr",
    "Ogłuszająca burza",
    "Ciemno jak w nocy",
    "Martwa cisza",
    "Urwanie chmury",
    "Mgła gęsta jak zupa",
    "Trzaskający mróz",
    "Irytująca mżawka",
    "Warczące grzmoty",
    "Grobowe zimno",
  ],
};

const MBTerribleTraits = {
  //okropne cechy
  type: "picker",
  list: [
    "Nieustannie rozdrażniony",
    "Kompleks niższości",
    "Ma problemy z autorytetami",
    "Pyskaty krzykacz",
    "Okrutny",
    "Egocentryczny",
    "Nihilistyczny",
    "Skłonność do nadużywania środków odurzających",
    "Skonfliktowany",
    "Podstępny",
    "Mściwy",
    "Tchórzliwy",
    "Leniwy",
    "Podejrzliwy",
    "Bezlistosny",
    "Zamartwia się",
    "Zgorzkniały",
    "Zdradliwy",
    "Marnotrawny",
    "Arogancki",
    "Obżartus", //ok
    "Chciwy", //ok
    //"Erotoman", //nope
    "Wymądrzający się", //ok
    "Paranoik", //ok
    "Sarkastyczny",
    "Złośliwy",
    "Naiwny, uwierzy nawet w najmniej wiarygodne kłamstwo",
  ],
};

const MBBrokenBodies = {
  //broken bodies zniszczone ciała cechy
  type: "picker",
  list: [
    "Wpatrujący się, maniakalny wzrok",
    "Pokryty tatuażami uznawanymi przez niektórych za bluźniercze",
    "Gnijąca twarz, nosi maskę",
    "Brak trzech palców u stopy, kuleje",
    "Wychudły i blady",
    "Jedna dłoń zastąpiona zardzewiałym hakiem (k6 obrażeń)",
    "Gnijące zęby",
    "Niepokojąco piękny, nieznośnie czysty",
    "Dłonie pokryte ropiejącymi wypryskami",
    "Zaćma powoli, ale nieustępliwie pokrywa oboje oczu",
    "Długie, skołtunione włosy, w których mieszka co najmniej jeden karaluch",
    "Zmiażdżone uszy",
    "Drgawki i jąkanie od uszkodzonego nerwu lub stresu",
    "Korpulentny, wygłodniały, ślini się",
    "Jednej ręce brakuje kciuka i palca wskazującego, łapie jak homar",
    "Czerwony, spuchnięty nos alkoholika",
    "Neutralny wyraz twarzy ma maniakalny, ciężko zdobyć przyjaciół",
    "Przewlekła grzybica stóp. Śmierdzi.",
    "Niedawno rozcięte i śmierdzące, ropiejące oko zakryte opaską",
    "Popękane czarne paznokcie, mogą w każdej chwili odpaść",
    "Zezowate spojrzenie", //ok
    "Obcięty koniec języka, sepleni gdy mówi", //ok
    "W chwilach dużego stresu, puszcza gazy", //ok
    "Karzeł", //ok
    "Ciągle jest mu gorąco, na co wiecznie narzeka", //ok
    "Ciągle jest mu zimno, na co wiecznie narzeka", //ok
    "Wysoki jak drzewo, ale chudy jak szczapa"//ok
  ],
};

const MBBadHabits = {
  //bad habits, złe nawyki cechy
  type: "picker",
  list: [
    "Obsesyjnie zbiera małe, ostre kamienie",
    "Nie użyje żadnego ostrza nie przetestowawszy go uprzednio na własnym ciele. Ręce poprzeszywane blizami.",
    "Jak już zacznie pić, nie może przestać",
    "Uzależniony od hazardu. Musi zakładać się choć raz dziennie. Jeśli przegra, podbija stawkę i zakłada się znów.",
    "Nie toleruje krytyki. Rezultatem jest wściekłość i płacz.",
    "Nie może przejśc do sedna. Nigdy nie opowiedział żadnej historii od początku do końca",
    "Najlepszym przyjacielem jest czaszka. Nosi ją ze sobą, opowiada jej wszystko, nikomu innemu nie ufa bardziej.",
    "Dłubie w nosie aż do krwi",
    "Histerycznie śmieje się z własnych żartów, które potem szczegółowo objaśnia.",
    "Nihilista, upiera się, żeby mówić wszystkim, że jest nihilistą i wyjaśniać dlaczego.",
    "Notoryczny zjadacz robali",
    "Na stres reaguje okazywaniem estetyki. Im gorzej sprawy się mają, tym szykowniej musi wyglądać.",
    "Stale zalegająca w gardle flegma. Nieustannie kaszle, smarka, spluwa i przełyka.",
    "Nałogowo kłamie, ciężko mu zdobyć zaufanie innych", //ok
    "Zbieractwo - zbiera i targa ze sobą pełno niepotrzebnych przedmiotów", //ok
    "Ma tendencję do katatonicznego wpatrywania się w jeden punkt przez kilka minut", //ok
    "Skłonność do egzaltacji i przesadzonej gestykulacji", //ok
    "Gada do siebie w najmniej odpowiednich momentach i głośno pomstuje na wszelkie niedogodności", //ok
    "Czuje przymus pomodlenia się za duszę każdego z zabitych wrogów", //ok
    "Piroman",
    "Stale gubi ważne przedmioty i zapomina ważne fakty",
    "Plotkarz, obgaduje każdego, którego akurat nie ma w pobliżu",
    "Jąka się, gdy kłamie",
    "Chichocze szaleńczo w najgorszych momentach",
    "Gwiżdże, gdy próbuje się ukryć, zaprzecza, jakoby tak robił. Gwiżdże przy 5,7,9,11 lub 13 wyrzuconym na k20",
    "Robi biżuterię z ludzkich zębów",
    "Przywłaszcza sobie wszelkie zasługi"//ok
  ],
};

const MBCorpseLoot = function () {  //przeszukiwanie zwłok, rabowanie zwłok
  return {
    type: "pickerRoller",
    list: [
      `${k(4, true)} szt. srebra`,
      `${k(6)} szt. srebra`,
      `${k(8)} szt. srebra`,
      `${k(10)} szt. srebra`,
      `${k(20)} szt. srebra`,
      `${k(20)} szt. srebra`,
      `${k(20)} szt. srebra`,
      `${k(20)} szt. srebra`,
      `${k(20)} szt. srebra`,
      `${k(20)} szt. srebra`,
      `${k(20)} szt. srebra`,
      `${k(66)} szt. srebra`,
      `${k(66)} szt. srebra`,
      `${k(66)} szt. srebra`,
      `${k(100)} szt. srebra`,
      `${k(20, true)} szt. srebra`,
      "Garnuszek z niesamowicie skuteczną maścią wywołującą swędzenie",
      "Naszyjnik z ludzkich zębów",
      "Worek wściekłych, jadowitych ciem, DR6 na Twardość albo śmierć",
      `Kieszeń pełna popękanego szkła, ${k(2)} obrażeń`,
      "Szalony manifest, jeśli go przeczytasz, rzuć DR12 na Prezencję, w przypadku porażki jesteś tak zmieszany, że tracisz na stałe 1 pkt prezencji",
      "Klucz do pobliskich drzwi, kradziony",
      "Mapa domu zamożnej, choć słabej rodziny",
      "Zadziwiająca ilość pająków (martwych)",
      "Zadziwiająca ilość pająków (żywych)",
      "Zadziwiająca ilość szczurów (martwych)",
      "Zadziwiająca ilość szczurów (żywych)",
      "Metalowy cylinder wypełnionych prochem, z lontem. 1-2 tracisz rękę, 3-6 zadaje 3k10 obrażeń tam, gdzie wyląduje.",
      "Twarz znanego i znienawidzonego łowcy czarownic",
      "Twarz znanego i lubianego łowcy czarownic",
      "Kartka z listą imion Bohaterów Graczy, jedno z imion jest skreślone",
      "Umęczona wróżka z urwanymi skrzydełkami i wyłupionymi oczami",
      "Mapa do miejsca, które nie ma prawa istnieć",
      "Nieoznakowana butelka z cieczą, która mieni się raz czerwono, raz na zielono",
      "Papier dłużny, lokalny potentat jest winny posiadaczowi znaczną sumę pieniędzy.",
      '"Woda życia", leczy k8, test twardości DR10 albo ślepniesz. Wysoce alkoholowa.',
      "Maska pośmiertna jednego z BG",
      `Z tym coś było ewidentnie nie tak. Ręce ma pokryte czymś ciepławym, brązowym i mocno kwasowym. ${k(2)+1} obrażeń i okropnie śmierdzisz przez ${k(4)} dni.`,
      "Czarny sztylet z Kergus, 2k4 obrażeń",
      "Podpisana buteleczka z trucizną, test DR12 na twardość, albo losowy atrybut spada o k4.",
      "Skalp z długimi czarnymi włosami",
      "Złota kula z niewidzialnym łączeniem, otwierana wykręcaniem",
      "Zakrwawiony kastet",
      "Dwie obciążone kości.",
      "Puchar z czaszki jakiegoś nieszczęśnika",
      "Wisiorek z ususzonej krowiej głowy wiszącej do góry nogami na rzemyku",
      "Zestaw kart tarota, dwóch brakuje.",
      `Woreczek z bladozielonymi ziołami (herbata, daje sen bez marzeń, ale redukuje prezencję o 1 następnego dnia ${k(6)+k(6)} porcji)`,
      "Żelazna obroża.",
      "Zakorkowana flaszka z bardzo silnym alkoholem",
      "Osełka",
      "Drewniana łyżka",
      "Medalion z lokiem rudych włosów.",
      "List gończy, poszukiwany winny rabunku i kradzieży, 50s żywy, 10s martwy",
      "Pierścionek z fałszywym klejnotem, skrywającym dawkę czarnej trucizny.",
      "Szmaciana lalka",
      "Puzderko z uschniętym, gnijącym palcem od stopy należącym do zwłok, ma wczesne stadium trądu.",
      `Słoik z usychającą ropuchą, niewypuszczona zginie w ciągu ${k(4)} dni`,
      "Gwizdek",
      "Suszony penis trolla",
      "Małe lusterko",
      "Łuska wielkości dłoni",
      "Złoty ząb (ma go w ustach)",
      "Srebrny medalion z wizerunkiem bazyliszka",
      "Mała szklana fiolka z laudanum",
      "Zasuszone serce",
      "Mała figurka anioła, ułamane skrzydło",
      "Złota moneta z wybitą na niej czaszką",
      "Brzytwa",
      "Fiolka Elixiru Vitalis, jedna dawka",
      "Malutki klejnot, schowany w bucie, wart 10+2k6 s",
      "Naszyjnik ze srebrnym krzyżykiem",
      "Teleskopowa luneta",
      "Kawałek suszonej ludzkiej skóry z wytatuowanym tekstem (przeklęty zwój)",
      "Resztki czegoś bezwartościowego rozsypują się w twoich rękach",
      "Kilka zgniłych jabłek.",
      "Czaszki.",
      "Dwie zakrwawione pochodnie.",
      "Grzebień z pojedyńczym siwym włosem.",
      "Flet (smakuje okropnie).",
      "Mała buteleczka wypełniona krwią.",
      "Ćwiekowany skórzany naramiennik.",
      "Połamana porcelanowa lalka.",
      "Kawałek spleśniałego chleba.",
      "Martwy czarny kot.",
      "Wędka z zardzewiałym haczykiem.",
      "Długi stryczek",
      "Czerwony kaptur i maska.",
      "Mały drewniany kuferek (pusty)",
      "k8 kolorowych szklanych kulek.",
      "Rakieta śnieżna (zamieszkana przez pająka).",
      "Olejny obraz zakapturzonego szkieleta.",
      "Wachlarz w kształcie niedźwiedziego szponu.",
      "Kunsztowna jedwabna rękawiczka",
      "Suszone mięso nietoperza.",
      "Puzderko z czaszkami wróżek, zmielone i wciągnięte pozwalają unosić się i opadać powoli przez k4 minuty",
      "Miedziany kolczyk w nosie.",
      "Dwoje oczu w słoiku.",
      "k6 kości (kościanych).",
      "k4 wielkich kłów.",
      "Wiadro latrynowe.",
      "Pęknięta harfa.",
      "Rogaty hełm.",
      "Utytłana gównem chochla.",
      "Smutna kura w klatce.",
      "Strzała, która utknęła w tarczy.",
      "Garść ludzkich zębów.",
      "Świeżo naostrzona kosa.",
      "Pusta buteleczka na perfumy.",
      "Pęczek kluczy bez zamku.",
      "Skórzana ćwiekowana kamizelka.",
      `Sakiewka z ${k(10)} srebra.`,
      "Zużyty pasek.",
      "Worek martwych szczurów.",
      `Ozłacana czaszka warta ${k(20)+10} srebra.`,
      "But (nie pasuje).",
      `${k(10)} strzał.`,
      'Książka "Królowa Nocy".',
      "Wypchana sroka.",
      "Rzeźnicki nóż (k4)",
      `${k(20)} szt. srebra`,,
      "Słoik z fermentowanymi rybami.",
      "Pułapka na myszy (1 punkt obrażeń).",
      "Czarno-biała farba do twarzy.",
      "Lniany wór z częściami ciała.",
      "Pęknięte lusterko.",
      "Długi żelazny łańcuch.",
      'Książka "Walka Czarodziejów".',
      "Zakrzywiony rytualny nóż (k4).",
      "Kolczuga, tułów ciągle w niej jest.",
      "Psia obroża z łańcuchem.",
      "Woreczek z solą.",
      "Okopcony srebrny pierścień.",
      "Proporzec z zatopionego statku.",
      "Zdarta ludzka skóra.",
      "Koc, z pchłami.",
      "Zniszczony skórzany pancerz.",
      "k4 złotych zębów wartych 10s sztuka.",
      "Kilof (k4).",
      "Obroża z amuletem w kształcie pentagramu.",
      "Zakrwawione wiertło.",
      "Modlitewnik z psalmami.",
      "Maska z ptasim dziobem.",
      "Węglowy szkic przedstawiający demona.",
      "Pół martwego psa.",
      "Ładna opaska na oko.",
      "Młotek i kilka gwoździ.",
      "Kula i łańcuch (i stopa).",
      "Ostry pogrzebacz (k4+1)",
      "Para ciepłych skarpet (namoknięte).",
      "Pudełko czarnych piór.",
      "Uszkodzone futro z wilka.",
      "Zgniłe mieso (na k2 dni)",
      "Małe pudełko z białą szklaną kulką.",
      "Kufel z igłą.",
      "Drewniane zęby.",
      "Szczęśliwy amulet.",
      "k6 pustych zwojów.",
      "Latarnia z daszkiem.",
      "Para drewnianych kajdanek.",
      "Słoik z 3 uciętymi kciukami.",
      "Zwinięta kula ludzkich włosów.",
      "Łopata (k4).",
      "Zgniatacz kciuków.",
      "Bardzo mała podkowa.",
      "Naszyjnik ze szczurzych zębów.",
      "Połowa mapy skarbów.",
      "Butelka czerwonej trucizny.",
      "Mały drewniany konik.",
      "Ciężkie żelazne obcęgi.",
      "Czarny worek z kocim sercem.",
      "Spory kawałek węgla.",
      "Dwie ucięte dłonie.",
      "Dziecięcych rozmiarów żelazna dziewica."
    ],

  }
};

function removeAllChildren(element) {
  let counter = element.children.length;
  for (let m = 0; m <= counter; m++) {
    if (element.children[0]) {
      element.children[0].remove();
    }
  }
}

function randomizeFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function displayArray(ar, parent) {
  for (j = 0; j < ar.length; j++) {
    let line = document.createElement("p");
    line.innerText = `${j + 1}. ${ar[j]}`;
    parent.appendChild(line);
  }
}

function pickFromList(pickedList){
  if (pickedList.type === "mixer") {
    return (
      randomizeFromArray(pickedList.prefix) +
        randomizeFromArray(pickedList.suffix)
    );
  } else if (pickedList.type === "firstMiddleLastNameTripleMixer") {
    return (
      `${randomizeFromArray(pickedList.prefix)} ${randomizeFromArray(
        pickedList.middle
      )} ${randomizeFromArray(pickedList.suffix)}`
    );
  } else if (pickedList.type === "picker") {
    return (randomizeFromArray(pickedList.list));
  } else if (pickedList().type === "pickerRoller") {
    //pickerRollers (e.g. random encounters, corpse loot) are functions, so that the numbers are rerolled each time
    return (randomizeFromArray(pickedList().list));
  }
}

generateButton.addEventListener("click", () => {
  let result = [];
  let pickedCategory = eval(category);

  removeAllChildren(nameDisplay);

  for (let i = 0; i < numberGenerated; i++) {
    result.push(pickFromList(pickedCategory))


    // if (pickedCategory.type === "mixer") {
    //   result.push(
    //     randomizeFromArray(pickedCategory.prefix) +
    //       randomizeFromArray(pickedCategory.suffix)
    //   );
    // } else if (pickedCategory.type === "firstMiddleLastNameTripleMixer") {
    //   result.push(
    //     `${randomizeFromArray(pickedCategory.prefix)} ${randomizeFromArray(
    //       pickedCategory.middle
    //     )} ${randomizeFromArray(pickedCategory.suffix)}`
    //   );
    // } else if (pickedCategory.type === "picker") {
    //   result.push(randomizeFromArray(pickedCategory.list));
    // } else if (pickedCategory().type === "pickerRoller") {
    //   //pickerRollers (e.g. random encounters, corpse loot) are functions, so that the numbers are rerolled each time
    //   result.push(randomizeFromArray(pickedCategory().list));
    // }
  }
  displayArray(result, nameDisplay);
});
