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

function operate() {
  let num1 = +prompt("Enter a number", "");
  if (isNaN(num1) === true) {
    alert("Enter a number!");
    return;
  }

  let operator = prompt("Enter an operator", "");
  if (
    operator !== "+" &&
    operator !== "-" &&
    operator !== "*" &&
    operator !== "/"
  ) {
    alert("Enter a valid operator!");
    return;
  }

  let num2 = +prompt("Enter another number", "");
  if (isNaN(num2) === true) {
    alert("Enter a number!");
    return;
  }

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

  console.log(result);
}
