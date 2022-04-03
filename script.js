const button = document.querySelector('button');


button.addEventListener('click', () => {
    if(document.querySelector('.container')) {
        const temp = document.querySelector('.container');
        temp.remove();
    }
    const body = document.querySelector('body');
    const container = document.createElement('div');
    container.classList.add('container');
    body.appendChild(container);




    let ask = parseInt(prompt('Gib eine Auflösung ein. \nEingabe: 1 bis 100'));
    ask > 100 || ask < 1 || isNaN(ask) ?
      alert('Ungültige Menge \nGib 1 bis 100 ein.') : createObjects(ask);
 
const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((pixel) => {
        pixel.addEventListener('mouseover', () => {
            let color = document.querySelector('select').value;
            if (color === 'colorful') {
                color = `rgb(${Math.random() * 255}, 
                ${Math.random() * 255}, ${Math.random() * 255})`;
            };
            pixel.style.backgroundColor = color;
        });
    });
});



function createObjects(amount) {
    const container = document.querySelector('.container')
    for(let i = 0; i < amount; i++) {
        const rowOfPixels = document.createElement('div');
        rowOfPixels.classList.add('row');
        for(let j = 0; j < amount; j++) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            rowOfPixels.appendChild(pixel);
        };
        container.appendChild(rowOfPixels);
    }
}

