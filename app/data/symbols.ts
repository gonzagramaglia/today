export interface TranslationContent {
  main: string;
  secondary?: string[];
}

export interface SymbolItem {
  id?: string;
  symbol: string;
  description: {
    es: TranslationContent;
    en: TranslationContent;
  };
  tags?: {
    es: string[];
    en: string[];
  };
}

export const symbols: SymbolItem[] = [
  {
    id: "1",
    symbol: "☯️",
    description: { es: { main: "Ying Yang" }, en: { main: "Yin Yang" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "2",
    symbol: "🚀",
    description: { es: { main: "Cohete" }, en: { main: "Rocket" } },
    tags: {
      es: ["Vehículos", "Espacio", "Universo"],
      en: ["Vehicles", "Space", "Universe"],
    },
  },
  {
    id: "3",
    symbol: "💻",
    description: {
      es: {
        main: "Laptop",
        secondary: ["Computadora", "Notebook", "Netbook", "PC"],
      },
      en: {
        main: "Computer",
        secondary: ["Laptop", "Notebook", "Netbook", "PC"],
      },
    },
    tags: {
      es: ["Informatica", "Oficina", "Programacion", "Tecnologia"],
      en: ["Computing", "Office", "Programming", "Technology"],
    },
  },
  {
    id: "4",
    symbol: "🧑‍💻",
    description: { es: { main: "En la compu" }, en: { main: "At computer" } },
    tags: {
      es: ["Informatica", "Profesiones", "Programacion"],
      en: ["Computing", "Professions", "Programming"],
    },
  },
  {
    id: "5",
    symbol: "🔧",
    description: { es: { main: "Llave Mecánica" }, en: { main: "Wrench" } },
    tags: { es: ["Tareas", "Herramientas"], en: ["Tasks", "Tools"] },
  },
  {
    id: "6",
    symbol: "👨‍🔧",
    description: {
      es: { main: "Mecánico", secondary: ["Arreglar", "Reparar", "Fix"] },
      en: { main: "Mechanic", secondary: ["Fix"] },
    },
    tags: {
      es: ["Tareas", "Herramientas", "Profesiones", "Informática"],
      en: ["Tasks", "Tools", "Professions", "Computing"],
    },
  },
  {
    id: "7",
    symbol: "⚡",
    description: {
      es: { main: "Rayo", secondary: ["Relampago"] },
      en: { main: "Lightning", secondary: ["Thunder"] },
    },
    tags: { es: ["Clima"], en: ["Weather"] },
  },
  {
    id: "8",
    symbol: "🏃‍♂️",
    description: {
      es: {
        main: "Corredor",
        secondary: ["Correr", "Maraton", "Carrera", "Running"],
      },
      en: { main: "Runner", secondary: ["Marathon", "Run", "Race", "Running"] },
    },
    tags: { es: ["Deportes", "Personas"], en: ["Sports", "People"] },
  },
  {
    id: "9",
    symbol: "🏃‍♀️",
    description: {
      es: {
        main: "Corredora",
        secondary: ["Correr", "Maraton", "Carrera", "Running"],
      },
      en: { main: "Runner", secondary: ["Marathon", "Run", "Race", "Running"] },
    },
    tags: {
      es: ["Deportes", "Personas", "Mujeres"],
      en: ["Sports", "People", "Women"],
    },
  },
  {
    id: "10",
    symbol: "🧉",
    description: { es: { main: "Mate" }, en: { main: "Mate" } },
    tags: { es: ["Bebidas", "Argentina"], en: ["Drinks", "Argentina"] },
  },
  {
    id: "11",
    symbol: "🙏",
    description: {
      es: { main: "Manos 1", secondary: ["Rezo", "Dios"] },
      en: { main: "Hands 1", secondary: ["Prayer"] },
    },
    tags: { es: ["Gestos", "Religión"], en: ["Gestures", "Religión"] },
  },
  {
    id: "12",
    symbol: "👌",
    description: {
      es: { main: "Mano Círculo Ok" },
      en: { main: "Ok Hand Sign" },
    },
    tags: { es: ["Gestos"], en: ["Gestures"] },
  },
  {
    id: "13",
    symbol: "🤝",
    description: {
      es: { main: "Acuerdo", secondary: ["Gracias", "Apreton de Manos"] },
      en: { main: "Agreement", secondary: ["Thanks", "Handshake"] },
    },
    tags: { es: ["Equipo", "Oficina"], en: ["Team", "Office"] },
  },
  {
    id: "14",
    symbol: "👏",
    description: {
      es: { main: "Aplausos", secondary: ["Claps"] },
      en: { main: "Applause", secondary: ["Claps"] },
    },
    tags: { es: ["Gestos"], en: ["Gestures"] },
  },
  {
    id: "15",
    symbol: "🪶",
    description: { es: { main: "Pluma" }, en: { main: "Feather" } },
    tags: { es: ["Animales", "Naturaleza"], en: ["Animals", "Nature"] },
  },
  {
    id: "16",
    symbol: "👍",
    description: {
      es: { main: "Bien", secondary: ["Pulgar arriba"] },
      en: { main: "Good", secondary: ["Pulgar up"] },
    },
    tags: { es: ["Gestos"], en: ["Gestures"] },
  },
  {
    id: "17",
    symbol: "✌",
    description: {
      es: {
        main: "Gesto Paz",
        secondary: [
          "Dos",
          "Dedos",
          "Levantados",
          "Dedos Levantados",
          "Amor",
          "Peronista",
        ],
      },
      en: { main: "Hand 1" },
    },
    tags: { es: ["Gestos"], en: ["Gestures"] },
  },
  {
    id: "18",
    symbol: "🤙",
    description: {
      es: { main: "Gesto de Llamada" },
      en: { main: "Call Gesture" },
    },
    tags: { es: ["Gestos", "Mano"], en: ["Gestures", "Hand"] },
  },
  {
    id: "19",
    symbol: "👋",
    description: { es: { main: "Saludo" }, en: { main: "Hand Wave" } },
    tags: { es: ["Gestos"], en: ["Gestures"] },
  },
  {
    id: "20",
    symbol: "🤯",
    description: {
      es: {
        main: "Sorprendido",
        secondary: ["Explosión Mental", "Boom", "Damn", "Holy shit"],
      },
      en: { main: "Damn", secondary: ["Boom", "Mind blown", "Holy shit"] },
    },
    tags: { es: ["Cara"], en: ["Face"] },
  },
  {
    id: "21",
    symbol: "😕",
    description: { es: { main: ":/" }, en: { main: ":/" } },
    tags: { es: ["Cara"], en: ["Face"] },
  },
  {
    id: "22",
    symbol: "😔",
    description: {
      es: { main: "u.u", secondary: ["Triste"] },
      en: { main: "u.u", secondary: ["Sad"] },
    },
    tags: { es: ["Cara", "Emociones"], en: ["Face", "Emotions"] },
  },
  {
    id: "23",
    symbol: "😬",
    description: {
      es: { main: ":8", secondary: ["Enojado", "Mordiendo", "Indignado"] },
      en: { main: ":8", secondary: ["Grimacing", "Indignant"] },
    },
    tags: { es: ["Cara"], en: ["Face"] },
  },
  {
    id: "24",
    symbol: "🫳",
    description: {
      es: { main: "Cuarteto", secondary: ["Drop"] },
      en: { main: "Cuarteto", secondary: ["Drop"] },
    },
    tags: {
      es: ["Argentina", "Entretenimiento", "Fiesta"],
      en: ["Argentina", "Entertainment", "Party"],
    },
  },
  {
    id: "25",
    symbol: "🫴",
    description: { es: { main: "Cuarteto" }, en: { main: "Cuarteto" } },
    tags: {
      es: ["Argentina", "Entretenimiento", "Fiesta"],
      en: ["Argentina", "Entertainment", "Party"],
    },
  },
  {
    id: "26",
    symbol: "🫡",
    description: {
      es: {
        main: "A la orden",
        secondary: [
          "al servicio",
          "servicio militar",
          "militar",
          "soldado",
          "saludo militar",
        ],
      },
      en: {
        main: "At the order",
        secondary: [
          "At your service",
          "Military service",
          "Military",
          "Soldier",
          "Military salute",
        ],
      },
    },
    tags: { es: ["Cara"], en: ["Face"] },
  },
  {
    id: "27",
    symbol: "😂",
    description: {
      es: { main: "Risa :')", secondary: ["Carcajada", "Humor", "Chiste"] },
      en: { main: "Laughing" },
    },
    tags: { es: ["Cara"], en: ["Face"] },
  },
  {
    id: "28",
    symbol: "🤣",
    description: { es: { main: "Risa XD" }, en: { main: "Laughing" } },
    tags: { es: ["Cara"], en: ["Face"] },
  },
  {
    id: "29",
    symbol: "🔊",
    description: { es: { main: "Sonido" }, en: { main: "Sound" } },
    tags: { es: ["Música", "Sonido"], en: ["Music", "Sound"] },
  },
  {
    id: "30",
    symbol: "🔈",
    description: { es: { main: "Sin Sonido" }, en: { main: "Sound" } },
    tags: { es: ["Música", "Sonido"], en: ["Music", "Sound"] },
  },
  {
    id: "31",
    symbol: "🐉",
    description: { es: { main: "Dragón" }, en: { main: "Dragon" } },
    tags: {
      es: ["Magia", "Animales", "Fantasia"],
      en: ["Magic", "Animals", "Magic", "Fantasy"],
    },
  },
  {
    id: "32",
    symbol: "🥒",
    description: { es: { main: "Pepinillo" }, en: { main: "Cucumber" } },
    tags: { es: ["Vegetales"], en: ["Vegetables"] },
  },
  {
    id: "33",
    symbol: "📎",
    description: { es: { main: "Clip" }, en: { main: "Clip" } },
    tags: { es: ["Oficina", "Tareas"], en: ["Office", "Tasks"] },
  },
  {
    id: "34",
    symbol: "🌴",
    description: { es: { main: "Palmera" }, en: { main: "Palm" } },
    tags: { es: ["Plantas", "Verano"], en: ["Plants", "Summer"] },
  },
  {
    id: "35",
    symbol: "🌳",
    description: { es: { main: "Árbol" }, en: { main: "Tree" } },
    tags: { es: ["Plantas", "Naturaleza"], en: ["Plants", "Plants", "Nature"] },
  },
  {
    id: "36",
    symbol: "🌵",
    description: { es: { main: "Cactus" }, en: { main: "Cactus" } },
    tags: { es: ["Plantas"], en: ["Plants"] },
  },
  {
    id: "37",
    symbol: "🌻",
    description: { es: { main: "Girasol" }, en: { main: "Sunflower" } },
    tags: { es: ["Plantas", "Flores"], en: ["Plants", "Plants", "Flowers"] },
  },
  {
    id: "38",
    symbol: "🫂",
    description: { es: { main: "Abrazo" }, en: { main: "Hugging" } },
    tags: {
      es: ["Amor", "Amistad", "Amigos"],
      en: ["Love", "Friendship", "Friends"],
    },
  },
  {
    id: "39",
    symbol: "🥁",
    description: { es: { main: "Tambor" }, en: { main: "Drums" } },
    tags: {
      es: ["Instrumentos", "Entretenimiento"],
      en: ["Instruments", "Entertainment"],
    },
  },
  {
    id: "40",
    symbol: "🪇",
    description: { es: { main: "Maracas" }, en: { main: "Maracas" } },
    tags: { es: ["Instrumentos"], en: ["Instruments"] },
  },
  {
    id: "41",
    symbol: "🏗",
    description: { es: { main: "Grua" }, en: { main: "Crane" } },
    tags: { es: ["Maquinas", "Tareas"], en: ["Machines", "Tasks"] },
  },
  {
    id: "42",
    symbol: "👷‍♂️",
    description: { es: { main: "Constructor" }, en: { main: "Builder" } },
    tags: {
      es: ["Profesiones", "Construcción"],
      en: ["Professions", "Construction"],
    },
  },
  {
    id: "43",
    symbol: "✈️",
    description: {
      es: { main: "Avión", secondary: ["Avion"] },
      en: { main: "Airplane" },
    },
    tags: { es: ["Vehículos"], en: ["Vehicles"] },
  },
  {
    id: "44",
    symbol: "🚁",
    description: {
      es: { main: "Helicóptero", secondary: ["Helicoptero"] },
      en: { main: "Helicopter" },
    },
    tags: { es: ["Vehículos"], en: ["Vehicles"] },
  },
  {
    id: "45",
    symbol: "🪁",
    description: { es: { main: "Barrilete" }, en: { main: "Kite" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "46",
    symbol: "🇦🇷",
    description: {
      es: { main: "Bandera Argentina" },
      en: { main: "Argentina Flag" },
    },
    tags: { es: ["Argentina", "Banderas"], en: ["Argentina", "Flags"] },
  },
  {
    id: "47",
    symbol: "🇲🇽",
    description: {
      es: { main: "Bandera Mexicana", secondary: ["Mexico"] },
      en: { main: "Mexico Flag", secondary: ["Mexico"] },
    },
    tags: { es: ["Banderas", "Mexico"], en: ["Flags", "Mexico"] },
  },
  {
    id: "48",
    symbol: "🇯🇵",
    description: {
      es: { main: "Bandera Japonesa", secondary: ["Japon"] },
      en: { main: "Japan Flag", secondary: ["Japon"] },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "49",
    symbol: "🇵🇪",
    description: { es: { main: "Bandera Peruana" }, en: { main: "Peru Flag" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "50",
    symbol: "🌞",
    description: { es: { main: "Sol" }, en: { main: "Sun" } },
    tags: {
      es: ["Clima", "Verano", "Espacio", "Universo"],
      en: ["Weather", "Summer", "Space", "Universe"],
    },
  },
  {
    id: "51",
    symbol: "🔟",
    description: {
      es: { main: "10", secondary: ["Diez"] },
      en: { main: "10", secondary: ["Ten"] },
    },
    tags: { es: ["Numeros", "Futbol"], en: ["Numbers", "Soccer"] },
  },
  {
    id: "52",
    symbol: "😎",
    description: {
      es: { main: "Cool", secondary: ["Lentes"] },
      en: { main: "Cool", secondary: ["Glasses"] },
    },
    tags: { es: ["Verano", "Fiesta"], en: ["Summer", "Party"] },
  },
  {
    id: "53",
    symbol: "🤟",
    description: { es: { main: "Mano Rockera" }, en: { main: "Rock Hand" } },
    tags: { es: ["Gestos"], en: ["Gestures"] },
  },
  {
    id: "54",
    symbol: "🇺🇸",
    description: { es: { main: "Bandera Yankee" }, en: { main: "USA Flag" } },
    tags: { es: ["Banderas", "EEUU"], en: ["Flags", "USA"] },
  },
  {
    id: "55",
    symbol: "🥷",
    description: { es: { main: "Ninja" }, en: { main: "Ninja" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "56",
    symbol: "🎧",
    description: { es: { main: "Auriculares" }, en: { main: "Headphones" } },
    tags: { es: ["Música", "Sonido"], en: ["Music", "Sound"] },
  },
  {
    id: "57",
    symbol: "🏊‍♂️",
    description: { es: { main: "Natación" }, en: { main: "Swimming" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "58",
    symbol: "👀",
    description: {
      es: { main: "Ojos", secondary: ["Curiosidad"] },
      en: { main: "Eyes", secondary: ["Curiosity"] },
    },
    tags: { es: ["Gestos"], en: ["Gestures"] },
  },
  {
    id: "59",
    symbol: "📦",
    description: {
      es: { main: "Pack", secondary: ["Stock", "Caja"] },
      en: { main: "Pack", secondary: ["Box", "Stock"] },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "60",
    symbol: "💼",
    description: {
      es: {
        main: "Maletín",
        secondary: ["Portafolio", "Portfolio", "Maletin"],
      },
      en: { main: "Maletin", secondary: ["Portafolio", "Portfolio"] },
    },
    tags: { es: ["Oficina"], en: ["Office"] },
  },
  {
    id: "61",
    symbol: "🎙",
    description: { es: { main: "Microfono" }, en: { main: "Microphone" } },
    tags: {
      es: ["Instrumentos", "Oficina", "Música"],
      en: ["Instruments", "Office", "Music"],
    },
  },
  {
    id: "62",
    symbol: "🕒",
    description: { es: { main: "Reloj Horario" }, en: { main: "Clock" } },
    tags: { es: ["Oficina", "Tareas"], en: ["Office", "Tasks"] },
  },
  {
    id: "63",
    symbol: "🔁",
    description: {
      es: { main: "Loop 1", secondary: ["Replay"] },
      en: { main: "Loop 1", secondary: ["Replay"] },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "64",
    symbol: "💰",
    description: { es: { main: "Dinero 1" }, en: { main: "Money" } },
    tags: { es: ["Finanzas"], en: ["Finance"] },
  },
  {
    id: "65",
    symbol: "💸",
    description: { es: { main: "Dinero 2" }, en: { main: "Money 2" } },
    tags: { es: ["Finanzas"], en: ["Finance"] },
  },
  {
    id: "66",
    symbol: "🗓",
    description: { es: { main: "Calendario" }, en: { main: "Calendar" } },
    tags: { es: ["Oficina", "Tareas"], en: ["Office", "Tasks"] },
  },
  {
    id: "67",
    symbol: "📅",
    description: { es: { main: "Calendario" }, en: { main: "Calendar" } },
    tags: { es: ["Oficina", "Tareas"], en: ["Office", "Tasks"] },
  },
  {
    id: "68",
    symbol: "📆",
    description: { es: { main: "Calendario" }, en: { main: "Calendar" } },
    tags: { es: ["Oficina", "Tareas"], en: ["Office", "Tasks"] },
  },
  {
    id: "69",
    symbol: "🖕",
    description: {
      es: { main: "Fuck you", secondary: ["Fakiu"] },
      en: { main: "Fuck you", secondary: ["Fakiu"] },
    },
    tags: { es: ["Gestos", "Mano"], en: ["Gestures", "Hand"] },
  },
  {
    id: "70",
    symbol: "🥹",
    description: { es: { main: "Lagrimeando" }, en: { main: "Crying" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "71",
    symbol: "😭",
    description: { es: { main: "Llorando" }, en: { main: "Crying" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "72",
    symbol: "💬",
    description: { es: { main: "Chat" }, en: { main: "Chat" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "73",
    symbol: "🦾",
    description: {
      es: {
        main: "Brazo Robotico",
        secondary: ["IA", "Inteligencia Artificial"],
      },
      en: { main: "Robot Arm", secondary: ["AI", "Intelligence Artificial"] },
    },
    tags: { es: ["Tecnologia"], en: ["Technology"] },
  },
  {
    id: "74",
    symbol: "📢",
    description: { es: { main: "Anuncio" }, en: { main: "Announcement" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "75",
    symbol: "📣",
    description: { es: { main: "Anuncio 2" }, en: { main: "Announcement 2" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "76",
    symbol: "🥊",
    description: {
      es: { main: "Guante de Boxeo" },
      en: { main: "Boxing Glove" },
    },
    tags: { es: ["Deportes"], en: ["Sports"] },
  },
  {
    id: "77",
    symbol: "☁",
    description: {
      es: { main: "Nubes", secondary: ["Nublado"] },
      en: { main: "Clouds", secondary: ["Cloudy"] },
    },
    tags: { es: ["Clima"], en: ["Weather"] },
  },
  {
    id: "78",
    symbol: "🌬️",
    description: {
      es: { main: "Soplar", secondary: ["Viento"] },
      en: { main: "Wind", secondary: ["Wind"] },
    },
    tags: { es: ["Clima"], en: ["Weather"] },
  },
  {
    id: "79",
    symbol: "⛈",
    description: { es: { main: "Tormenta" }, en: { main: "Storm" } },
    tags: { es: ["Clima"], en: ["Weather"] },
  },
  {
    id: "80",
    symbol: "🐾",
    description: { es: { main: "Patitas" }, en: { main: "Paws" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "81",
    symbol: "🦕",
    description: { es: { main: "Dinosaurio" }, en: { main: "Dinosaur" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "82",
    symbol: "🦖",
    description: { es: { main: "Tiranosaurio Rex" }, en: { main: "T-Rex" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "83",
    symbol: "🥳",
    description: {
      es: { main: "Festejando", secondary: ["Fiesta"] },
      en: { main: "Partying Face", secondary: ["Party"] },
    },
    tags: { es: ["Entretenimiento", "Fiesta"], en: ["Entertainment", "Party"] },
  },
  {
    id: "84",
    symbol: "😁",
    description: {
      es: { main: "Feliz", secondary: [":)", ":D", "Felicidad", "Contento"] },
      en: { main: "Happy", secondary: [":)", ":D", "Happiness", "Content"] },
    },
    tags: { es: ["Emociones"], en: ["Emotions"] },
  },
  {
    id: "85",
    symbol: "🥲",
    description: {
      es: {
        main: "Lagrimeando",
        secondary: ["Sonrisa con lágrima", "Sonrisa con lagrima"],
      },
      en: { main: "Smiling Face with Tears" },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "86",
    symbol: "😅",
    description: {
      es: { main: "Ups", secondary: ["Sudor"] },
      en: { main: "Ups", secondary: ["Sudor"] },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "87",
    symbol: "😟",
    description: {
      es: { main: "Preocupado", secondary: ["Preocupada"] },
      en: { main: "Worried" },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "88",
    symbol: "🌎",
    description: {
      es: { main: "Mundo 1", secondary: ["America"] },
      en: { main: "Mundo 1", secondary: ["America"] },
    },
    tags: {
      es: ["Espacio", "Universo", "Mundo"],
      en: ["Space", "Universe", "World"],
    },
  },
  {
    id: "89",
    symbol: "🌐",
    description: {
      es: { main: "Internet", secondary: ["World Web", "Red"] },
      en: { main: "Internet", secondary: ["World Web", "Network"] },
    },
    tags: {
      es: ["Informatica", "Tecnologia", "Mundo"],
      en: ["Computing", "Technology", "World"],
    },
  },
  {
    id: "90",
    symbol: "🤐",
    description: {
      es: { main: "Mudo", secondary: ["Silenciado", "Sin boca"] },
      en: { main: "Mute", secondary: ["Silenced", "No mouth"] },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "91",
    symbol: "🫢",
    description: {
      es: { main: "Oops", secondary: ["Mano en boca"] },
      en: { main: "Oops", secondary: ["Mano en boca"] },
    },
    tags: { es: ["Cara"], en: ["Face"] },
  },
  {
    id: "92",
    symbol: "🫤",
    description: {
      es: { main: "Meh", secondary: ["Mueca"] },
      en: { main: "Meh", secondary: ["Mueca"] },
    },
    tags: { es: ["Cara"], en: ["Face"] },
  },
  {
    id: "93",
    symbol: "🫨",
    description: {
      es: {
        main: "Sorprendido",
        secondary: ["Sorprendida", "Cara movida", "Movimiento"],
      },
      en: { main: "Face Shaking", secondary: ["Shaking"] },
    },
    tags: { es: ["Cara"], en: ["Face"] },
  },
  {
    id: "94",
    symbol: "😶",
    description: {
      es: { main: "Sin boca", secondary: ["Mudo"] },
      en: { main: "Face without mouth", secondary: ["Mute"] },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "95",
    symbol: "⌛",
    description: {
      es: { main: "Reloj de Arena" },
      en: { main: "Reloj de Arena" },
    },
    tags: { es: ["Oficina", "Tareas"], en: ["Office", "Tasks"] },
  },
  {
    id: "96",
    symbol: "⏳",
    description: {
      es: { main: "Reloj de Arena" },
      en: { main: "Reloj de Arena" },
    },
    tags: { es: ["Oficina", "Tareas"], en: ["Office", "Tasks"] },
  },
  {
    id: "97",
    symbol: "🧬",
    description: { es: { main: "ADN" }, en: { main: "ADN" } },
    tags: { es: ["Salud", "Animales"], en: ["Health", "Animals"] },
  },
  {
    id: "98",
    symbol: "🚲",
    description: { es: { main: "Bicicleta" }, en: { main: "Bicycle" } },
    tags: { es: ["Deportes", "Vehículos"], en: ["Sports", "Vehicles"] },
  },
  {
    id: "99",
    symbol: "🚴‍♂️",
    description: {
      es: { main: "Bicicleta", secondary: ["Ciclista", "Ciclismo"] },
      en: { main: "Bicycle", secondary: ["Biker"] },
    },
    tags: { es: ["Deportes", "Vehículos"], en: ["Sports", "Vehicles"] },
  },
  {
    id: "100",
    symbol: "👾",
    description: {
      es: { main: "Invasor", secondary: ["Virus", "Monstruo", "Arcade"] },
      en: { main: "Invasor", secondary: ["Monstruo", "Arcade", "Virus"] },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "101",
    symbol: "⏺",
    description: { es: { main: "Grabar" }, en: { main: "Record" } },
    tags: { es: ["Música", "Sonido"], en: ["Music", "Sound"] },
  },
  {
    id: "102",
    symbol: "🥶",
    description: {
      es: { main: "Frio", secondary: ["Congelado"] },
      en: { main: "Cold", secondary: ["Frozen"] },
    },
    tags: { es: ["Clima", "Invierno"], en: ["Weather", "Winter"] },
  },
  {
    id: "103",
    symbol: "🥵",
    description: {
      es: { main: "Calor", secondary: ["Hot"] },
      en: { main: "Hot", secondary: ["Hot"] },
    },
    tags: { es: ["Clima", "Verano"], en: ["Weather", "Summer"] },
  },
  {
    id: "104",
    symbol: "🌡️",
    description: {
      es: { main: "Termometro", secondary: ["Temperatura"] },
      en: { main: "Temperature", secondary: ["Temperature"] },
    },
    tags: { es: ["Clima", "Salud"], en: ["Weather", "Health"] },
  },
  {
    id: "105",
    symbol: "🎱",
    description: {
      es: { main: "Pool", secondary: ["Bola 8"] },
      en: { main: "Pool", secondary: ["Bola 8"] },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "106",
    symbol: "🎲",
    description: { es: { main: "Dado" }, en: { main: "Dice" } },
    tags: { es: ["Juegos"], en: ["Games"] },
  },
  {
    id: "107",
    symbol: "🎰",
    description: {
      es: {
        main: "Casino",
        secondary: ["777", "Sorteo", "Jackpot", "Suerte", "Premio"],
      },
      en: {
        main: "Casino",
        secondary: ["Premio", "Luck", "Jackpot", "777", "Sorteo"],
      },
    },
    tags: { es: ["Juegos", "Casino"], en: ["Games", "Casino"] },
  },
  {
    id: "108",
    symbol: "🧮",
    description: {
      es: { main: "Poker ♠♣♥♦", secondary: ["Abaco"] },
      en: { main: "Poker ♠♣♥♦", secondary: ["Abaco"] },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "109",
    symbol: "🎭",
    description: {
      es: { main: "Teatro", secondary: ["Mascaras"] },
      en: { main: "Performing Arts", secondary: ["Masks"] },
    },
    tags: {
      es: ["Entretenimiento", "Teatro"],
      en: ["Entertainment", "Theater"],
    },
  },
  {
    id: "110",
    symbol: "🎪",
    description: { es: { main: "Carpa de Circo" }, en: { main: "Circus" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "111",
    symbol: "🤹",
    description: {
      es: { main: "Malabares", secondary: ["Malabarista", "Truco"] },
      en: { main: "Juggling", secondary: ["Trick", "Juggler"] },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "112",
    symbol: "🪩",
    description: {
      es: { main: "Bola de Boliche", secondary: ["Disco"] },
      en: { main: "Bola de Boliche", secondary: ["Disco"] },
    },
    tags: { es: ["Random", "Fiesta"], en: ["Random", "Party"] },
  },
  {
    id: "113",
    symbol: "🎳",
    description: {
      es: { main: "Bolos", secondary: ["Bowling"] },
      en: { main: "Bowling", secondary: ["Bolos"] },
    },
    tags: { es: ["Deportes"], en: ["Sports"] },
  },
  {
    id: "114",
    symbol: "🎬",
    description: {
      es: {
        main: "Toma X",
        secondary: ["Luz, Camara, Accion", "Director", "Cine"],
      },
      en: {
        main: "Movie Camera",
        secondary: ["Light, Camera, Action", "Director", "Cinema"],
      },
    },
    tags: { es: ["Entretenimiento", "Cine"], en: ["Entertainment", "Cinema"] },
  },
  {
    id: "115",
    symbol: "🏐",
    description: {
      es: { main: "Pelota de Voley", secondary: ["Voley"] },
      en: { main: "Volleyball", secondary: ["Voley"] },
    },
    tags: { es: ["Deportes"], en: ["Sports"] },
  },
  {
    id: "116",
    symbol: "🤾‍♂️",
    description: { es: { main: "Handball" }, en: { main: "Handball" } },
    tags: { es: ["Deportes"], en: ["Sports"] },
  },
  {
    id: "117",
    symbol: "🏄",
    description: {
      es: { main: "Surfista", secondary: ["Ola"] },
      en: { main: "Surfer", secondary: ["Wave"] },
    },
    tags: { es: ["Deportes", "Verano"], en: ["Sports", "Summer"] },
  },
  {
    id: "118",
    symbol: "🤽‍♂️",
    description: { es: { main: "Waterpolo" }, en: { main: "Waterpolo" } },
    tags: { es: ["Deportes"], en: ["Sports"] },
  },
  {
    id: "119",
    symbol: "🚣",
    description: {
      es: { main: "Remar", secondary: ["Remo", "Remando"] },
      en: { main: "Rowing", secondary: ["Rowing", "Rowboat"] },
    },
    tags: { es: ["Deportes"], en: ["Sports"] },
  },
  {
    id: "120",
    symbol: "🥋",
    description: {
      es: { main: "Karate", secondary: ["Cinturon Negro"] },
      en: { main: "Karate", secondary: ["Cinturon Negro"] },
    },
    tags: { es: ["Deportes"], en: ["Sports"] },
  },
  {
    id: "121",
    symbol: "🧘‍♂️",
    description: {
      es: {
        main: "Yoga",
        secondary: [
          "Respirar",
          "Mantra",
          "Meditar",
          "Meditacion",
          "Respiracion",
        ],
      },
      en: {
        main: "Yoga",
        secondary: [
          "Meditar",
          "Mantra",
          "Respiracion",
          "Respirar",
          "Meditacion",
        ],
      },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "122",
    symbol: "🎟",
    description: {
      es: { main: "Ticket", secondary: ["Cupon"] },
      en: { main: "Ticket", secondary: ["Cupon"] },
    },
    tags: { es: ["Entretenimiento"], en: ["Entertainment"] },
  },
  {
    id: "123",
    symbol: "🏳",
    description: { es: { main: "Bandera Blanca" }, en: { main: "White Flag" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "124",
    symbol: "🇧🇷",
    description: {
      es: { main: "Bandera Brasilera", secondary: ["Brasileña"] },
      en: { main: "Brazilian Flag" },
    },
    tags: { es: ["Banderas"], en: ["Flags"] },
  },
  {
    id: "125",
    symbol: "🇨🇱",
    description: {
      es: { main: "Bandera Chilena" },
      en: { main: "Chilean Flag" },
    },
    tags: { es: ["Banderas"], en: ["Flags"] },
  },
  {
    id: "126",
    symbol: "🇨🇦",
    description: {
      es: { main: "Bandera Canadiense", secondary: ["Canadá"] },
      en: { main: "Canadian Flag" },
    },
    tags: { es: ["Banderas"], en: ["Flags"] },
  },
  {
    id: "127",
    symbol: "🇻🇦",
    description: {
      es: { main: "Bandera del Vaticano" },
      en: { main: "Vatican Flag" },
    },
    tags: { es: ["Banderas"], en: ["Flags"] },
  },
  {
    id: "128",
    symbol: "🇺🇾",
    description: {
      es: { main: "Bandera Uruguaya" },
      en: { main: "Uruguayan Flag" },
    },
    tags: { es: ["Banderas"], en: ["Flags"] },
  },
  {
    id: "129",
    symbol: "🇩🇪",
    description: {
      es: { main: "Bandera Alemana", secondary: ["Alemania"] },
      en: { main: "German Flag" },
    },
    tags: { es: ["Banderas"], en: ["Flags"] },
  },
  {
    id: "130",
    symbol: "🇪🇬",
    description: {
      es: { main: "Bandera Egipta", secondary: ["Egipto"] },
      en: { main: "Egyptian Flag" },
    },
    tags: { es: ["Banderas"], en: ["Flags"] },
  },
  {
    id: "131",
    symbol: "🚩",
    description: { es: { main: "Bandera Roja" }, en: { main: "Red Flag" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "132",
    symbol: "🏴‍☠️",
    description: {
      es: { main: "Bandera Pirata" },
      en: { main: "Pirate Flag" },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "133",
    symbol: "🤷‍♂️",
    description: {
      es: { main: "No sé", secondary: ["Ni idea"] },
      en: { main: "No idea", secondary: ["No idea"] },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "134",
    symbol: "🙅‍♂️",
    description: { es: { main: "X" }, en: { main: "X" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "135",
    symbol: "❌",
    description: {
      es: { main: "Cruz", secondary: ["Error"] },
      en: { main: "Cross", secondary: ["Error"] },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "136",
    symbol: "🕸",
    description: {
      es: { main: "Red", secondary: ["Tela de Arana"] },
      en: { main: "Red", secondary: ["Tela de Spider"] },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "137",
    symbol: "⚽",
    description: {
      es: { main: "Pelota de Futbol", secondary: ["Gol"] },
      en: { main: "Soccer Ball", secondary: ["Goal"] },
    },
    tags: {
      es: ["Deportes", "Pelotas", "Futbol"],
      en: ["Sports", "Balls", "Soccer"],
    },
  },
  {
    id: "1018",
    symbol: "🥅",
    description: {
      es: { main: "Arco de Futbol", secondary: ["Arco", "Cancha", "Gol"] },
      en: { main: "Soccer Goal", secondary: ["Goal", "Net"] },
    },
    tags: { es: ["Deportes", "Futbol"], en: ["Sports", "Soccer"] },
  },
  {
    id: "138",
    symbol: "📸",
    description: {
      es: { main: "Flash de Cámara", secondary: ["foto"] },
      en: { main: "Flash of Camera", secondary: ["photo"] },
    },
    tags: { es: ["Tecnologia", "Objetos"], en: ["Technology", "Objects"] },
  },
  {
    id: "139",
    symbol: "📝",
    description: {
      es: {
        main: "Papel y Lápiz",
        secondary: [
          "Papel y Lapiz",
          "Bloc de Notas",
          "Escribir",
          "Espiral",
          "Block de Notas",
          "Libreta",
        ],
      },
      en: { main: "Paper and Pencil" },
    },
    tags: { es: ["Oficina", "Tareas"], en: ["Office", "Tasks"] },
  },
  {
    id: "140",
    symbol: "🪹",
    description: { es: { main: "Nido Vacio" }, en: { main: "Empty Nest" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "141",
    symbol: "🪺",
    description: { es: { main: "Nido Lleno" }, en: { main: "Full Nest" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "142",
    symbol: "✍",
    description: {
      es: { main: "Mano Escribiendo" },
      en: { main: "Writing Hand" },
    },
    tags: { es: ["Gestos"], en: ["Gestures"] },
  },
  {
    id: "143",
    symbol: "🪣",
    description: { es: { main: "Balde" }, en: { main: "Bucket" } },
    tags: { es: ["Casa"], en: ["Home"] },
  },
  {
    id: "144",
    symbol: "🛣",
    description: {
      es: { main: "Ruta", secondary: ["Calle"] },
      en: { main: "Road", secondary: ["Street"] },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "145",
    symbol: "🚨",
    description: { es: { main: "Sirena" }, en: { main: "Siren" } },
    tags: { es: ["Emergencias", "Seguridad"], en: ["Emergency", "Security"] },
  },
  {
    id: "146",
    symbol: "⏰",
    description: { es: { main: "Alarma" }, en: { main: "Alarm" } },
    tags: { es: ["Tareas"], en: ["Tasks"] },
  },
  {
    id: "147",
    symbol: "▶",
    description: {
      es: { main: "Play", secondary: ["Start", "Empezar"] },
      en: { main: "Play", secondary: ["Empezar", "Start"] },
    },
    tags: {
      es: ["Música", "Sonido", "Fiesta"],
      en: ["Music", "Sound", "Party"],
    },
  },
  {
    id: "148",
    symbol: "⏹",
    description: { es: { main: "Parar" }, en: { main: "Stop" } },
    tags: { es: ["Música", "Sonido"], en: ["Music", "Sound"] },
  },
  {
    id: "149",
    symbol: "🛡",
    description: { es: { main: "Escudo" }, en: { main: "Shield" } },
    tags: {
      es: ["Armamento", "Guerra", "Defensa", "Seguridad"],
      en: ["Weapons", "War", "Defense", "Security"],
    },
  },
  {
    id: "150",
    symbol: "⚰",
    description: { es: { main: "Ataud" }, en: { main: "Coffin" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "151",
    symbol: "🦷",
    description: { es: { main: "Diente" }, en: { main: "Tooth" } },
    tags: { es: ["Gestos", "Salud"], en: ["Gestures", "Health"] },
  },
  {
    id: "152",
    symbol: "🧩",
    description: { es: { main: "Rompecabezas" }, en: { main: "Jigsaw" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "153",
    symbol: "🎷",
    description: { es: { main: "Saxo" }, en: { main: "Saxophone" } },
    tags: { es: ["Instrumentos"], en: ["Instruments"] },
  },
  {
    id: "154",
    symbol: "🎺",
    description: { es: { main: "Trompeta" }, en: { main: "Trumpet" } },
    tags: { es: ["Instrumentos"], en: ["Instruments"] },
  },
  {
    id: "155",
    symbol: "🎸",
    description: { es: { main: "Guitarra" }, en: { main: "Guitar" } },
    tags: {
      es: ["Instrumentos", "Entretenimiento"],
      en: ["Instruments", "Entertainment"],
    },
  },
  {
    id: "156",
    symbol: "🎹",
    description: { es: { main: "Piano" }, en: { main: "Piano" } },
    tags: {
      es: ["Instrumentos", "Entretenimiento"],
      en: ["Instruments", "Entertainment"],
    },
  },
  {
    id: "157",
    symbol: "🪗",
    description: {
      es: { main: "Acordeón", secondary: ["Tango"] },
      en: { main: "Accordion", secondary: ["Tango"] },
    },
    tags: {
      es: ["Instrumentos", "Argentina"],
      en: ["Instruments", "Argentina"],
    },
  },
  {
    id: "158",
    symbol: "🔎",
    description: {
      es: { main: "Lupa", secondary: ["Detective", "Buscar"] },
      en: { main: "Magnifying Glass", secondary: ["Detective", "Search"] },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "159",
    symbol: "🪦",
    description: {
      es: { main: "RIP", secondary: ["Tumba"] },
      en: { main: "RIP", secondary: ["Tombstone"] },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "160",
    symbol: "💎",
    description: { es: { main: "Diamante" }, en: { main: "Diamond" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "161",
    symbol: "✂",
    description: { es: { main: "Tijera" }, en: { main: "Scissors" } },
    tags: { es: ["Oficina"], en: ["Office"] },
  },
  {
    id: "162",
    symbol: "♻",
    description: { es: { main: "Reciclaje" }, en: { main: "Recycling" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "163",
    symbol: "🔪",
    description: {
      es: { main: "Cuchillo", secondary: ["Cuchillo"] },
      en: { main: "Knife" },
    },
    tags: {
      es: ["Armamento", "Guerra", "Cocina"],
      en: ["Weapons", "War", "Kitchen"],
    },
  },
  {
    id: "164",
    symbol: "💣",
    description: { es: { main: "Bomba" }, en: { main: "Bomb" } },
    tags: { es: ["Armamento", "Guerra"], en: ["Weapons", "War"] },
  },
  {
    id: "165",
    symbol: "🧨",
    description: {
      es: { main: "Dinamita", secondary: ["Bomba", "Explosivo"] },
      en: { main: "Dynamite", secondary: ["Explosive", "Bomb"] },
    },
    tags: { es: ["Armamento", "Guerra"], en: ["Weapons", "War"] },
  },
  {
    id: "166",
    symbol: "💥",
    description: {
      es: { main: "Explosion Boom", secondary: ["Bomba"] },
      en: { main: "Explosion", secondary: ["Bomb"] },
    },
    tags: { es: ["Armamento", "Guerra"], en: ["Weapons", "War"] },
  },
  {
    id: "167",
    symbol: "⏱",
    description: { es: { main: "Cronometro" }, en: { main: "Stopwatch" } },
    tags: { es: ["Deportes", "Tareas"], en: ["Sports", "Tasks"] },
  },
  {
    id: "168",
    symbol: "🕯",
    description: { es: { main: "Vela" }, en: { main: "Candle" } },
    tags: { es: ["Casa"], en: ["Home"] },
  },
  {
    id: "169",
    symbol: "💳",
    description: {
      es: { main: "Tarjeta", secondary: ["Dinero"] },
      en: { main: "Credit Card" },
    },
    tags: { es: ["Finanzas"], en: ["Finance"] },
  },
  {
    id: "170",
    symbol: "🪙",
    description: {
      es: { main: "Moneda", secondary: ["Dinero"] },
      en: { main: "Coin" },
    },
    tags: { es: ["Finanzas"], en: ["Finance"] },
  },
  {
    id: "171",
    symbol: "⚙",
    description: {
      es: { main: "Engranaje", secondary: ["Tuerca"] },
      en: { main: "Gear" },
    },
    tags: { es: ["Tareas"], en: ["Tasks"] },
  },
  {
    id: "172",
    symbol: "😡",
    description: { es: { main: "Enojado 2" }, en: { main: "Pouting Face" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "173",
    symbol: "🤬",
    description: {
      es: { main: "Enojado 4" },
      en: { main: "Face with Symbols on Mouth" },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "174",
    symbol: "⏩",
    description: { es: { main: "Adelantar x2" }, en: { main: "Fast Forward" } },
    tags: { es: ["Música", "Sonido"], en: ["Music", "Sound"] },
  },
  {
    id: "175",
    symbol: "🧭",
    description: {
      es: { main: "Brújula", secondary: ["Brujula"] },
      en: { main: "Compass" },
    },
    tags: { es: ["Random", "Mundo"], en: ["Random", "World"] },
  },
  {
    id: "176",
    symbol: "🔑",
    description: { es: { main: "Llave" }, en: { main: "Key" } },
    tags: { es: ["Casa", "Seguridad"], en: ["Home", "Security"] },
  },
  {
    id: "177",
    symbol: "🔓",
    description: { es: { main: "Candado Abierto" }, en: { main: "Unlocked" } },
    tags: { es: ["Casa", "Seguridad"], en: ["Home", "Security"] },
  },
  {
    id: "178",
    symbol: "🔒",
    description: { es: { main: "Candado Cerrado" }, en: { main: "Locked" } },
    tags: { es: ["Casa", "Seguridad"], en: ["Home", "Security"] },
  },
  {
    id: "179",
    symbol: "💩",
    description: { es: { main: "Caca" }, en: { main: "Poop" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "180",
    symbol: "✊",
    description: {
      es: { main: "Puño en alto", secondary: ["Puno en alto", "Punio arriba"] },
      en: { main: "Raised Fist" },
    },
    tags: { es: ["Gestos"], en: ["Gestures"] },
  },
  {
    id: "1019",
    symbol: "👊",
    description: {
      es: { main: "Puño de frente", secondary: ["Puño", "Puno", "Piña"] },
      en: { main: "Oncoming Fist", secondary: ["Fist", "Punch"] },
    },
    tags: { es: ["Gestos"], en: ["Gestures"] },
  },
  {
    id: "181",
    symbol: "🍕",
    description: { es: { main: "Pizza" }, en: { main: "Pizza" } },
    tags: { es: ["Comidas"], en: ["Food"] },
  },
  {
    id: "182",
    symbol: "🍐",
    description: { es: { main: "Pera" }, en: { main: "Pear" } },
    tags: { es: ["Frutas", "Comidas"], en: ["Fruits", "Food"] },
  },
  {
    id: "183",
    symbol: "🍌",
    description: { es: { main: "Banana" }, en: { main: "Banana" } },
    tags: { es: ["Frutas", "Comidas"], en: ["Fruits", "Food"] },
  },
  {
    id: "184",
    symbol: "🤖",
    description: { es: { main: "Robot" }, en: { main: "Robot" } },
    tags: { es: ["Tecnologia"], en: ["Technology"] },
  },
  {
    id: "185",
    symbol: "👽",
    description: { es: { main: "Alien" }, en: { main: "Alien" } },
    tags: { es: ["Espacio", "Universo"], en: ["Space", "Universe"] },
  },
  {
    id: "186",
    symbol: "🦴",
    description: { es: { main: "Hueso" }, en: { main: "Bone" } },
    tags: { es: ["Salud", "Animales"], en: ["Health", "Animals"] },
  },
  {
    id: "187",
    symbol: "🦠",
    description: { es: { main: "Virus" }, en: { main: "Virus" } },
    tags: { es: ["Salud"], en: ["Health"] },
  },
  {
    id: "188",
    symbol: "🍒",
    description: { es: { main: "Cerezas" }, en: { main: "Cherries" } },
    tags: { es: ["Frutas", "Comidas"], en: ["Fruits", "Food"] },
  },
  {
    id: "189",
    symbol: "🥝",
    description: { es: { main: "Kiwi" }, en: { main: "Kiwi" } },
    tags: { es: ["Frutas", "Comidas"], en: ["Fruits", "Food"] },
  },
  {
    id: "190",
    symbol: "🍇",
    description: {
      es: { main: "Uvas", secondary: ["Dios"] },
      en: { main: "Grapes" },
    },
    tags: { es: ["Frutas", "Comidas"], en: ["Fruits", "Food"] },
  },
  {
    id: "191",
    symbol: "🫐",
    description: {
      es: { main: "Arándanos", secondary: ["Arandanos"] },
      en: { main: "Blueberries" },
    },
    tags: { es: ["Frutas", "Comidas"], en: ["Fruits", "Food"] },
  },
  {
    id: "192",
    symbol: "🧀",
    description: { es: { main: "Queso" }, en: { main: "Cheese" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "193",
    symbol: "🍑",
    description: { es: { main: "Durazno" }, en: { main: "Peach" } },
    tags: {
      es: ["Frutas", "Comidas", "Mujeres"],
      en: ["Fruits", "Food", "Women"],
    },
  },
  {
    id: "194",
    symbol: "🍵",
    description: { es: { main: "Te" }, en: { main: "Tea" } },
    tags: { es: ["Bebidas"], en: ["Drinks"] },
  },
  {
    id: "195",
    symbol: "🍬",
    description: { es: { main: "Caramelo" }, en: { main: "Candy" } },
    tags: { es: ["Dulces"], en: ["Sweets"] },
  },
  {
    id: "196",
    symbol: "🍫",
    description: { es: { main: "Chocolate" }, en: { main: "Chocolate" } },
    tags: { es: ["Dulces"], en: ["Sweets"] },
  },
  {
    id: "197",
    symbol: "🧊",
    description: { es: { main: "Cubo de Hielo" }, en: { main: "Ice Cube" } },
    tags: { es: ["Invierno"], en: ["Winter"] },
  },
  {
    id: "198",
    symbol: "🍾",
    description: { es: { main: "Champagne" }, en: { main: "Champagne" } },
    tags: { es: ["Bebidas", "Fiesta"], en: ["Drinks", "Party"] },
  },
  {
    id: "199",
    symbol: "☕",
    description: { es: { main: "Cafe" }, en: { main: "Coffee" } },
    tags: { es: ["Bebidas"], en: ["Drinks"] },
  },
  {
    id: "200",
    symbol: "😜",
    description: {
      es: { main: "Loco", secondary: ["Loko"] },
      en: { main: "Crazy", secondary: ["Madness"] },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "201",
    symbol: "😛",
    description: {
      es: { main: ":b :P", secondary: ["Sacando la lengua"] },
      en: { main: ":b :P", secondary: ["Tongue out"] },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "202",
    symbol: "👅",
    description: { es: { main: "Lengua" }, en: { main: "Tongue" } },
    tags: { es: ["Gestos"], en: ["Gestures"] },
  },
  {
    id: "203",
    symbol: "🍖",
    description: { es: { main: "Carne" }, en: { main: "Meat" } },
    tags: { es: ["Comidas"], en: ["Food"] },
  },
  {
    id: "204",
    symbol: "🍗",
    description: { es: { main: "Pollo" }, en: { main: "Chicken Leg" } },
    tags: { es: ["Comidas"], en: ["Food"] },
  },
  {
    id: "205",
    symbol: "🚫",
    description: { es: { main: "Prohibido" }, en: { main: "Prohibited" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "206",
    symbol: "⛔",
    description: { es: { main: "Pare" }, en: { main: "Stop" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "207",
    symbol: "🍚",
    description: { es: { main: "Arroz" }, en: { main: "Rice" } },
    tags: { es: ["Comidas"], en: ["Food"] },
  },
  {
    id: "208",
    symbol: "🍜",
    description: { es: { main: "Ramen" }, en: { main: "Ramen" } },
    tags: { es: ["Comidas"], en: ["Food"] },
  },
  {
    id: "209",
    symbol: "🍼",
    description: { es: { main: "Mamadera" }, en: { main: "Baby Bottle" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "210",
    symbol: "🥟",
    description: {
      es: { main: "Empanada", secondary: ["Argentina"] },
      en: { main: "Empanada" },
    },
    tags: { es: ["Argentina"], en: ["Argentina"] },
  },
  {
    id: "211",
    symbol: "🪑",
    description: { es: { main: "Silla" }, en: { main: "Chair" } },
    tags: { es: ["Oficina", "Casa"], en: ["Office", "Home"] },
  },
  {
    id: "212",
    symbol: "🪵",
    description: {
      es: { main: "Tronco", secondary: ["Madera"] },
      en: { main: "Trunk", secondary: ["Wood"] },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "213",
    symbol: "🗂",
    description: { es: { main: "Carpeta" }, en: { main: "Card Index" } },
    tags: { es: ["Oficina", "Tareas"], en: ["Office", "Tasks"] },
  },
  {
    id: "214",
    symbol: "📜",
    description: {
      es: { main: "Pergamino", secondary: ["Manuscrito", "Rollo"] },
      en: { main: "Scroll", secondary: ["Manuscript"] },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "215",
    symbol: "🧡",
    description: {
      es: { main: "Corazón Naranja" },
      en: { main: "Orange Heart" },
    },
    tags: { es: ["Amor", "Gestos"], en: ["Love", "Gestures"] },
  },
  {
    id: "216",
    symbol: "💚",
    description: { es: { main: "Corazón Verde" }, en: { main: "Green Heart" } },
    tags: { es: ["Amor", "Gestos"], en: ["Love", "Gestures"] },
  },
  {
    id: "217",
    symbol: "💜",
    description: {
      es: { main: "Corazón Morado" },
      en: { main: "Purple Heart" },
    },
    tags: { es: ["Amor", "Gestos"], en: ["Love", "Gestures"] },
  },
  {
    id: "218",
    symbol: "🖤",
    description: { es: { main: "Corazón Negro" }, en: { main: "Black Heart" } },
    tags: { es: ["Amor", "Gestos"], en: ["Love", "Gestures"] },
  },
  {
    id: "219",
    symbol: "❤️‍🔥",
    description: {
      es: { main: "Pasión", secondary: ["Pasion", "En Llamas"] },
      en: { main: "Heart on Fire", secondary: ["Passion", "In Flames"] },
    },
    tags: { es: ["Amor", "Fiesta"], en: ["Love", "Party"] },
  },
  {
    id: "220",
    symbol: "❤️‍🩹",
    description: {
      es: { main: "Corazón Sanado", secondary: ["Corazon Sanado"] },
      en: { main: "Mending Heart" },
    },
    tags: {
      es: ["Amor", "Gestos", "Salud"],
      en: ["Love", "Gestures", "Health"],
    },
  },
  {
    id: "221",
    symbol: "🕳",
    description: { es: { main: "Hueco" }, en: { main: "Hole" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "222",
    symbol: "🤦‍♂️",
    description: { es: { main: "Palmada en la" }, en: { main: "Facepalm" } },
    tags: { es: ["Cara"], en: ["Face"] },
  },
  {
    id: "223",
    symbol: "📻",
    description: { es: { main: "Radio" }, en: { main: "Radio" } },
    tags: { es: ["Entretenimiento"], en: ["Entertainment"] },
  },
  {
    id: "224",
    symbol: "📺",
    description: {
      es: { main: "Televisión", secondary: ["TV", "Television"] },
      en: { main: "Television", secondary: ["TV"] },
    },
    tags: { es: ["Entretenimiento"], en: ["Entertainment"] },
  },
  {
    id: "225",
    symbol: "💄",
    description: {
      es: { main: "Labial", secondary: ["Maquillaje", "Pintura"] },
      en: { main: "Lipstick", secondary: ["Makeup"] },
    },
    tags: { es: ["Mujeres"], en: ["Women"] },
  },
  {
    id: "226",
    symbol: "👩",
    description: { es: { main: "Mujer" }, en: { main: "Woman" } },
    tags: { es: ["Mujeres"], en: ["Women"] },
  },
  {
    id: "227",
    symbol: "👧",
    description: {
      es: { main: "Niña", secondary: ["Nina"] },
      en: { main: "Girl" },
    },
    tags: { es: ["Mujeres", "Familia"], en: ["Women", "Family"] },
  },
  {
    id: "228",
    symbol: "👱‍♀️",
    description: {
      es: { main: "Mujer Rubia", secondary: ["Rubia"] },
      en: { main: "Blonde Woman" },
    },
    tags: { es: ["Mujeres"], en: ["Women"] },
  },
  {
    id: "229",
    symbol: "👩‍🦰",
    description: {
      es: { main: "Mujer Pelirroja", secondary: ["Colorada"] },
      en: { main: "Redhead Woman" },
    },
    tags: { es: ["Mujeres"], en: ["Women"] },
  },
  {
    id: "230",
    symbol: "👰‍♀️",
    description: {
      es: { main: "Novia", secondary: ["Casamiento", "Boda"] },
      en: { main: "Bride", secondary: ["Wedding"] },
    },
    tags: { es: ["Mujeres", "Amor"], en: ["Women", "Love"] },
  },
  {
    id: "231",
    symbol: "🤰",
    description: { es: { main: "Embarazada" }, en: { main: "Pregnant" } },
    tags: { es: ["Mujeres", "Familia"], en: ["Women", "Family"] },
  },
  {
    id: "232",
    symbol: "🤱",
    description: {
      es: { main: "Amamantando", secondary: ["Bebe"] },
      en: { main: "Breastfeeding", secondary: ["Baby"] },
    },
    tags: { es: ["Mujeres", "Familia"], en: ["Women", "Family"] },
  },
  {
    id: "233",
    symbol: "💃",
    description: {
      es: { main: "Bailarina", secondary: ["Baile", "Danza"] },
      en: { main: "Dancer", secondary: ["Dance"] },
    },
    tags: {
      es: ["Mujeres", "Entretenimiento", "Fiesta"],
      en: ["Women", "Entertainment", "Party"],
    },
  },
  {
    id: "234",
    symbol: "👗",
    description: { es: { main: "Vestido" }, en: { main: "Dress" } },
    tags: { es: ["Mujeres", "Ropa"], en: ["Women", "Clothing"] },
  },
  {
    id: "235",
    symbol: "👙",
    description: {
      es: { main: "Bikini", secondary: ["Malla"] },
      en: { main: "Bikini" },
    },
    tags: {
      es: ["Mujeres", "Verano", "Ropa"],
      en: ["Women", "Summer", "Clothing"],
    },
  },
  {
    id: "236",
    symbol: "👠",
    description: {
      es: { main: "Tacones", secondary: ["Zapatos"] },
      en: { main: "High Heels", secondary: ["Shoes"] },
    },
    tags: { es: ["Mujeres", "Ropa"], en: ["Women", "Clothing"] },
  },
  {
    id: "237",
    symbol: "👜",
    description: {
      es: { main: "Cartera", secondary: ["Bolso"] },
      en: { main: "Handbag", secondary: ["Bag"] },
    },
    tags: { es: ["Mujeres", "Accesorios"], en: ["Women", "Accessories"] },
  },
  {
    id: "238",
    symbol: "👒",
    description: {
      es: { main: "Sombrero de Mujer", secondary: ["Sombrero"] },
      en: { main: "Woman's Hat", secondary: ["Hat"] },
    },
    tags: {
      es: ["Mujeres", "Accesorios", "Verano", "Ropa"],
      en: ["Women", "Accessories", "Summer", "Clothing"],
    },
  },
  {
    id: "239",
    symbol: "💋",
    description: { es: { main: "Labios" }, en: { main: "Lips" } },
    tags: { es: ["Amor", "Gestos"], en: ["Love", "Gestures"] },
  },
  {
    id: "240",
    symbol: "😘",
    description: { es: { main: "Beso" }, en: { main: "Kiss" } },
    tags: { es: ["Amor"], en: ["Love"] },
  },
  {
    id: "241",
    symbol: "🙃",
    description: {
      es: { main: "Al revés", secondary: ["Dado vuelta", "Al reves"] },
      en: { main: "Upside Down Face", secondary: ["Upside down"] },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "242",
    symbol: "🎀",
    description: {
      es: { main: "Moño", secondary: ["Mono", "Monio"] },
      en: { main: "Bow" },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "243",
    symbol: "🩻",
    description: {
      es: { main: "Radiografía", secondary: ["Radiografia"] },
      en: { main: "Radiografia" },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "244",
    symbol: "🏍",
    description: { es: { main: "Moto" }, en: { main: "Motorcycle" } },
    tags: { es: ["Vehículos"], en: ["Vehicles"] },
  },
  {
    id: "245",
    symbol: "🍽",
    description: { es: { main: "Plato" }, en: { main: "Plate" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "246",
    symbol: "🍴",
    description: { es: { main: "Tenedor" }, en: { main: "Fork" } },
    tags: { es: ["Random", "Cocina"], en: ["Random", "Kitchen"] },
  },
  {
    id: "247",
    symbol: "🥄",
    description: { es: { main: "Cuchara" }, en: { main: "Spoon" } },
    tags: { es: ["Random", "Cocina"], en: ["Random", "Kitchen"] },
  },
  {
    id: "248",
    symbol: "🧑‍🍳",
    description: {
      es: { main: "Cocinero", secondary: ["Comidas", "Chef", "Cocina"] },
      en: { main: "Chef", secondary: ["Kitchen", "Food", "Chef"] },
    },
    tags: {
      es: ["Profesiones", "Comidas", "Cocina"],
      en: ["Professions", "Food", "Kitchen"],
    },
  },
  {
    id: "249",
    symbol: "🧑‍🌾",
    description: {
      es: { main: "Granjero", secondary: ["Granja", "Campesino", "Campo"] },
      en: { main: "Farmer", secondary: ["Country", "Farm", "Peasant"] },
    },
    tags: { es: ["Profesiones", "Animales"], en: ["Professions", "Animals"] },
  },
  {
    id: "250",
    symbol: "🤑",
    description: { es: { main: "Dinero" }, en: { main: "Money-Mouth Face" } },
    tags: { es: ["Cara", "Finanzas"], en: ["Face", "Finance"] },
  },
  {
    id: "251",
    symbol: "👇",
    description: { es: { main: "Dedo abajo" }, en: { main: "Finger Down" } },
    tags: { es: ["Gestos"], en: ["Gestures"] },
  },
  {
    id: "252",
    symbol: "👎",
    description: {
      es: { main: "Pulgar abajo", secondary: ["Rechazo", "Mal"] },
      en: { main: "Bad", secondary: ["Pulgar down"] },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "253",
    symbol: "👤",
    description: { es: { main: "Silueta" }, en: { main: "Silhouette" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "254",
    symbol: "👥",
    description: { es: { main: "Siluetas" }, en: { main: "Silhouettes" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "255",
    symbol: "🗣",
    description: {
      es: { main: "Grito", secondary: ["Hablando", "Gritando"] },
      en: { main: "Speaking", secondary: ["Shouting", "Talking"] },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "256",
    symbol: "🤓",
    description: { es: { main: "Nerd" }, en: { main: "Nerd" } },
    tags: { es: ["Cara"], en: ["Face"] },
  },
  {
    id: "257",
    symbol: "🥸",
    description: { es: { main: "Incógnito" }, en: { main: "Incognito" } },
    tags: { es: ["Cara"], en: ["Face"] },
  },
  {
    id: "258",
    symbol: "😇",
    description: {
      es: { main: "Ángel", secondary: ["Dios"] },
      en: { main: "Angel" },
    },
    tags: { es: ["Cara", "Cielo"], en: ["Face"] },
  },
  {
    id: "259",
    symbol: "🤤",
    description: {
      es: { main: "Baba", secondary: ["Babeado"] },
      en: { main: "Drool", secondary: ["Babeado"] },
    },
    tags: { es: ["Cara"], en: ["Face"] },
  },
  {
    id: "260",
    symbol: "🫠",
    description: { es: { main: "Derretida" }, en: { main: "Melting" } },
    tags: { es: ["Cara"], en: ["Face"] },
  },
  {
    id: "261",
    symbol: "🤮",
    description: {
      es: { main: "Vómito", secondary: ["Vomito"] },
      en: { main: "Vomit" },
    },
    tags: { es: ["Cara"], en: ["Face"] },
  },
  {
    id: "262",
    symbol: "🤩",
    description: {
      es: {
        main: "Fascinado",
        secondary: [
          "Asombro",
          "asombrado",
          "wow",
          "maravillado",
          "ojos estrellados",
          "increible",
          "espectacular",
          "fascinado",
          "impresionado",
          "entusiasmado",
          "entusiasmante",
          "asombroso",
          "boca abierta",
          "ojos grandes",
          "admiración",
          "maravilla",
          "estrella en los ojos",
        ],
      },
      en: { main: "Fascinated" },
    },
    tags: { es: ["Cara"], en: ["Face"] },
  },
  {
    id: "263",
    symbol: "😵",
    description: {
      es: { main: "Sorprendido", secondary: ["Muerto", "Cansado"] },
      en: { main: "Dead", secondary: ["Tired"] },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "264",
    symbol: "😵‍💫",
    description: { es: { main: "Mareado" }, en: { main: "Dizzy" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "265",
    symbol: "🥺",
    description: {
      es: { main: "Ojitos", secondary: ["Súplica"] },
      en: { main: "Big Eyes", secondary: ["Pleading"] },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "266",
    symbol: "🥰",
    description: { es: { main: "Enamorado" }, en: { main: "In Love" } },
    tags: { es: ["Amor"], en: ["Love"] },
  },
  {
    id: "267",
    symbol: "☹",
    description: {
      es: { main: ":(", secondary: ["Triste"] },
      en: { main: "Sad" },
    },
    tags: { es: ["Emociones"], en: ["Emotions"] },
  },
  {
    id: "268",
    symbol: "🤡",
    description: { es: { main: "Payaso" }, en: { main: "Clown" } },
    tags: { es: ["Cara"], en: ["Face"] },
  },
  {
    id: "269",
    symbol: "🐱",
    description: { es: { main: "Gato" }, en: { main: "Cat" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "270",
    symbol: "🐹",
    description: { es: { main: "Hamster" }, en: { main: "Hamster" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "271",
    symbol: "🐭",
    description: {
      es: { main: "Rata", secondary: ["Raton"] },
      en: { main: "Rat", secondary: ["Mouse"] },
    },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "272",
    symbol: "🐻",
    description: { es: { main: "Oso" }, en: { main: "Bear" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "273",
    symbol: "🐨",
    description: { es: { main: "Koala" }, en: { main: "Koala" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "274",
    symbol: "🐼",
    description: { es: { main: "Oso panda" }, en: { main: "Panda Bear" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "275",
    symbol: "🐢",
    description: { es: { main: "Tortuga" }, en: { main: "Turtle" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "276",
    symbol: "🐯",
    description: { es: { main: "Tigre" }, en: { main: "Tiger" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "277",
    symbol: "🦁",
    description: {
      es: { main: "León", secondary: ["Leon"] },
      en: { main: "Lion" },
    },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "278",
    symbol: "🐧",
    description: { es: { main: "Pingüino" }, en: { main: "Penguin" } },
    tags: { es: ["Animales", "Invierno"], en: ["Animals", "Winter"] },
  },
  {
    id: "279",
    symbol: "🦇",
    description: {
      es: { main: "Murciélago", secondary: ["Murcielago"] },
      en: { main: "Bat" },
    },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "280",
    symbol: "🐷",
    description: {
      es: { main: "Chancho", secondary: ["Cerdo"] },
      en: { main: "Pig", secondary: ["Pig"] },
    },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "281",
    symbol: "🐽",
    description: { es: { main: "Oink" }, en: { main: "Oink" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "282",
    symbol: "🦊",
    description: { es: { main: "Zorro" }, en: { main: "Fox" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "283",
    symbol: "🐘",
    description: { es: { main: "Elefante" }, en: { main: "Elephant" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "284",
    symbol: "🐫",
    description: {
      es: { main: "Camello", secondary: ["Desierto"] },
      en: { main: "Camel", secondary: ["Desert"] },
    },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "285",
    symbol: "🐬",
    description: {
      es: { main: "Delfín", secondary: ["Delfin"] },
      en: { main: "Dolphin" },
    },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "286",
    symbol: "🎯",
    description: {
      es: { main: "Dardos", secondary: ["Objetivo", "Tiro al Blanco"] },
      en: { main: "Darts", secondary: ["Goal", "Target Shooting"] },
    },
    tags: {
      es: ["Deportes", "Juegos", "Equipo", "Oficina"],
      en: ["Sports", "Games", "Office", "Team"],
    },
  },
  {
    id: "287",
    symbol: "🧑‍🚒",
    description: {
      es: { main: "Bombero", secondary: ["Fuego"] },
      en: { main: "Firefighter", secondary: ["Fire"] },
    },
    tags: { es: ["Profesiones"], en: ["Professions"] },
  },
  {
    id: "288",
    symbol: "💡",
    description: {
      es: { main: "Bombilla de Luz" },
      en: { main: "Light Bulb" },
    },
    tags: { es: ["Casa"], en: ["Home"] },
  },
  {
    id: "289",
    symbol: "🛠️",
    description: { es: { main: "Herramientas" }, en: { main: "Tools" } },
    tags: { es: ["Tareas"], en: ["Tasks"] },
  },
  {
    id: "290",
    symbol: "🔄",
    description: { es: { main: "Loop 3" }, en: { main: "Loop 3" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "291",
    symbol: "⚠",
    description: {
      es: { main: "Peligro", secondary: ["Advertencia", "Atencion"] },
      en: { main: "Danger", secondary: ["Attention", "Warning"] },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "292",
    symbol: "💀",
    description: {
      es: { main: "Craneo", secondary: ["Calavera"] },
      en: { main: "Skull", secondary: ["Skull"] },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "293",
    symbol: "🎃",
    description: {
      es: { main: "Calabaza", secondary: ["Halloween"] },
      en: { main: "Pumpkin", secondary: ["Halloween"] },
    },
    tags: { es: ["Dulces", "#Halloween"], en: ["Sweets", "#Halloween"] },
  },
  {
    id: "294",
    symbol: "👄",
    description: { es: { main: "Boca" }, en: { main: "Mouth" } },
    tags: { es: ["Gestos"], en: ["Gestures"] },
  },
  {
    id: "295",
    symbol: "🫦",
    description: { es: { main: "Labios" }, en: { main: "Lips" } },
    tags: { es: ["Gestos"], en: ["Gestures"] },
  },
  {
    id: "296",
    symbol: "🏎",
    description: {
      es: { main: "F1", secondary: ["Auto"] },
      en: { main: "F1", secondary: ["Car"] },
    },
    tags: { es: ["Deportes", "Herramientas"], en: ["Sports", "Tools"] },
  },
  {
    id: "297",
    symbol: "🏁",
    description: {
      es: { main: "Bandera a Cuadros", secondary: ["F1"] },
      en: { main: "Checkered Flag", secondary: ["F1"] },
    },
    tags: { es: ["Deportes", "Herramientas"], en: ["Sports", "Tools"] },
  },
  {
    id: "298",
    symbol: "🕊",
    description: {
      es: { main: "Paloma de la Paz" },
      en: { main: "Peace Dove" },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "299",
    symbol: "☮",
    description: {
      es: { main: "Simbolo de la Paz" },
      en: { main: "Peace Symbol" },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "300",
    symbol: "✝",
    description: {
      es: { main: "Cruz", secondary: ["Religión", "Dios"] },
      en: { main: "Cross", secondary: ["Religión"] },
    },
    tags: { es: ["Religión"], en: ["Religion"] },
  },
  {
    id: "301",
    symbol: "🦢",
    description: {
      es: { main: "Cisne Blanco", secondary: ["Animal"] },
      en: { main: "White Swan", secondary: ["Animal"] },
    },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "302",
    symbol: "🥱",
    description: { es: { main: "Bostezo" }, en: { main: "Yawn" } },
    tags: { es: ["Cara"], en: ["Face"] },
  },
  {
    id: "303",
    symbol: "🤒",
    description: {
      es: { main: "Enfermo", secondary: ["Fiebre", "Enferma"] },
      en: { main: "Sick", secondary: ["Fever", "Sick"] },
    },
    tags: { es: ["Cara", "Salud"], en: ["Face", "Health"] },
  },
  {
    id: "304",
    symbol: "😴",
    description: {
      es: { main: "Cara Sueño", secondary: ["Dormido", "Cara Sueno"] },
      en: { main: "Cara Sueno", secondary: ["Asleep"] },
    },
    tags: { es: ["Cara"], en: ["Face"] },
  },
  {
    id: "305",
    symbol: "💤",
    description: {
      es: { main: "Sueño", secondary: ["Zzz", "Sueno", "Suenio", "Durmiendo"] },
      en: { main: "Sleep", secondary: ["Zzz", "Sleeping"] },
    },
    tags: { es: ["Noche"], en: ["Night"] },
  },
  {
    id: "306",
    symbol: "🍿",
    description: {
      es: {
        main: "Pochoclos",
        secondary: [
          "Cine",
          "Popcorn",
          "Pelicula",
          "Espectador",
          "Palomitas de maiz",
        ],
      },
      en: {
        main: "Popcorn",
        secondary: ["Cinema", "Movie", "Spectator", "Popcorn"],
      },
    },
    tags: {
      es: ["Entretenimiento", "Cine", "Comida"],
      en: ["Entertainment", "Cinema", "Food"],
    },
  },
  {
    id: "307",
    symbol: "🏆",
    description: {
      es: { main: "Trofeo", secondary: ["Copa"] },
      en: { main: "Trophy", secondary: ["Cup"] },
    },
    tags: { es: ["Deportes", "Futbol"], en: ["Sports", "Soccer"] },
  },

  {
    id: "309",
    symbol: "🎤",
    description: {
      es: { main: "Mic", secondary: ["micrófono", "microfono"] },
      en: { main: "Mic", secondary: ["microphone"] },
    },
    tags: {
      es: ["Random", "Música", "Fiesta"],
      en: ["Random", "Music", "Party"],
    },
  },
  {
    id: "310",
    symbol: "🍀",
    description: {
      es: { main: "Trébol de Cuatro Hojas", secondary: ["Suerte"] },
      en: { main: "Four Leaf Clover", secondary: ["Luck"] },
    },
    tags: { es: ["Plantas"], en: ["Plants"] },
  },
  {
    id: "311",
    symbol: "🍃",
    description: { es: { main: "Hojas" }, en: { main: "Leaves" } },
    tags: { es: ["Plantas"], en: ["Plants"] },
  },
  {
    id: "312",
    symbol: "🔇",
    description: {
      es: { main: "Silencio", secondary: ["Muteado", "Sin sonido"] },
      en: { main: "Silence", secondary: ["Mute", "No sound"] },
    },
    tags: { es: ["Música", "Sonido"], en: ["Music", "Sound"] },
  },
  {
    id: "313",
    symbol: "💅",
    description: {
      es: { main: "Esmalte de Uñas", secondary: ["Esmalte Unas", "Manicura"] },
      en: { main: "Nail Polish", secondary: ["Manicure"] },
    },
    tags: { es: ["Mujeres"], en: ["Women"] },
  },
  {
    id: "314",
    symbol: "🔗",
    description: {
      es: { main: "Link", secondary: ["Enlace", "URL"] },
      en: { main: "Link", secondary: ["Link", "URL"] },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "315",
    symbol: "🍋",
    description: {
      es: { main: "Limón", secondary: ["Limon"] },
      en: { main: "Lemon" },
    },
    tags: { es: ["Frutas", "Bebidas"], en: ["Fruits", "Drinks"] },
  },
  {
    id: "316",
    symbol: "🥦",
    description: {
      es: { main: "Brócoli", secondary: ["Brocoli"] },
      en: { main: "Broccoli" },
    },
    tags: { es: ["Vegetales", "Comidas"], en: ["Vegetables", "Food"] },
  },
  {
    id: "317",
    symbol: "🥬",
    description: { es: { main: "Lechuga" }, en: { main: "Lettuce" } },
    tags: { es: ["Vegetales", "Comidas"], en: ["Vegetables", "Food"] },
  },
  {
    id: "318",
    symbol: "🌲",
    description: { es: { main: "Pino" }, en: { main: "Pine Tree" } },
    tags: { es: ["Plantas"], en: ["Plants"] },
  },
  {
    id: "319",
    symbol: "🎄",
    description: {
      es: { main: "Árbol de Navidad" },
      en: { main: "Christmas Tree" },
    },
    tags: { es: ["Plantas", "Invierno"], en: ["Plants", "Winter"] },
  },
  {
    id: "320",
    symbol: "🍎",
    description: { es: { main: "Manzana" }, en: { main: "Apple" } },
    tags: { es: ["Frutas", "Comidas"], en: ["Fruits", "Food"] },
  },
  {
    id: "321",
    symbol: "🏀",
    description: {
      es: { main: "Pelota de Basquet", secondary: ["Basquet"] },
      en: { main: "Basketball", secondary: ["Basketball"] },
    },
    tags: { es: ["Deportes", "Pelotas"], en: ["Sports", "Balls"] },
  },
  {
    id: "322",
    symbol: "🎾",
    description: { es: { main: "Tenis" }, en: { main: "Tennis" } },
    tags: { es: ["Deportes"], en: ["Sports"] },
  },
  {
    id: "323",
    symbol: "🏓",
    description: { es: { main: "Ping Pong" }, en: { main: "Ping Pong" } },
    tags: { es: ["Deportes"], en: ["Sports"] },
  },
  {
    id: "324",
    symbol: "🏅",
    description: {
      es: { main: "Medalla", secondary: ["Oro"] },
      en: { main: "Medal", secondary: ["Gold"] },
    },
    tags: { es: ["Deportes", "Futbol"], en: ["Sports", "Soccer"] },
  },
  {
    id: "325",
    symbol: "🥈",
    description: {
      es: { main: "Segundo", secondary: ["Plata", "Medalla de Plata"] },
      en: { main: "Second", secondary: ["Medalla de Silver", "Silver"] },
    },
    tags: { es: ["Deportes", "Futbol"], en: ["Sports", "Soccer"] },
  },
  {
    id: "326",
    symbol: "🥉",
    description: {
      es: { main: "Tercero", secondary: ["Bronce", "Medalla de Bronce"] },
      en: { main: "Third", secondary: ["Bronze", "Medalla de Bronze"] },
    },
    tags: { es: ["Deportes", "Futbol"], en: ["Sports", "Soccer"] },
  },
  {
    id: "327",
    symbol: "👨‍🏫",
    description: { es: { main: "Profesor" }, en: { main: "Teacher" } },
    tags: { es: ["Profesiones", "Estudio"], en: ["Professions", "Study"] },
  },
  {
    id: "328",
    symbol: "🇪🇸",
    description: {
      es: {
        main: "Bandera Española",
        secondary: ["España", "Espana", "Espanola"],
      },
      en: { main: "Spanish Flag", secondary: ["España", "Spain", "Spanish"] },
    },
    tags: { es: ["Banderas", "España"], en: ["Flags", "Spain"] },
  },
  {
    id: "329",
    symbol: "🇪🇺",
    description: {
      es: { main: "Bandera de la Union Europea" },
      en: { main: "EU Flag" },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "330",
    symbol: "🇨🇴",
    description: {
      es: { main: "Bandera Colombiana" },
      en: { main: "Colombian Flag" },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "331",
    symbol: "👮‍♂️",
    description: {
      es: { main: "Policía", secondary: ["Policia"] },
      en: { main: "Police" },
    },
    tags: { es: ["Profesiones", "Seguridad"], en: ["Professions", "Security"] },
  },
  {
    id: "332",
    symbol: "💯",
    description: {
      es: { main: "100", secondary: ["Cien"] },
      en: { main: "100", secondary: ["Hundred"] },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "333",
    symbol: "🎨",
    description: { es: { main: "Pintura" }, en: { main: "Painting" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "334",
    symbol: "🦀",
    description: { es: { main: "Cangrejo" }, en: { main: "Crab" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "335",
    symbol: "🦜",
    description: { es: { main: "Loro" }, en: { main: "Parrot" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "336",
    symbol: "🦉",
    description: {
      es: { main: "Búho", secondary: ["Buho"] },
      en: { main: "Owl" },
    },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "337",
    symbol: "🐴",
    description: { es: { main: "Caballo" }, en: { main: "Horse" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "338",
    symbol: "🐎",
    description: { es: { main: "Caballo" }, en: { main: "Horse" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "339",
    symbol: "🏇",
    description: {
      es: { main: "Caballo de carreras" },
      en: { main: "Racehorse" },
    },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "340",
    symbol: "🦓",
    description: { es: { main: "Zebra" }, en: { main: "Zebra" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "341",
    symbol: "🎵",
    description: { es: { main: "Nota Musical" }, en: { main: "Musical Note" } },
    tags: {
      es: ["Entretenimiento", "Música", "Fiesta"],
      en: ["Entertainment", "Music", "Party"],
    },
  },
  {
    id: "342",
    symbol: "🔝",
    description: {
      es: { main: "Top", secondary: ["Arriba"] },
      en: { main: "Top", secondary: ["Arriba"] },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "343",
    symbol: "🆕",
    description: {
      es: { main: "Nuevo", secondary: ["New"] },
      en: { main: "New", secondary: ["New"] },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "344",
    symbol: "🔙",
    description: {
      es: { main: "Back", secondary: ["Volver"] },
      en: { main: "Back", secondary: ["Back"] },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "345",
    symbol: "🆚",
    description: {
      es: { main: "Versus", secondary: ["Contra", "VS"] },
      en: { main: "Versus", secondary: ["VS", "Against"] },
    },
    tags: { es: ["Random", "Fiesta"], en: ["Random", "Party"] },
  },
  {
    id: "346",
    symbol: "🔜",
    description: { es: { main: "Soon" }, en: { main: "Soon" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "347",
    symbol: "🐶",
    description: { es: { main: "Perro" }, en: { main: "Dog" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "348",
    symbol: "😍",
    description: { es: { main: "Corazones" }, en: { main: "Hearts" } },
    tags: { es: ["Amor", "Cara"], en: ["Love", "Face"] },
  },
  {
    id: "349",
    symbol: "😏",
    description: { es: { main: "Chad" }, en: { main: "Chad" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "350",
    symbol: "⭐",
    description: { es: { main: "Estrella" }, en: { main: "Star" } },
    tags: {
      es: ["Magia", "Espacio", "Universo"],
      en: ["Magic", "Space", "Universe"],
    },
  },
  {
    id: "351",
    symbol: "🧛‍♂️",
    description: { es: { main: "Vampiro" }, en: { main: "Vampire" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "352",
    symbol: "🧟‍♂️",
    description: { es: { main: "Zombie" }, en: { main: "Zombie" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "353",
    symbol: "🧙‍♂️",
    description: { es: { main: "Mago" }, en: { main: "Wizard" } },
    tags: { es: ["Magia"], en: ["Magic"] },
  },
  {
    id: "354",
    symbol: "🔮",
    description: { es: { main: "Adivino" }, en: { main: "Fortune Teller" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "355",
    symbol: "🪄",
    description: {
      es: { main: "Varita Mágica", secondary: ["Varita Magica", "Vara"] },
      en: { main: "Varita Magica", secondary: ["Wand"] },
    },
    tags: { es: ["Magia"], en: ["Magic"] },
  },
  {
    id: "356",
    symbol: "🐰",
    description: {
      es: { main: "Conejo", secondary: ["Rabbit"] },
      en: { main: "Rabbit", secondary: ["Rabbit"] },
    },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "357",
    symbol: "🐇",
    description: {
      es: { main: "Conejo", secondary: ["Rabbit"] },
      en: { main: "Rabbit", secondary: ["Rabbit"] },
    },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "358",
    symbol: "🥕",
    description: { es: { main: "Zanahoria" }, en: { main: "Carrot" } },
    tags: { es: ["Vegetales", "Comidas"], en: ["Vegetables", "Food"] },
  },
  {
    id: "359",
    symbol: "🕵",
    description: { es: { main: "Detective" }, en: { main: "Detective" } },
    tags: { es: ["Random", "Seguridad"], en: ["Random", "Security"] },
  },
  {
    id: "360",
    symbol: "🍁",
    description: {
      es: { main: "Hoja de Maple", secondary: ["Canadá", "Otoño", "Otono"] },
      en: { main: "Maple Leaf", secondary: ["Autumn"] },
    },
    tags: { es: ["Plantas"], en: ["Plants"] },
  },
  {
    id: "361",
    symbol: "🍞",
    description: { es: { main: "Pan" }, en: { main: "Bread" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "362",
    symbol: "💛",
    description: {
      es: { main: "Corazón Amarillo", secondary: ["Corazon Amarillo"] },
      en: { main: "Yellow Heart" },
    },
    tags: { es: ["Gestos"], en: ["Gestures"] },
  },
  {
    id: "363",
    symbol: "💪",
    description: {
      es: { main: "Brazo Humano", secondary: ["Fuerza"] },
      en: { main: "Strong Arm", secondary: ["Strength", "Human Arm"] },
    },
    tags: { es: ["Cuerpo"], en: ["Body"] },
  },
  {
    id: "364",
    symbol: "🤙",
    description: { es: { main: "Mano Loose" }, en: { main: "Loose Hand" } },
    tags: { es: ["Gestos"], en: ["Gestures"] },
  },
  {
    id: "365",
    symbol: "🙌",
    description: {
      es: { main: "Manos 2", secondary: ["Recibir"] },
      en: { main: "Hands 2", secondary: ["Receive"] },
    },
    tags: { es: ["Gestos"], en: ["Gestures"] },
  },
  {
    id: "366",
    symbol: "🏋️‍♂️",
    description: { es: { main: "Gym" }, en: { main: "Gym" } },
    tags: { es: ["Deportes", "Salud"], en: ["Sports", "Health"] },
  },
  {
    id: "367",
    symbol: "🌍",
    description: { es: { main: "Mundo 2" }, en: { main: "World 2" } },
    tags: {
      es: ["Espacio", "Universo", "Mundo"],
      en: ["Space", "Universe", "World"],
    },
  },
  {
    id: "368",
    symbol: "🌏",
    description: { es: { main: "Mundo 3" }, en: { main: "World 3" } },
    tags: {
      es: ["Espacio", "Universo", "Mundo"],
      en: ["Space", "Universe", "World"],
    },
  },
  {
    id: "369",
    symbol: "💐",
    description: { es: { main: "Ramo de Flores" }, en: { main: "Bouquet" } },
    tags: { es: ["Plantas"], en: ["Plants"] },
  },
  {
    id: "370",
    symbol: "✅",
    description: { es: { main: "Check" }, en: { main: "Check" } },
    tags: { es: ["Tareas"], en: ["Tasks"] },
  },
  {
    id: "371",
    symbol: "🧹",
    description: {
      es: { main: "Escoba", secondary: ["Limpieza"] },
      en: { main: "Broom", secondary: ["Cleaning"] },
    },
    tags: { es: ["Casa"], en: ["Home"] },
  },
  {
    id: "372",
    symbol: "🫧",
    description: { es: { main: "Burbujas" }, en: { main: "Bubbles" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "373",
    symbol: "💊",
    description: { es: { main: "Pastilla" }, en: { main: "Pill" } },
    tags: { es: ["Salud"], en: ["Health"] },
  },
  {
    id: "374",
    symbol: "😈",
    description: {
      es: { main: "Diablo Feliz", secondary: ["Demonio", "Diablo Contento"] },
      en: { main: "Happy Devil", secondary: ["Demon"] },
    },
    tags: { es: ["Infierno", "Magia"], en: ["Face", "Hell", "Magic"] },
  },
  {
    id: "375",
    symbol: "🎅",
    description: {
      es: { main: "Papá Noel", secondary: ["Papa Noel", "Navidad"] },
      en: { main: "Santa Claus", secondary: ["Christmas"] },
    },
    tags: { es: ["Invierno", "Navidad"], en: ["Winter", "Christmas"] },
  },
  {
    id: "376",
    symbol: "🤜",
    description: {
      es: { main: "Puño 1", secondary: ["Puno 1", "Punio 1"] },
      en: { main: "Right-Facing Fist" },
    },
    tags: { es: ["Gestos"], en: ["Gestures"] },
  },
  {
    id: "377",
    symbol: "🤛",
    description: {
      es: { main: "Puño 2", secondary: ["Puno 2", "Punio 2"] },
      en: { main: "Left-Facing Fist" },
    },
    tags: { es: ["Gestos"], en: ["Gestures"] },
  },
  {
    id: "378",
    symbol: "🧠",
    description: { es: { main: "Cerebro" }, en: { main: "Brain" } },
    tags: {
      es: ["Estudio", "Gestos", "Salud"],
      en: ["Study", "Gestures", "Health"],
    },
  },
  {
    id: "379",
    symbol: "👨‍🚀",
    description: { es: { main: "Astronauta" }, en: { main: "Astronaut" } },
    tags: {
      es: ["Profesiones", "Espacio", "Universo"],
      en: ["Professions", "Space", "Universe"],
    },
  },
  {
    id: "380",
    symbol: "👨‍🔬",
    description: {
      es: { main: "Científico", secondary: ["Cientifico"] },
      en: { main: "Scientist" },
    },
    tags: { es: ["Profesiones", "Ciencia"], en: ["Professions", "Science"] },
  },
  {
    id: "381",
    symbol: "🙋‍♂️",
    description: {
      es: {
        main: "Levantando la mano",
        secondary: ["Aca estoy", "Mano levantada", "Levantar la mano"],
      },
      en: {
        main: "Raising hand",
        secondary: ["Here I am", "Raised hand", "Raise hand"],
      },
    },
    tags: { es: ["Random", "Manos"], en: ["Random", "Hands"] },
  },
  {
    id: "382",
    symbol: "💁‍♂️",
    description: { es: { main: "Osea" }, en: { main: "Sassy" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "383",
    symbol: "☔",
    description: { es: { main: "Paraguas" }, en: { main: "Umbrella" } },
    tags: { es: ["Clima"], en: ["Weather"] },
  },
  {
    id: "384",
    symbol: "🍄",
    description: { es: { main: "Hongo" }, en: { main: "Mushroom" } },
    tags: { es: ["Vegetales", "Comidas"], en: ["Vegetables", "Food"] },
  },
  {
    id: "385",
    symbol: "👨‍🍳",
    description: { es: { main: "Cocinero Chef" }, en: { main: "Chef" } },
    tags: {
      es: ["Profesiones", "Comidas", "Cocina"],
      en: ["Professions", "Food", "Kitchen"],
    },
  },
  {
    id: "386",
    symbol: "🤨",
    description: {
      es: { main: "Confundido", secondary: ["Wtf"] },
      en: { main: "Confused", secondary: ["Wtf"] },
    },
    tags: { es: ["Cara"], en: ["Face"] },
  },
  {
    id: "387",
    symbol: "🤔",
    description: { es: { main: "Pensativo" }, en: { main: "Thinking" } },
    tags: { es: ["Cara"], en: ["Face"] },
  },
  {
    id: "388",
    symbol: "🤫",
    description: { es: { main: "Secreto Shh" }, en: { main: "Shh" } },
    tags: { es: ["Cara"], en: ["Face"] },
  },
  {
    id: "389",
    symbol: "🕷",
    description: {
      es: { main: "Araña", secondary: ["Arana", "Arania"] },
      en: { main: "Spider" },
    },
    tags: { es: ["Insectos"], en: ["Insects"] },
  },
  {
    id: "390",
    symbol: "😱",
    description: {
      es: { main: "Cara Shockeado", secondary: ["Sorprendido", "Damn"] },
      en: { main: "Face Screaming in Fear", secondary: ["Surprised", "Damn"] },
    },
    tags: { es: ["Cara"], en: ["Face"] },
  },
  {
    id: "391",
    symbol: "😮",
    description: {
      es: { main: "Sorprendido" },
      en: { main: "Face with Open Mouth" },
    },
    tags: { es: ["Cara"], en: ["Face"] },
  },
  {
    id: "392",
    symbol: "😲",
    description: {
      es: { main: "Sorprendido" },
      en: { main: "Face with Open Mouth" },
    },
    tags: { es: ["Cara"], en: ["Face"] },
  },
  {
    id: "393",
    symbol: "⚔",
    description: { es: { main: "Espadas" }, en: { main: "Crossed Swords" } },
    tags: { es: ["Armamento", "Guerra"], en: ["Weapons", "War"] },
  },
  {
    id: "394",
    symbol: "🎈",
    description: { es: { main: "Globo" }, en: { main: "Balloon" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "395",
    symbol: "🧲",
    description: {
      es: { main: "Imán", secondary: ["Atracción", "Magnetismo"] },
      en: { main: "Magnet", secondary: ["Attraction", "Magnetism"] },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "396",
    symbol: "🔬",
    description: { es: { main: "Microscopio" }, en: { main: "Microscope" } },
    tags: { es: ["Ciencia"], en: ["Science"] },
  },
  {
    id: "397",
    symbol: "🌹",
    description: { es: { main: "Rosa" }, en: { main: "Rose" } },
    tags: { es: ["Amor", "Plantas"], en: ["Love", "Plants"] },
  },
  {
    id: "398",
    symbol: "🔂",
    description: { es: { main: "Loop 2" }, en: { main: "Loop 2" } },
    tags: { es: ["Música", "Sonido"], en: ["Music", "Sound"] },
  },
  {
    id: "399",
    symbol: "🌊",
    description: { es: { main: "Ola" }, en: { main: "Wave" } },
    tags: { es: ["Verano"], en: ["Summer"] },
  },
  {
    id: "400",
    symbol: "🔋",
    description: {
      es: {
        main: "Batería Llena",
        secondary: [
          "Baterias",
          "Bateria Llena",
          "Batería Completa",
          "Bateria Completa",
          "Energia",
          "Energía",
          "Energías",
          "Pila",
          "Pilas",
        ],
      },
      en: { main: "Battery" },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "401",
    symbol: "🛏",
    description: { es: { main: "Cama" }, en: { main: "Bed" } },
    tags: { es: ["Casa"], en: ["Home"] },
  },
  {
    id: "402",
    symbol: "🛤",
    description: { es: { main: "Rails" }, en: { main: "Rails" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "403",
    symbol: "🚂",
    description: { es: { main: "Tren" }, en: { main: "Train" } },
    tags: { es: ["Vehículos"], en: ["Vehicles"] },
  },
  {
    id: "404",
    symbol: "🛹",
    description: {
      es: { main: "Skate", secondary: ["Patineta"] },
      en: { main: "Skate", secondary: ["Patineta"] },
    },
    tags: { es: ["Vehículos"], en: ["Vehicles"] },
  },
  {
    id: "405",
    symbol: "⏸",
    description: { es: { main: "Pausa" }, en: { main: "Pause" } },
    tags: { es: ["Música", "Sonido"], en: ["Music", "Sound"] },
  },
  {
    id: "406",
    symbol: "⏪",
    description: {
      es: { main: "Retroceder", secondary: ["Volver"] },
      en: { main: "Rewind", secondary: ["Back"] },
    },
    tags: { es: ["Música", "Sonido"], en: ["Music", "Sound"] },
  },
  {
    id: "407",
    symbol: "ℹ",
    description: {
      es: { main: "Información", secondary: ["Informacion"] },
      en: { main: "Information" },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "408",
    symbol: "🖼",
    description: {
      es: { main: "Cuadro", secondary: ["Pintura"] },
      en: { main: "Painting", secondary: ["Painting"] },
    },
    tags: { es: ["Casa"], en: ["Home"] },
  },
  {
    id: "409",
    symbol: "🌈",
    description: { es: { main: "Arcoiris" }, en: { main: "Rainbow" } },
    tags: { es: ["Clima", "Cielo"], en: ["Weather", "Heaven"] },
  },
  {
    id: "410",
    symbol: "🗃",
    description: {
      es: { main: "Caja", secondary: ["Archivo", "Carpetas"] },
      en: { main: "Box", secondary: ["File", "Folders"] },
    },
    tags: { es: ["Oficina", "Tareas"], en: ["Office", "Tasks"] },
  },
  {
    id: "411",
    symbol: "🗳",
    description: { es: { main: "Voto" }, en: { main: "Vote" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "412",
    symbol: "🔦",
    description: { es: { main: "Linterna" }, en: { main: "Flashlight" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "413",
    symbol: "🩺",
    description: { es: { main: "Doctor" }, en: { main: "Doctor" } },
    tags: { es: ["Profesiones", "Salud"], en: ["Professions", "Health"] },
  },
  {
    id: "414",
    symbol: "🗿",
    description: {
      es: {
        main: "Poker Face",
        secondary: [
          "Estatua",
          "Piedra",
          "Roca",
          "Isla de Pascua",
          "Caradura",
          "Moai",
        ],
      },
      en: {
        main: "Poker Face",
        secondary: [
          "Isla de Pascua",
          "Statue",
          "Stone",
          "Rock",
          "Caradura",
          "Moai",
        ],
      },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "415",
    symbol: "🛒",
    description: {
      es: { main: "Carrito Compras" },
      en: { main: "Shopping cart" },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "416",
    symbol: "🪖",
    description: { es: { main: "Soldado" }, en: { main: "Soldier" } },
    tags: {
      es: ["Profesiones", "Guerra", "Defensa"],
      en: ["Professions", "War", "Defense"],
    },
  },
  {
    id: "417",
    symbol: "🚗",
    description: { es: { main: "Auto" }, en: { main: "Car" } },
    tags: { es: ["Vehículos"], en: ["Vehicles"] },
  },
  {
    id: "418",
    symbol: "🚌",
    description: {
      es: { main: "Colectivo", secondary: ["Bondi"] },
      en: { main: "Bus", secondary: ["Bus"] },
    },
    tags: { es: ["Vehículos"], en: ["Vehicles"] },
  },
  {
    id: "419",
    symbol: "👨‍👩‍👧‍👦",
    description: { es: { main: "Familia" }, en: { main: "Family" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "420",
    symbol: "📬",
    description: {
      es: { main: "Buzón de Correo", secondary: ["Buzon de Correo"] },
      en: { main: "Mailbox" },
    },
    tags: { es: ["Oficina"], en: ["Office"] },
  },
  {
    id: "421",
    symbol: "📩",
    description: { es: { main: "Correo" }, en: { main: "Email" } },
    tags: { es: ["Oficina"], en: ["Office"] },
  },
  {
    id: "422",
    symbol: "🩼",
    description: { es: { main: "Muleta" }, en: { main: "Crutch" } },
    tags: { es: ["Salud"], en: ["Health"] },
  },
  {
    id: "423",
    symbol: "🎮",
    description: {
      es: { main: "Joystick", secondary: ["mando", "play", "juego", "jugar"] },
      en: { main: "Joystick", secondary: ["controller", "play", "game"] },
    },
    tags: { es: ["Entretenimiento"], en: ["Entertainment"] },
  },

  {
    id: "425",
    symbol: "🇫🇷",
    description: {
      es: { main: "Bandera Francia" },
      en: { main: "French Flag" },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "426",
    symbol: "🇮🇹",
    description: {
      es: { main: "Bandera Italiana" },
      en: { main: "Italian Flag" },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "427",
    symbol: "🤌",
    description: {
      es: { main: "Mano Italiana" },
      en: { main: "Italian Hand" },
    },
    tags: { es: ["Gestos"], en: ["Gestures"] },
  },
  {
    id: "428",
    symbol: "😤",
    description: {
      es: { main: "Enojado 1" },
      en: { main: "Face with Steam From Nose" },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "429",
    symbol: "😠",
    description: { es: { main: "Enojado 3" }, en: { main: "Angry Face" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "430",
    symbol: "👿",
    description: {
      es: {
        main: "Diablo Enojado",
        secondary: ["Demonio", "Diablo Enfurecido"],
      },
      en: { main: "Angry Face with Horns", secondary: ["Demon"] },
    },
    tags: { es: ["Infierno", "Magia"], en: ["Hell", "Magic"] },
  },
  {
    id: "431",
    symbol: "🕶",
    description: { es: { main: "Lentes de sol" }, en: { main: "Sunglasses" } },
    tags: {
      es: ["Verano", "Ropa", "Accesorios"],
      en: ["Summer", "Clothing", "Accessories"],
    },
  },
  {
    id: "432",
    symbol: "☝",
    description: {
      es: { main: "Dedo arriba" },
      en: { main: "Index Pointing Up" },
    },
    tags: { es: ["Gestos"], en: ["Gestures"] },
  },
  {
    id: "433",
    symbol: "🫵",
    description: {
      es: {
        main: "Vos | Dedo apuntandote",
        secondary: ["Mano apuntando", "Usted"],
      },
      en: {
        main: "You |Index Pointing at the Viewer",
        secondary: ["Pointing Hand"],
      },
    },
    tags: { es: ["Gestos"], en: ["Gestures"] },
  },
  {
    id: "434",
    symbol: "👆",
    description: {
      es: { main: "Apuntando arriba" },
      en: { main: "Backhand Index Pointing Up" },
    },
    tags: { es: ["Gestos"], en: ["Gestures"] },
  },
  {
    id: "435",
    symbol: "👉",
    description: {
      es: { main: "Dedo derecha" },
      en: { main: "Backhand Index Pointing Right" },
    },
    tags: { es: ["Gestos"], en: ["Gestures"] },
  },
  {
    id: "436",
    symbol: "👈",
    description: {
      es: { main: "Dedo izquierda" },
      en: { main: "Backhand Index Pointing Left" },
    },
    tags: { es: ["Gestos"], en: ["Gestures"] },
  },
  {
    id: "437",
    symbol: "📚",
    description: { es: { main: "Libros" }, en: { main: "Books" } },
    tags: { es: ["Estudio"], en: ["Study"] },
  },
  {
    id: "438",
    symbol: "📄",
    description: { es: { main: "Papel" }, en: { main: "Paper" } },
    tags: { es: ["Estudio"], en: ["Study"] },
  },
  {
    id: "439",
    symbol: "✏️",
    description: {
      es: { main: "Lápiz", secondary: ["Lapiz"] },
      en: { main: "Pencil" },
    },
    tags: { es: ["Estudio"], en: ["Study"] },
  },
  {
    id: "440",
    symbol: "🧻",
    description: {
      es: { main: "Papel Higiénico", secondary: ["Papel Higienico"] },
      en: { main: "Toilet Paper" },
    },
    tags: { es: ["Random", "Baño"], en: ["Random", "Bath"] },
  },
  {
    id: "441",
    symbol: "🧵",
    description: { es: { main: "Hilo" }, en: { main: "Thread" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "442",
    symbol: "🧯",
    description: {
      es: { main: "Matafuegos" },
      en: { main: "Fire Extinguisher" },
    },
    tags: {
      es: ["Emergencias", "Profesiones"],
      en: ["Emergency", "Professions"],
    },
  },
  {
    id: "443",
    symbol: "🎓",
    description: { es: { main: "Graduado" }, en: { main: "Graduate" } },
    tags: { es: ["Estudio"], en: ["Study"] },
  },
  {
    id: "444",
    symbol: "🩴",
    description: { es: { main: "Ojota" }, en: { main: "Flip-flop" } },
    tags: { es: ["Verano", "Ropa"], en: ["Summer", "Clothing"] },
  },
  {
    id: "445",
    symbol: "👣",
    description: { es: { main: "Huellas" }, en: { main: "Footprints" } },
    tags: { es: ["Gestos", "Animales"], en: ["Gestures", "Animals"] },
  },
  {
    id: "446",
    symbol: "🎉",
    description: { es: { main: "Festejo" }, en: { main: "Party" } },
    tags: { es: ["Random", "Fiesta"], en: ["Random", "Party"] },
  },
  {
    id: "447",
    symbol: "🎁",
    description: { es: { main: "Regalo" }, en: { main: "Gift" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "448",
    symbol: "👁",
    description: { es: { main: "Ojo" }, en: { main: "Eye" } },
    tags: { es: ["Gestos"], en: ["Gestures"] },
  },
  {
    id: "449",
    symbol: "👑",
    description: {
      es: { main: "Corona", secondary: ["Rey", "Reina"] },
      en: { main: "Crown", secondary: ["King", "Queen"] },
    },
    tags: { es: ["Realeza"], en: ["Royalty"] },
  },
  {
    id: "450",
    symbol: "⛲",
    description: { es: { main: "Fuente" }, en: { main: "Fountain" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "451",
    symbol: "🚬",
    description: {
      es: { main: "Pucho", secondary: ["Cigarrillo"] },
      en: { main: "Cigarette", secondary: ["Haba"] },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "452",
    symbol: "📌",
    description: { es: { main: "Pin 1" }, en: { main: "Pin 1" } },
    tags: { es: ["Oficina", "Tareas"], en: ["Office", "Tasks"] },
  },
  {
    id: "453",
    symbol: "📍",
    description: { es: { main: "Pin 2" }, en: { main: "Pin 2" } },
    tags: { es: ["Oficina", "Tareas"], en: ["Office", "Tasks"] },
  },
  {
    id: "454",
    symbol: "🪜",
    description: { es: { main: "Escalera" }, en: { main: "Escalera" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "455",
    symbol: "🙄",
    description: {
      es: { main: "Harto", secondary: ["Indiferencia"] },
      en: { main: "Face with Rolling Eyes", secondary: ["Indifference"] },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "456",
    symbol: "🧱",
    description: { es: { main: "Ladrillo" }, en: { main: "Brick" } },
    tags: { es: ["Random", "Defensa"], en: ["Random", "Defense"] },
  },
  {
    id: "457",
    symbol: "🤪",
    description: { es: { main: "Loco" }, en: { main: "Zany Face" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "458",
    symbol: "😝",
    description: { es: { main: "xb xP" }, en: { main: "xb xP" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "459",
    symbol: "⛱",
    description: {
      es: { main: "Sombrilla" },
      en: { main: "Umbrella on Ground" },
    },
    tags: { es: ["Verano"], en: ["Summer"] },
  },
  {
    id: "460",
    symbol: "🧢",
    description: { es: { main: "Gorra" }, en: { main: "Cap" } },
    tags: { es: ["Ropa", "Accesorios"], en: ["Clothing", "Accessories"] },
  },
  {
    id: "461",
    symbol: "😰",
    description: { es: { main: "Gota gorda" }, en: { main: "Sweat Drop" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "462",
    symbol: "🤠",
    description: {
      es: { main: "Vaquero", secondary: ["Sombrero de Vaquero", "Woody"] },
      en: { main: "Cowboy", secondary: ["Woody"] },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "463",
    symbol: "📖",
    description: { es: { main: "Libro Abierto" }, en: { main: "Open Book" } },
    tags: { es: ["Estudio"], en: ["Study"] },
  },
  {
    id: "464",
    symbol: "🃏",
    description: {
      es: { main: "Joker", secondary: ["Comodin"] },
      en: { main: "Joker", secondary: ["Comodin"] },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "465",
    symbol: "🎥",
    description: {
      es: { main: "Cámara de Video", secondary: ["Grabación"] },
      en: { main: "Movie Camera" },
    },
    tags: { es: ["Entretenimiento"], en: ["Entertainment"] },
  },
  {
    id: "466",
    symbol: "🔫",
    description: { es: { main: "Pistola" }, en: { main: "Pistol" } },
    tags: {
      es: ["Armamento", "Guerra", "Defensa"],
      en: ["Weapons", "War", "Defense"],
    },
  },
  {
    id: "467",
    symbol: "📰",
    description: {
      es: { main: "Diario", secondary: ["Noticias"] },
      en: { main: "Newspaper", secondary: ["Noticias"] },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "468",
    symbol: "🗺",
    description: { es: { main: "Mapa" }, en: { main: "Map" } },
    tags: { es: ["Mundo"], en: ["World"] },
  },
  {
    id: "469",
    symbol: "🫶",
    description: {
      es: { main: "Manos Corazón", secondary: ["Manos Corazon"] },
      en: { main: "Hands Corazon" },
    },
    tags: { es: ["Amor", "Gestos"], en: ["Love", "Gestures"] },
  },
  {
    id: "470",
    symbol: "🍊",
    description: { es: { main: "Naranja" }, en: { main: "Orange" } },
    tags: { es: ["Bebidas", "Frutas"], en: ["Drinks", "Fruits"] },
  },
  {
    id: "471",
    symbol: "❄",
    description: { es: { main: "Copo de Nieve" }, en: { main: "Snowflake" } },
    tags: { es: ["Clima", "Invierno"], en: ["Weather", "Winter"] },
  },
  {
    id: "472",
    symbol: "🐟",
    description: {
      es: { main: "Pez", secondary: ["Pescado"] },
      en: { main: "Fish", secondary: ["Fish"] },
    },
    tags: { es: ["Animales", "Comidas"], en: ["Animals", "Food"] },
  },
  {
    id: "473",
    symbol: "🎣",
    description: {
      es: {
        main: "Pescar",
        secondary: [
          "Fish",
          "Phishing",
          "Caña de pescar",
          "cana de pescar",
          "cania de pescar",
        ],
      },
      en: { main: "Fishing", secondary: ["Fish", "Fishing"] },
    },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "474",
    symbol: "🦄",
    description: { es: { main: "Unicornio" }, en: { main: "Unicorn" } },
    tags: { es: ["Animales", "Magia"], en: ["Animals", "Magic"] },
  },
  {
    id: "475",
    symbol: "🦩",
    description: { es: { main: "Flamenco" }, en: { main: "Flamingo" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "476",
    symbol: "🐳",
    description: { es: { main: "Ballena" }, en: { main: "Whale" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "477",
    symbol: "🧜‍♀️",
    description: { es: { main: "Sirena" }, en: { main: "Mermaid" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "478",
    symbol: "🦈",
    description: {
      es: { main: "Tiburón", secondary: ["Tiburon"] },
      en: { main: "Tiburon" },
    },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "479",
    symbol: "⚖",
    description: {
      es: { main: "Balanza", secondary: ["Equilibrio", "Justicia"] },
      en: { main: "Scale", secondary: ["Justicia", "Equilibrio"] },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "480",
    symbol: "❤",
    description: { es: { main: "Corazón Rojo" }, en: { main: "Red Heart" } },
    tags: { es: ["Gestos"], en: ["Gestures"] },
  },
  {
    id: "481",
    symbol: "💔",
    description: { es: { main: "Corazón Roto" }, en: { main: "Broken Heart" } },
    tags: { es: ["Gestos"], en: ["Gestures"] },
  },
  {
    id: "482",
    symbol: "🤍",
    description: {
      es: { main: "Corazón Blanco" },
      en: { main: "White Heart" },
    },
    tags: { es: ["Amor", "Gestos"], en: ["Love", "Gestures"] },
  },
  {
    id: "483",
    symbol: "🩵",
    description: {
      es: { main: "Corazón Celeste" },
      en: { main: "Light Blue Heart" },
    },
    tags: { es: ["Amor", "Gestos"], en: ["Love", "Gestures"] },
  },
  {
    id: "484",
    symbol: "💙",
    description: { es: { main: "Corazón Azul" }, en: { main: "Blue Heart" } },
    tags: { es: ["Amor", "Gestos"], en: ["Love", "Gestures"] },
  },
  {
    id: "485",
    symbol: "🩷",
    description: { es: { main: "Corazón Rosa" }, en: { main: "Pink Heart" } },
    tags: { es: ["Amor", "Gestos"], en: ["Love", "Gestures"] },
  },
  {
    id: "486",
    symbol: "🩶",
    description: { es: { main: "Corazón Gris" }, en: { main: "Grey Heart" } },
    tags: { es: ["Amor", "Gestos"], en: ["Love", "Gestures"] },
  },
  {
    id: "487",
    symbol: "💘",
    description: {
      es: { main: "Corazón Flechado" },
      en: { main: "Heart with Arrow" },
    },
    tags: { es: ["Amor", "Gestos"], en: ["Love", "Gestures"] },
  },
  {
    id: "488",
    symbol: "🫣",
    description: {
      es: { main: "Verguenza", secondary: ["Espiando"] },
      en: { main: "Shy", secondary: ["Espiando"] },
    },
    tags: { es: ["Emociones"], en: ["Emotions"] },
  },
  {
    id: "489",
    symbol: "🫀",
    description: { es: { main: "Corazón Real" }, en: { main: "Real Heart" } },
    tags: { es: ["Gestos"], en: ["Gestures"] },
  },
  {
    id: "490",
    symbol: "🫁",
    description: { es: { main: "Pulmones" }, en: { main: "Lungs" } },
    tags: { es: ["Gestos", "Salud"], en: ["Gestures", "Health"] },
  },
  {
    id: "491",
    symbol: "🐐",
    description: { es: { main: "Cabra" }, en: { main: "Goat" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "492",
    symbol: "🌱",
    description: { es: { main: "Brote" }, en: { main: "Sprout" } },
    tags: { es: ["Plantas"], en: ["Plants"] },
  },
  {
    id: "493",
    symbol: "🐜",
    description: { es: { main: "Hormiga" }, en: { main: "Ant" } },
    tags: { es: ["Insectos"], en: ["Insects"] },
  },
  {
    id: "494",
    symbol: "🐍",
    description: { es: { main: "Serpiente" }, en: { main: "Snake" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "495",
    symbol: "🦅",
    description: { es: { main: "Águila" }, en: { main: "Eagle" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "496",
    symbol: "🥗",
    description: { es: { main: "Ensalada" }, en: { main: "Salad" } },
    tags: { es: ["Comidas"], en: ["Food"] },
  },
  {
    id: "497",
    symbol: "🧅",
    description: { es: { main: "Cebolla" }, en: { main: "Onion" } },
    tags: { es: ["Vegetales", "Comidas"], en: ["Vegetables", "Food"] },
  },
  {
    id: "498",
    symbol: "🌭",
    description: { es: { main: "Pancho" }, en: { main: "Hot Dog" } },
    tags: { es: ["Comidas"], en: ["Food"] },
  },
  {
    id: "499",
    symbol: "🎂",
    description: { es: { main: "Torta" }, en: { main: "Cake" } },
    tags: { es: ["Comidas"], en: ["Food"] },
  },
  {
    id: "500",
    symbol: "🍷",
    description: { es: { main: "Copa de Vino" }, en: { main: "Wine Glass" } },
    tags: { es: ["Bebidas"], en: ["Drinks"] },
  },
  {
    id: "501",
    symbol: "🍺",
    description: { es: { main: "Cerveza" }, en: { main: "Beer Mug" } },
    tags: { es: ["Bebidas"], en: ["Drinks"] },
  },
  {
    id: "502",
    symbol: "🍻",
    description: {
      es: { main: "Cervezas" },
      en: { main: "Clinking Beer Mugs" },
    },
    tags: { es: ["Bebidas", "Fiesta"], en: ["Drinks", "Party"] },
  },
  {
    id: "503",
    symbol: "🐮",
    description: { es: { main: "Vaca" }, en: { main: "Cow" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "504",
    symbol: "🐄",
    description: { es: { main: "Vaca" }, en: { main: "Cow" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "505",
    symbol: "🥛",
    description: { es: { main: "Leche" }, en: { main: "Milk" } },
    tags: { es: ["Bebidas"], en: ["Drinks", "Drinks"] },
  },
  {
    id: "506",
    symbol: "🐝",
    description: { es: { main: "Abeja" }, en: { main: "Bee" } },
    tags: { es: ["Insectos"], en: ["Insects"] },
  },
  {
    id: "507",
    symbol: "🪰",
    description: {
      es: { main: "Mosca", secondary: ["Bug"] },
      en: { main: "Fly", secondary: ["Bug"] },
    },
    tags: { es: ["Insectos"], en: ["Insects"] },
  },
  {
    id: "508",
    symbol: "🍯",
    description: { es: { main: "Miel" }, en: { main: "Honey" } },
    tags: { es: ["Comidas"], en: ["Food"] },
  },
  {
    id: "509",
    symbol: "🍅",
    description: { es: { main: "Tomate" }, en: { main: "Tomato" } },
    tags: { es: ["Vegetales", "Comidas"], en: ["Vegetables", "Food"] },
  },
  {
    id: "510",
    symbol: "🌶",
    description: {
      es: { main: "Picante", secondary: ["Chimi", "Chile", "Mexico"] },
      en: { main: "Hot Pepper", secondary: ["Chimi", "Chile", "Mexico"] },
    },
    tags: { es: ["Vegetales", "Comidas"], en: ["Vegetables", "Food"] },
  },
  {
    id: "511",
    symbol: "🥜",
    description: {
      es: { main: "Maní", secondary: ["Mani"] },
      en: { main: "Peanuts" },
    },
    tags: { es: ["Comidas"], en: ["Food"] },
  },
  {
    id: "512",
    symbol: "🍔",
    description: { es: { main: "Hamburguesa" }, en: { main: "Burger" } },
    tags: { es: ["Comidas"], en: ["Food", "Food"] },
  },
  {
    id: "513",
    symbol: "🌮",
    description: {
      es: { main: "Taco", secondary: ["Mexico"] },
      en: { main: "Taco", secondary: ["Mexico"] },
    },
    tags: { es: ["Comidas"], en: ["Food"] },
  },
  {
    id: "514",
    symbol: "🍓",
    description: { es: { main: "Frutilla" }, en: { main: "Strawberry" } },
    tags: { es: ["Comidas", "Frutas"], en: ["Food", "Fruits"] },
  },
  {
    id: "515",
    symbol: "🍉",
    description: {
      es: { main: "Sandía", secondary: ["Sandia"] },
      en: { main: "Watermelon" },
    },
    tags: { es: ["Comidas", "Frutas"], en: ["Food", "Fruits"] },
  },
  {
    id: "516",
    symbol: "🥐",
    description: { es: { main: "Medialuna" }, en: { main: "Medialuna" } },
    tags: { es: ["Comidas"], en: ["Food"] },
  },
  {
    id: "517",
    symbol: "🌙",
    description: { es: { main: "Luna" }, en: { main: "Moon" } },
    tags: {
      es: ["Clima", "Espacio", "Universo"],
      en: ["Weather", "Space", "Universe"],
    },
  },
  {
    id: "518",
    symbol: "👻",
    description: { es: { main: "Fantasma" }, en: { main: "Ghost" } },
    tags: { es: ["Magia"], en: ["Magic"] },
  },
  {
    id: "519",
    symbol: "🧂",
    description: { es: { main: "Sal" }, en: { main: "Salt" } },
    tags: { es: ["Comidas", "Cocina"], en: ["Food", "Kitchen"] },
  },
  {
    id: "520",
    symbol: "🦣",
    description: { es: { main: "Mamut" }, en: { main: "Mammoth" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "521",
    symbol: "🐿",
    description: { es: { main: "Ardilla" }, en: { main: "Squirrel" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "522",
    symbol: "🐔",
    description: { es: { main: "Gallina" }, en: { main: "Chicken" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "523",
    symbol: "🥚",
    description: { es: { main: "Huevo" }, en: { main: "Egg" } },
    tags: {
      es: ["Comidas", "Ingredientes"],
      en: ["Food", "Food", "Ingredients"],
    },
  },
  {
    id: "524",
    symbol: "👶",
    description: {
      es: { main: "Bebé", secondary: ["Bebe"] },
      en: { main: "Baby" },
    },
    tags: { es: ["Familia"], en: ["Family"] },
  },
  {
    id: "525",
    symbol: "🧓",
    description: {
      es: { main: "Abuela", secondary: ["Anciana"] },
      en: { main: "Grandmother", secondary: ["Old Woman"] },
    },
    tags: { es: ["Mujeres", "Familia"], en: ["Women", "Family"] },
  },
  {
    id: "526",
    symbol: "👴",
    description: { es: { main: "Abuelo" }, en: { main: "Grandfather" } },
    tags: { es: ["Hombres", "Familia"], en: ["Men", "Family"] },
  },
  {
    id: "527",
    symbol: "🥂",
    description: { es: { main: "Brindis" }, en: { main: "Cheers" } },
    tags: { es: ["Bebidas"], en: ["Drinks"] },
  },
  {
    id: "528",
    symbol: "🩸",
    description: { es: { main: "Sangre" }, en: { main: "Blood" } },
    tags: { es: ["Gestos", "Salud"], en: ["Gestures", "Health"] },
  },
  {
    id: "529",
    symbol: "🚪",
    description: { es: { main: "Puerta" }, en: { main: "Door" } },
    tags: { es: ["Casa"], en: ["Home"] },
  },
  {
    id: "530",
    symbol: "🛌",
    description: {
      es: {
        main: "Acostado en la Cama",
        secondary: ["Durmiendo", "Dormir, Sueno"],
      },
      en: { main: "Lying in Bed", secondary: ["Sleeping", "Sleep"] },
    },
    tags: { es: ["Casa", "Noche", "Sueño"], en: ["Home", "Night", "Sleep"] },
  },
  {
    id: "531",
    symbol: "🧳",
    description: {
      es: { main: "Valija", secondary: ["Bolso"] },
      en: { main: "Suitcase", secondary: ["Bag"] },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "532",
    symbol: "🪟",
    description: { es: { main: "Ventana" }, en: { main: "Window" } },
    tags: { es: ["Casa"], en: ["Home"] },
  },
  {
    id: "533",
    symbol: "🪞",
    description: { es: { main: "Espejo" }, en: { main: "Mirror" } },
    tags: { es: ["Casa"], en: ["Home"] },
  },
  {
    id: "534",
    symbol: "🛍",
    description: {
      es: { main: "Bolsas de Compras" },
      en: { main: "Shopping Bags" },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "535",
    symbol: "🗝",
    description: { es: { main: "Llave Antigua" }, en: { main: "Old Key" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "536",
    symbol: "🔭",
    description: { es: { main: "Telescopio" }, en: { main: "Telescope" } },
    tags: { es: ["Espacio", "Universo"], en: ["Space", "Universe"] },
  },
  {
    id: "537",
    symbol: "🧽",
    description: { es: { main: "Esponja" }, en: { main: "Sponge" } },
    tags: { es: ["Casa"], en: ["Home"] },
  },
  {
    id: "538",
    symbol: "🚿",
    description: { es: { main: "Ducha" }, en: { main: "Shower" } },
    tags: { es: ["Casa", "Baño"], en: ["Home", "Bath"] },
  },
  {
    id: "539",
    symbol: "🏭",
    description: {
      es: { main: "Fábrica", secondary: ["Fabrica"] },
      en: { main: "Factory" },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "540",
    symbol: "🛰",
    description: {
      es: { main: "Satélite", secondary: ["Satelite", "Mundo"] },
      en: { main: "Satellite" },
    },
    tags: {
      es: ["Vehículos", "Espacio", "Universo"],
      en: ["Vehicles", "Space", "Universe"],
    },
  },
  {
    id: "541",
    symbol: "🏟",
    description: {
      es: { main: "Estadio de Fútbol", secondary: ["Estadio de Fútbol"] },
      en: { main: "Soccer Stadium" },
    },
    tags: {
      es: ["Deportes", "Edificios", "Futbol"],
      en: ["Sports", "Buildings", "Soccer"],
    },
  },
  {
    id: "542",
    symbol: "⛪",
    description: {
      es: { main: "Iglesia", secondary: ["Dios"] },
      en: { main: "Church" },
    },
    tags: { es: ["Edificios", "Religión"], en: ["Buildings", "Religión"] },
  },
  {
    id: "543",
    symbol: "🏫",
    description: {
      es: { main: "Universidad", secondary: ["Colegio", "Escuela"] },
      en: { main: "School", secondary: ["College", "University"] },
    },
    tags: { es: ["Edificios", "Estudio"], en: ["Buildings", "Study"] },
  },
  {
    id: "544",
    symbol: "🏘",
    description: {
      es: { main: "Barrio", secondary: ["Casas", "Vecindario"] },
      en: { main: "Neighborhood", secondary: ["Houses"] },
    },
    tags: {
      es: ["Edificios", "Casa"],
      en: ["Buildings", "Home", "Buildings", "Home"],
    },
  },
  {
    id: "545",
    symbol: "🎡",
    description: {
      es: { main: "Rueda de la Fortuna", secondary: ["Parque de Atraccion"] },
      en: { main: "Ferris Wheel", secondary: ["Amusement Park"] },
    },
    tags: {
      es: ["Entretenimiento", "Diversion"],
      en: ["Entertainment", "Fun"],
    },
  },
  {
    id: "546",
    symbol: "🖱",
    description: {
      es: { main: "Mouse", secondary: ["Raton", "Computadora"] },
      en: { main: "Mouse", secondary: ["Mouse"] },
    },
    tags: { es: ["Oficina", "Informatica"], en: ["Office", "Computing"] },
  },
  {
    id: "547",
    symbol: "🛟",
    description: { es: { main: "Salvavidas" }, en: { main: "Ring Buoy" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "548",
    symbol: "⚓",
    description: { es: { main: "Ancla" }, en: { main: "Anchor" } },
    tags: { es: ["Vehículos"], en: ["Vehicles"] },
  },
  {
    id: "549",
    symbol: "🔮",
    description: {
      es: { main: "Bola de Cristal", secondary: ["Adivino"] },
      en: { main: "Crystal Ball", secondary: ["Fortune Teller"] },
    },
    tags: { es: ["Magia"], en: ["Magic"] },
  },
  {
    id: "550",
    symbol: "🎩",
    description: {
      es: { main: "Galera", secondary: ["Sombrero Mago"] },
      en: { main: "Top Hat", secondary: ["Magician Hat"] },
    },
    tags: {
      es: ["Magia", "Ropa", "Accesorios"],
      en: ["Magic", "Clothing", "Accessories"],
    },
  },
  {
    id: "551",
    symbol: "✨",
    description: {
      es: { main: "Estrellas", secondary: ["Brillo"] },
      en: { main: "Sparkles", secondary: ["Shine"] },
    },
    tags: {
      es: ["Magia", "Espacio", "Universo"],
      en: ["Magic", "Space", "Universe"],
    },
  },
  {
    id: "552",
    symbol: "🧞",
    description: { es: { main: "Genio" }, en: { main: "Genie" } },
    tags: { es: ["Magia"], en: ["Magic"] },
  },
  {
    id: "553",
    symbol: "⬜",
    description: {
      es: { main: "Cuadrado Blanco" },
      en: { main: "White Square" },
    },
    tags: {
      es: ["Formas", "Entretenimiento"],
      en: ["Shapes", "Entertainment"],
    },
  },
  {
    id: "554",
    symbol: "☑",
    description: {
      es: { main: "Check Alternativo" },
      en: { main: "Check Alternativo" },
    },
    tags: { es: ["Tareas"], en: ["Tasks"] },
  },
  {
    id: "555",
    symbol: "✔",
    description: {
      es: { main: "Check Alternativo" },
      en: { main: "Check Alternativo" },
    },
    tags: { es: ["Tareas"], en: ["Tasks"] },
  },
  {
    id: "556",
    symbol: "🔔",
    description: { es: { main: "Campana de Alarma" }, en: { main: "Bell" } },
    tags: { es: ["Tareas"], en: ["Tasks"] },
  },
  {
    id: "557",
    symbol: "🔕",
    description: {
      es: { main: "Campana de Alarma Desactivada" },
      en: { main: "Bell" },
    },
    tags: { es: ["Tareas"], en: ["Tasks"] },
  },
  {
    id: "558",
    symbol: "♾",
    description: { es: { main: "Infinito" }, en: { main: "Infinity" } },
    tags: { es: ["Matematica", "Signos"], en: ["Math", "Signs"] },
  },
  {
    id: "559",
    symbol: "🏹",
    description: {
      es: { main: "Arco y Flecha", secondary: ["Tiro"] },
      en: { main: "Bow and Arrow", secondary: ["Archery"] },
    },
    tags: { es: ["Deportes"], en: ["Sports"] },
  },
  {
    id: "560",
    symbol: "🪈",
    description: { es: { main: "Flauta" }, en: { main: "Flute" } },
    tags: { es: ["Instrumentos"], en: ["Instruments"] },
  },
  {
    id: "561",
    symbol: "🏂",
    description: { es: { main: "Snowboard" }, en: { main: "Snowboard" } },
    tags: { es: ["Invierno", "Deportes"], en: ["Winter", "Sports"] },
  },
  {
    id: "562",
    symbol: "⛷",
    description: { es: { main: "Esquies" }, en: { main: "Skis" } },
    tags: { es: ["Invierno", "Deportes"], en: ["Winter", "Sports"] },
  },
  {
    id: "563",
    symbol: "🤺",
    description: {
      es: { main: "Esgrima", secondary: ["Estocadas"] },
      en: { main: "Fencing", secondary: ["Estocadas"] },
    },
    tags: { es: ["Deportes"], en: ["Sports"] },
  },
  {
    id: "564",
    symbol: "♟",
    description: {
      es: { main: "Peon de Ajedrez" },
      en: { main: "Chess Pawn" },
    },
    tags: {
      es: ["Deportes", "Entretenimiento"],
      en: ["Sports", "Entertainment"],
    },
  },
  {
    id: "565",
    symbol: "🛝",
    description: { es: { main: "Tobogan" }, en: { main: "Slide" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "566",
    symbol: "⛹️‍♂️",
    description: {
      es: { main: "Básquet", secondary: ["Basquet"] },
      en: { main: "Person Bouncing Ball" },
    },
    tags: { es: ["Deportes"], en: ["Sports"] },
  },
  {
    id: "567",
    symbol: "🏌",
    description: { es: { main: "Golf" }, en: { main: "Golf" } },
    tags: { es: ["Deportes"], en: ["Sports"] },
  },
  {
    id: "568",
    symbol: "🏑",
    description: { es: { main: "Hockey" }, en: { main: "Hockey" } },
    tags: { es: ["Deportes"], en: ["Sports"] },
  },
  {
    id: "569",
    symbol: "🏒",
    description: { es: { main: "Jockey" }, en: { main: "Jockey" } },
    tags: { es: ["Deportes"], en: ["Sports"] },
  },
  {
    id: "570",
    symbol: "🧗",
    description: {
      es: { main: "Alpinismo", secondary: ["Escalada"] },
      en: { main: "Person Climbing", secondary: ["Climbing"] },
    },
    tags: { es: ["Deportes"], en: ["Sports"] },
  },
  {
    id: "571",
    symbol: "🏉",
    description: {
      es: { main: "Pelota de Rugby" },
      en: { main: "Rugby Ball" },
    },
    tags: { es: ["Deportes"], en: ["Sports"] },
  },
  {
    id: "572",
    symbol: "🐊",
    description: { es: { main: "Cocodrilo" }, en: { main: "Crocodile" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "573",
    symbol: "🐈‍⬛",
    description: { es: { main: "Gato Negro" }, en: { main: "Black Cat" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "574",
    symbol: "🐈",
    description: { es: { main: "Gato" }, en: { main: "Cat" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "575",
    symbol: "🐕",
    description: { es: { main: "Perro" }, en: { main: "Dog" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "576",
    symbol: "🦮",
    description: {
      es: { main: "Perro con Correa" },
      en: { main: "Guide Dog" },
    },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "577",
    symbol: "🦭",
    description: { es: { main: "Foca" }, en: { main: "Seal" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "578",
    symbol: "🦞",
    description: { es: { main: "Langosta" }, en: { main: "Lobster" } },
    tags: { es: ["Animales", "Comidas"], en: ["Animals", "Food"] },
  },
  {
    id: "579",
    symbol: "🦍",
    description: { es: { main: "Gorila" }, en: { main: "Gorilla" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "580",
    symbol: "🦎",
    description: { es: { main: "Iguana" }, en: { main: "Iguana" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "581",
    symbol: "🦒",
    description: { es: { main: "Jirafa" }, en: { main: "Giraffe" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "582",
    symbol: "🐗",
    description: {
      es: { main: "Jabalí", secondary: ["Jabali"] },
      en: { main: "Boar" },
    },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "583",
    symbol: "🪱",
    description: {
      es: { main: "Lombriz", secondary: ["Lombrices", "Carnada"] },
      en: { main: "Worm", secondary: ["Worms", "Bait"] },
    },
    tags: { es: ["Animales", "Insectos"], en: ["Animals", "Insects"] },
  },
  {
    id: "584",
    symbol: "🐌",
    description: { es: { main: "Caracol" }, en: { main: "Snail" } },
    tags: { es: ["Insectos"], en: ["Insects"] },
  },
  {
    id: "585",
    symbol: "🦘",
    description: { es: { main: "Canguro" }, en: { main: "Kangaroo" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "586",
    symbol: "🦫",
    description: { es: { main: "Castor" }, en: { main: "Beaver" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "587",
    symbol: "🐁",
    description: {
      es: { main: "Rata de Laboratorio" },
      en: { main: "Laboratory Mouse" },
    },
    tags: { es: ["Animales", "Ciencia"], en: ["Animals", "Science"] },
  },
  {
    id: "588",
    symbol: "🐀",
    description: { es: { main: "Rata" }, en: { main: "Rat" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "589",
    symbol: "🪽",
    description: { es: { main: "Alas" }, en: { main: "Wings" } },
    tags: { es: ["Cielo"], en: ["Cielo"] },
  },
  {
    id: "590",
    symbol: "🦥",
    description: { es: { main: "Perezoso" }, en: { main: "Sloth" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "591",
    symbol: "🦂",
    description: {
      es: { main: "Alacrán", secondary: ["Alacran"] },
      en: { main: "Scorpion" },
    },
    tags: { es: ["Insectos"], en: ["Insects"] },
  },
  {
    id: "592",
    symbol: "🦗",
    description: { es: { main: "Grillo" }, en: { main: "Cricket" } },
    tags: { es: ["Insectos"], en: ["Insects"] },
  },
  {
    id: "593",
    symbol: "🐛",
    description: { es: { main: "Oruga" }, en: { main: "Caterpillar" } },
    tags: { es: ["Insectos"], en: ["Insects"] },
  },
  {
    id: "594",
    symbol: "🦋",
    description: { es: { main: "Mariposa" }, en: { main: "Butterfly" } },
    tags: { es: ["Insectos"], en: ["Insects"] },
  },
  {
    id: "595",
    symbol: "🦚",
    description: { es: { main: "Pavo Real" }, en: { main: "Peacock" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "596",
    symbol: "🦏",
    description: { es: { main: "Rinoceronte" }, en: { main: "Rhino" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "597",
    symbol: "⛄",
    description: { es: { main: "Muñeco de Nieve" }, en: { main: "Snowman" } },
    tags: { es: ["Invierno"], en: ["Winter"] },
  },
  {
    id: "598",
    symbol: "🦆",
    description: { es: { main: "Pato" }, en: { main: "Duck" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "599",
    symbol: "🐅",
    description: { es: { main: "Tigre" }, en: { main: "Tiger" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "600",
    symbol: "🐆",
    description: {
      es: { main: "Leopardo", secondary: ["Puma"] },
      en: { main: "Leopard", secondary: ["Puma"] },
    },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "601",
    symbol: "🦙",
    description: { es: { main: "Llama" }, en: { main: "Llama" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "602",
    symbol: "🦔",
    description: { es: { main: "Erizo" }, en: { main: "Hedgehog" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "603",
    symbol: "🐖",
    description: {
      es: { main: "Chancho", secondary: ["Cerdo"] },
      en: { main: "Pig", secondary: ["Pig"] },
    },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "604",
    symbol: "🐓",
    description: { es: { main: "Gallina" }, en: { main: "Chicken" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "605",
    symbol: "🪴",
    description: { es: { main: "Maceta" }, en: { main: "Potted Plant" } },
    tags: { es: ["Plantas"], en: ["Plants"] },
  },
  {
    id: "606",
    symbol: "🦨",
    description: { es: { main: "Zorrillo" }, en: { main: "Skunk" } },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "607",
    symbol: "🍂",
    description: { es: { main: "Hojas Secas" }, en: { main: "Dry Leaves" } },
    tags: { es: ["Otoño"], en: ["Autumn"] },
  },
  {
    id: "608",
    symbol: "🎋",
    description: {
      es: {
        main: "Caña de Azúcar",
        secondary: ["Caña de Azucar", "Cana de Azucar", "Cania de Azucar"],
      },
      en: { main: "Sugar Cane", secondary: ["Plant"] },
    },
    tags: { es: ["Plantas"], en: ["Plants"] },
  },
  {
    id: "609",
    symbol: "🧑‍🦽",
    description: {
      es: { main: "Silla de Ruedas", secondary: ["Invalido"] },
      en: { main: "Wheelchair", secondary: ["Disabled"] },
    },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "610",
    symbol: "🧈",
    description: { es: { main: "Manteca" }, en: { main: "Butter" } },
    tags: { es: ["Comidas"], en: ["Food"] },
  },
  {
    id: "611",
    symbol: "🥩",
    description: { es: { main: "Bistec" }, en: { main: "Steak" } },
    tags: { es: ["Comidas"], en: ["Food"] },
  },
  {
    id: "612",
    symbol: "🫚",
    description: { es: { main: "Jengibre" }, en: { main: "Ginger" } },
    tags: { es: ["Bebidas"], en: ["Drinks"] },
  },
  {
    id: "613",
    symbol: "🫖",
    description: { es: { main: "Tetera" }, en: { main: "Teapot" } },
    tags: { es: ["Bebidas"], en: ["Drinks"] },
  },
  {
    id: "614",
    symbol: "🍩",
    description: { es: { main: "Dona" }, en: { main: "Donut" } },
    tags: { es: ["Comidas"], en: ["Food"] },
  },
  {
    id: "615",
    symbol: "🥠",
    description: {
      es: { main: "Galleta de la Suerte" },
      en: { main: "Fortune Cookie" },
    },
    tags: { es: ["Comidas"], en: ["Food"] },
  },
  {
    id: "616",
    symbol: "🍨",
    description: {
      es: { main: "Copa de Helado" },
      en: { main: "Ice Cream Cup" },
    },
    tags: { es: ["Postres"], en: ["Desserts"] },
  },
  {
    id: "617",
    symbol: "🍦",
    description: {
      es: { main: "Cono de Helado" },
      en: { main: "Ice Cream Cone" },
    },
    tags: { es: ["Postres"], en: ["Desserts"] },
  },
  {
    id: "618",
    symbol: "🍮",
    description: { es: { main: "Flan" }, en: { main: "Flan" } },
    tags: { es: ["Postres"], en: ["Desserts"] },
  },
  {
    id: "619",
    symbol: "🍰",
    description: {
      es: { main: "Porción de Torta" },
      en: { main: "Cake Slice" },
    },
    tags: { es: ["Postres"], en: ["Desserts"] },
  },
  {
    id: "620",
    symbol: "🥔",
    description: { es: { main: "Papa" }, en: { main: "Potato" } },
    tags: { es: ["Vegetales", "Comidas"], en: ["Vegetables", "Food"] },
  },
  {
    id: "621",
    symbol: "🍟",
    description: { es: { main: "Papas Fritas" }, en: { main: "French Fries" } },
    tags: { es: ["Comidas"], en: ["Food"] },
  },
  {
    id: "622",
    symbol: "🧄",
    description: { es: { main: "Ajo" }, en: { main: "Garlic" } },
    tags: {
      es: ["Vegetales", "Comidas", "Ingredientes"],
      en: ["Vegetables", "Food", "Ingredients"],
    },
  },
  {
    id: "623",
    symbol: "🌽",
    description: {
      es: { main: "Choclo", secondary: ["Maiz", "Trigo"] },
      en: { main: "Corn", secondary: ["Corn", "Wheat"] },
    },
    tags: { es: ["Vegetales", "Comidas"], en: ["Vegetables", "Food"] },
  },
  {
    id: "624",
    symbol: "🥪",
    description: {
      es: { main: "Sanguche", secondary: ["Sandwich"] },
      en: { main: "Sandwich", secondary: ["Sandwich"] },
    },
    tags: { es: ["Comidas"], en: ["Food"] },
  },
  {
    id: "625",
    symbol: "🥞",
    description: {
      es: { main: "Panqueques", secondary: ["Waffles", "Wafles"] },
      en: { main: "Pancakes", secondary: ["Waffles"] },
    },
    tags: { es: ["Comidas"], en: ["Food"] },
  },
  {
    id: "626",
    symbol: "🥫",
    description: {
      es: { main: "Lata de Comida" },
      en: { main: "Canned Food" },
    },
    tags: { es: ["Comidas"], en: ["Food"] },
  },
  {
    id: "627",
    symbol: "🍳",
    description: { es: { main: "Huevo Frito" }, en: { main: "Fried Egg" } },
    tags: { es: ["Comidas", "Cocina"], en: ["Food", "Kitchen"] },
  },
  {
    id: "628",
    symbol: "💁‍♀️",
    description: { es: { main: "Osea" }, en: { main: "Sassy Woman" } },
    tags: { es: ["Mujeres"], en: ["Women"] },
  },
  {
    id: "629",
    symbol: "🙅‍♀️",
    description: { es: { main: "No" }, en: { main: "No" } },
    tags: { es: ["Mujeres"], en: ["Women"] },
  },
  {
    id: "630",
    symbol: "🍝",
    description: { es: { main: "Fideos" }, en: { main: "Pasta" } },
    tags: { es: ["Comidas"], en: ["Food"] },
  },
  {
    id: "631",
    symbol: "🍆",
    description: { es: { main: "Berenjena" }, en: { main: "Eggplant" } },
    tags: {
      es: ["Vegetales", "Comidas", "Ingredientes"],
      en: ["Vegetables", "Food", "Ingredients"],
    },
  },
  {
    id: "632",
    symbol: "🚶",
    description: { es: { main: "Caminata" }, en: { main: "Walking" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "633",
    symbol: "🚦",
    description: {
      es: { main: "Semáforo", secondary: ["Semaforo"] },
      en: { main: "Traffic Light" },
    },
    tags: { es: ["Transporte"], en: ["Transport"] },
  },
  {
    id: "634",
    symbol: "🚧",
    description: {
      es: { main: "Señal de Tren", secondary: ["Senal de Tren"] },
      en: { main: "Train Signal" },
    },
    tags: { es: ["Transporte"], en: ["Transport"] },
  },
  {
    id: "635",
    symbol: "🚚",
    description: {
      es: { main: "Camión", secondary: ["Camion"] },
      en: { main: "Truck" },
    },
    tags: { es: ["Vehículos", "Transporte"], en: ["Vehicles", "Transport"] },
  },
  {
    id: "636",
    symbol: "🛴",
    description: {
      es: { main: "Monopatín", secondary: ["Monopatin"] },
      en: { main: "Scooter" },
    },
    tags: { es: ["Vehículos", "Transporte"], en: ["Vehicles", "Transport"] },
  },
  {
    id: "637",
    symbol: "🛼",
    description: { es: { main: "Rollers" }, en: { main: "Roller Skates" } },
    tags: { es: ["Deportes"], en: ["Sports"] },
  },
  {
    id: "638",
    symbol: "🛞",
    description: { es: { main: "Llanta" }, en: { main: "Wheel" } },
    tags: { es: ["Vehículos", "Herramientas"], en: ["Vehicles", "Tools"] },
  },
  {
    id: "639",
    symbol: "🪂",
    description: {
      es: { main: "Paracaídas", secondary: ["Paracaidas"] },
      en: { main: "Parachute" },
    },
    tags: { es: ["Deportes"], en: ["Sports"] },
  },
  {
    id: "640",
    symbol: "⛰",
    description: {
      es: { main: "Montaña", secondary: ["Montana"] },
      en: { main: "Mountain" },
    },
    tags: { es: ["Naturaleza"], en: ["Nature"] },
  },
  {
    id: "641",
    symbol: "🏔",
    description: {
      es: { main: "Montaña con Nieve", secondary: ["Montana con Nieve"] },
      en: { main: "Snowy Mountain" },
    },
    tags: { es: ["Naturaleza", "Invierno"], en: ["Nature", "Winter"] },
  },
  {
    id: "642",
    symbol: "⛽",
    description: {
      es: { main: "Estación de Gas", secondary: ["Estacion de Gas"] },
      en: { main: "Gas Station" },
    },
    tags: { es: ["Transporte"], en: ["Transport"] },
  },
  {
    id: "643",
    symbol: "🪛",
    description: {
      es: { main: "Destornillador" },
      en: { main: "Screwdriver" },
    },
    tags: { es: ["Herramientas"], en: ["Tools"] },
  },
  {
    id: "644",
    symbol: "🔨",
    description: { es: { main: "Martillo" }, en: { main: "Hammer" } },
    tags: { es: ["Herramientas"], en: ["Tools"] },
  },
  {
    id: "645",
    symbol: "⬆",
    description: { es: { main: "Flecha arriba" }, en: { main: "Arrow Up" } },
    tags: { es: ["Flechas"], en: ["Arrows"] },
  },
  {
    id: "646",
    symbol: "⬇",
    description: { es: { main: "Flecha abajo" }, en: { main: "Arrow Down" } },
    tags: { es: ["Flechas"], en: ["Arrows"] },
  },
  {
    id: "647",
    symbol: "➡",
    description: {
      es: { main: "Flecha derecha" },
      en: { main: "Arrow Right" },
    },
    tags: { es: ["Flechas"], en: ["Arrows"] },
  },
  {
    id: "648",
    symbol: "⬅",
    description: {
      es: { main: "Flecha izquierda" },
      en: { main: "Arrow Left" },
    },
    tags: { es: ["Flechas"], en: ["Arrows"] },
  },
  {
    id: "649",
    symbol: "↗",
    description: {
      es: { main: "Arriba a la Derecha", secondary: ["Diagonal Superior"] },
      en: { main: "Up Right Arrow", secondary: ["Top Right"] },
    },
    tags: { es: ["Flechas"], en: ["Arrows"] },
  },
  {
    id: "650",
    symbol: "↘",
    description: {
      es: { main: "Abajo a la Derecha", secondary: ["Diagonal Inferior"] },
      en: { main: "Down Right Arrow", secondary: ["Bottom Right"] },
    },
    tags: { es: ["Flechas"], en: ["Arrows"] },
  },
  {
    id: "651",
    symbol: "↖",
    description: {
      es: { main: "Arriba a la Izquierda", secondary: ["Diagonal Superior"] },
      en: { main: "Up Left Arrow", secondary: ["Top Left"] },
    },
    tags: { es: ["Flechas"], en: ["Arrows"] },
  },
  {
    id: "652",
    symbol: "↙",
    description: {
      es: { main: "Abajo a la Izquierda", secondary: ["Diagonal Inferior"] },
      en: { main: "Down Left Arrow", secondary: ["Bottom Left"] },
    },
    tags: { es: ["Flechas"], en: ["Arrows"] },
  },
  {
    id: "653",
    symbol: "🛢",
    description: {
      es: { main: "Petróleo", secondary: ["Petroleo"] },
      en: { main: "Oil Drum" },
    },
    tags: { es: ["Vehículos", "Transporte"], en: ["Vehicles", "Transport"] },
  },
  {
    id: "654",
    symbol: "#⃣",
    description: { es: { main: "Numeral" }, en: { main: "Hash" } },
    tags: { es: ["Numeros"], en: ["Numbers"] },
  },
  {
    id: "655",
    symbol: "🔤",
    description: { es: { main: "abc" }, en: { main: "abc" } },
    tags: { es: ["Palabras"], en: ["Words"] },
  },
  {
    id: "656",
    symbol: "0⃣",
    description: {
      es: { main: "Cero", secondary: ["0"] },
      en: { main: "Zero", secondary: ["0"] },
    },
    tags: { es: ["Numeros"], en: ["Numbers"] },
  },
  {
    id: "657",
    symbol: "1⃣",
    description: {
      es: { main: "Uno", secondary: ["1"] },
      en: { main: "One", secondary: ["1"] },
    },
    tags: { es: ["Numeros"], en: ["Numbers"] },
  },
  {
    id: "658",
    symbol: "2⃣",
    description: {
      es: { main: "Dos", secondary: ["2"] },
      en: { main: "Two", secondary: ["2"] },
    },
    tags: { es: ["Numeros"], en: ["Numbers"] },
  },
  {
    id: "659",
    symbol: "3⃣",
    description: {
      es: { main: "Tres", secondary: ["3"] },
      en: { main: "Three", secondary: ["3"] },
    },
    tags: { es: ["Numeros"], en: ["Numbers"] },
  },
  {
    id: "660",
    symbol: "4⃣",
    description: {
      es: { main: "Cuatro", secondary: ["4"] },
      en: { main: "Four", secondary: ["4"] },
    },
    tags: { es: ["Numeros"], en: ["Numbers"] },
  },
  {
    id: "661",
    symbol: "5⃣",
    description: {
      es: { main: "Cinco", secondary: ["5"] },
      en: { main: "Five", secondary: ["5"] },
    },
    tags: { es: ["Numeros"], en: ["Numbers"] },
  },
  {
    id: "662",
    symbol: "6⃣",
    description: {
      es: { main: "Seis", secondary: ["6"] },
      en: { main: "Six", secondary: ["6"] },
    },
    tags: { es: ["Numeros"], en: ["Numbers"] },
  },
  {
    id: "663",
    symbol: "7⃣",
    description: {
      es: { main: "Siete", secondary: ["7"] },
      en: { main: "Seven", secondary: ["7"] },
    },
    tags: { es: ["Numeros"], en: ["Numbers"] },
  },
  {
    id: "664",
    symbol: "8⃣",
    description: {
      es: { main: "Ocho", secondary: ["8"] },
      en: { main: "Eight", secondary: ["8"] },
    },
    tags: { es: ["Numeros"], en: ["Numbers"] },
  },
  {
    id: "665",
    symbol: "9⃣",
    description: {
      es: { main: "Nueve", secondary: ["9"] },
      en: { main: "Nine", secondary: ["9"] },
    },
    tags: { es: ["Numeros"], en: ["Numbers"] },
  },
  {
    id: "666",
    symbol: "🆓",
    description: {
      es: { main: "Gratis", secondary: ["Free"] },
      en: { main: "Free" },
    },
    tags: { es: ["Palabras"], en: ["Words"] },
  },
  {
    id: "667",
    symbol: "🔵",
    description: {
      es: { main: "Círculo Azul", secondary: ["Celeste"] },
      en: { main: "Blue Circle", secondary: ["Light Blue"] },
    },
    tags: { es: ["Formas"], en: ["Shapes"] },
  },
  {
    id: "668",
    symbol: "🟡",
    description: {
      es: { main: "Círculo Amarillo" },
      en: { main: "Yellow Circle" },
    },
    tags: { es: ["Formas", "Vehículos"], en: ["Shapes", "Vehicles"] },
  },
  {
    id: "669",
    symbol: "💢",
    description: {
      es: {
        main: "Venas",
        secondary: ["Onomatopeyas", "Envenenado", "Enojado"],
      },
      en: { main: "Veins", secondary: ["Onomatopoeia", "Poisoned", "Angry"] },
    },
    tags: { es: ["Emocion"], en: ["Emotion"] },
  },
  {
    id: "670",
    symbol: "☢",
    description: {
      es: { main: "Tóxico", secondary: ["Toxico", "Nuclear"] },
      en: { main: "Toxic", secondary: ["Nuclear"] },
    },
    tags: { es: ["Guerra"], en: ["War"] },
  },
  {
    id: "671",
    symbol: "⬛",
    description: {
      es: { main: "Cuadrado Negro" },
      en: { main: "Black Square" },
    },
    tags: {
      es: ["Formas", "Entretenimiento"],
      en: ["Shapes", "Entertainment"],
    },
  },
  {
    id: "672",
    symbol: "▪",
    description: {
      es: { main: "Cuadradito Negro", secondary: ["Cuadrado Negro"] },
      en: { main: "Square" },
    },
    tags: {
      es: ["Formas", "Entretenimiento"],
      en: ["Shapes", "Entertainment"],
    },
  },
  {
    id: "673",
    symbol: "▫",
    description: {
      es: { main: "Cuadradito Blanco", secondary: ["Cuadrado Blanco"] },
      en: { main: "Square" },
    },
    tags: {
      es: ["Formas", "Entretenimiento"],
      en: ["Shapes", "Entertainment"],
    },
  },
  {
    id: "674",
    symbol: "🟣",
    description: {
      es: { main: "Círculo Violeta", secondary: ["Círculo Morado"] },
      en: { main: "Purple Circle" },
    },
    tags: { es: ["Formas"], en: ["Shapes"] },
  },
  {
    id: "675",
    symbol: "🟤",
    description: {
      es: { main: "Círculo Marrón", secondary: ["Círculo Marron"] },
      en: { main: "Brown Circle" },
    },
    tags: { es: ["Formas"], en: ["Shapes"] },
  },
  {
    id: "676",
    symbol: "⚫",
    description: {
      es: { main: "Círculo Negro", secondary: ["Círculo Negro", "Go"] },
      en: { main: "Black Circle", secondary: ["Go"] },
    },
    tags: {
      es: ["Formas", "Entretenimiento"],
      en: ["Shapes", "Entertainment"],
    },
  },
  {
    id: "677",
    symbol: "⚪",
    description: {
      es: { main: "Círculo Blanco", secondary: ["Círculo Blanco", "Go"] },
      en: { main: "White Circle", secondary: ["Go"] },
    },
    tags: {
      es: ["Formas", "Entretenimiento"],
      en: ["Shapes", "Entertainment"],
    },
  },
  {
    id: "678",
    symbol: "🟥",
    description: {
      es: { main: "Cuadrado Rojo", secondary: ["Tarjeta Roja"] },
      en: { main: "Red Square", secondary: ["Red Card"] },
    },
    tags: {
      es: ["Formas", "Entretenimiento", "Deportes", "Futbol"],
      en: ["Shapes", "Entertainment", "Sports", "Soccer"],
    },
  },
  {
    id: "679",
    symbol: "🟨",
    description: {
      es: { main: "Cuadrado Amarillo", secondary: ["Tarjeta Amarilla"] },
      en: { main: "Yellow Square", secondary: ["Yellow Card"] },
    },
    tags: {
      es: ["Formas", "Entretenimiento", "Deportes", "Futbol"],
      en: ["Shapes", "Entertainment", "Sports", "Soccer"],
    },
  },
  {
    id: "680",
    symbol: "🟧",
    description: {
      es: { main: "Cuadrado Naranja" },
      en: { main: "Orange Square" },
    },
    tags: { es: ["Formas"], en: ["Shapes"] },
  },
  {
    id: "681",
    symbol: "🟩",
    description: {
      es: { main: "Cuadrado Verde" },
      en: { main: "Green Square" },
    },
    tags: { es: ["Formas"], en: ["Shapes"] },
  },
  {
    id: "682",
    symbol: "🟦",
    description: {
      es: { main: "Cuadrado Azul", secondary: ["Cuadrado Celeste"] },
      en: { main: "Blue Square" },
    },
    tags: { es: ["Formas"], en: ["Shapes"] },
  },
  {
    id: "683",
    symbol: "🟪",
    description: {
      es: { main: "Cuadrado Violeta", secondary: ["Cuadrado Morado"] },
      en: { main: "Purple Square" },
    },
    tags: { es: ["Formas"], en: ["Shapes"] },
  },
  {
    id: "684",
    symbol: "🟫",
    description: {
      es: { main: "Cuadrado Marrón", secondary: ["Cuadrado Marron"] },
      en: { main: "Brown Square" },
    },
    tags: { es: ["Formas"], en: ["Shapes"] },
  },
  {
    id: "685",
    symbol: "🆘",
    description: {
      es: { main: "SOS", secondary: ["Ayuda"] },
      en: { main: "SOS", secondary: ["Help"] },
    },
    tags: { es: ["Emergencias"], en: ["Emergency"] },
  },
  {
    id: "686",
    symbol: "🚑",
    description: { es: { main: "Ambulancia" }, en: { main: "Ambulance" } },
    tags: { es: ["Emergencias", "Salud"], en: ["Emergency", "Health"] },
  },
  {
    id: "687",
    symbol: "🚒",
    description: {
      es: { main: "Camión de Bomberos", secondary: ["Camion"] },
      en: { main: "Fire Truck" },
    },
    tags: {
      es: ["Profesiones", "Emergencias"],
      en: ["Professions", "Emergency"],
    },
  },
  {
    id: "688",
    symbol: "🔥",
    description: {
      es: { main: "Fuego", secondary: ["Llamas"] },
      en: { main: "Fire", secondary: ["Flames"] },
    },
    tags: {
      es: ["Emergencias", "Profesiones", "Fiesta"],
      en: ["Emergency", "Professions", "Party"],
    },
  },
  {
    id: "689",
    symbol: "🌝",
    description: {
      es: { main: "Luna Llena Animada" },
      en: { main: "Full Moon Face" },
    },
    tags: {
      es: ["Espacio", "Universo", "Clima", "Noche"],
      en: ["Space", "Universe", "Weather", "Night"],
    },
  },
  {
    id: "690",
    symbol: "🌚",
    description: {
      es: { main: "Eclipse Animado" },
      en: { main: "New Moon Face" },
    },
    tags: {
      es: ["Espacio", "Universo", "Clima", "Noche"],
      en: ["Space", "Universe", "Weather", "Night"],
    },
  },
  {
    id: "691",
    symbol: "🌕",
    description: { es: { main: "Luna Llena" }, en: { main: "Full Moon" } },
    tags: {
      es: ["Espacio", "Universo", "Clima", "Noche"],
      en: ["Space", "Universe", "Weather", "Night"],
    },
  },
  {
    id: "692",
    symbol: "🌑",
    description: { es: { main: "Eclipse" }, en: { main: "New Moon" } },
    tags: {
      es: ["Espacio", "Universo", "Clima", "Noche"],
      en: ["Space", "Universe", "Weather", "Night"],
    },
  },
  {
    id: "693",
    symbol: "🌙",
    description: { es: { main: "Medialuna" }, en: { main: "Crescent Moon" } },
    tags: {
      es: ["Espacio", "Universo", "Clima", "Noche"],
      en: ["Space", "Universe", "Weather", "Night"],
    },
  },
  {
    id: "694",
    symbol: "🌛",
    description: {
      es: { main: "Medialuna Animada" },
      en: { main: "First Quarter Moon Face" },
    },
    tags: {
      es: ["Espacio", "Universo", "Clima", "Noche"],
      en: ["Space", "Universe", "Weather", "Night"],
    },
  },
  {
    id: "695",
    symbol: "🫛",
    description: {
      es: { main: "Arvejas", secondary: ["Habas"] },
      en: { main: "Pea Pod", secondary: ["Beans"] },
    },
    tags: { es: ["Vegetales", "Comidas"], en: ["Vegetables", "Food"] },
  },
  {
    id: "696",
    symbol: "🦃",
    description: { es: { main: "Pavo" }, en: { main: "Turkey" } },
    tags: { es: ["Animales", "Comidas"], en: ["Animals", "Food"] },
  },
  {
    id: "697",
    symbol: "🦛",
    description: {
      es: { main: "Hipopótamo", secondary: ["Hipopotamo"] },
      en: { main: "Hippo" },
    },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "698",
    symbol: "🎞",
    description: {
      es: { main: "Rollo de Pelicula", secondary: ["Video"] },
      en: { main: "Film Frames", secondary: ["Video"] },
    },
    tags: { es: ["Entretenimiento"], en: ["Entertainment"] },
  },
  {
    id: "699",
    symbol: "💭",
    description: {
      es: { main: "Pensamiento" },
      en: { main: "Thought Balloon" },
    },
    tags: { es: ["Gestos", "Comics"], en: ["Gestures", "Comics"] },
  },
  {
    id: "700",
    symbol: "✉",
    description: { es: { main: "Carta" }, en: { main: "Envelope" } },
    tags: { es: ["Oficina", "Comunicacion"], en: ["Office", "Communication"] },
  },
  {
    id: "701",
    symbol: "🪡",
    description: {
      es: { main: "Aguja", secondary: ["Tejer"] },
      en: { main: "Sewing Needle", secondary: ["Knitting"] },
    },
    tags: {
      es: ["Ropa", "Mujeres", "Tareas"],
      en: ["Clothing", "Women", "Tasks"],
    },
  },
  {
    id: "702",
    symbol: "🧶",
    description: {
      es: { main: "Tejer", secondary: ["Aguja"] },
      en: { main: "Yarn", secondary: ["Needle"] },
    },
    tags: {
      es: ["Ropa", "Mujeres", "Tareas"],
      en: ["Clothing", "Women", "Tasks"],
    },
  },
  {
    id: "703",
    symbol: "🟢",
    description: {
      es: { main: "Círculo Verde" },
      en: { main: "Green Circle" },
    },
    tags: { es: ["Formas", "Vehículos"], en: ["Shapes", "Vehicles"] },
  },
  {
    id: "704",
    symbol: "🔴",
    description: { es: { main: "Círculo Rojo" }, en: { main: "Red Circle" } },
    tags: { es: ["Formas", "Vehículos"], en: ["Shapes", "Vehicles"] },
  },
  {
    id: "705",
    symbol: "🏇",
    description: {
      es: { main: "Caballo de carreras" },
      en: { main: "Racehorse" },
    },
    tags: { es: ["Animales"], en: ["Animals"] },
  },
  {
    id: "706",
    symbol: "🎄",
    description: {
      es: { main: "Árbol de Navidad" },
      en: { main: "Christmas Tree" },
    },
    tags: { es: ["Invierno", "Plantas"], en: ["Winter", "Plants"] },
  },
  {
    id: "707",
    symbol: "😪",
    description: { es: { main: "Cara Sueño" }, en: { main: "Sleepy Face" } },
    tags: { es: ["Cara"], en: ["Face"] },
  },
  {
    id: "708",
    symbol: "👩‍💻",
    description: {
      es: { main: "En la compu" },
      en: { main: "Woman Technologist" },
    },
    tags: {
      es: ["Informatica", "Profesiones", "Programacion", "Mujeres"],
      en: ["Computing", "Professions", "Programming", "Women"],
    },
  },
  {
    id: "709",
    symbol: "👩‍🔬",
    description: {
      es: { main: "Cientifica" },
      en: { main: "Woman Scientist" },
    },
    tags: { es: ["Mujeres", "Profesiones"], en: ["Women", "Professions"] },
  },
  {
    id: "710",
    symbol: "🧑‍🏫",
    description: { es: { main: "Profesor" }, en: { main: "Teacher" } },
    tags: { es: ["Profesiones", "Estudio"], en: ["Professions", "Study"] },
  },
  {
    id: "711",
    symbol: "👩‍🏫",
    description: { es: { main: "Profesora" }, en: { main: "Woman Teacher" } },
    tags: {
      es: ["Profesiones", "Estudio", "Mujeres"],
      en: ["Professions", "Study", "Women"],
    },
  },
  {
    id: "712",
    symbol: "👩‍🍳",
    description: { es: { main: "Cocinera Chef" }, en: { main: "Woman Cook" } },
    tags: {
      es: ["Profesiones", "Comidas", "Mujeres", "Cocina"],
      en: ["Professions", "Food", "Women", "Kitchen"],
    },
  },
  {
    id: "713",
    symbol: "🏜",
    description: { es: { main: "Desierto" }, en: { main: "Desert" } },
    tags: { es: ["Clima", "Paisaje"], en: ["Weather", "Landscape"] },
  },
  {
    id: "714",
    symbol: "🦶",
    description: { es: { main: "Pie" }, en: { main: "Foot" } },
    tags: { es: ["Cuerpo"], en: ["Body"] },
  },
  {
    id: "715",
    symbol: "🤞",
    description: {
      es: { main: "Dedos cruzados", secondary: ["Ojala"] },
      en: { main: "Crossed Fingers", secondary: ["Hopefully"] },
    },
    tags: { es: ["Gestos", "Suerte"], en: ["Gestures", "Luck"] },
  },
  {
    id: "716",
    symbol: "🧑‍🦲",
    description: { es: { main: "Pelado" }, en: { main: "Bald" } },
    tags: { es: ["Personas", "Hombres"], en: ["People", "Men"] },
  },
  {
    id: "717",
    symbol: "💧",
    description: { es: { main: "Gota de Agua" }, en: { main: "Water Drop" } },
    tags: { es: ["Clima", "Naturaleza"], en: ["Weather", "Nature"] },
  },
  {
    id: "718",
    symbol: "💦",
    description: {
      es: { main: "Salpicadura de Agua", secondary: ["Gotas"] },
      en: { main: "Sweat Droplets", secondary: ["Drops", "Splash"] },
    },
    tags: { es: ["Clima", "Naturaleza"], en: ["Weather", "Nature"] },
  },
  {
    id: "719",
    symbol: "🪐",
    description: { es: { main: "Saturno" }, en: { main: "Ringed Planet" } },
    tags: { es: ["Espacio", "Universo"], en: ["Space", "Universe"] },
  },
  {
    id: "720",
    symbol: "🚔",
    description: {
      es: {
        main: "Patrulla",
        secondary: ["Carro de Policia", "Coche de Policia", "Auto de Policia"],
      },
      en: { main: "Police Car", secondary: ["Police Car"] },
    },
    tags: { es: ["Vehículos", "Transporte"], en: ["Vehicles", "Transport"] },
  },
  {
    id: "721",
    symbol: "🛫",
    description: {
      es: { main: "Despegue", secondary: ["Avion"] },
      en: { main: "Airplane Departure", secondary: ["Airplane"] },
    },
    tags: { es: ["Vehículos", "Viaje"], en: ["Vehicles", "Travel"] },
  },
  {
    id: "722",
    symbol: "🛬",
    description: {
      es: { main: "Aterrizaje", secondary: ["Avion"] },
      en: { main: "Airplane Arrival", secondary: ["Airplane"] },
    },
    tags: { es: ["Vehículos", "Viaje"], en: ["Vehicles", "Travel"] },
  },
  {
    id: "723",
    symbol: "🌠",
    description: {
      es: { main: "Estrella Fugaz" },
      en: { main: "Shooting Star" },
    },
    tags: { es: ["Espacio", "Universo"], en: ["Space", "Universe"] },
  },
  {
    id: "724",
    symbol: "🎇",
    description: {
      es: { main: "Fuegos Artificiales" },
      en: { main: "Fireworks" },
    },
    tags: { es: ["Celebracion", "Fiesta"], en: ["Celebration", "Party"] },
  },
  {
    id: "725",
    symbol: "🎆",
    description: {
      es: { main: "Fuegos Artificiales" },
      en: { main: "Fireworks" },
    },
    tags: { es: ["Celebracion", "Fiesta"], en: ["Celebration", "Party"] },
  },
  {
    id: "726",
    symbol: "🌄",
    description: { es: { main: "Amanecer" }, en: { main: "Sunrise" } },
    tags: {
      es: ["Clima", "Campo", "Paisaje"],
      en: ["Weather", "Country", "Landscape"],
    },
  },
  {
    id: "727",
    symbol: "🌇",
    description: { es: { main: "Amanecer" }, en: { main: "Sunrise" } },
    tags: {
      es: ["Clima", "Ciudad", "Paisaje"],
      en: ["Weather", "City", "Landscape"],
    },
  },
  {
    id: "728",
    symbol: "🌋",
    description: {
      es: { main: "Volcán en Erupción", secondary: ["Volcan"] },
      en: { main: "Volcano Eruption", secondary: ["Volcano"] },
    },
    tags: { es: ["Naturaleza", "Paisaje"], en: ["Nature", "Landscape"] },
  },
  {
    id: "729",
    symbol: "🌧",
    description: {
      es: { main: "Lluvia", secondary: ["Paraguas"] },
      en: { main: "Rain", secondary: ["Umbrella"] },
    },
    tags: { es: ["Clima"], en: ["Weather"] },
  },
  {
    id: "730",
    symbol: "🌨",
    description: {
      es: { main: "Granizo", secondary: ["Nieve"] },
      en: { main: "Hail", secondary: ["Snow"] },
    },
    tags: { es: ["Clima", "Invierno"], en: ["Weather", "Winter"] },
  },
  {
    id: "731",
    symbol: "🌩",
    description: {
      es: { main: "Relámpago", secondary: ["Relampago", "Rayo"] },
      en: { main: "Lightning", secondary: ["Lightning", "Thunder"] },
    },
    tags: { es: ["Clima"], en: ["Weather"] },
  },
  {
    id: "732",
    symbol: "🍭",
    description: {
      es: { main: "Paleta", secondary: ["Chupetin"] },
      en: { main: "Lollipop", secondary: ["Lollipop"] },
    },
    tags: { es: ["Dulces"], en: ["Food", "Dessert", "Sweets"] },
  },
  {
    id: "733",
    symbol: "🫑",
    description: { es: { main: "Pimiento" }, en: { main: "Bell Pepper" } },
    tags: { es: ["Vegetales", "Comidas"], en: ["Vegetables", "Food"] },
  },
  {
    id: "734",
    symbol: "💺",
    description: {
      es: { main: "Asiento", secondary: ["Avion", "Avión"] },
      en: { main: "Seat", secondary: ["Airplane"] },
    },
    tags: { es: ["Viaje", "Vacaciones"], en: ["Travel", "Vacation"] },
  },
  {
    id: "735",
    symbol: "⛺",
    description: {
      es: { main: "Carpa", secondary: ["Campamento", "Tienda"] },
      en: { main: "Tent", secondary: ["Camping", "Tent"] },
    },
    tags: { es: ["Naturaleza", "Vacaciones"], en: ["Nature", "Vacation"] },
  },
  {
    id: "736",
    symbol: "🏕",
    description: {
      es: { main: "Campamento", secondary: ["Carpa", "Tienda"] },
      en: { main: "Camping", secondary: ["Tent", "Camping"] },
    },
    tags: { es: ["Naturaleza", "Vacaciones"], en: ["Nature", "Vacation"] },
  },
  {
    id: "737",
    symbol: "🌌",
    description: {
      es: { main: "Noche Estrellada" },
      en: { main: "Starry Night" },
    },
    tags: {
      es: ["Clima", "Campo", "Paisaje"],
      en: ["Weather", "Country", "Landscape"],
    },
  },
  {
    id: "738",
    symbol: "🌃",
    description: {
      es: { main: "Anochecer" },
      en: { main: "Night with Stars" },
    },
    tags: {
      es: ["Clima", "Ciudad", "Paisaje"],
      en: ["Weather", "City", "Landscape"],
    },
  },
  {
    id: "739",
    symbol: "🗻",
    description: {
      es: { main: "Everest", secondary: ["Nieve"] },
      en: { main: "Mount Fuji", secondary: ["Snow"] },
    },
    tags: {
      es: ["Naturaleza", "Paisaje", "Invierno"],
      en: ["Nature", "Landscape", "Winter"],
    },
  },
  {
    id: "740",
    symbol: "🎢",
    description: {
      es: { main: "Montaña Rusa", secondary: ["Montana Rusa"] },
      en: { main: "Roller Coaster" },
    },
    tags: { es: ["Entretenimiento", "Juegos"], en: ["Entertainment", "Games"] },
  },
  {
    id: "741",
    symbol: "🏥",
    description: { es: { main: "Hospital" }, en: { main: "Hospital" } },
    tags: { es: ["Salud", "Edificios"], en: ["Health", "Buildings"] },
  },
  {
    id: "742",
    symbol: "🏨",
    description: { es: { main: "Hotel" }, en: { main: "Hotel" } },
    tags: { es: ["Edificios", "Viaje"], en: ["Buildings", "Travel"] },
  },
  {
    id: "743",
    symbol: "🪧",
    description: { es: { main: "Cartel" }, en: { main: "Placard" } },
    tags: { es: ["Objetos"], en: ["Objects"] },
  },
  {
    id: "744",
    symbol: "🛋",
    description: {
      es: { main: "Sillón", secondary: ["Sillon"] },
      en: { main: "CouchAndLamp" },
    },
    tags: { es: ["Casa", "Muebles"], en: ["Home", "Furniture"] },
  },
  {
    id: "745",
    symbol: "📙",
    description: { es: { main: "Libro naranja" }, en: { main: "Orange Book" } },
    tags: { es: ["Estudio", "Lectura"], en: ["Study", "Reading"] },
  },
  {
    id: "746",
    symbol: "📒",
    description: {
      es: { main: "Cuaderno amarillo", secondary: ["Libro amarillo"] },
      en: { main: "Ledger", secondary: ["Yellow Book"] },
    },
    tags: {
      es: ["Estudio", "Lectura", "Escuela"],
      en: ["Study", "Reading", "School"],
    },
  },
  {
    id: "747",
    symbol: "📘",
    description: { es: { main: "Libro azul" }, en: { main: "Blue Book" } },
    tags: { es: ["Estudio", "Lectura"], en: ["Study", "Reading"] },
  },
  {
    id: "748",
    symbol: "📗",
    description: { es: { main: "Libro verde" }, en: { main: "Green Book" } },
    tags: { es: ["Estudio", "Lectura"], en: ["Study", "Reading"] },
  },
  {
    id: "749",
    symbol: "📕",
    description: { es: { main: "Libro rojo" }, en: { main: "Red Book" } },
    tags: { es: ["Estudio", "Lectura"], en: ["Study", "Reading"] },
  },
  {
    id: "750",
    symbol: "📓",
    description: {
      es: { main: "Libro cuadriculado", secondary: ["Gris"] },
      en: { main: "Notebook", secondary: ["Grey"] },
    },
    tags: {
      es: ["Estudio", "Lectura", "Escuela"],
      en: ["Study", "Reading", "School"],
    },
  },
  {
    id: "751",
    symbol: "📏",
    description: { es: { main: "Regla" }, en: { main: "Straight Ruler" } },
    tags: {
      es: ["Estudio", "Escuela", "Matematicas"],
      en: ["Study", "School", "Math"],
    },
  },
  {
    id: "752",
    symbol: "📐",
    description: { es: { main: "Escuadra" }, en: { main: "Triangular Ruler" } },
    tags: {
      es: ["Estudio", "Escuela", "Matematicas"],
      en: ["Study", "School", "Math"],
    },
  },
  {
    id: "753",
    symbol: "👖",
    description: { es: { main: "Pantalon" }, en: { main: "Jeans" } },
    tags: { es: ["Ropa", "Moda"], en: ["Clothing", "Fashion"] },
  },
  {
    id: "754",
    symbol: "📊",
    description: {
      es: {
        main: "Estadísticas",
        secondary: ["Grafico", "Gráfico", "Estadísticas"],
      },
      en: { main: "Bar Chart", secondary: ["Chart", "Statistics"] },
    },
    tags: {
      es: ["Trabajo", "Oficina", "Matematicas"],
      en: ["Work", "Office", "Math"],
    },
  },
  {
    id: "755",
    symbol: "📈",
    description: {
      es: {
        main: "Gráfico hacia arriba",
        secondary: ["Grafico hacia arriba", "up"],
      },
      en: { main: "Chart Increasing", secondary: ["Chart Up", "Up"] },
    },
    tags: {
      es: ["Trabajo", "Oficina", "Finanzas"],
      en: ["Work", "Office", "Finance"],
    },
  },
  {
    id: "756",
    symbol: "📉",
    description: {
      es: {
        main: "Gráfico hacia abajo",
        secondary: ["Grafico hacia abajo", "down"],
      },
      en: { main: "Chart Decreasing", secondary: ["Chart Down", "Down"] },
    },
    tags: {
      es: ["Trabajo", "Oficina", "Finanzas"],
      en: ["Work", "Office", "Finance"],
    },
  },
  {
    id: "757",
    symbol: "🧫",
    description: { es: { main: "Plato de Petri" }, en: { main: "Petri Dish" } },
    tags: { es: ["Ciencia", "Biologia"], en: ["Science", "Biology"] },
  },
  {
    id: "758",
    symbol: "🎊",
    description: {
      es: { main: "Festejo", secondary: ["Fiesta"] },
      en: { main: "Confetti Ball", secondary: ["Party"] },
    },
    tags: { es: ["Celebracion", "Fiesta"], en: ["Celebration", "Party"] },
  },
  {
    id: "759",
    symbol: "📥",
    description: {
      es: { main: "Descargar", secondary: ["Cargar", "Bajar"] },
      en: { main: "Download", secondary: ["Upload", "Down"] },
    },
    tags: { es: ["Tecnologia", "Oficina"], en: ["Technology", "Office"] },
  },
  {
    id: "760",
    symbol: "📤",
    description: {
      es: { main: "Cargar", secondary: ["Descargar", "Subir"] },
      en: { main: "Upload", secondary: ["Download", "Up"] },
    },
    tags: { es: ["Tecnologia", "Oficina"], en: ["Technology", "Office"] },
  },
  {
    id: "761",
    symbol: "🧚‍♀️",
    description: { es: { main: "Hada" }, en: { main: "Woman Fairy" } },
    tags: { es: ["Fantasia", "Magia"], en: ["Fantasy", "Magic"] },
  },
  {
    id: "762",
    symbol: "👨‍⚕️",
    description: { es: { main: "Doctor" }, en: { main: "Man Health Worker" } },
    tags: { es: ["Profesiones", "Salud"], en: ["Professions", "Health"] },
  },
  {
    id: "763",
    symbol: "👩‍⚕️",
    description: {
      es: { main: "Doctora" },
      en: { main: "Woman Health Worker" },
    },
    tags: {
      es: ["Profesiones", "Mujeres", "Salud"],
      en: ["Professions", "Women", "Health"],
    },
  },
  {
    id: "764",
    symbol: "🕴️",
    description: {
      es: { main: "Hombre de traje" },
      en: { main: "Man in Suit" },
    },
    tags: {
      es: ["Ropa", "Moda", "Elegante"],
      en: ["Clothing", "Fashion", "Elegant"],
    },
  },
  {
    id: "765",
    symbol: "🖥",
    description: {
      es: {
        main: "Computadora de Escritorio",
        secondary: ["Computadora", "PC"],
      },
      en: { main: "Desktop Computer", secondary: ["Computer", "PC"] },
    },
    tags: {
      es: ["Informatica", "Tecnologia", "Oficina", "Trabajo"],
      en: ["Computing", "Technology", "Office", "Work"],
    },
  },
  {
    id: "766",
    symbol: "⌨",
    description: {
      es: { main: "Teclado", secondary: ["Computadora", "PC"] },
      en: { main: "Keyboard", secondary: ["Computer", "PC"] },
    },
    tags: {
      es: ["Informatica", "Tecnologia", "Oficina", "Trabajo"],
      en: ["Computing", "Technology", "Office", "Work"],
    },
  },
  {
    id: "767",
    symbol: "🔘",
    description: {
      es: {
        main: "Círculo dentro de un círculo",
        secondary: ["Círculo dentro de un Círculo"],
      },
      en: { main: "Radio Button" },
    },
    tags: { es: ["Organizacion", "Tareas"], en: ["Organization", "Tasks"] },
  },
  {
    id: "768",
    symbol: "🕹",
    description: {
      es: { main: "Joystick", secondary: ["mando", "play", "juego", "jugar"] },
      en: { main: "Joystick", secondary: ["controller", "play", "game"] },
    },
    tags: { es: ["Entretenimiento"], en: ["Entertainment"] },
  },
  {
    id: "769",
    symbol: "🖨",
    description: { es: { main: "Impresora" }, en: { main: "Printer" } },
    tags: { es: ["Oficina"], en: ["Office"] },
  },
  {
    id: "770",
    symbol: "🪪",
    description: {
      es: { main: "Documento", secondary: ["DNI"] },
      en: { main: "ID Card", secondary: ["ID"] },
    },
    tags: { es: ["Tramites"], en: ["Paperwork"] },
  },
  {
    id: "771",
    symbol: "🧾",
    description: {
      es: { main: "Factura", secondary: ["Ticket"] },
      en: { main: "Receipt", secondary: ["Ticket"] },
    },
    tags: { es: ["Compras"], en: ["Shopping"] },
  },
  {
    id: "772",
    symbol: "⛓",
    description: { es: { main: "Cadenas" }, en: { main: "Chains" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "773",
    symbol: "💿",
    description: {
      es: { main: "CD", secondary: ["Música"] },
      en: { main: "CD", secondary: ["Music"] },
    },
    tags: { es: ["Música"], en: ["Music"] },
  },
  {
    id: "774",
    symbol: "🪫",
    description: {
      es: {
        main: "Batería Baja",
        secondary: [
          "Bateria baja",
          "Energia",
          "Energía",
          "Energías",
          "Pila",
          "Pilas",
        ],
      },
      en: { main: "Low Battery", secondary: ["Low Battery"] },
    },
    tags: { es: ["Tecnologia"], en: ["Technology"] },
  },
  {
    id: "775",
    symbol: "🪓",
    description: { es: { main: "Hacha" }, en: { main: "Axe" } },
    tags: { es: ["Herramientas"], en: ["Tools"] },
  },
  {
    id: "776",
    symbol: "🧰",
    description: {
      es: { main: "Caja de Herramientas" },
      en: { main: "Toolbox" },
    },
    tags: { es: ["Trabajo"], en: ["Work"] },
  },
  {
    id: "777",
    symbol: "📡",
    description: {
      es: { main: "Antena Satelital" },
      en: { main: "Satellite Antenna" },
    },
    tags: { es: ["Mundo", "Tecnologia"], en: ["World", "Technology"] },
  },
  {
    id: "778",
    symbol: "📑",
    description: { es: { main: "Papeles" }, en: { main: "Bookmark Tabs" } },
    tags: { es: ["Oficina"], en: ["Office"] },
  },
  {
    id: "779",
    symbol: "📃",
    description: {
      es: { main: "Papel enrollado" },
      en: { main: "Page with Curl" },
    },
    tags: { es: ["Oficina"], en: ["Office"] },
  },
  {
    id: "780",
    symbol: "⛏",
    description: { es: { main: "Pico" }, en: { main: "Pickaxe" } },
    tags: { es: ["Herramientas"], en: ["Tools"] },
  },
  {
    id: "781",
    symbol: "🔌",
    description: { es: { main: "Enchufe" }, en: { main: "Electric Plug" } },
    tags: { es: ["Tecnologia"], en: ["Technology"] },
  },
  {
    id: "782",
    symbol: "🪥",
    description: {
      es: { main: "Cepillo de Dientes" },
      en: { main: "Toothbrush" },
    },
    tags: { es: ["Baño"], en: ["Bath"] },
  },
  {
    id: "783",
    symbol: "🪠",
    description: { es: { main: "Sopapa" }, en: { main: "Plunger" } },
    tags: { es: ["Baño"], en: ["Bath"] },
  },
  {
    id: "784",
    symbol: "🛁",
    description: {
      es: { main: "Bañadero", secondary: ["Banadero", "Bano", "Banio"] },
      en: { main: "Bathtub", secondary: ["Bath"] },
    },
    tags: { es: ["Baño"], en: ["Bath"] },
  },
  {
    id: "785",
    symbol: "á",
    description: { es: { main: "a acentuada" }, en: { main: "a accented" } },
    tags: { es: ["Letras"], en: ["Letters"] },
  },
  {
    id: "786",
    symbol: "é",
    description: { es: { main: "e acentuada" }, en: { main: "e accented" } },
    tags: { es: ["Letras"], en: ["Letters"] },
  },
  {
    id: "787",
    symbol: "í",
    description: { es: { main: "i acentuada" }, en: { main: "i accented" } },
    tags: { es: ["Letras"], en: ["Letters"] },
  },
  {
    id: "788",
    symbol: "ó",
    description: { es: { main: "o acentuada" }, en: { main: "o accented" } },
    tags: { es: ["Letras"], en: ["Letters"] },
  },
  {
    id: "789",
    symbol: "ú",
    description: { es: { main: "u acentuada" }, en: { main: "u accented" } },
    tags: { es: ["Letras"], en: ["Letters"] },
  },
  {
    id: "790",
    symbol: "ñ",
    description: {
      es: { main: "eñe", secondary: ["enie"] },
      en: { main: "n with tilde" },
    },
    tags: { es: ["Letras"], en: ["Letters"] },
  },
  {
    id: "791",
    symbol: "ü",
    description: {
      es: { main: "u con diéresis" },
      en: { main: "u with diaeresis" },
    },
    tags: { es: ["Letras"], en: ["Letters"] },
  },
  {
    id: "792",
    symbol: "Á",
    description: { es: { main: "A acentuada" }, en: { main: "A accented" } },
    tags: { es: ["Letras"], en: ["Letters"] },
  },
  {
    id: "793",
    symbol: "É",
    description: { es: { main: "E acentuada" }, en: { main: "E accented" } },
    tags: { es: ["Letras"], en: ["Letters"] },
  },
  {
    id: "794",
    symbol: "Í",
    description: { es: { main: "I acentuada" }, en: { main: "I accented" } },
    tags: { es: ["Letras"], en: ["Letters"] },
  },
  {
    id: "795",
    symbol: "Ó",
    description: { es: { main: "O acentuada" }, en: { main: "O accented" } },
    tags: { es: ["Letras"], en: ["Letters"] },
  },
  {
    id: "796",
    symbol: "Ú",
    description: { es: { main: "U acentuada" }, en: { main: "U accented" } },
    tags: { es: ["Letras"], en: ["Letters"] },
  },
  {
    id: "797",
    symbol: "Ñ",
    description: {
      es: { main: "EÑE", secondary: ["ENIE"] },
      en: { main: "N with tilde" },
    },
    tags: { es: ["Letras"], en: ["Letters"] },
  },
  {
    id: "798",
    symbol: "Ü",
    description: {
      es: { main: "U con diéresis" },
      en: { main: "U with diaeresis" },
    },
    tags: { es: ["Letras"], en: ["Letters"] },
  },
  {
    id: "799",
    symbol: "☯︎",
    description: { es: { main: "Ying Yang" }, en: { main: "Yin Yang" } },
    tags: { es: ["Random", "Signos"], en: ["Random", "Signs"] },
  },
  {
    id: "800",
    symbol: "𓋹",
    description: { es: { main: "Cruz de Ankh" }, en: { main: "Ankh Cross" } },
    tags: { es: ["Random", "Signos"], en: ["Random", "Signs"] },
  },
  {
    id: "801",
    symbol: "▯",
    description: {
      es: { main: "Rectángulo vertical" },
      en: { main: "Vertical rectangle" },
    },
    tags: { es: ["Símbolos", "Signos"], en: ["Symbols", "Signs"] },
  },
  {
    id: "802",
    symbol: "₂",
    description: { es: { main: "Sub 2" }, en: { main: "Sub 2" } },
    tags: {
      es: ["Símbolos", "Matematica", "Signos"],
      en: ["Symbols", "Math", "Signs"],
    },
  },
  {
    id: "803",
    symbol: "©",
    description: { es: { main: "Copyright" }, en: { main: "Copyright" } },
    tags: {
      es: ["Símbolos", "Legales", "Ortografia", "Signos"],
      en: ["Symbols", "Legal", "Orthography", "Signs"],
    },
  },
  {
    id: "804",
    symbol: "³",
    description: {
      es: { main: "Elevado al cubo" },
      en: { main: "Raised to the cube" },
    },
    tags: {
      es: ["Símbolos", "Matematica", "Signos"],
      en: ["Symbols", "Math", "Signs"],
    },
  },
  {
    id: "805",
    symbol: "¬",
    description: {
      es: { main: "Negación", secondary: ["Negación"] },
      en: { main: "Negation" },
    },
    tags: {
      es: ["Símbolos", "Logica", "Matematica", "Programacion", "Signos"],
      en: ["Symbols", "Logic", "Math", "Programming", "Signs"],
    },
  },
  {
    id: "806",
    symbol: "ß",
    description: { es: { main: "Beta" }, en: { main: "Beta" } },
    tags: { es: ["Símbolos", "Signos"], en: ["Symbols", "Signs"] },
  },
  {
    id: "807",
    symbol: "∩",
    description: { es: { main: "Intersección" }, en: { main: "Intersection" } },
    tags: {
      es: ["Símbolos", "Conjuntos", "Matematica", "Signos"],
      en: ["Symbols", "Math", "Sets", "Signs"],
    },
  },
  {
    id: "808",
    symbol: "√",
    description: { es: { main: "Raíz cuadrada" }, en: { main: "Square root" } },
    tags: {
      es: ["Símbolos", "Matematica", "Signos"],
      en: ["Symbols", "Math", "Signs"],
    },
  },
  {
    id: "809",
    symbol: "∏",
    description: { es: { main: "Productoria" }, en: { main: "Product" } },
    tags: {
      es: ["Símbolos", "Matematica", "Signos"],
      en: ["Symbols", "Math", "Signs"],
    },
  },
  {
    id: "810",
    symbol: "π",
    description: { es: { main: "Pi" }, en: { main: "Pi" } },
    tags: {
      es: ["Símbolos", "Matematica", "Signos"],
      en: ["Symbols", "Math", "Signs"],
    },
  },
  {
    id: "811",
    symbol: "∃",
    description: { es: { main: "Existe" }, en: { main: "Exists" } },
    tags: {
      es: ["Símbolos", "Conjuntos", "Matematica", "Signos"],
      en: ["Symbols", "Math", "Sets", "Signs"],
    },
  },
  {
    id: "812",
    symbol: "≥",
    description: {
      es: { main: "Mayor o igual" },
      en: { main: "Greater than or equal to" },
    },
    tags: {
      es: ["Símbolos", "Matematica", "Signos"],
      en: ["Symbols", "Math", "Signs"],
    },
  },
  {
    id: "813",
    symbol: "≡",
    description: { es: { main: "Equivalente" }, en: { main: "Equivalent" } },
    tags: {
      es: ["Símbolos", "Ecuaciones", "Matematica", "Signos"],
      en: ["Symbols", "Equations", "Math", "Signs"],
    },
  },
  {
    id: "814",
    symbol: "≈",
    description: { es: { main: "Aproximado" }, en: { main: "Approximate" } },
    tags: {
      es: ["Símbolos", "Matematica", "Signos"],
      en: ["Symbols", "Math", "Signs"],
    },
  },
  {
    id: "815",
    symbol: "±",
    description: { es: { main: "Mas menos" }, en: { main: "Plus minus" } },
    tags: {
      es: ["Símbolos", "Matematica", "Signos"],
      en: ["Symbols", "Math", "Signs"],
    },
  },
  {
    id: "816",
    symbol: "}",
    description: { es: { main: "Llave 2" }, en: { main: "Brace 2" } },
    tags: {
      es: ["Símbolos", "Conjuntos", "Matematica", "Programacion", "Signos"],
      en: ["Symbols", "Math", "Programming", "Sets", "Signs"],
    },
  },
  {
    id: "817",
    symbol: "]",
    description: { es: { main: "Corchete 2" }, en: { main: "Bracket 2" } },
    tags: {
      es: ["Símbolos", "Conjuntos", "Matematica", "Programacion", "Signos"],
      en: ["Symbols", "Math", "Programming", "Sets", "Signs"],
    },
  },
  {
    id: "818",
    symbol: "\\",
    description: { es: { main: "Barra Invertida" }, en: { main: "Backslash" } },
    tags: { es: ["Símbolos", "Signos"], en: ["Symbols", "Signs"] },
  },
  {
    id: "819",
    symbol: "↓",
    description: { es: { main: "Flecha abajo" }, en: { main: "Arrow down" } },
    tags: {
      es: ["Símbolos", "Direcciones", "Signos"],
      en: ["Symbols", "Directions", "Signs"],
    },
  },
  {
    id: "820",
    symbol: "←",
    description: {
      es: { main: "Flecha izquierda" },
      en: { main: "Arrow left" },
    },
    tags: {
      es: ["Símbolos", "Direcciones", "Signos"],
      en: ["Symbols", "Directions", "Signs"],
    },
  },
  {
    id: "821",
    symbol: "↔",
    description: {
      es: { main: "Flecha bidireccional" },
      en: { main: "Arrow bidirectional" },
    },
    tags: {
      es: ["Símbolos", "Direcciones", "Signos"],
      en: ["Symbols", "Directions", "Signs"],
    },
  },
  {
    id: "822",
    symbol: "♫",
    description: {
      es: { main: "Música 2", secondary: ["Música 2"] },
      en: { main: "Music 2" },
    },
    tags: {
      es: ["Símbolos", "Entretenimiento"],
      en: ["Symbols", "Entertainment"],
    },
  },
  {
    id: "823",
    symbol: "∞",
    description: { es: { main: "Infinito" }, en: { main: "Infinity" } },
    tags: {
      es: ["Símbolos", "Matematica", "Signos"],
      en: ["Symbols", "Math", "Signs"],
    },
  },
  {
    id: "824",
    symbol: "¿",
    description: {
      es: { main: "Signo de Pregunta", secondary: ["Interrogación", "Signo de Interrogación"] },
      en: { main: "Question mark" },
    },
    tags: {
      es: ["Símbolos", "Ortografia", "Signos"],
      en: ["Symbols", "Orthography", "Signs"],
    },
  },
  {
    id: "825",
    symbol: "₃",
    description: { es: { main: "Sub 3" }, en: { main: "Sub 3" } },
    tags: {
      es: ["Símbolos", "Matematica", "Signos"],
      en: ["Symbols", "Math", "Signs"],
    },
  },
  {
    id: "826",
    symbol: "₁",
    description: { es: { main: "Sub 1" }, en: { main: "Sub 1" } },
    tags: {
      es: ["Símbolos", "Matematica", "Signos"],
      en: ["Symbols", "Math", "Signs"],
    },
  },
  {
    id: "827",
    symbol: "ⁿ",
    description: {
      es: { main: "Elevado a la n" },
      en: { main: "Raised to the n" },
    },
    tags: {
      es: ["Símbolos", "Matematica", "Signos"],
      en: ["Symbols", "Math", "Signs"],
    },
  },
  {
    id: "828",
    symbol: "²",
    description: {
      es: { main: "Elevado al cuadrado" },
      en: { main: "Raised to the square" },
    },
    tags: {
      es: ["Símbolos", "Matematica", "Signos"],
      en: ["Symbols", "Math", "Signs"],
    },
  },
  {
    id: "829",
    symbol: "►",
    description: {
      es: { main: "Flecha derecha" },
      en: { main: "Arrow right" },
    },
    tags: {
      es: ["Símbolos", "Direcciones", "Signos"],
      en: ["Symbols", "Directions", "Signs"],
    },
  },
  {
    id: "830",
    symbol: "α",
    description: { es: { main: "Alfa" }, en: { main: "Alpha" } },
    tags: {
      es: ["Símbolos", "Matematica", "Signos"],
      en: ["Symbols", "Math", "Signs"],
    },
  },
  {
    id: "831",
    symbol: "∪",
    description: { es: { main: "Unión" }, en: { main: "Union" } },
    tags: {
      es: ["Símbolos", "Conjuntos", "Matematica", "Signos"],
      en: ["Symbols", "Math", "Sets", "Signs"],
    },
  },
  {
    id: "832",
    symbol: "ø",
    description: { es: { main: "Conjunto Vacío" }, en: { main: "Empty Set" } },
    tags: {
      es: ["Símbolos", "Conjuntos", "Matematica", "Signos"],
      en: ["Symbols", "Math", "Sets", "Signs"],
    },
  },
  {
    id: "833",
    symbol: "ƒ",
    description: { es: { main: "Función" }, en: { main: "Function" } },
    tags: {
      es: ["Símbolos", "Matematica", "Signos"],
      en: ["Symbols", "Math", "Signs"],
    },
  },
  {
    id: "834",
    symbol: "∑",
    description: { es: { main: "Sumatoria" }, en: { main: "Summation" } },
    tags: {
      es: ["Símbolos", "Matematica", "Signos"],
      en: ["Symbols", "Math", "Signs"],
    },
  },
  {
    id: "835",
    symbol: "∀",
    description: { es: { main: "Para todo" }, en: { main: "For all" } },
    tags: {
      es: ["Símbolos", "Conjuntos", "Matematica", "Signos"],
      en: ["Symbols", "Math", "Sets", "Signs"],
    },
  },
  {
    id: "836",
    symbol: "≤",
    description: {
      es: { main: "Menor o igual" },
      en: { main: "Less than or equal to" },
    },
    tags: {
      es: ["Símbolos", "Matematica", "Signos"],
      en: ["Symbols", "Math", "Signs"],
    },
  },
  {
    id: "837",
    symbol: "≠",
    description: { es: { main: "Desigual" }, en: { main: "Unequal" } },
    tags: {
      es: ["Símbolos", "Matematica", "Signos"],
      en: ["Symbols", "Math", "Signs"],
    },
  },
  {
    id: "838",
    symbol: "≐",
    description: {
      es: { main: "Congruencia", secondary: ["Definición"] },
      en: { main: "Congruence", secondary: ["Definition"] },
    },
    tags: {
      es: ["Símbolos", "Ecuaciones", "Matematica", "Signos"],
      en: ["Symbols", "Equations", "Math", "Signs"],
    },
  },
  {
    id: "839",
    symbol: "•",
    description: { es: { main: "Punto medio" }, en: { main: "Middle point" } },
    tags: { es: ["Símbolos", "Signos"], en: ["Symbols", "Signs"] },
  },
  {
    id: "840",
    symbol: "{",
    description: { es: { main: "Llave 1" }, en: { main: "Brace 1" } },
    tags: {
      es: ["Símbolos", "Conjuntos", "Matematica", "Programacion", "Signos"],
      en: ["Symbols", "Math", "Programming", "Sets", "Signs"],
    },
  },
  {
    id: "841",
    symbol: "[",
    description: { es: { main: "Corchete 1" }, en: { main: "Bracket 1" } },
    tags: {
      es: ["Símbolos", "Conjuntos", "Matematica", "Programacion", "Signos"],
      en: ["Symbols", "Math", "Programming", "Sets", "Signs"],
    },
  },
  {
    id: "842",
    symbol: "/",
    description: { es: { main: "Barra" }, en: { main: "Slash" } },
    tags: {
      es: ["Símbolos", "Matematica", "Programacion", "Signos"],
      en: ["Symbols", "Math", "Programming", "Signs"],
    },
  },
  {
    id: "843",
    symbol: "↑",
    description: { es: { main: "Flecha arriba" }, en: { main: "Arrow up" } },
    tags: {
      es: ["Símbolos", "Direcciones", "Signos"],
      en: ["Symbols", "Directions", "Signs"],
    },
  },
  {
    id: "844",
    symbol: "→",
    description: {
      es: { main: "Flecha derecha" },
      en: { main: "Arrow right" },
    },
    tags: {
      es: ["Símbolos", "Direcciones", "Signos"],
      en: ["Symbols", "Directions", "Signs"],
    },
  },
  {
    id: "845",
    symbol: "↦",
    description: {
      es: { main: "Flecha unidireccional" },
      en: { main: "Arrow unidirectional" },
    },
    tags: {
      es: ["Símbolos", "Direcciones", "Matematica", "Signos"],
      en: ["Symbols", "Directions", "Math", "Signs"],
    },
  },
  {
    id: "846",
    symbol: "♪",
    description: {
      es: { main: "Música 1", secondary: ["Música 1"] },
      en: { main: "Music 1" },
    },
    tags: {
      es: ["Símbolos", "Entretenimiento"],
      en: ["Symbols", "Entertainment"],
    },
  },
  {
    id: "847",
    symbol: "°",
    description: { es: { main: "Grado" }, en: { main: "Degree" } },
    tags: {
      es: ["Símbolos", "Clima", "Matematica", "Ortografia", "Signos"],
      en: ["Symbols", "Math", "Orthography", "Signs", "Weather"],
    },
  },
  {
    id: "848",
    symbol: "¡",
    description: {
      es: { main: "Signo de Exclamación", secondary: ["Exclamación"] },
      en: { main: "Exclamation mark" },
    },
    tags: {
      es: ["Símbolos", "Ortografia", "Signos"],
      en: ["Symbols", "Orthography", "Signs"],
    },
  },
  {
    id: "849",
    symbol: "🖕( •_• ) 🖕",
    description: { es: { main: "Fuck you" }, en: { main: "Fuck you" } },
    tags: { es: ["Expresiones"], en: ["Expressions"] },
  },
  {
    id: "850",
    symbol: "😎🤏😳🕶🤏",
    description: {
      es: { main: "Wtf", secondary: ["A la miercole"] },
      en: { main: "Wtf", secondary: ["A la miercole"] },
    },
    tags: { es: ["Expresiones"], en: ["Expressions"] },
  },
  {
    id: "851",
    symbol: "😎👌🔥",
    description: { es: { main: "Nice" }, en: { main: "Nice" } },
    tags: { es: ["Expresiones"], en: ["Expressions"] },
  },
  {
    id: "852",
    symbol: "o👌k",
    description: {
      es: { main: "Asi quedamos" },
      en: { main: "That's how we ended up" },
    },
    tags: { es: ["Expresiones"], en: ["Expressions"] },
  },
  {
    id: "853",
    symbol: "🧑‍💻📓✍🏻💡",
    description: { es: { main: "Estudiando" }, en: { main: "Studying" } },
    tags: { es: ["Expresiones"], en: ["Expressions"] },
  },
  {
    id: "854",
    symbol: "👳‍♂️✈🏢🏢",
    description: {
      es: { main: "11 de Septiembre" },
      en: { main: "September 11" },
    },
    tags: { es: ["Expresiones"], en: ["Expressions"] },
  },
  {
    id: "855",
    symbol: "👀🔥🚀",
    description: { es: { main: "Opa" }, en: { main: "Wow" } },
    tags: { es: ["Expresiones"], en: ["Expressions"] },
  },
  {
    id: "856",
    symbol: "😱🤯🙈",
    description: { es: { main: "No me la contes" }, en: { main: "No way" } },
    tags: { es: ["Expresiones"], en: ["Expressions"] },
  },
  {
    id: "857",
    symbol: "🔋⚡💪",
    description: { es: { main: "Atr" }, en: { main: "Full Energy" } },
    tags: { es: ["Expresiones"], en: ["Expressions"] },
  },
  {
    id: "858",
    symbol: "🎯🏆🙌",
    description: { es: { main: "Objetivo" }, en: { main: "Goal" } },
    tags: { es: ["Expresiones"], en: ["Expressions"] },
  },
  {
    id: "859",
    symbol: "🤨🙅‍♂️🚫",
    description: { es: { main: "Ni ahi" }, en: { main: "No way" } },
    tags: { es: ["Expresiones"], en: ["Expressions"] },
  },
  {
    id: "860",
    symbol: "🪄🎩🐇✨",
    description: { es: { main: "Abracadabra" }, en: { main: "Abracadabra" } },
    tags: { es: ["Expresiones"], en: ["Expressions"] },
  },
  {
    id: "861",
    symbol: "👷‍♂️🏗📦",
    description: {
      es: { main: "Construcción", secondary: ["Construccion en Obras"] },
      en: { main: "Construction" },
    },
    tags: { es: ["Expresiones"], en: ["Expressions"] },
  },
  {
    id: "862",
    symbol: "😴💤⏰",
    description: {
      es: { main: "Dormido", secondary: ["Dormido", "Dormir, Sueno"] },
      en: { main: "Sleepy" },
    },
    tags: { es: ["Expresiones"], en: ["Expressions"] },
  },
  {
    id: "863",
    symbol: "🫠😵‍💫",
    description: { es: { main: "No doy más" }, en: { main: "Exhausted" } },
    tags: { es: ["Expresiones"], en: ["Expressions"] },
  },
  {
    id: "864",
    symbol: "🔥🗣️💣",
    description: { es: { main: "Se picó" }, en: { main: "Heated Argument" } },
    tags: { es: ["Expresiones"], en: ["Expressions"] },
  },
  {
    id: "865",
    symbol: "⌛😤",
    description: { es: { main: "0 paciencia" }, en: { main: "Zero Patience" } },
    tags: { es: ["Expresiones"], en: ["Expressions"] },
  },
  {
    id: "866",
    symbol: "😬🤞",
    description: { es: { main: "Ojalá" }, en: { main: "Hopefully" } },
    tags: { es: ["Expresiones"], en: ["Expressions"] },
  },
  {
    id: "867",
    symbol: "🚀📈",
    description: { es: { main: "Bullish" }, en: { main: "Bullish" } },
    tags: { es: ["Expresiones"], en: ["Expressions"] },
  },
  {
    id: "868",
    symbol: "🤦‍♂️📉",
    description: { es: { main: "Bearish" }, en: { main: "Bearish" } },
    tags: { es: ["Expresiones"], en: ["Expressions"] },
  },
  {
    id: "869",
    symbol: "☕😐➡️😃",
    description: { es: { main: "Café" }, en: { main: "Coffee" } },
    tags: { es: ["Expresiones"], en: ["Expressions"] },
  },
  {
    id: "870",
    symbol: "👊😤💥",
    description: { es: { main: "Bronca" }, en: { main: "Anger" } },
    tags: { es: ["Expresiones"], en: ["Expressions"] },
  },
  {
    id: "871",
    symbol: "💸🫠",
    description: { es: { main: "Fin de mes" }, en: { main: "End of month" } },
    tags: { es: ["Expresiones"], en: ["Expressions"] },
  },
  {
    id: "872",
    symbol: "🎮🕹️😤",
    description: {
      es: { main: "Modo gamer", secondary: ["Jugar"] },
      en: { main: "Gamer mode", secondary: ["Play"] },
    },
    tags: { es: ["Expresiones"], en: ["Expressions"] },
  },
  {
    id: "873",
    symbol: "😀",
    description: {
      es: { main: "Feliz", secondary: [":)", ":D", "Felicidad", "Contento"] },
      en: { main: "Happy", secondary: [":)", ":D", "Happiness", "Content"] },
    },
    tags: { es: ["Emociones"], en: ["Emotions"] },
  },
  {
    id: "874",
    symbol: "😃",
    description: {
      es: { main: "Feliz", secondary: [":)", ":D", "Felicidad", "Contento"] },
      en: { main: "Happy", secondary: [":)", ":D", "Happiness", "Content"] },
    },
    tags: { es: ["Emociones"], en: ["Emotions"] },
  },
  {
    id: "875",
    symbol: "😒",
    description: { es: { main: "Indiferencia" }, en: { main: "Indifference" } },
    tags: { es: ["Emociones"], en: ["Emotions"] },
  },
  {
    id: "876",
    symbol: "🤥",
    description: {
      es: { main: "Pinocho", secondary: ["Mentiroso", "Mentira"] },
      en: { main: "Pinocchio", secondary: ["Liar", "Lie"] },
    },
    tags: { es: ["Cara"], en: ["Face"] },
  },
  {
    id: "877",
    symbol: "😷",
    description: {
      es: { main: "Barbijo", secondary: ["COVID"] },
      en: { main: "Mask", secondary: ["COVID"] },
    },
    tags: { es: ["Salud"], en: ["Health"] },
  },
  {
    id: "878",
    symbol: "👃",
    description: { es: { main: "Nariz" }, en: { main: "Nose" } },
    tags: { es: ["Cabeza"], en: ["Head"] },
  },
  {
    id: "879",
    symbol: "🦻",
    description: {
      es: { main: "Audífono", secondary: ["Audifono", "Oreja"] },
      en: { main: "Hearing Aid", secondary: ["Ear"] },
    },
    tags: { es: ["Cabeza"], en: ["Head"] },
  },
  {
    id: "880",
    symbol: "👹",
    description: {
      es: { main: "Demonio", secondary: ["Diablo"] },
      en: { main: "Devil", secondary: ["Demon"] },
    },
    tags: { es: ["Infierno"], en: ["Evil", "Hell"] },
  },
  {
    id: "881",
    symbol: "👺",
    description: {
      es: { main: "Demonio", secondary: ["Diablo"] },
      en: { main: "Devil", secondary: ["Demon"] },
    },
    tags: { es: ["Infierno"], en: ["Evil", "Hell"] },
  },
  {
    id: "882",
    symbol: "😶‍🌫️",
    description: { es: { main: "Bomba de Humo" }, en: { main: "Smoke Bomb" } },
    tags: { es: ["Cara"], en: ["Face"] },
  },
  {
    id: "883",
    symbol: "👲",
    description: { es: { main: "Nene" }, en: { main: "Boy" } },
    tags: { es: ["Personas"], en: ["People"] },
  },
  {
    id: "884",
    symbol: "🧔‍♀️",
    description: {
      es: { main: "Jesus", secondary: ["Religión", "Dios"] },
      en: { main: "Jesus", secondary: ["Religión"] },
    },
    tags: { es: ["Religión"], en: ["Religión"] },
  },
  {
    id: "885",
    symbol: "🌫",
    description: { es: { main: "Humo" }, en: { main: "Smoke" } },
    tags: { es: ["Clima"], en: ["Weather"] },
  },
  {
    id: "886",
    symbol: "💨",
    description: { es: { main: "Pedo" }, en: { main: "Fart" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "887",
    symbol: "👩‍❤️‍💋‍👨",
    description: { es: { main: "Beso" }, en: { main: "Kiss" } },
    tags: { es: ["Amor"], en: ["Love"] },
  },
  {
    id: "888",
    symbol: "👩‍❤️‍👨",
    description: { es: { main: "Pareja" }, en: { main: "Couple" } },
    tags: { es: ["Amor"], en: ["Love"] },
  },
  {
    id: "889",
    symbol: "🙋‍♀️",
    description: {
      es: {
        main: "Levantando la mano",
        secondary: ["Aca estoy", "Mano levantada", "Levantar la mano"],
      },
      en: {
        main: "Raising hand",
        secondary: ["Here I am", "Raised hand", "Raise hand"],
      },
    },
    tags: { es: ["Mujeres", "Manos"], en: ["Women", "Hands"] },
  },
  {
    id: "890",
    symbol: "🪲",
    description: { es: { main: "Escarabajo" }, en: { main: "Beetle" } },
    tags: { es: ["Insectos"], en: ["Insects"] },
  },
  {
    id: "891",
    symbol: "🌥",
    description: { es: { main: "Nublado" }, en: { main: "Cloudy" } },
    tags: { es: ["Clima"], en: ["Weather"] },
  },
  {
    id: "892",
    symbol: "🌪",
    description: { es: { main: "Tornado" }, en: { main: "Tornado" } },
    tags: { es: ["Clima"], en: ["Weather"] },
  },
  {
    id: "893",
    symbol: "🪀",
    description: { es: { main: "Yoyo" }, en: { main: "Yo-yo" } },
    tags: { es: ["Entretenimiento"], en: ["Entertainment"] },
  },
  {
    id: "894",
    symbol: "🎼",
    description: {
      es: { main: "Partitura Musical" },
      en: { main: "Musical Score" },
    },
    tags: { es: ["Música"], en: ["Music"] },
  },
  {
    id: "895",
    symbol: "🦸‍♂️",
    description: {
      es: { main: "Superhéroe", secondary: ["Superman", "Super man", "Capa"] },
      en: { main: "Superhero", secondary: ["Superman", "Super man", "Cape"] },
    },
    tags: { es: ["Entretenimiento"], en: ["Entertainment"] },
  },
  {
    id: "896",
    symbol: "👸",
    description: {
      es: { main: "Reina", secondary: ["Princesa"] },
      en: { main: "Queen", secondary: ["Princess"] },
    },
    tags: { es: ["Realeza", "Mujeres"], en: ["Royalty", "Women"] },
  },
  {
    id: "897",
    symbol: "🤴",
    description: {
      es: { main: "Rey", secondary: ["Príncipe"] },
      en: { main: "King", secondary: ["Prince"] },
    },
    tags: { es: ["Realeza", "Hombres"], en: ["Royalty", "Men"] },
  },
  {
    id: "898",
    symbol: "👨‍✈️",
    description: {
      es: { main: "Piloto", secondary: ["Profesiones", "Avión"] },
      en: { main: "Pilot", secondary: ["Professions"] },
    },
    tags: { es: ["Profesiones", "Vehículos"], en: ["Professions", "Vehicles"] },
  },
  {
    id: "899",
    symbol: "🇵🇦",
    description: {
      es: { main: "Bandera de Panamá", secondary: [""] },
      en: { main: "Panama Flag", secondary: ["Panama"] },
    },
    tags: { es: ["Banderas", ""], en: ["Flags", "Panama"] },
  },
  {
    id: "900",
    symbol: "😢",
    description: {
      es: { main: "Triste", secondary: [":(", ":'(", "Lágrima"] },
      en: { main: "Sad", secondary: [":(", ":'(", "Tear"] },
    },
    tags: { es: ["Emociones", "Cara"], en: ["Emotions", "Face"] },
  },
  {
    id: "901",
    symbol: "🙁",
    description: {
      es: { main: ":(", secondary: ["Triste"] },
      en: { main: ":(", secondary: ["Sad"] },
    },
    tags: { es: ["Emociones", "Cara"], en: ["Emotions", "Face"] },
  },
  {
    id: "902",
    symbol: "😫",
    description: {
      es: { main: "D:", secondary: ["Triste", "Lamento"] },
      en: { main: "D:", secondary: ["Sad", "Lament"] },
    },
    tags: { es: ["Emociones", "Cara"], en: ["Emotions", "Face"] },
  },
  {
    id: "903",
    symbol: "😩",
    description: {
      es: { main: "D:", secondary: ["Triste", "Lamento"] },
      en: { main: "D:", secondary: ["Sad", "Lament"] },
    },
    tags: { es: ["Emociones", "Cara"], en: ["Emotions", "Face"] },
  },
  {
    id: "904",
    symbol: "🔶",
    description: {
      es: { main: "Rombo Naranja", secondary: ["Cuadrado Naranja"] },
      en: { main: "Orange Diamond", secondary: ["Orange Square"] },
    },
    tags: { es: ["Formas"], en: ["Shapes"] },
  },
  {
    id: "905",
    symbol: "🔷",
    description: {
      es: {
        main: "Rombo Azul",
        secondary: ["Rombo Celeste", "Cuadrado Celeste", "Cuadrado Azul"],
      },
      en: {
        main: "Blue Diamond",
        secondary: ["Light Blue Diamond", "Light Blue Square", "Blue Square"],
      },
    },
    tags: { es: ["Formas"], en: ["Shapes"] },
  },
  {
    id: "906",
    symbol: "🔺",
    description: {
      es: { main: "Triángulo Rojo", secondary: ["Arriba"] },
      en: { main: "Red Triangle", secondary: ["Up"] },
    },
    tags: { es: ["Formas"], en: ["Shapes"] },
  },
  {
    id: "907",
    symbol: "🔻",
    description: {
      es: { main: "Triángulo Rojo", secondary: ["Abajo"] },
      en: { main: "Red Triangle", secondary: ["Down"] },
    },
    tags: { es: ["Formas"], en: ["Shapes"] },
  },
  {
    id: "908",
    symbol: "🇰🇷",
    description: {
      es: { main: "Bandera de Corea del Sur" },
      en: { main: "South Korea Flag" },
    },
    tags: { es: ["Banderas"], en: ["Flags"] },
  },
  {
    id: "909",
    symbol: "🇰🇵",
    description: {
      es: { main: "Bandera de Corea del Norte" },
      en: { main: "North Korea Flag" },
    },
    tags: { es: ["Banderas"], en: ["Flags"] },
  },
  {
    id: "910",
    symbol: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    description: {
      es: {
        main: "Bandera Inglesa",
        secondary: ["Inglaterra", "Reino Unido", "UK"],
      },
      en: { main: "England Flag", secondary: ["United Kingdom", "UK"] },
    },
    tags: { es: ["Banderas"], en: ["Flags"] },
  },
  {
    id: "911",
    symbol: "😮‍💨",
    description: { es: { main: "Suspiro" }, en: { main: "Sigh" } },
    tags: { es: ["Cara", "Emociones"], en: ["Face", "Emotions"] },
  },
  {
    id: "912",
    symbol: "🗯",
    description: { es: { main: "Onomatopeyas" }, en: { main: "Onomatopoeia" } },
    tags: { es: ["Random"], en: ["Random"] },
  },
  {
    id: "913",
    symbol: "♣",
    description: {
      es: { main: "Tréboles", secondary: ["Cartas"] },
      en: { main: "Club Suit", secondary: ["Cards"] },
    },
    tags: { es: ["Entretenimiento"], en: ["Entertainment"] },
  },
  {
    id: "914",
    symbol: "♥",
    description: {
      es: { main: "Corazones", secondary: ["Corazón Rojo", "Cartas"] },
      en: { main: "Hearts", secondary: ["Red Heart", "Cards"] },
    },
    tags: { es: ["Entretenimiento"], en: ["Entertainment"] },
  },
  {
    id: "915",
    symbol: "♠",
    description: {
      es: { main: "Picas", secondary: ["Cartas"] },
      en: { main: "Spade Suit", secondary: ["Cards"] },
    },
    tags: { es: ["Entretenimiento"], en: ["Entertainment"] },
  },
  {
    id: "916",
    symbol: "♦",
    description: {
      es: { main: "Diamantes", secondary: ["Cristal", "Cartas"] },
      en: { main: "Diamond Suit", secondary: ["Crystal", "Cards"] },
    },
    tags: { es: ["Entretenimiento"], en: ["Entertainment"] },
  },
  {
    id: "917",
    symbol: "☘",
    description: {
      es: { main: "Trébol de Tres Hojas" },
      en: { main: "Shamrock" },
    },
    tags: { es: ["Plantas"], en: ["Plants"] },
  },
  {
    id: "918",
    symbol: "😺",
    description: {
      es: { main: "Gato Sonriendo" },
      en: { main: "Grinning Cat" },
    },
    tags: {
      es: ["Animales", "Emociones", "Gato"],
      en: ["Animals", "Emotions", "Cat"],
    },
  },
  {
    id: "919",
    symbol: "😸",
    description: {
      es: { main: "Gato Sonriendo con Ojos Felices" },
      en: { main: "Grinning Cat with Smiling Eyes" },
    },
    tags: {
      es: ["Animales", "Emociones", "Gato"],
      en: ["Animals", "Emotions", "Cat"],
    },
  },
  {
    id: "920",
    symbol: "😹",
    description: {
      es: { main: "Gato con Lagrimas de Alegria" },
      en: { main: "Cat with Tears of Joy" },
    },
    tags: {
      es: ["Animales", "Emociones", "Gato"],
      en: ["Animals", "Emotions", "Cat"],
    },
  },
  {
    id: "921",
    symbol: "😻",
    description: {
      es: { main: "Gato Enamorado" },
      en: { main: "Smiling Cat with Heart-Eyes" },
    },
    tags: {
      es: ["Animales", "Emociones", "Gato"],
      en: ["Animals", "Emotions", "Cat"],
    },
  },
  {
    id: "922",
    symbol: "😼",
    description: {
      es: { main: "Gato con Sonrisa Irónica" },
      en: { main: "Cat with Wry Smile" },
    },
    tags: {
      es: ["Animales", "Emociones", "Gato"],
      en: ["Animals", "Emotions", "Cat"],
    },
  },
  {
    id: "923",
    symbol: "😽",
    description: { es: { main: "Gato Besando" }, en: { main: "Kissing Cat" } },
    tags: {
      es: ["Animales", "Emociones", "Gato"],
      en: ["Animals", "Emotions", "Cat"],
    },
  },
  {
    id: "924",
    symbol: "🙀",
    description: {
      es: { main: "Gato Asustado", secondary: ["Sorprendido"] },
      en: { main: "Weary Cat", secondary: ["Scared", "Surprised"] },
    },
    tags: {
      es: ["Animales", "Emociones", "Gato"],
      en: ["Animals", "Emotions", "Cat"],
    },
  },
  {
    id: "925",
    symbol: "😿",
    description: {
      es: { main: "Gato Llorando", secondary: ["Triste"] },
      en: { main: "Crying Cat", secondary: ["Sad"] },
    },
    tags: {
      es: ["Animales", "Emociones", "Gato"],
      en: ["Animals", "Emotions", "Cat"],
    },
  },
  {
    id: "926",
    symbol: "😾",
    description: { es: { main: "Gato Enojado" }, en: { main: "Pouting Cat" } },
    tags: {
      es: ["Animales", "Emociones", "Gato"],
      en: ["Animals", "Emotions", "Cat"],
    },
  },
  {
    id: "927",
    symbol: "🫲",
    description: {
      es: { main: "Mucho Gusto", secondary: ["Saludos"] },
      en: { main: "Handshake Left", secondary: ["Greetings"] },
    },
    tags: { es: ["Manos"], en: ["Hands"] },
  },
  {
    id: "928",
    symbol: "🫱",
    description: {
      es: { main: "Mucho Gusto", secondary: ["Saludos"] },
      en: { main: "Handshake Right", secondary: ["Greetings"] },
    },
    tags: { es: ["Manos"], en: ["Hands"] },
  },
  {
    id: "929",
    symbol: "🖐",
    description: {
      es: {
        main: "Choque los 5",
        secondary: ["Choque los cinco", "Mano levantada", "Levantando la mano"],
      },
      en: {
        main: "High Five",
        secondary: ["High Five", "Raised hand", "Raising hand"],
      },
    },
    tags: { es: ["Manos"], en: ["Hands"] },
  },
  {
    id: "930",
    symbol: "✋",
    description: {
      es: { main: "Mano levantada", secondary: ["Levantando la mano"] },
      en: { main: "Raised hand", secondary: ["Raising hand"] },
    },
    tags: { es: ["Manos"], en: ["Hands"] },
  },
  {
    id: "931",
    symbol: "🤚",
    description: {
      es: {
        main: "Mano levantada",
        secondary: ["Levantando la mano", "Levantar la mano"],
      },
      en: { main: "Raised hand", secondary: ["Raising hand", "Raise hand"] },
    },
    tags: { es: ["Manos"], en: ["Hands"] },
  },
  {
    id: "932",
    symbol: "😊",
    description: {
      es: {
        main: "Feliz",
        secondary: ["Felicidad", ":)", ":D", "Tierna", "Tierno"],
      },
      en: { main: "Happy", secondary: ["Happiness", ":)", ":D", "Cute"] },
    },
    tags: { es: ["Mujeres"], en: ["Women"] },
  },
  {
    id: "933",
    symbol: "☺",
    description: {
      es: { main: "Feliz", secondary: ["Felicidad", ":)", ":D"] },
      en: { main: "Happy", secondary: ["Happiness", ":)", ":D"] },
    },
    tags: { es: ["Emociones"], en: ["Emotions"] },
  },
  {
    id: "934",
    symbol: "😐",
    description: {
      es: { main: ":|", secondary: [":I", ":l"] },
      en: { main: ":l", secondary: [":I"] },
    },
    tags: { es: ["Cara"], en: ["Face"] },
  },
  {
    id: "935",
    symbol: "🤢",
    description: {
      es: { main: "Asco", secondary: ["Asqueroso"] },
      en: { main: "Nauseated", secondary: ["Disgusting"] },
    },
    tags: { es: ["Cara"], en: ["Face"] },
  },
  {
    id: "936",
    symbol: "🤧",
    description: {
      es: { main: "Resfriado", secondary: ["Resfrío", "Resfriada"] },
      en: { main: "Sneezing", secondary: ["Cold"] },
    },
    tags: { es: ["Salud"], en: ["Health"] },
  },
  {
    id: "937",
    symbol: "🤕",
    description: {
      es: {
        main: "Vendado",
        secondary: [
          "Vendada",
          "Vendaje",
          "Vendas",
          "Recuperación",
          "Enfermo",
          "Enferma",
          "Dolido",
          "Dolida",
          "Dolor",
        ],
      },
      en: {
        main: "Bandaged",
        secondary: ["Bandage", "Recovery", "Sick", "Pain"],
      },
    },
    tags: { es: ["Salud", "Cara"], en: ["Health", "Face"] },
  },
  {
    id: "938",
    symbol: "😯",
    description: {
      es: { main: "Sorprendido", secondary: ["Sorprendida"] },
      en: { main: "Surprised" },
    },
    tags: { es: ["Cara"], en: ["Face"] },
  },
  {
    id: "939",
    symbol: "😙",
    description: { es: { main: "Beso" }, en: { main: "Kiss" } },
    tags: { es: ["Amor"], en: ["Love"] },
  },
  {
    id: "940",
    symbol: "😚",
    description: { es: { main: "Beso" }, en: { main: "Kiss" } },
    tags: { es: ["Amor"], en: ["Love"] },
  },
  {
    id: "941",
    symbol: "♂",
    description: {
      es: { main: "Símbolo Masculino" },
      en: { main: "Male Sign" },
    },
    tags: { es: ["Signos", "Género"], en: ["Signs", "Gender"] },
  },
  {
    id: "942",
    symbol: "♀",
    description: {
      es: { main: "Símbolo Femenino" },
      en: { main: "Female Sign" },
    },
    tags: { es: ["Signos", "Género", "Mujeres"], en: ["Signs", "Gender"] },
  },
  {
    id: "943",
    symbol: "🚹",
    description: {
      es: { main: "Baño de Hombres" },
      en: { main: "Men's Room" },
    },
    tags: { es: ["Signos", "Baño"], en: ["Signs", "Restroom", "Toilet"] },
  },
  {
    id: "944",
    symbol: "🚺",
    description: {
      es: { main: "Baño de Mujeres" },
      en: { main: "Women's Room" },
    },
    tags: { es: ["Signos", "Baño"], en: ["Signs", "Restroom", "Toilet"] },
  },
  {
    id: "945",
    symbol: "📶",
    description: {
      es: { main: "Señal de Celular" },
      en: { main: "Mobile Phone Signal" },
    },
    tags: { es: ["Tecnología", "Señal"], en: ["Technology", "Signal"] },
  },
  {
    id: "946",
    symbol: "🛜",
    description: {
      es: { main: "Wifi", secondary: ["Inalámbrico"] },
      en: { main: "Wireless", secondary: ["Wifi"] },
    },
    tags: { es: ["Tecnología", "Internet"], en: ["Technology", "Internet"] },
  },
  {
    id: "947",
    symbol: "🏧",
    description: {
      es: { main: "Cajero Automático", secondary: ["ATM"] },
      en: { main: "ATM Sign", secondary: ["ATM"] },
    },
    tags: { es: ["Dinero", "Banco"], en: ["Money", "Bank"] },
  },
  {
    id: "948",
    symbol: "🔆",
    description: {
      es: { main: "Brillo Alto" },
      en: { main: "High Brightness" },
    },
    tags: { es: ["Pantalla", "Luz"], en: ["Screen", "Light"] },
  },
  {
    id: "949",
    symbol: "💱",
    description: {
      es: { main: "Cambio de Divisas" },
      en: { main: "Currency Exchange" },
    },
    tags: { es: ["Dinero", "Banco"], en: ["Money", "Bank"] },
  },
  {
    id: "950",
    symbol: "📵",
    description: {
      es: { main: "Prohibido Celulares" },
      en: { main: "No Mobile Phones" },
    },
    tags: { es: ["Signos", "Prohibido"], en: ["Signs", "Prohibited"] },
  },
  {
    id: "951",
    symbol: "🚭",
    description: {
      es: { main: "Prohibido Fumar" },
      en: { main: "No Smoking" },
    },
    tags: { es: ["Signos", "Prohibido"], en: ["Signs", "Prohibited"] },
  },
  {
    id: "952",
    symbol: "❗",
    description: {
      es: { main: "Signo de Exclamación" },
      en: { main: "Exclamation Mark" },
    },
    tags: { es: ["Signos", "Puntuación"], en: ["Signs", "Punctuation"] },
  },
  {
    id: "953",
    symbol: "❓",
    description: {
      es: { main: "Signo de Pregunta", secondary: ["Interrogación", "Signo de Interrogación"] },
      en: { main: "Question Mark" },
    },
    tags: { es: ["Signos", "Puntuación"], en: ["Signs", "Punctuation"] },
  },
  {
    id: "954",
    symbol: "‼",
    description: {
      es: { main: "Doble Signo de Exclamación" },
      en: { main: "Double Exclamation Mark" },
    },
    tags: { es: ["Signos", "Puntuación"], en: ["Signs", "Punctuation"] },
  },
  {
    id: "955",
    symbol: "⁉",
    description: {
      es: { main: "Signo de Exclamación e Interrogación" },
      en: { main: "Exclamation Question Mark" },
    },
    tags: { es: ["Signos", "Puntuación"], en: ["Signs", "Punctuation"] },
  },
  {
    id: "956",
    symbol: "❕",
    description: {
      es: { main: "Signo de Exclamación Blanco" },
      en: { main: "White Exclamation Mark" },
    },
    tags: { es: ["Signos", "Puntuación"], en: ["Signs", "Punctuation"] },
  },
  {
    id: "957",
    symbol: "❔",
    description: {
      es: { main: "Signo de Pregunta Blanco", secondary: ["Interrogación Blanco", "Signo de Interrogación Blanco"] },
      en: { main: "White Question Mark" },
    },
    tags: { es: ["Signos", "Puntuación"], en: ["Signs", "Punctuation"] },
  },
  {
    id: "958",
    symbol: "⚛",
    description: { es: { main: "Átomo" }, en: { main: "Atom Symbol" } },
    tags: { es: ["Ciencia", "Física"], en: ["Science", "Physics"] },
  },
  {
    id: "959",
    symbol: "☪",
    description: {
      es: { main: "Estrella y Luna", secondary: ["Islam"] },
      en: { main: "Star and Crescent", secondary: ["Islam"] },
    },
    tags: { es: ["Religión", "Símbolos"], en: ["Religión", "Symbols"] },
  },
  {
    id: "960",
    symbol: "🇨🇷",
    description: {
      es: { main: "Bandera de Costa Rica", secondary: ["Costa Rica"] },
      en: { main: "Flag of Costa Rica", secondary: ["Costa Rica"] },
    },
    tags: { es: ["Banderas"], en: ["Flags"] },
  },
  {
    id: "961",
    symbol: "🇨🇺",
    description: {
      es: { main: "Bandera de Cuba", secondary: ["Cuba"] },
      en: { main: "Flag of Cuba", secondary: ["Cuba"] },
    },
    tags: { es: ["Banderas"], en: ["Flags"] },
  },
  {
    id: "962",
    symbol: "🇧🇪",
    description: {
      es: { main: "Bandera de Bélgica", secondary: ["Bélgica"] },
      en: { main: "Flag of Belgium", secondary: ["Belgium"] },
    },
    tags: { es: ["Banderas"], en: ["Flags"] },
  },
  {
    id: "963",
    symbol: "🇦🇹",
    description: {
      es: { main: "Bandera de Austria", secondary: ["Austria"] },
      en: { main: "Flag of Austria", secondary: ["Austria"] },
    },
    tags: { es: ["Banderas"], en: ["Flags"] },
  },
  {
    id: "964",
    symbol: "🇨🇳",
    description: {
      es: { main: "Bandera de China", secondary: ["China"] },
      en: { main: "Flag of China", secondary: ["China"] },
    },
    tags: { es: ["Banderas"], en: ["Flags"] },
  },
  {
    id: "965",
    symbol: "🇨🇭",
    description: {
      es: { main: "Bandera de Suiza", secondary: ["Suiza"] },
      en: { main: "Flag of Switzerland", secondary: ["Switzerland"] },
    },
    tags: { es: ["Banderas"], en: ["Flags"] },
  },
  {
    id: "966",
    symbol: "🇩🇴",
    description: {
      es: {
        main: "Bandera de República Dominicana",
        secondary: ["República Dominicana"],
      },
      en: {
        main: "Flag of Dominican Republic",
        secondary: ["Dominican Republic"],
      },
    },
    tags: { es: ["Banderas"], en: ["Flags"] },
  },
  {
    id: "967",
    symbol: "🇵🇪",
    description: {
      es: { main: "Bandera de Perú", secondary: ["Perú"] },
      en: { main: "Flag of Peru", secondary: ["Peru"] },
    },
    tags: { es: ["Banderas"], en: ["Flags"] },
  },
  {
    id: "968",
    symbol: "🇧🇴",
    description: {
      es: { main: "Bandera de Bolivia", secondary: ["Bolivia"] },
      en: { main: "Flag of Bolivia", secondary: ["Bolivia"] },
    },
    tags: { es: ["Banderas"], en: ["Flags"] },
  },
  {
    id: "969",
    symbol: "🇬🇹",
    description: {
      es: { main: "Bandera de Guatemala", secondary: ["Guatemala"] },
      en: { main: "Flag of Guatemala", secondary: ["Guatemala"] },
    },
    tags: { es: ["Banderas"], en: ["Flags"] },
  },
  {
    id: "970",
    symbol: "🇸🇻",
    description: {
      es: { main: "Bandera de El Salvador", secondary: ["El Salvador"] },
      en: { main: "Flag of El Salvador", secondary: ["El Salvador"] },
    },
    tags: { es: ["Banderas"], en: ["Flags"] },
  },
  {
    id: "971",
    symbol: "📱",
    description: {
      es: { main: "Celular", secondary: ["Teléfono Móvil"] },
      en: { main: "Mobile Phone", secondary: ["Cell Phone"] },
    },
    tags: {
      es: ["Tecnología", "Comunicación"],
      en: ["Technology", "Communication"],
    },
  },
  {
    id: "972",
    symbol: "📲",
    description: {
      es: { main: "Celular con flecha", secondary: ["Llamada", "Entrante"] },
      en: { main: "Mobile Phone with Arrow", secondary: ["Call", "Incoming"] },
    },
    tags: {
      es: ["Tecnología", "Comunicación"],
      en: ["Technology", "Communication"],
    },
  },
  {
    id: "973",
    symbol: "⌚",
    description: {
      es: { main: "Reloj de Pulsera", secondary: ["Tiempo", "Hora"] },
      en: { main: "Watch", secondary: ["Time", "Hour"] },
    },
    tags: {
      es: ["Ropa", "Accesorios", "Tiempo"],
      en: ["Clothing", "Accessories", "Time"],
    },
  },
  {
    id: "974",
    symbol: "💾",
    description: {
      es: { main: "Disquete", secondary: ["Guardar"] },
      en: { main: "Floppy Disk", secondary: ["Save"] },
    },
    tags: { es: ["Tecnología", "Oficina"], en: ["Technology", "Office"] },
  },
  {
    id: "975",
    symbol: "⏲",
    description: {
      es: { main: "Temporizador", secondary: ["Tiempo", "Cronómetro"] },
      en: { main: "Timer Clock", secondary: ["Time", "Stopwatch"] },
    },
    tags: { es: ["Tiempo", "Cocina"], en: ["Time", "Kitchen"] },
  },
  {
    id: "976",
    symbol: "🦯",
    description: {
      es: { main: "Bastón", secondary: ["Ciego"] },
      en: { main: "White Cane", secondary: ["Blind"] },
    },
    tags: { es: ["Salud", "Accesibilidad"], en: ["Health", "Accessibility"] },
  },
  {
    id: "977",
    symbol: "📹",
    description: {
      es: { main: "Cámara de Video", secondary: ["Grabación", "Grabar", "Película"] },
      en: { main: "Video Camera", secondary: ["Record", "Movie"] },
    },
    tags: {
      es: ["Tecnología", "Entretenimiento"],
      en: ["Technology", "Entertainment"],
    },
  },
  {
    id: "978",
    symbol: "🔩",
    description: {
      es: {
        main: "Tuerca y Tornillo",
        secondary: ["Herramientas", "Construcción"],
      },
      en: { main: "Nut and Bolt", secondary: ["Tools", "Construction"] },
    },
    tags: { es: ["Herramientas", "Trabajo"], en: ["Tools", "Work"] },
  },
  {
    id: "979",
    symbol: "🪝",
    description: {
      es: { main: "Gancho", secondary: ["Garfio", "Pesca"] },
      en: { main: "Hook", secondary: ["Fishing"] },
    },
    tags: { es: ["Herramientas"], en: ["Tools"] },
  },
  {
    id: "980",
    symbol: "🪨",
    description: {
      es: { main: "Piedra", secondary: ["Roca"] },
      en: { main: "Rock", secondary: ["Stone"] },
    },
    tags: { es: ["Naturaleza"], en: ["Nature"] },
  },
  {
    id: "981",
    symbol: "💉",
    description: {
      es: {
        main: "Jeringa",
        secondary: ["Vacuna", "Medicina", "Doctor", "Hospital", "Inyección"],
      },
      en: { main: "Syringe", secondary: ["Vaccine", "Medicine", "Doctor"] },
    },
    tags: { es: ["Salud", "Medicina"], en: ["Health", "Medicine"] },
  },
  {
    id: "982",
    symbol: "🪆",
    description: {
      es: { main: "Mamuschka", secondary: ["Matrioska", "Muñecas Rusas"] },
      en: { main: "Nesting Dolls", secondary: ["Russian Dolls"] },
    },
    tags: { es: ["Juguetes", "Rusia"], en: ["Toys", "Russia"] },
  },
  {
    id: "983",
    symbol: "🪭",
    description: {
      es: { main: "Abanico", secondary: ["Calor", "Viento"] },
      en: { main: "Folding Hand Fan", secondary: ["Heat", "Wind"] },
    },
    tags: { es: ["Accesorios", "Verano"], en: ["Accessories", "Summer"] },
  },
  {
    id: "984",
    symbol: "⚱",
    description: {
      es: {
        main: "Urna Funeraria",
        secondary: ["Cenizas", "Funeral", "Muerte"],
      },
      en: { main: "Funeral Urn", secondary: ["Ashes", "Funeral", "Death"] },
    },
    tags: { es: ["Objetos", "Muerte"], en: ["Objects", "Death"] },
  },
  {
    id: "985",
    symbol: "💈",
    description: {
      es: {
        main: "Poste de Barbero",
        secondary: ["Peluquería", "Corte de Pelo"],
      },
      en: { main: "Barber Pole", secondary: ["Haircut", "Barbershop"] },
    },
    tags: { es: ["Lugares", "Servicios"], en: ["Places", "Services"] },
  },
  {
    id: "986",
    symbol: "📨",
    description: {
      es: { main: "Correo Entrante", secondary: ["Sobre", "Email", "Mensaje"] },
      en: { main: "Incoming Envelope", secondary: ["Mail", "Message"] },
    },
    tags: { es: ["Comunicación", "Oficina"], en: ["Communication", "Office"] },
  },
  {
    id: "987",
    symbol: "💌",
    description: {
      es: { main: "Carta de Amor", secondary: ["Corazón", "Sobre", "Romance"] },
      en: { main: "Love Letter", secondary: ["Heart", "Envelope", "Romance"] },
    },
    tags: { es: ["Amor", "Comunicación"], en: ["Love", "Communication"] },
  },
  {
    id: "988",
    symbol: "🪅",
    description: {
      es: { main: "Piñata", secondary: ["Caramelos"] },
      en: { main: "Piñata", secondary: ["Candy"] },
    },
    tags: { es: ["Celebración", "Juegos"], en: ["Celebration", "Games"] },
  },
  {
    id: "989",
    symbol: "🧪",
    description: {
      es: {
        main: "Tubo de Ensayo",
        secondary: ["Química", "Ciencia", "Experimento"],
      },
      en: {
        main: "Test Tube",
        secondary: ["Chemistry", "Science", "Experiment"],
      },
    },
    tags: { es: ["Ciencia", "Educación"], en: ["Science", "Education"] },
  },
  {
    id: "990",
    symbol: "🥼",
    description: {
      es: { main: "Bata de Laboratorio", secondary: ["Doctor", "Científico"] },
      en: { main: "Lab Coat", secondary: ["Doctor", "Scientist"] },
    },
    tags: {
      es: ["Ropa", "Ciencia", "Salud"],
      en: ["Clothing", "Science", "Health"],
    },
  },
  {
    id: "991",
    symbol: "⚗",
    description: {
      es: { main: "Alambique", secondary: ["Química", "Ciencia"] },
      en: { main: "Alembic", secondary: ["Chemistry", "Science"] },
    },
    tags: { es: ["Ciencia", "Objetos"], en: ["Science", "Objects"] },
  },
  {
    id: "992",
    symbol: "🪮",
    description: {
      es: { main: "Peineton", secondary: ["Peine", "Pelo", "Cabello"] },
      en: { main: "Hair Pick", secondary: ["Comb", "Hair"] },
    },
    tags: { es: ["Aseo", "Belleza", "Mujeres"], en: ["Grooming", "Beauty"] },
  },
  {
    id: "993",
    symbol: "🎎",
    description: {
      es: { main: "Muñecas Japonesas", secondary: ["Festival", "Japón"] },
      en: { main: "Japanese Dolls", secondary: ["Festival", "Japan"] },
    },
    tags: { es: ["Cultura", "Japón"], en: ["Culture", "Japan"] },
  },
  {
    id: "994",
    symbol: "🪒",
    description: {
      es: { main: "Navaja de Afeitar", secondary: ["Afeitarse", "Barba"] },
      en: { main: "Razor", secondary: ["Shave", "Beard"] },
    },
    tags: { es: ["Aseo", "Herramientas"], en: ["Grooming", "Tools"] },
  },
  {
    id: "995",
    symbol: "🧴",
    description: {
      es: { main: "Loción", secondary: ["Crema", "Shampoo", "Jabón"] },
      en: { main: "Lotion Bottle", secondary: ["Cream", "Shampoo", "Soap"] },
    },
    tags: { es: ["Aseo", "Baño"], en: ["Grooming", "Bathroom"] },
  },
  {
    id: "996",
    symbol: "🛎",
    description: {
      es: { main: "Timbre de Hotel", secondary: ["Servicio", "Campana"] },
      en: { main: "Bellhop Bell", secondary: ["Service", "Bell"] },
    },
    tags: { es: ["Servicios", "Viajes"], en: ["Services", "Travel"] },
  },
  {
    id: "997",
    symbol: "🗄",
    description: {
      es: { main: "Archivador", secondary: ["Oficina", "Papeles"] },
      en: { main: "File Cabinet", secondary: ["Office", "Papers"] },
    },
    tags: { es: ["Oficina", "Muebles"], en: ["Office", "Furniture"] },
  },
  {
    id: "998",
    symbol: "🗒",
    description: {
      es: {
        main: "Bloc de Notas",
        secondary: ["Escribir", "Espiral", "Block de Notas", "Libreta"],
      },
      en: { main: "Spiral Notepad", secondary: ["Write", "Note"] },
    },
    tags: { es: ["Oficina", "Escritura"], en: ["Office", "Writing"] },
  },
  {
    id: "999",
    symbol: "📋",
    description: {
      es: { main: "Portapapeles", secondary: ["Lista", "Chequeo"] },
      en: { main: "Clipboard", secondary: ["List", "Check"] },
    },
    tags: { es: ["Oficina", "Trabajo"], en: ["Office", "Work"] },
  },
  {
    id: "1000",
    symbol: "📭",
    description: {
      es: { main: "Buzón Abierto", secondary: ["Correo", "Vacío"] },
      en: { main: "Open Mailbox", secondary: ["Mail", "Empty"] },
    },
    tags: { es: ["Comunicación", "Correo"], en: ["Communication", "Mail"] },
  },
  {
    id: "1001",
    symbol: "📯",
    description: {
      es: { main: "Corneta Postal", secondary: ["Correo", "Música"] },
      en: { main: "Postal Horn", secondary: ["Mail", "Music"] },
    },
    tags: {
      es: ["Comunicación", "Instrumentos"],
      en: ["Communication", "Instruments"],
    },
  },
  {
    id: "1002",
    symbol: "🔍",
    description: {
      es: {
        main: "Lupa Orientada a la Izquierda",
        secondary: ["Buscar", "Investigar", "Zoom"],
      },
      en: {
        main: "Magnifying Glass Tilted Left",
        secondary: ["Search", "Investigate", "Zoom"],
      },
    },
    tags: { es: ["Herramientas", "Oficina"], en: ["Tools", "Office"] },
  },
  {
    id: "1003",
    symbol: "🕺",
    description: {
      es: {
        main: "Bailarín",
        secondary: ["Baile", "Fiesta", "Bailar", "Danza"],
      },
      en: { main: "Man Dancing", secondary: ["Dance", "Party"] },
    },
    tags: {
      es: ["Personas", "Entretenimiento", "Fiesta"],
      en: ["People", "Entertainment", "Party"],
    },
  },
  {
    id: "1004",
    symbol: "👨‍🦰",
    description: {
      es: { main: "Hombre Pelirrojo", secondary: ["Colorada", "Colorado"] },
      en: { main: "Man: Red Hair", secondary: ["Redhead"] },
    },
    tags: { es: ["Hombres", "Pelo"], en: ["Men", "Hair"] },
  },
  {
    id: "1005",
    symbol: "🧎‍♂️",
    description: {
      es: { main: "Hombre Arrodillado" },
      en: { main: "Man Kneeling" },
    },
    tags: { es: ["Gestos", "Hombres"], en: ["Gestures", "Men"] },
  },
  {
    id: "1006",
    symbol: "🧎‍♀️",
    description: {
      es: { main: "Mujer Arrodillada" },
      en: { main: "Woman Kneeling" },
    },
    tags: { es: ["Gestos", "Mujeres"], en: ["Gestures", "Women"] },
  },
  {
    id: "1007",
    symbol: "👩‍🍼",
    description: {
      es: { main: "Mujer alimentando bebé", secondary: ["Amamantar", "Bebe"] },
      en: { main: "Woman Feeding Baby", secondary: ["Breastfeeding", "Baby"] },
    },
    tags: { es: ["Familia", "Mujeres"], en: ["Family", "Women"] },
  },
  {
    id: "1008",
    symbol: "👨‍🍼",
    description: {
      es: { main: "Hombre alimentando bebé", secondary: ["Bebe", "Biberon"] },
      en: { main: "Man Feeding Baby", secondary: ["Baby", "Bottle"] },
    },
    tags: { es: ["Familia", "Hombres"], en: ["Family", "Men"] },
  },
  {
    id: "1009",
    symbol: "🧑‍🍼",
    description: {
      es: { main: "Persona alimentando bebé", secondary: ["Bebe"] },
      en: { main: "Person Feeding Baby", secondary: ["Baby"] },
    },
    tags: { es: ["Familia"], en: ["Family"] },
  },
  {
    id: "1010",
    symbol: "🤦‍♀️",
    description: {
      es: { main: "Facepalm Mujer", secondary: ["Decepcion"] },
      en: { main: "Woman Facepalming", secondary: ["Disappointment"] },
    },
    tags: { es: ["Gestos", "Mujeres"], en: ["Gestures", "Women"] },
  },
  {
    id: "1011",
    symbol: "👨‍🦳",
    description: {
      es: { main: "Hombre Pelo Blanco", secondary: ["Cano", "Viejo"] },
      en: { main: "Man: White Hair", secondary: ["Old"] },
    },
    tags: { es: ["Hombres", "Pelo"], en: ["Men", "Hair"] },
  },
  {
    id: "1012",
    symbol: "👩‍🦳",
    description: {
      es: { main: "Mujer Pelo Blanco", secondary: ["Cana", "Vieja"] },
      en: { main: "Woman: White Hair", secondary: ["Old"] },
    },
    tags: { es: ["Mujeres", "Pelo"], en: ["Women", "Hair"] },
  },
  {
    id: "1013",
    symbol: "🧔‍♂️",
    description: {
      es: { main: "Hombre con Barba", secondary: ["Barbudo"] },
      en: { main: "Man: Beard", secondary: ["Bearded"] },
    },
    tags: { es: ["Hombres", "Cara"], en: ["Men", "Face"] },
  },
  {
    id: "1014",
    symbol: "👵",
    description: {
      es: { main: "Abuela", secondary: ["Vieja", "Anciana"] },
      en: { main: "Old Woman", secondary: ["Grandmother"] },
    },
    tags: { es: ["Mujeres", "Familia"], en: ["Women", "Family"] },
  },
  {
    id: "1015",
    symbol: "🤏",
    description: {
      es: { main: "Por poco", secondary: ["Cerca", "Chiquito", "Chiquita"] },
      en: { main: "Pinching Hand", secondary: ["Close", "Little", "Small"] },
    },
    tags: { es: ["Gestos"], en: ["Gestures"] },
  },
  {
    id: "1016",
    symbol: "🫳🫴🫳🫴",
    description: {
      es: { main: "Cuarteto" },
      en: { main: "Cuarteto Expression" },
    },
    tags: { es: ["Expresiones"], en: ["Expressions", "Party"] },
  },
  {
    id: "1017",
    symbol: "🤐🫳🎤",
    description: { es: { main: "Drop Mic" }, en: { main: "Drop Mic" } },
    tags: { es: ["Expresiones"], en: ["Expressions", "Party"] },
  },
  {
    id: "1018",
    symbol: "∈",
    description: { es: { main: "Pertenece" }, en: { main: "Element of" } },
    tags: {
      es: ["Símbolos", "Conjuntos", "Matematica", "Signos"],
      en: ["Symbols", "Sets", "Math", "Signs"],
    },
  },
  {
    id: "1019",
    symbol: "∉",
    description: {
      es: { main: "No pertenece" },
      en: { main: "Not an element of" },
    },
    tags: {
      es: ["Símbolos", "Conjuntos", "Matematica", "Signos"],
      en: ["Symbols", "Sets", "Math", "Signs"],
    },
  },
  {
    id: "1020",
    symbol: "😉",
    description: {
      es: { main: "Guiño", secondary: ["guino", "guiñar", "complice", ";)"] },
      en: { main: "Wink", secondary: ["winking", "flirt", ";)"] },
    },
    tags: {
      es: ["Cara", "Emociones", "Fiesta"],
      en: ["Face", "Emotions", "Party"],
    },
  },
  {
    id: "1021",
    symbol: "🪏",
    description: {
      es: {
        main: "Pala",
        secondary: [
          "Palear",
          "Trabajar",
          "Cavar",
          "Chamba",
          "Chambear",
          "Laburo",
          "Laburar",
        ],
      },
      en: { main: "Shovel", secondary: ["Digging", "Work", "Dig"] },
    },
    tags: {
      es: ["Herramientas", "Trabajo", "Construcción", "Jardinería"],
      en: ["Tools", "Work", "Construction", "Gardening"],
    },
  },
  {
    id: "1022",
    symbol: "🧐",
    description: {
      es: {
        main: "Enfocado",
        secondary: [
          "Atención",
          "Atento",
          "Lupa",
          "Sospecha",
          "Sospechosos",
          "Foco",
          "Observación",
          "Observacion",
          "Ojos",
          "Lentes",
          "Mirada",
          "Monóculo",
          "Monoculo",
          "Detective",
          "Investigación",
          "Duda",
        ],
      },
      en: {
        main: "Focused",
        secondary: [
          "Attention",
          "Attentive",
          "Magnifying glass",
          "Suspicion",
          "Suspects",
          "Focus",
          "Observation",
          "Eyes",
          "Glasses",
          "Gaze",
          "Monocle",
          "Detective",
          "Investigation",
          "Doubt",
        ],
      },
    },
    tags: {
      es: ["Cara", "Gestos", "Curiosidad"],
      en: ["Face", "Gestures", "Curiosity"],
    },
  },
];
