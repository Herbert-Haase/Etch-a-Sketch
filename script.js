const button = document.querySelector('button');
const body = document.querySelector('body');

button.addEventListener('click', () => {
    if(document.querySelector('.container')) {
        const temp = document.querySelector('.container');
        temp.remove();

    }
    const container = document.createElement('div');
    container.classList.add('container');
    body.appendChild(container);




    let ask = parseInt(prompt("How Many Gridobjects?"));
    ask > 100 || isNaN(ask) ?  alert('Invalid amount') : createObjects(ask);
 
const blocks = document.querySelectorAll('.block');
  blocks.forEach((block) => {
        block.addEventListener('mouseover', () => {
            // let factor = 255;
            block.style.backgroundColor = "black";
            //block.style.backgroundColor = `rgb(${Math.random * factor}, ${Math.random * factor}, ${Math.random * factor})`;
            // if (factor > 0) {
            //     return () => {
            //       factor--; return factor;
            // } };
        });
    });

});

function createObjects(amount) {
    const container = document.querySelector('.container')
    for(let i = 0; i < amount; i++) {
        const block = document.createElement('div');
        block.classList.add('hold')
        for(let j = 0; j < amount; j++) {
            const BLOCKS = document.createElement('div');
            BLOCKS.classList.add('block')
            block.appendChild(BLOCKS);
        };
        container.appendChild(block);
    }
}

