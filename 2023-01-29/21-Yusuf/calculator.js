calculator();

function calculator() {
  const num1 = parseFloat(prompt("Enter the first number:"));
  const num2 = parseFloat(prompt("Enter the second number:"));
  const process = prompt("Enter the operation (+, -, *, /):");
  const validOperators = ["+", "-", "*", "/"];
  let calculate = {
    info: "",
    result: "",
  };

  // check if the inputs are valid numbers
  if (isNaN(num1) || isNaN(num2)) {
    alert("Invalid numeric value(s), please try again.");
    // check if the operator is valid
  } else if (!validOperators.includes(process)) {
    alert("Invalid operator, please try again.");
  } else {
    if (process == "+") {
      calculate.result = num1 + num2;
      document.write(`${num1} ${process} ${num2} = ${calculate.result}`);
    } else if (process == "-") {
      calculate.result = num1 - num2;
      document.write(`${num1} ${process} ${num2} = ${calculate.result}`);
    } else if (process == "*") {
      calculate.result = num1 * num2;
      document.write(`${num1} ${process} ${num2} = ${calculate.result}`);
    } else if (process == "/" && num2 !== 0) {
      calculate.result = num1 / num2;
      document.write(`${num1} ${process} ${num2} = ${calculate.result}`);
    } else {
      calculate.info = "Cannot divide by 0.";
      document.write(`Error: ${calculate.info}`);
    }
  }
}
