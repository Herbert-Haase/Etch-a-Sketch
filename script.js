const button = document.querySelector('button');

button.addEventListener('click', () => {
    let ask = parseInt(prompt("How Many Gridobjects?"));
    ask > 100 || isNaN(ask) ?  alert('Invalid amount') : createObjects(ask);
 
    const container = document.querySelector('#container');

const blocks = container.querySelectorAll('.block');
  blocks.forEach((block) => {
        block.addEventListener('mouseover', () => {
            // let factor = 255;
            block.style.backgroundColor = "red";
            //block.style.backgroundColor = `rgb(${Math.random * factor}, ${Math.random * factor}, ${Math.random * factor})`;
            // if (factor > 0) {
            //     return () => {
            //       factor--; return factor;
            // } };
        });
    });

});

function createObjects(amount) {
    const container = document.querySelector('#container')
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

