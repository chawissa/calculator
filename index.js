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
// equalsButton.addEventListener("click");
// clearButton.addEventListener("click");
// resetButton.addEventListener("click");
// decimalButton.addEventListener("click");

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

function setInput(e) {
  if (e.key >= 0 && e.key <= 9) appendNumber(e.key);
}
