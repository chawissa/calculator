"use strict";

const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[data-backspace]");
const resetButton = document.querySelector("[data-reset]");
const decimalButton = document.querySelector("[data-decimal]");
const screen = document.querySelector("[data-screen]");

let firstNumber = "";
let secondNumber = "";
let currentOperation = null;
let shouldResetScreen = false;

window.addEventListener("keydown", setInput);
equalsButton.addEventListener("click", evaluate);
clearButton.addEventListener("click", clear);
resetButton.addEventListener("click", deleteNumber);
decimalButton.addEventListener("click", appendDecimal);

numberButtons.forEach((button) =>
  button.addEventListener("click", () => appendNumber(button.textContent))
);

operatorButtons.forEach((button) =>
  button.addEventListener("click", () => setOperation(button.textContent))
);

function appendNumber(number) {
  if (screen.textContent === "0" || shouldResetScreen) resetScreen();
  screen.textContent += number;
}

function resetScreen() {
  screen.textContent = "";
  shouldResetScreen = false;
}

function clear() {
  screen.textContent = "0";
  firstNumber = "";
  secondNumber = "";
  currentOperation = null;
}

function appendDecimal() {
  if (shouldResetScreen) resetScreen();
  if (screen.textContent === "") screen.textContent = "0";
  if (screen.textContent.includes(".")) return;
  screen.textContent += ".";
}

function deleteNumber() {
  screen.textContent = screen.textContent.toString().slice(0, -1);
}

function setOperation(operator) {
  if (currentOperation !== null) evaluate();
  firstNumber = screen.textContent;
  currentOperation = operator;
  shouldResetScreen = true;
}

function evaluate() {
  if (currentOperation === null || shouldResetScreen) return;
  if (currentOperation === "÷" && screen.textContent === "0") {
    alert("You can't divide by 0!");
    clear();
    return;
  }
  secondNumber = screen.textContent;
  screen.textContent = roundResult(
    operate(currentOperation, firstNumber, secondNumber)
  );
  currentOperation = null;
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000;
}

function setInput(e) {
  if (e.key >= 0 && e.key <= 9) appendNumber(e.key);
  if (e.key === ".") appendDecimal();
  if (e.key === "=" || e.key === "Enter") evaluate();
  if (e.key === "Backspace") deleteNumber();
  if (e.key === "Escape") clear();
  if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/")
    setOperation(convertOperator(e.key));
}
