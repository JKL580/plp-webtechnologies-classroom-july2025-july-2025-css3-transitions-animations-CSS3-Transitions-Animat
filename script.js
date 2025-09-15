// Global variable for demonstration
let globalCounter = 0;

// Function demonstrating scope, parameters, and return value
function changeColor(element, color) {
    // Local variable inside function
    let oldColor = element.style.backgroundColor;
    element.style.backgroundColor = color;
    return oldColor; // return previous color
}

// Pulse button animation trigger
const pulseButton = document.getElementById("pulseButton");
pulseButton.addEventListener("click", function() {
    this.classList.add("pulse");
    setTimeout(() => this.classList.remove("pulse"), 2000); // stop after 2s
});

// Slide box animation trigger
const slideBox = document.getElementById("slideBox");
slideBox.addEventListener("click", function() {
    this.classList.add("slide");
    setTimeout(() => this.classList.remove("slide"), 2000);
});

// Change box color using JS function
const colorButton = document.getElementById("colorButton");
const colorBox = document.getElementById("colorBox");
const returnValue = document.getElementById("returnValue");

colorButton.addEventListener("click", function() {
    globalCounter++; // using global variable
    let previousColor = changeColor(colorBox, globalCounter % 2 === 0 ? "lightblue" : "lightgreen");
    returnValue.textContent = `Previous color was: ${previousColor}`;
});
