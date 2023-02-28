let currentNum = "";
let prevNum = "";
let runningNum = "";
let operator = "";

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
  if (!prevNum) {
    prevNum = runningNum + " " + press;
    smlDisplay.textContent = prevNum;
    currentNum = "";
    runningNum = "";
    lrgDisplay.textContent = currentNum;
  } else {
    prevNum = prevNum + " " + runningNum + " " + press;
    smlDisplay.textContent = prevNum;
    currentNum = "";
    runningNum = "";
    lrgDisplay.textContent = currentNum;
  }
}

function getEqPressed(press) {
  prevNum = prevNum + " " + runningNum + " " + press;
  smlDisplay.textContent = prevNum;
  currentNum = "";
  runningNum = "";
  lrgDisplay.textContent = doMath(prevNum);
  console.log(press);
}

function getClearPressed(press) {
  console.log(press);
}

function doMath(equation) {
  console.log("equation=" + equation);
}
