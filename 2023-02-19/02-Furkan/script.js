// */*/*/*/*/*/*/*/* HOMELWORK-1 */*/*/*/*/*/*/*/* //

const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

// ****************  MAP START **************** //
//-------------- 1 --------------//
const fullNameArray = characters.map((char) => char.name);
console.log(fullNameArray);

//-------------- 2 --------------//
const fullHeightArray = characters.map((char) => char.height);
console.log(fullHeightArray);

//-------------- 3 --------------//
const nameHeightArray = characters.map(getNameHeight);
function getNameHeight(item) {
  return [item.name.split(" ")[0], item.height].join(" ");
}
console.log(nameHeightArray);

//-------------- 4 --------------//
const firstName = characters.map((name) => name.name.split(" ")[0]);
console.log(firstName);

// ****************  MAP FINISH **************** //

// **************** REDUCE START **************** //
//-------------- 1 --------------//
const totalMass = characters.reduce((acc, item) => acc + item.mass, 0);
console.log(totalMass);

//-------------- 2 --------------//
const totalHeight = characters.reduce((acc, item) => acc + item.height, 0);
console.log(totalHeight);

//-------------- 3 --------------//
const eyeChar = characters.reduce((allEyeColor, char) => {
  if (char.eye_color in allEyeColor) {
    allEyeColor[char.eye_color]++;
  } else {
    allEyeColor[char.eye_color] = 1;
  }
  return allEyeColor;
}, {});

console.log(eyeChar);

//-------------- 4 --------------//
const totalName = characters.reduce((totalCharacter, char) => {
  totalCharacter[char.name] = char.name.length;
  return totalCharacter;
}, {});
console.log(totalName);

// **************** REDUCE FINISH **************** //

// **************** FILTER START **************** //
//-------------- 1 --------------//
const filterdMass = characters.filter((char) => char.mass > 100);
console.log(filterdMass);

//-------------- 2 --------------//
const filteredHeight = characters.filter((char) => char.height < 200);
console.log(filteredHeight);

//-------------- 3 --------------//

const filteredMale = characters.filter((char) => char.gender === "male");
console.log(filteredMale);

//-------------- 4 --------------//
const filteredFemale = characters.filter((char) => char.gender === "female");
console.log(filteredFemale);
// **************** FILTER FINISH **************** //

// **************** SORT START **************** //
//-------------- 1 --------------//
const sortMass = characters.sort(
  (firtMass, secondMass) => firtMass.mass - secondMass.mass
);
console.log(sortMass);

//-------------- 2 --------------//
const sortHeight = characters.sort(
  (firtHeight, secondHeight) => firtHeight.height - secondHeight.height
);
console.log(sortHeight);

//-------------- 3 --------------//
const sortName = characters.sort(
  (firstName, secondName) => firstName.name - secondName.name
);
console.log(sortName);

//-------------- 4 --------------//
const sortGender = characters.sort(
  (firstGender, secondGender) => firstGender.gender - secondGender.gender
);
console.log(sortGender);
// **************** SORT FINISH **************** //

// **************** EVERY START **************** //
//-------------- 1 --------------//
const everyBlue = characters.every((char) => char.eye_color === "blue");
console.log(everyBlue);

//-------------- 2 --------------//
const everyMass = characters.every((char) => char.mass > 40);
console.log(everyBlue);

//-------------- 3 --------------//
const everyHeight = characters.every((char) => char.height < 200);
console.log(everyHeight);

//-------------- 4 --------------//
const everyMale = characters.every((char) => char.gender === "male");
console.log(everyMale);
// **************** EVERY FINISH **************** //

// **************** SOME START **************** //
//-------------- 1 --------------//
const someMale = characters.some((char) => char.gender === "male");
console.log(someMale);

//-------------- 2 --------------//
const someBlue = characters.some((char) => char.eye_color === "blue");
console.log(someBlue);

//-------------- 3 --------------//
const someHeight = characters.some((char) => char.height > 210);
console.log(someHeight);

//-------------- 4 --------------//
const someMass = characters.some((char) => char.mass < 50);
console.log(someMass);

// **************** SOME FINISH **************** //

console.log("-------------- FINISH HOMEWORK 1 -------------")

// ********************************************************************* //

// */*/*/*/*/*/*/*/* HOMELWORK-2 */*/*/*/*/*/*/*/* //

const people = [
  {
    firstName: "Sam",
    lastName: "Hughes",
    DOB: "07/07/1978",
    department: "Development",
    salary: "45000",
  },
  {
    firstName: "Terri",
    lastName: "Bishop",
    DOB: "02/04/1989",
    department: "Development",
    salary: "35000",
  },
  {
    firstName: "Jar",
    lastName: "Burke",
    DOB: "11/01/1985",
    department: "Marketing",
    salary: "38000",
  },
  {
    firstName: "Julio",
    lastName: "Miller",
    DOB: "12/07/1991",
    department: "Sales",
    salary: "40000",
  },
  {
    firstName: "Chester",
    lastName: "Flores",
    DOB: "03/15/1988",
    department: "Development",
    salary: "41000",
  },
  {
    firstName: "Madison",
    lastName: "Marshall",
    DOB: "09/22/1980",
    department: "Sales",
    salary: "32000",
  },
  {
    firstName: "Ava",
    lastName: "Pena",
    DOB: "11/02/1986",
    department: "Development",
    salary: "38000",
  },
  {
    firstName: "Gabriella",
    lastName: "Steward",
    DOB: "08/26/1994",
    department: "Marketing",
    salary: "46000",
  },
  {
    firstName: "Charles",
    lastName: "Campbell",
    DOB: "09/04/1977",
    department: "Sales",
    salary: "42000",
  },
  {
    firstName: "Tiffany",
    lastName: "Lambert",
    DOB: "05/11/1990",
    department: "Development",
    salary: "34000",
  },
  {
    firstName: "Antonio",
    lastName: "Gonzalez",
    DOB: "03/24/1985",
    department: "Office Management",
    salary: "49000",
  },
  {
    firstName: "Aaron",
    lastName: "Garrett",
    DOB: "09/04/1985",
    department: "Development",
    salary: "39000",
  },
];

//-------------- 1 --------------//
const avgSalary = people.reduce((totalSalary, person) => {
  return Math.floor(totalSalary + parseInt(person.salary) / people.length);
}, 0);
console.log(avgSalary);

//-------------- 2 --------------//
const age = people.filter(
  (person) => new Date().getFullYear() - new Date(person.DOB).getFullYear() > 30
);
console.log(age);

//-------------- 3 --------------//
const fullName = people.map((person) => {
  return person.firstName + " " + person.lastName;
});
console.log(fullName);

//-------------- 4 --------------//
const mySort = people.sort((a, b) => new Date(b.DOB) - new Date(a.DOB));
console.log(mySort);

//-------------- 5 --------------//

const myReduce = people.reduce((acc, person) => {
  if (person.department in acc) {
    acc[person.department]++;
  } else {
    acc[person.department] = 1;
  }
  return acc;
}, {});

console.log(myReduce);

console.log("-------------- FINISH HOMEWORK 2 -------------")
// ********************************************************************* //

// */*/*/*/*/*/*/*/* HOMELWORK-3 */*/*/*/*/*/*/*/* //

const orders = [
  {
    orderId: "123",
    customerId: "123",
    deliveryDate: "01-01-2020",
    delivered: true,
    items: [
      { productId: "123", price: 55 },
      { productId: "234", price: 30 },
    ],
  },
  {
    orderId: "234",
    customerId: "234",
    deliveryDate: "01-02-2020",
    delivered: false,
    items: [{ productId: "234", price: 30 }],
  },
  {
    orderId: "345",
    customerId: "234",
    deliveryDate: "05-01-2020",
    delivered: true,
    items: [
      { productId: "567", price: 30 },
      { productId: "678", price: 80 },
    ],
  },
  {
    orderId: "456",
    customerId: "345",
    deliveryDate: "12-01-2020",
    delivered: true,
    items: [
      { productId: "789", price: 12 },
      { productId: "890", price: 90 },
    ],
  },
  {
    orderId: "578",
    customerId: "456",
    deliveryDate: "12-01-2020",
    delivered: true,
    items: [
      { productId: "901", price: 43 },
      { productId: "123", price: 55 },
    ],
  },
];

//-------------- 1 --------------//
const filteredID = orders.filter((order) => order.orderId === "234");
console.log(filteredID);

//-------------- 2 --------------//

//-------------- 3 --------------//
const myevery = orders.every((order) => order.delivered === "ture");
console.log(myevery);

//-------------- 4 --------------//
const custemerOrdered = orders.some((order) => order.customerId === "123");
console.log(custemerOrdered);

//-------------- 5 --------------//
const deliveredProduct = orders.some(myFunctionOrder);

function myFunctionOrder(product) {
  return product.items.some((item) => item.productId === "123");
}
console.log(deliveredProduct);

console.log("-------------- FINISH HOMEWORK 3 -------------")

// ********************************************************************* //