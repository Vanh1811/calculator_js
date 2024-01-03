const add = ((a, b) => a + b);
const subtract = ((a, b) => a - b);
const multiply = ((a, b) => a * b);
const divide = ((a, b) => a / b);

let firstNum = 0;
let operator = '';
let secondNum = 0;

function operate(first, ope, second) {
    switch (ope) {
        case '+':
            return add(first, second);
        case '-':
            return subtract(first, second);
        case '*':
            return multiply(first, second);
        case '/':
            return divide(first, second);
    }
}

const display = document.querySelector('#display');

let displayValue = '0';

function updateDisplay() {
    display.textContent = displayValue;
}

let enteringSecondNum = false;

function appendDigit(digit) {
    if (displayValue === '0' || enteringSecondNum) {
        displayValue = digit.toString();
        enteringSecondNum = false;
    } else {
        displayValue += digit.toString();
    }
    updateDisplay();
}

function handleOpe(selectedOpe) {
    if (operator !== '' && !enteringSecondNum) {
        secondNum = parseFloat(displayValue);
        const result = operate(firstNum, operator, secondNum);

        if (!isFinite(result)) {
            displayValue = 'Error';
        } else {
            displayValue = result.toString();
        }

        updateDisplay();
        firstNum = result;
    } else {
        firstNum = parseFloat(displayValue);
    }

    operator = selectedOpe;
    enteringSecondNum = true;
}

const btnPlus = document.querySelector('#btnPlus');
const btnMinus = document.querySelector('#btnMinus');
const btnMultiply = document.querySelector('#btnMultiply');
const btnDivide = document.querySelector('#btnDivide');
const btnEquals = document.querySelector('.equals');

btnPlus.addEventListener('click', () => handleOpe('+'));
btnMinus.addEventListener('click', () => handleOpe('-'));
btnMultiply.addEventListener('click', () => handleOpe('*'));
btnDivide.addEventListener('click', () => handleOpe('/'));

btnEquals.addEventListener('click', () => {
    if (operator !== '') {
        secondNum = parseFloat(displayValue);
        const result = operate(firstNum, operator, secondNum);

        if (!isFinite(result)) {
            displayValue = 'Error';
        } else {
            displayValue = result.toString();
        }

        updateDisplay();

        firstNum = 0;
        operator = '';
        secondNum = 0;
        enteringSecondNum = false;
    }
});


const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const btn6 = document.querySelector('#btn6');
const btn7 = document.querySelector('#btn7');
const btn8 = document.querySelector('#btn8');
const btn9 = document.querySelector('#btn9');
const btn0 = document.querySelector('#btn0');
const clear = document.querySelector('.clear');

btn1.addEventListener('click', () => appendDigit(1));
btn2.addEventListener('click', () => appendDigit(2));
btn3.addEventListener('click', () => appendDigit(3));
btn4.addEventListener('click', () => appendDigit(4));
btn5.addEventListener('click', () => appendDigit(5));
btn6.addEventListener('click', () => appendDigit(6));
btn7.addEventListener('click', () => appendDigit(7));
btn8.addEventListener('click', () => appendDigit(8));
btn9.addEventListener('click', () => appendDigit(9));
btn0.addEventListener('click', () => appendDigit(0));
clear.addEventListener('click', clearDisplay);

function clearDisplay() {
    displayValue = '0';
    updateDisplay();

    firstNum = 0;
    operator = '';
    secondNum = 0;
    enteringSecondNum = false;
}
