const matrix = [
    [20, 8, 7, 50],
    [8, 19, 45, 2],
    [5, 6, 19, 62]
];

// 1. generate a table from the matrix
// <table> ---> <tr> ---> <td>

const table = document.querySelector('table');
for (const row of matrix){
    const tr = document.createElement('tr');
    for (const cell of row){
        const td = document.createElement('td');
        td.innerText = cell;
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

table.innerHTML = matrix.map(row => `<tr>${
    row.map(cell => `<td>${cell}</td>`).join('')
}</tr>`).join('');

// 2. when i click on cell, multiply the value in the cell by 2

function multiply(e){
    if (e.target.matches('td')){
        e.target.innerText = parseInt(e.target.innerText) * 2;
    }
}
table.addEventListener('click', multiply);

// 3. (using the delegate function)
// when i move my mouse over a row, change the row's bg color
// event type: mouseover, mouseout

function delegate(parent, type, selector, handler) {
  parent.addEventListener(type, function (event) {
    const targetElement = event.target.closest(selector);
    if (this.contains(targetElement)) {
      handler.call(targetElement, event);
    }
  });
}

delegate(table, "mouseover", "tr", function() {
    this.style.backgroundColor = 'yellow';
});

delegate(table, "mouseout", "tr", function() {
    this.style.backgroundColor = '';
});