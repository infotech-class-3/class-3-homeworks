/* A simple calculator program with 2 numbers and
   mathematical operations that we will determine */

/* In mathematical operators, only addition, subtraction,
  multiplication and division will be used ( +, -, *, /).*/

var number1,number2,operator;


function calculate(number1,number2,operator) {

    if(isNaN(number1)|| isNaN(number2) ){
        console.log(returnValue.error= "Please enter value or enter correct value");
        return;
    }
   
    var returnValue={
        result:"",
        error:"",
    };
    
    switch (operator) {
        case "+":
            console.log("1st and 2nd number sum=  "+(returnValue.result=number1+number2));
            break;
        case "-":
            console.log("Subtract 2nd number from 1st number=  "+(returnValue.result=number1-number2));
            break;
        case "*":
            console.log("Multiplication of the 1st and 2nd numbers=  "+(returnValue.result=number1*number2));
            break;
        case "/":
            if (number2===0) {
                console.log(returnValue.error= "Second number cannot be zero");
                return;
            }
            console.log("1st number divided by 2nd number=  "+(returnValue.result=number1/number2));
            break;

        default:
            break;
    }
}




calculate(12,4,"/");
