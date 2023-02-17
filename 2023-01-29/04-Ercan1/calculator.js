function calculator(number1, number2, calculate) {

  if (isNaN(number1) || isNaN(number2)) {
    console.log("Please enter a valid number");
    return;
  }

  var checkResult = {
    result: " ",
    error: " ",
  };

  switch (calculate) {
    case "+":
      console.log(checkResult.result = number1 + number2);
      break;

    case "-":
      console.log(checkResult.result = number1 - number2);
      break;

    case "*":
      console.log(checkResult.result = number1 * number2);
      break;

    case "/":

    console.log(checkResult.result = number1 / number2);
    


      if (number2 === 0) {
        checkResult.error = "Can't dived by 0";
        console.log(checkResult.error);
        return;
      }
      break;
      
      

    default:
      console.log(
        (checkResult.result = "Choose your operator!")
      );
  }
}

calculator(18, 3, "/");