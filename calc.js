let currentNum = "";
let prevNum = "";
let runningNum = "";
let operator = "";
let numAry = [];
let opAry = [];

const numPress = document.querySelectorAll(".numBtn");
const operatorPress = document.querySelectorAll(".operator");
const equalsPress = document.querySelector(".equals");
const clearPress = document.querySelector(".clear");
const lrgDisplay = document.getElementById("largetype");
const smlDisplay = document.getElementById("smalltype");

numPress.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    getNumPressed(e.target.textContent);
  });
});

operatorPress.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    getOpPressed(e.target.textContent);
  });
});

equalsPress.addEventListener("click", (e) => {
  getEqPressed(e.target.textContent);
});

clearPress.addEventListener("click", (e) => {
  getClearPressed(e.target.textContent);
});

function getNumPressed(press) {
  currentNum = press;
  lrgDisplay.textContent += currentNum;
  runningNum = runningNum + currentNum;
}

function getOpPressed(press) {
  opAry.push(press);
  if (!prevNum) {
    prevNum = runningNum + " " + press;
    smlDisplay.textContent = prevNum;
    numAry.push(runningNum);
    currentNum = "";
    runningNum = "";
    lrgDisplay.textContent = currentNum;
  } else {
    numAry.push(runningNum);
    prevNum = prevNum + " " + runningNum + " " + press;
    smlDisplay.textContent = prevNum;
    currentNum = "";
    runningNum = "";
    lrgDisplay.textContent = currentNum;
  }
}

function getEqPressed(press) {
  numAry.push(runningNum);
  opAry.push(press);
  prevNum = prevNum + " " + runningNum + " " + press;
  smlDisplay.textContent = prevNum;
  currentNum = "";
  runningNum = "";
  lrgDisplay.textContent = doMath(prevNum);
  // console.log(press);
}

function getClearPressed(press) {
  console.log(press);
}

function doMath(equation) {
  if (!opAry.includes("=")) {
    alert("Oops something went wrong, please clear and try again");
  } else {
    let firstNum = parseInt(numAry.at(0));
    let secondNum = parseInt(numAry.at(1));
    let firstOp = opAry.at(0);
    if (firstOp === "+") {
      return firstNum + secondNum;
    }
    if (firstOp === "-") {
      return firstNum - secondNum;
    }
    if (firstOp === "*") {
      return firstNum * secondNum;
    }
    if (firstOp === "/") {
      return firstNum / secondNum;
    }
  }
  console.log(equation);
  console.log(numAry);
  console.log(opAry);
}
