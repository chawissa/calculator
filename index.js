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

window.addEventListener("keydown");
equalsButton.addEventListener("click");
clearButton.addEventListener("click");
resetButton.addEventListener("click");
decimalButton.addEventListener("click");

function appendNumber(number) {
  if (screen.textContent === "0" || shouldResetScreen) resetScreen();
  screen.textContent += number;
}

function resetScreen() {
  screen.textContent = "";
  shouldResetScreen = false;
}
