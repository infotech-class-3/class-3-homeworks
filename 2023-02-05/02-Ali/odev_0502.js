//Soru-1
function kontrol(yerlesim){
    console.log(Boolean(yerlesim[0] == yerlesim[yerlesim.length - 1]));
    
    }
    kontrol('izmir');
    kontrol('aliağa');

//Soru-2
function tersten_yaz(str) {
    var yeniString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        yeniString += str[i];
    }
    return yeniString;
}
console.log("Cevap-2:",tersten_yaz('Al yarısını sırayla'));

//Soru-3
function reverseString(str) {
    return str
      .split(' ')
      .reverse()
      .join(' ');
  }
  console.log("Cevap-3:",reverseString("ahmet beyin ceketi"));

  //Soru-4
var car_brands = ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot']
var car_brands2 =['Citroen', 'Hyundai', 'Kia', 'Mazda', 'Suzuki', 'Toyota', 'Nissan', 'Honda', 'Mitsubishi'];

let ilkbes = [];
for(i = 0; i < 5; i++) {
    ilkbes.push(car_brands[i]);
  }
 console.log("Cevap-4:",ilkbes);

 //Soru-5
 console.log("Cevap-5:",car_brands.join(","));

 //Soru-6
let sonbes = [];
let uzunluk = car_brands.length -5;
for(i = uzunluk ; i < uzunluk+5; i++) {
    sonbes.push(car_brands[i]);
  }
 console.log("Cevap-6:",sonbes);

 //Soru-7
 console.log("Cevap-7:",car_brands[2]);

 //Soru-8
 car_brands.splice(3, 1, 'Fiat');
 car_brands.splice(5, 1, 'Ford'); 
 console.log("Cevap-8:",car_brands.slice());

 //Soru-9
 var sayilar = [1,2,3,4,3,5,6,4,7,8,9,1];
      
    function TekrarlariSil(sayilar) {
        return [...new Set(sayilar)];
    }
    console.log("Cevap-9:",TekrarlariSil(sayilar));

//Soru-10
let car = car_brands.concat(car_brands2);
let car1 = [...car_brands,...car_brands2];
console.log("Cevap-10(concat):",car);
console.log("Cevap-10(spread):",car1);

//Soru-11
var car_slice = car_brands.slice(3);
var car_splice = car_brands.splice(3,6);
console.log("Cevap-11(Slice):",car_slice);
console.log("Cevap-11(Splice):",car_splice);