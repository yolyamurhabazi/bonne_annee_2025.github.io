const color = [
    '#6F61C0', '#1fd225', '#F875AA', '#ffaa01', 'aqua', '#ff00aa', '#aa00ff', '#00aaff',
    '#f00', '#ffea00', '#ffa500', '#711DB0', '#F4CE14', '#ffffff', '#FF5733', '#33FF57',
    '#3380FF', '#FF33A1', '#33FFF2', '#FFFF33', '#FF3333', '#33FF88', '#FF8633', '#DFFF33',
    '#FF33FF', '#B833FF', '#33FFA8', '#33FFDD', '#9933FF', '#E8FF33', '#F033FF', '#00FFCC',
    '#FFCC00', '#6633FF', '#33FF66', '#FF3366', '#80FF33', '#FF33B3', '#33B3FF', '#FF9933'
];

let count = 0;

const setColor = (element, color) => {
    element.setAttribute('style', `text-shadow: 0 0 25px ${color}, 0 0 50px ${color}, 0 0 100px ${color}`);
}

const addSnowflake = () => {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    const inner = document.createElement('div');
    inner.classList.add('inner');
    inner.appendChild(document.createTextNode('❅'));
    

    // Assigner une couleur aléatoire à chaque cristal
    const randomColor = color[Math.floor(Math.random() * color.length)];
    inner.setAttribute('style', `color: ${randomColor}; text-shadow: 0 0 10px ${randomColor}, 0 0 20px ${randomColor}, 0 0 30px ${randomColor};`);

    snowflake.appendChild(inner);
    document.querySelector('.snowflakes').appendChild(snowflake);
}

const launchFirework = (position) => {
    const firework = document.createElement('div');
    firework.classList.add('firework');

    // Positionnement à gauche ou à droite de l'écran
    firework.style.bottom = '0';
    firework.style.left = position === 'left' ? '5%' : '90%'; // Extrémités gauche et droite

    // Couleur aléatoire pour le feu d'artifice
    const randomColor = color[Math.floor(Math.random() * color.length)];
    firework.style.background = randomColor;

    // Taille maximale de 50px (responsif)
    firework.style.width = '30px';
    firework.style.height = '30px';

    document.body.appendChild(firework);

    // Animation de montée puis explosion lente
    setTimeout(() => {
        firework.style.transform = `translateY(-300px) scale(10)`; // Monte à 300px
        firework.style.opacity = '0';
    }, 500); // Animation plus lente

    // Supprimer l'élément après l'animation
    setTimeout(() => {
        document.body.removeChild(firework);
    }, 3000);
}

window.onload = () => {
    for (let i = 1; i <= 70; i++) {
        addSnowflake();
    }

    // Lancer des feux d'artifice à gauche et à droite toutes les 3 secondes
    setInterval(() => {
        launchFirework('left');
        launchFirework('right');
    }, 3000);
}

document.querySelector('button').addEventListener('click', (e) => {
    if (count === color.length) {
        count = 0;
    } else {
        e.target.innerText = 'Click Again';
        const newyear = document.querySelector('#newyear');
        setColor(newyear, color[count]);

        const year = document.querySelector('#year');
        setColor(year, color[count]);

        setColor(e.target, color[count]);
        e.target.setAttribute('style', `color:${color[count]}; outline: 4px solid ${color[count]};box-shadow: 0 0 25px ${color[count]}, 0 0 50px ${color[count]}, 0 0 100px ${color[count]};`);
        count++;
    }
});
