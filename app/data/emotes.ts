export interface Emote {
    name: string;
    twitchName: string;
    file: string;
    channel: string;
    tags: {
        es: string[];
        en: string[];
    };
}

export const emotes: Emote[] = [
    {
        name: "cat-crying",
        twitchName: "nattpiTtMustaineLlorando",
        file: "/emotes/cat-crying.png",
        channel: "NattPitt",
        tags: {
            es: ["gato", "llorando", "triste", "emoción", "drama"],
            en: ["cat", "crying", "sad", "emotion", "drama"],
        },
    },
    {
        name: "cat-mate",
        twitchName: "nattpiTtMustaineMate",
        file: "/emotes/cat-mate.png",
        channel: "NattPitt",
        tags: {
            es: ["gato", "mate", "bebida", "argentina", "relax"],
            en: ["cat", "mate", "drink", "argentina", "chill"],
        },
    },
    {
        name: "cat-popcorn",
        twitchName: "nattpiTtMustaineComiendo",
        file: "/emotes/cat-popcorn.png",
        channel: "NattPitt",
        tags: {
            es: ["gato", "pochoclo", "palomitas", "comiendo", "mirando", "drama"],
            en: ["cat", "popcorn", "eating", "watching", "drama"],
        },
    },
    {
        name: "cat-raid",
        twitchName: "nattpiTtRaid",
        file: "/emotes/cat-raid.png",
        channel: "NattPitt",
        tags: {
            es: ["gato", "raid", "ataque", "llegada", "stream"],
            en: ["cat", "raid", "attack", "incoming", "stream"],
        },
    },
    {
        name: "cat-sleep",
        twitchName: "nattpiTtMustaineDurmiendo",
        file: "/emotes/cat-sleep.png",
        channel: "NattPitt",
        tags: {
            es: ["gato", "durmiendo", "sueño", "cansado", "noche"],
            en: ["cat", "sleeping", "sleep", "tired", "night"],
        },
    },
    {
        name: "cat-welcoming",
        twitchName: "nattpiTtFiestaa",
        file: "/emotes/cat-welcoming.png",
        channel: "NattPitt",
        tags: {
            es: ["gato", "fiesta", "bienvenida", "celebración", "hola"],
            en: ["cat", "party", "welcoming", "celebration", "hello"],
        },
    },
    {
        name: "cat-writing",
        twitchName: "nattpiTtMustaineEscribiend",
        file: "/emotes/cat-writing.png",
        channel: "NattPitt",
        tags: {
            es: ["gato", "escribiendo", "typing", "trabajo", "chat"],
            en: ["cat", "writing", "typing", "working", "chat"],
        },
    },
    {
        name: "cat-dead",
        twitchName: "nattpiTtAgotada",
        file: "/emotes/cat-dead.png",
        channel: "NattPitt",
        tags: {
            es: ["gato", "agotada", "muerta", "cansada", "rendida"],
            en: ["cat", "dead", "exhausted", "tired", "done"],
        },
    },
    {
        name: "cat-fire",
        twitchName: "nattpiTtFuego",
        file: "/emotes/cat-fire.png",
        channel: "NattPitt",
        tags: {
            es: ["gato", "fuego", "caliente", "genial", "hype"],
            en: ["cat", "fire", "hot", "cool", "hype"],
        },
    },
    {
        name: "nattpiTTPOOL",
        twitchName: "nattpiTTPOOL",
        file: "/emotes/nattpiTTPOOL.png",
        channel: "NattPitt",
        tags: {
            es: ["pool", "pileta", "agua", "verano"],
            en: ["pool", "water", "summer"],
        },
    },
    {
        name: "nattpiTtAdios",
        twitchName: "nattpiTtAdios",
        file: "/emotes/nattpiTtAdios.png",
        channel: "NattPitt",
        tags: {
            es: ["adiós", "chau", "despedida", "saludo"],
            en: ["goodbye", "bye", "farewell", "wave"],
        },
    },
    {
        name: "nattpiTtBesito",
        twitchName: "nattpiTtBesito",
        file: "/emotes/nattpiTtBesito.png",
        channel: "NattPitt",
        tags: {
            es: ["beso", "besito", "amor", "cariño"],
            en: ["kiss", "love", "affection"],
        },
    },
    {
        name: "nattpiTtCalamardo",
        twitchName: "nattpiTtCalamardo",
        file: "/emotes/nattpiTtCalamardo.png",
        channel: "NattPitt",
        tags: {
            es: ["calamardo", "aburrido", "serio", "meme"],
            en: ["squidward", "bored", "serious", "meme"],
        },
    },
    {
        name: "nattpiTtCorazon",
        twitchName: "nattpiTtCorazon",
        file: "/emotes/nattpiTtCorazon.png",
        channel: "NattPitt",
        tags: {
            es: ["corazón", "amor", "love", "cariño"],
            en: ["heart", "love", "affection"],
        },
    },
    {
        name: "nattpiTtHola",
        twitchName: "nattpiTtHola",
        file: "/emotes/nattpiTtHola.png",
        channel: "NattPitt",
        tags: {
            es: ["hola", "saludo", "bienvenida"],
            en: ["hello", "hi", "greeting", "wave"],
        },
    },
    {
        name: "nattpiTtQlito",
        twitchName: "nattpiTtQlito",
        file: "/emotes/nattpiTtQlito.png",
        channel: "NattPitt",
        tags: {
            es: ["qlito", "trasero", "gracioso", "meme"],
            en: ["butt", "funny", "meme"],
        },
    },
];
