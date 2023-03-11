// soru-1
function check(meyveler){
    console.log(Boolean(meyveler[0] == meyveler[meyveler.length - 1]));
    }

    check(`elma`);
    check(`ayva`);


//soru-2

let str = "Bugün hava çok güzel";
let yeni = str.split("");
let cevir = yeni.reverse("");
let birlestir = cevir.join("");

console.log(birlestir);


//soru-3

function reverseString(str) {
    return str
      .split(' ')
      .reverse()
      .join(' ');
  }
  console.log(reverseString("bugün hava çok güzel"));


  //soru-4

  let car_brands = ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot'];
  let car_brands2 =['Citroen', 'Hyundai', 'Kia', 'Mazda', 'Suzuki', 'Toyota', 'Nissan', 'Honda', 'Mitsubishi'];

console.log(car_brands.slice(0, 5));


//soru-5

console.log(car_brands.join(","));

//soru-6

let yeniDizi = [];
let sonbes = car_brands.length -5;
for(i = sonbes ; i < sonbes+5; i++) {
    yeniDizi.push(car_brands[i]);
  }
 console.log(yeniDizi);
 
 //soru-7

 console.log(car_brands[2]);


 //soru-8

 car_brands.splice(3, 1, 'Fiat');
 car_brands.splice(5, 1, 'Ford'); 
 console.log(car_brands.slice());

//soru-9

const sayi =[1,2,3,3,4,5,5,6];

const filitre = sayi.filter((item, index) => {

    return sayi.indexOf(item) === index;
});

console.log(filitre);

//soru-10

let araba = car_brands.concat(car_brands2);
let araba2 = [...car_brands,...car_brands2];

console.log(araba);
console.log(araba2);

//soru-11
car_brand = ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot'];
let car1 = car_brand.slice(3);
let car2 = car_brand.splice(3,6);

console.log(car1);
console.log(car2);

