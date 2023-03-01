function calculate(n1, n2, operator) {
  console.log(n1, n2, operator);
  let result = {};

  if (isNaN(n1) || isNaN(n2)) {
    result.hata = "Error: Incorrect type!";
    result.sonuc = "";
    return {result};
    
  }

  if (operator === "/" && n2===0 )  {

    result.hata = "Error: Division by zero!";
    result.sonuc = "";
    return result;
  }


  switch (operator) {
    case "*":
      result.sonuc = n1 * n2;
      result.hata = "NO ERROR"

      break;
    case "/":
      result.sonuc = n1 / n2;
      result.hata = "NO ERROR"
      break;
    case "+":
      result.sonuc = n1 + n2;
      result.hata = "NO ERROR"
      break;
    case "-":
      result.sonuc = n1 - n2;
      result.hata = "NO ERROR"
      break;

    default:
      break;
  }
  return result;
}

const operation = calculate(11, 0, "/");
console.log(operation);
