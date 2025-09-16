// EVENT HANDLING TUTORIAL

// 1. select all the element that are involved in the event
// (input, output, trigger)
const paragraph = document.querySelector("p");
const button = document.querySelector("button");

// 2. write an event handler function
function handleButtonClick(){
    paragraph.innerText = parseInt(paragraph.innerText) + 1;
}

// 3. add an event listener
button.addEventListener("click", handleButtonClick);
