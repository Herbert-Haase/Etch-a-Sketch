const button = document.querySelector('button');

button.addEventListener('click', () => {
    let ask = parseInt(prompt("How Many Gridobjects?"));
    ask > 100 || isNaN(ask) ?  alert('Invalid amount') : createObjects(ask);
    
});

function createObjects(amount) {
    const container = document.querySelector('#container')
    for(let i = 0; i < amount; i++) {
        const block = document.createElement('div');
        for(let j = 0; j < amount; j++) {
            const BLOCKS = document.createElement('div');
            BLOCKS.textContent = j;
            block.appendChild(BLOCKS);
        };
        // block.style.cssText = "flex-grow: 1; flex-shrink: 0; flex-basis: auto; padding: 10px"
        container.appendChild(block);
    }
}

