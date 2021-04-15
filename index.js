"use strict";

const calcKeys = document.querySelector(".buttons-grid");
const userInput = document.querySelector("#user-input");
const calculator = document.querySelector(".calculator");
const displayResult = document.querySelector("#result");
let isEqualsPressed = false;
let equation = 0;
let checkForDecimal = "";

calcKeys.addEventListener("click", (e) => {
  if (!e.target.closest("button")) return;

  const key = e.target;
  const keyValue = key.textContent;
  let inputDisplay = userInput.textContent;
  const { type } = key.dataset;
  const { previousKeyType } = calculator.dataset;

  if (type === "number" && !isEqualsPressed) {
  }
});
