/* SORU 1
Verilen bir stringin ilk ve son karakteri ayni kontrolu yapan bir FONKSIYON yaziniz
boolean(true/false) dondurmeli
/*
function kontrol(metin) {
    if (metin[0] == metin[metin.length-1]) {
        return true
    } else {
        return false
*/	    
	    	    
function kontrol(metin){
    return metin[0] == metin[metin.length-1]
    }
console.log(kontrol("abcda"));
console.log(kontrol("abcde"));


/*### soru2: 
 Verilen bir stringi tersine ceviren bir FONKSIYON yaziniz
*/

let string = "!abahreM"
string = [...string].reverse().join("");
 
console.log(string); // "Merhaba!"

function cevir(isim) {
 return isim.split("").reverse().join("")
}

console.log(cevir("Merhaba nasilsin"));
    
/*SONUC
let adi = "neslihan"
adi = [...adi]
console.log(adi); // ['n', 'e', 's', 'l', 'i', 'h', 'a', 'n']


/*## soru3:
Verilen bir stringdeki KELIMELERIn sirasini tersine ceviren bir FONKSIYON yaziniz
*/

function reverseString(str) {
    return str
      .split(' ')
      .reverse()
      .join(' ');
  }
  console.log( reverseString("bu fonksiyon kelimeleri tersine cevirecek"));


const car_brands = ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot']
const car_brands2 =['Citroen', 'Hyundai', 'Kia', 'Mazda', 'Suzuki', 'Toyota', 'Nissan', 'Honda', 'Mitsubishi'];

let soru4 = car_brands.slice(0,5);
console.log("soru4",soru4);

let soru5 = car_brands.join(",");
console.log("soru5",soru5);

let soru6 = car_brands.splice(4,5);
console.log("soru6",soru6);

/*soru 7-dizideki 3.elemani cagirdik*/
console.log(car_brands[2]);

/*soru 8 iki elemanin yerlerini degistirdik.*/

function diziDegerDegistir(dizi,index1,index2) {
    tempEleman=dizi[index1]
    dizi[index1]=dizi[index2]
    dizi[index2]=tempEleman
    return dizi
}

console.log(diziDegerDegistir(car_brands,3,5));

console.log(diziDegerDegistir(car_brands,1,3));




/*soru 9* set kullanarak tekrar eden elemanlari sildik*/
let sayilar = [1, 2, 3, 2, 4, 5, 5, 6];
 
let essiz = Array.from(new Set(sayilar));
 
	console.log(essiz);
	// [ 1, 2, 3, 4, 5, 6 ]

/* soru 10- iki dziyi birlestirecegiz*/ 

var allcar_brands =car_brands2.concat(car_brands);
console.log(allcar_brands);


var car_brands3 =[...car_brands2,...car_brands];
console.log(car_brands3);

/*soru 11 -ilk 3 elemanini siliniz*/
car_brand = ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot'];
let car1 = car_brand.slice(3);
let car2 = car_brand.splice(3,6);

console.log(car1);
console.log(car2);
