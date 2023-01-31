// let x = 323;

// console.log(!isNaN(x))

function calculate(x, y, process) {
  // console.log("x =" + x);
  // console.log("y = " + y);
  if (isNaN(x) || isNaN(y)) {
    console.log("Must you enter a number plesae!");
    return;
  }

  var checkResult = {
    result: "",
    error: "",
  };

  switch (process) {
    case "+":
      console.log("Plus : " + (checkResult.result = x + y));
      break;

    case "-":
      console.log("Minus : " + (checkResult.result = x - y));
      break;

    case "*":
      console.log("Multiply : " + (checkResult.result = x * y));
      break;

    case "/":
      if (x === 0 || y === 0) {
        checkResult.error = "Please do not enter value 0";
        console.log(checkResult.error);
        return;
      }
      console.log("Divided By : " + (checkResult.result = x / y));
      break;

    default:
      console.log(
        (checkResult.result = "Please enter one of the four trading symbols.!")
      );
  }
}

calculate(2, 15, "+");
