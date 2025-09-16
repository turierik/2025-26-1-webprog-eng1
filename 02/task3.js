const redSlider = document.querySelector("#r");
const greenSlider = document.querySelector("#g");
const blueSlider = document.querySelector("#b");
const body = document.body;

function updateBackgroundColor(){
    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;
    // "rgb(100 150 200)"
    body.style.backgroundColor = "rgb(" + redValue + " " + greenValue + " " + blueValue + ")";
    body.style.backgroundColor = `rgb(${redValue} ${greenValue} ${blueValue})`;
}

redSlider.addEventListener("input", updateBackgroundColor);
greenSlider.addEventListener("input", updateBackgroundColor);
blueSlider.addEventListener("input", updateBackgroundColor);