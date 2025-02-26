// Calculator state variables
let displayValue = '0';
let storedValue = null;
let pendingOperation = null;
let isNewInput = true;

// Function to initialize the calculator
function initCalculator() {
    // Get the display element once the DOM is loaded
    const display = document.getElementById('display');
    
    // Initialize the display
    updateDisplay();
}

// Update the calculator display
function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = displayValue;
}

// Handle digit button press
function appendDigit(digit) {
    if (isNewInput) {
        displayValue = digit;
        isNewInput = false;
    } else {
        displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
    updateDisplay();
}

// Handle decimal point button press
function appendDecimal() {
    if (isNewInput) {
        displayValue = '0.';
        isNewInput = false;
    } else if (!displayValue.includes('.')) {
        displayValue += '.';
    }
    updateDisplay();
}

// Handle operation button press
function setOperation(operation) {
    const currentValue = parseFloat(displayValue);
    
    if (storedValue === null) {
        storedValue = currentValue;
    } else if (pendingOperation) {
        const result = performCalculation(storedValue, currentValue, pendingOperation);
        displayValue = String(result);
        storedValue = result;
        updateDisplay();
    }
    
    pendingOperation = operation;
    isNewInput = true;
}

// Handle equals button press
function calculate() {
    if (storedValue === null || pendingOperation === null) return;
    
    const currentValue = parseFloat(displayValue);
    const result = performCalculation(storedValue, currentValue, pendingOperation);
    
    displayValue = String(result);
    storedValue = null;
    pendingOperation = null;
    isNewInput = true;
    
    updateDisplay();
}

// Perform the calculation based on the operation
function performCalculation(a, b, operation) {
    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '×':
            return a * b;
        case '÷':
            return b !== 0 ? a / b : 'Error';
        default:
            return b;
    }
}

// Clear all values
function clearAll() {
    displayValue = '0';
    storedValue = null;
    pendingOperation = null;
    isNewInput = true;
    updateDisplay();
}

// Toggle the sign of the current value
function toggleSign() {
    if (displayValue !== '0' && displayValue !== 'Error') {
        displayValue = String(-parseFloat(displayValue));
        updateDisplay();
    }
}

// Calculate percentage
function percentage() {
    if (displayValue !== 'Error') {
        displayValue = String(parseFloat(displayValue) / 100);
        updateDisplay();
    }
}

// Initialize calculator when the page loads
document.addEventListener('DOMContentLoaded', initCalculator);
