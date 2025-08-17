// Create four functions: add(), subtract(), multiply(), divide()
//Call the correct function when the user clicks on one of the buttons
//Perform the calculation and display the result

let num1 = 10;
let num2 = 2;
let result = 0;
let resultEl = document.getElementById("result-el");
resultText = "Result: ";

function add() {
  resultEl.textContent = resultText + (num1 + num2);
}

function subtract() {
  resultEl.textContent = resultText + (num1 - num2);
}

function multiply() {
  resultEl.textContent = resultText + (num1 * num2);
}

function divide() {
  resultEl.textContent = resultText + (num1 / num2);
}
