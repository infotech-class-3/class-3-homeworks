/*Write a FUNCTION that performs the same check on the first and last character
 of a given string */
// 1
function control(control_string){
    let char_control_string=control_string.split("");
    if (char_control_string[0]==char_control_string[char_control_string.lenght - 1 ]) {
        console.log("true");
        return true;
    }   else
    {
        return false;
        console.log("false");
    }
}
control("araba");

//2

function stringReverse(str) {
    let string_reverse = "";
  
    for (let i = str.length - 1; i >= 0; i--) {
      string_reverse += str[i];
    }
    return string_reverse;
  }
  stringReverse("i love Fenerbahce");

//3

function reverSentences (str) {
    return str.split(" ").reverse().join(" "); 
  }
  console.log(reverSentences("weather is fine today"));

//4
car_brands = [
    "BMW",
    "Mercedes",
    "Audi",
    "Ford",
    "Opel",
    "Fiat",
    "Volkswagen",
    "Renault",
    "Peugeot",
  ];
  car_brands2 = [
    "Citroen",
    "Hyundai",
    "Kia",
    "Mazda",
    "Suzuki",
    "Toyota",
    "Nissan",
    "Honda",
    "Mitsubishi",
  ];
  
let firstFive = car_brands.slice(0, 5);
console.log(firstFive)

//5

let addComma = car_brands.join(",");
console.log(addComma);

//6

let lastFive = car_brands.splice(4, 5);
console.log(lastFive);

//7

console.log(car_brands[2])

//8

car_brands.splice(7, 1, 'Peugeot');
car_brands.splice(8, 1, 'Renault'); 
console.log(car_brands);


//9

var numbers= [1,1,1,1,2,2,3,3,4,5,5,6];
var noRepeat = [...new Set(numbers)];
console.log(noRepeat);

//10
var cars = car_brands.concat(car_brands2);
console.log(car);
var cars1 = [...car_brands,...car_brands2];
console.log(car);

//11

car_brands.splice(0, 3);
console.log(car_brands);
car_brands.slice(3, 8);
console.log(car_brands);

