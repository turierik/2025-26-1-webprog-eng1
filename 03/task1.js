const animals = [
    'cat',
    'dog',
    'elephant',
    'fox',
    'wolf',
    'ant'
];

const ul = document.querySelector('ul');

/* for (const animal of animals){
    const li = document.createElement('li');
    li.innerText = animal;
    ul.appendChild(li);
} */

ul.innerHTML = animals.map(animal => `<li>${animal}</li>`).join('');

function handleListItemClick(e){
    console.log(e);
    if (e.target.matches('li')){
        e.target.style.color = "blue";
    }
}

ul.addEventListener('click', handleListItemClick);