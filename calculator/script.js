const display = document.querySelector('.calculator-display');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('operator')) {
            handleOperator(button.textContent);
        } else if (button.classList.contains('clear')) {
            clearDisplay();
        } else {
            updateDisplay(button.textContent);
        }
    });
});

function updateDisplay(value) {
    display.value += value;
}

function handleOperator(operator) {
    if (operator === '=') {
        display.value = eval(display.value);
    } else {
        display.value += operator;
    }
}

function clearDisplay() {
    display.value = '';
}
