let display = document.querySelector('.calculator-screen');
let operator = '';
let previousValue = '';

function appendNumber(number) {
  if (display.value === '' && number === '.') {
    display.value = '0.';
  } else if (display.value.includes('.') && number === '.') {
    return;
  } else {
    display.value += number;1
  }
}

function appendOperator(op) {
  if (operator) {
    calculate();
  }
  previousValue = display.value;
  operator = op;
  display.value = '';
}

function calculate() {
  let currentValue = display.value;
  display.value = eval(previousValue + operator + currentValue);
  operator = '';
  previousValue = '';
}

function clearScreen() {
  display.value = '';
  operator = '';
  previousValue = '';
}

function deleteNumber() {
  display.value = display.value.slice(0, -1);
}