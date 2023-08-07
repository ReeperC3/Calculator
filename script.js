const numbers = document.querySelector('.num');
const operators = document.querySelector('.operator');
const currentOperation = document.querySelector('.currentOperation')
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
const plus = document.querySelector('.add');
const minus = document.querySelector('.subtract');
const multiplication = document.querySelector('.multiply');
const division = document.querySelector('.divide');
const equals = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const delet = document.querySelector('.delete');

let currentOperator = '';
let firstNum = undefined;
let secondNum = undefined;
function firstOrSecond(num) {
  if (firstNum === undefined && currentOperator === '') {
    firstNum = num;
    currentOperation.textContent = firstNum;
  } else if (firstNum !== undefined && currentOperator === '') {
    firstNum *= 10;
    firstNum += num;
    currentOperation.textContent = firstNum;
  } else if (currentOperator !== '' && firstNum !== undefined && secondNum === undefined) {
    secondNum = num
    currentOperation.textContent = `${firstNum} ${currentOperator} ${secondNum}`
  } else if (currentOperator !== '' && firstNum !== undefined && secondNum !== undefined) {
    secondNum *= 10;
    secondNum += num;
    currentOperation.textContent = `${firstNum} ${currentOperator} ${secondNum}`
  }
}

function setCurrentOperation(operator) {
  if (firstNum === undefined) {
    firstNum = 0;
    currentOperator = operator;
    currentOperation.textContent = `${firstNum} ${currentOperator}`
  } else if (firstNum !== undefined && secondNum === undefined) {
    currentOperator = operator;
    currentOperation.textContent = `${firstNum} ${currentOperator}`
  } 
}
let answer = undefined
function operate(num1, operator, num2) {
  if (operator === '+') {
    answer = add(num1, num2);
  } else if (operator === '-') {
    answer = subtract(num1, num2);
  } else if (operator === '*') {
    answer =  multiply(num1, num2);
  } else if (operator === '/') {
    answer = divide(num1, num2);
  }
  currentOperation.textContent = `${firstNum} ${currentOperator} ${secondNum} = ${answer}`
}

function clearScreen() {
  answer = undefined;
  firstNum = undefined;
  secondNum = undefined;
  currentOperator = '';
  currentOperation.textContent = '0';
}

function add(num1, num2) {
  num = num1 + num2;
  return num;
}

function subtract(num1, num2) {
  num = num1 + num2;
  return num;
}

function multiply(num1, num2) {
  num = num1 * num2;
  return num;
}

function divide(num1, num2) {
  num = num1 / num2;
  return num;
}