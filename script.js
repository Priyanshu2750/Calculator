function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(num1, num2, operator) {
  let result;

  if (operator === "+") {
    result = add(num1, num2);
  } else if (operator === "-") {
    result = subtract(num1, num2);
  } else if (operator === "*") {
    result = multiply(num1, num2);
  } else if (operator === "/") {
    result = divide(num1, num2);
  }

  return result;
}

const display = document.querySelector(".display");

let currentVal = "";
let firstVal, secondVal, op;

const digits = document.querySelectorAll(".digit");
for (const digit of digits) {
  digit.addEventListener("click", () => {
    const value = digit.querySelector("button").textContent;
    currentVal += value;
    display.textContent = currentVal;
  });
}

const operators = document.querySelectorAll(".operator");
for (const operator of operators) {
  operator.addEventListener("click", () => {
    op = operator.querySelector("button").textContent;
    if (currentVal !== "") {
      firstVal = +currentVal;
    }
    currentVal = "";
  });
}

const equal = document.querySelector(".equal-to");
equal.addEventListener("click", () => {
  secondVal = +currentVal;
  if (op === "/" && secondVal === 0) {
    display.textContent = "Cannot divide by 0";
    currentVal = "";
    firstVal = undefined;
    secondVal = undefined;
    op = undefined;
  }
  let result = operate(firstVal, secondVal, op);
  display.textContent = result;
  firstVal = result;
  currentVal = "";
});

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  display.textContent = "0";
  currentVal = "";
  firstVal = undefined;
  secondVal = undefined;
  op = undefined;
});
