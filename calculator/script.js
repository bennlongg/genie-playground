const display = document.querySelector(".display");
let currentNumber = "0";
let currentOperator = null;
let previousNumber = null;

function handleNumberClick(e) {
  const number = e.target.dataset.number;
  if (currentNumber === "0" || currentOperator === "=") {
    currentNumber = number;
    currentOperator = null;
  } else {
    currentNumber += number;
  }
  updateDisplay();
}

function handleOperatorClick(e) {
  const operator = e.target.dataset.operator;
  if (previousNumber !== null && currentOperator !== null && currentOperator !== "=") {
    calculateResult();
  }
  previousNumber = currentNumber;
  currentNumber = "0";
  currentOperator = operator;
}

function calculateResult() {
  if (currentOperator === null || previousNumber === null) return;

  const num1 = parseFloat(previousNumber);
  const num2 = parseFloat(currentNumber);
  let result;

  switch (currentOperator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num2 !== 0 ? num1 / num2 : "Error";
      break;
    default:
      return;
  }

  currentNumber = result.toString();
  previousNumber = null;
  currentOperator = "=";
  updateDisplay();
}

function handleClear() {
  currentNumber = "0";
  previousNumber = null;
  currentOperator = null;
  updateDisplay();
}

function handleBackspace() {
  if (currentNumber.length > 1) {
    currentNumber = currentNumber.slice(0, -1);
  } else {
    currentNumber = "0";
  }
  updateDisplay();
}

function handlePlusMinus() {
  if (currentNumber !== "0") {
    currentNumber =
      currentNumber.charAt(0) === "-" ? currentNumber.slice(1) : "-" + currentNumber;
    updateDisplay();
  }
}

function handlePercentage() {
  const num = parseFloat(currentNumber);
  if (!isNaN(num)) {
    currentNumber = (num / 100).toString();
    updateDisplay();
    previousNumber = null; // Reset previous number to avoid incorrect calculations
    currentOperator = "="; // Set operator to "=" to prevent immediate calculations
}
}

function updateDisplay() {
display.textContent = currentNumber.length <= display.textContent.length ? 
currentNumber : parseFloat(currentNumber).toExponential(3);
}

// Add event listeners to buttons
document.querySelectorAll(".number").forEach((btn) => {
btn.addEventListener("click", handleNumberClick);
});

document.querySelectorAll(".operator").forEach((btn) => {
btn.addEventListener("click", handleOperatorClick);
});

document.querySelector(".equals").addEventListener("click", calculateResult);
document.querySelector(".clear").addEventListener("click", handleClear);
document.querySelector(".backspace").addEventListener("click", handleBackspace);
document.querySelector(".plus-minus").addEventListener("click", handlePlusMinus);
document.querySelector(".percentage").addEventListener("click", handlePercentage);