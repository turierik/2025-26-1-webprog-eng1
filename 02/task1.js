const myParagraph = document.querySelector("p");
myParagraph.innerText = "Tues<i>day</i>"; // this will not format it properly
myParagraph.innerHTML = "Tues<i>day</i>"; // you can use HTML tags to format 

const h1 = document.querySelector("h1");
h1.innerText = "Changed"; // only the FIRST match is changed

const h1s = document.querySelectorAll("h1"); // returns a list
for (const h of h1s)
    h.innerText = "Hahaha";

h1.innerHTML = myParagraph.innerHTML; // you can also use innerText and innerHTML to READ the text of an element

// CSS --> background-color: yellow
//  JS --> backgroundColor = "yellow"
myParagraph.style.backgroundColor = "yellow";
myParagraph.style.color = "purple";
myParagraph.style.border = "3px solid black";

const img = document.querySelector("img");
img.src = "https://friendsofanimals.org/wp-content/uploads/2023/12/foxactualweb.png";
img.alt = "Another alt text";
img.style.height = "200px";