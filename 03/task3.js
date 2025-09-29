const inputN = document.querySelector('input');
const button = document.querySelector('button');
const table  = document.querySelector('table');

function handleButtonClick(){
    const n = inputN.valueAsNumber; // only input type=number
    /* table.innerHTML = "";
    for (let i = 1; i <= n; i++){
        const tr = document.createElement('tr');
        for (let j = 1; j <= n; j++){
            const td = document.createElement('td');
            td.innerText = i * j;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }*/
    table.innerHTML = [...Array(n).keys()].map(row => `<tr>${
        [...Array(n).keys()].map(cell => `<td>${(row+1) * (cell+1)}</td>`).join('')
    }</tr>`).join('');
}

function handleInput(){
    const n = inputN.valueAsNumber;
    /* if (n > 200){
        inputN.classList.add('bignumber');
    } else {
        inputN.classList.remove('bignumber');
    } */
    inputN.classList.toggle('bignumber', n > 200);
}

button.addEventListener('click', handleButtonClick);
inputN.addEventListener('input', handleInput);