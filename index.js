const b_deg_music = document.querySelector('.bg-deg-music');

// Mapeo de clases a colores
const colores = {
    'btn-music-1': '#144643',
    'btn-music-2': '#154d2b',
    'btn-music-3': '#7b1b43',
    'btn-music-4': '#741d1d',
    'btn-music-5': '#7b1840',
    'btn-music-6': '#262629'
};

// Event delegation
document.addEventListener('mouseover', (e) => {
    for (const clase in colores) {
        if (e.target.matches(`.${clase}`)) {
            b_deg_music.style.background = `linear-gradient(to bottom, ${colores[clase]}, transparent)`;
            break;
        }
    }
});