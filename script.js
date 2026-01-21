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

function roundResult(result) {
  return Math.round(result * 1e8) / 1e8;
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
    const newOp = operator.querySelector("button").textContent;
    if (currentVal !== "" && firstVal !== undefined && op !== undefined) {
      secondVal = +currentVal;
      firstVal = operate(firstVal, secondVal, op);
      firstVal = roundResult(firstVal);
      display.textContent = firstVal;
    } else if (currentVal !== "") {
      firstVal = +currentVal;
    }
    op = newOp;
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
    return;
  }
  let result = operate(firstVal, secondVal, op);
  result = roundResult(result);
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

const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", () => {
  if (!currentVal.includes(decimal.querySelector("button").textContent)) {
    if (currentVal === "") {
      currentVal += "0";
      display.textContent = currentVal;
    }
    currentVal += decimal.querySelector("button").textContent;
    display.textContent = currentVal;
  }
});

const backspace = document.querySelector(".backspace");
backspace.addEventListener("click", () => {
  currentVal = currentVal.slice(0, -1);
  if (currentVal === "") {
    display.textContent = "0";
  } else {
    display.textContent = currentVal;
  }
});

document.addEventListener("keydown", (event) => {
  const key = event.key;
  switch (key) {
    case "0":
      document.querySelector("#zero button").click();
      break;
    case "1":
      document.querySelector("#one button").click();
      break;
    case "2":
      document.querySelector("#two button").click();
      break;
    case "3":
      document.querySelector("#three button").click();
      break;
    case "4":
      document.querySelector("#four button").click();
      break;
    case "5":
      document.querySelector("#five button").click();
      break;
    case "6":
      document.querySelector("#six button").click();
      break;
    case "7":
      document.querySelector("#seven button").click();
      break;
    case "8":
      document.querySelector("#eight button").click();
      break;
    case "9":
      document.querySelector("#nine button").click();
      break;

    case "+":
      document.querySelector("#plus button").click();
      break;
    case "-":
      document.querySelector("#minus button").click();
      break;
    case "*":
      document.querySelector("#multiply button").click();
      break;
    case "/":
      document.querySelector("#divide button").click();
      break;

    case "Enter":
      event.preventDefault();
      document.querySelector(".equal-to button").click();
      break;

    case "Backspace":
      event.preventDefault();
      document.querySelector(".backspace button").click();
      break;

    case "Escape":
      event.preventDefault();
      document.querySelector(".clear button").click();
      break;

    case ".":
      document.querySelector(".decimal button").click();
      break;
  }
});
