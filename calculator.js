"use sctrict";

let operation = prompt("Enter an operation: +, -, *, / ");
let firstNumber = prompt("Enter the first number");
firstNumber = Number(firstNumber);
let secondNumber = prompt("Enter the second number");
secondNumber = Number(secondNumber);

if (operator === "+") {
  alert("firstNumber + secondNumber");
} else if (operator === "-") {
  alert("firstNumber - secondNumber");
} else if (operator === "*") {
  alert("firstNumber * secondNumber");
} else if (operator === "/") {
  alert("firstNumber / secondNumber");
} else {
  alert("invalid");
}
