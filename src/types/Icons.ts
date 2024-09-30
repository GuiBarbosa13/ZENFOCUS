import SomMar from '../assets/sons/Som do mar.mp3';
import SomChuva from '../assets/sons/Som da chuva.mp3';
import SomFloresta from '../assets/sons/Som da floresta.mp3';
import Musica from '../assets/sons/Som lo-fi.mp3';

export const icons = [
    {
        name: "wave",
        icon: "bi bi-tsunami",
        active: false,
        som: SomMar,
    },{
        name: "rain",
        icon: "bi bi-cloud-drizzle",
        active: false,
        som: SomChuva,
    },{
        name: "forest",
        icon: "bi bi-tree",
        active: false,
        som: SomFloresta
    },{
        name: "music",
        icon: "bi bi-boombox",
        active: false,
        som: Musica,
    }
]