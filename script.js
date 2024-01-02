// script.js
const display = document.getElementById("result");
let expression = "";

function appendNumber(number) {
  expression += number;
  display.value = expression;
  console.log("Appended number:", number, "New expression:", expression);
}

function appendOperator(operator) {
  expression += operator;
  display.value = expression;
  console.log("Appended operator:", operator, "New expression:", expression);
}

function clearScreen() {
  expression = "";
  display.value = "";
  console.log("Screen cleared");
}

function calculate() {
  try {
    const result = eval(expression);
    const display = document.getElementById("result"); // Get the element to display result
    display.value = result;
    expression = result.toString(); // Set expression to result for further calculations
    console.log("Calculated result:", result);
  } catch (error) {
    const display = document.getElementById("result"); // Get the element to display error
    display.value = "Error";
    expression = "";
    console.error("Calculation error:", error);
  }
}
