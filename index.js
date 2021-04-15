"use strict";

const calcKeys = document.querySelector(".buttons-grid");
const userInput = document.querySelector("#user-input");
const calculator = document.querySelector(".calculator");
const displayResult = document.querySelector("#result");
let isEqualsPressed = false;
let equation = 0;
let checkForDecimal = "";
