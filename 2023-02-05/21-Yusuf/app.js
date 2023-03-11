//1 - Check first and last char of a string.
function checkFirstAndLast(str) {
  let arr = str.split("");
  if (arr[0] == arr[arr.length - 1]) {
    return true;
  } else {
    return false;
  }
}
checkFirstAndLast("abcba");

//2 - Reversed String
function reversedString(str) {
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
reversedString("John Doe");

//3 -  Reversed Array
function reversedArray(arr) {
  reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}
const fruits = ["Banana", "Orange", "Apple", "Mango"];
reversedArray(fruits);

// ------------------------------------------------
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
// ------------------------------------------------

//4 - Print first 5 elements of the brands array
let firstFive = car_brands.slice(0, 5);
console.log(firstFive);

//5 - Print with commas
let withCommas = car_brands.join(",");
console.log(withCommas);

//6 - Print last 5 elements of the brands array
let lastFive = car_brands.splice(4, 5);
console.log(lastFive);

//7 - Print 3rd element
console.log(car_brands[2]);

//8 - Change elements in array
function swapElements(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  return arr;
}
console.log(swapElements(car_brands, 3, 5));

//9 - Remove duplicates in array
function removeDuplicates(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(
  removeDuplicates([
    1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6,
  ])
);

//10 - Combine arrays
let carsConcat = car_brands.concat(car_brands2);
console.log(carsConcat);

let carsSpread = [...car_brands, ...car_brands2];
console.log(carsSpread);

//11 - Delete first 3 elements in array
deleteSplice = car_brands.splice(3, 6);
deleteSlice = car_brands.slice(3);