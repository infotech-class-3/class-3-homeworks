//soru1
var sonuç 
var kelime= "string giriniz"
const kontrol=()=>{ if(kelime=="string giriniz"){
    sonuç= "3. satıra string giriniz"
}
else if(kelime.charAt(0)==kelime.charAt(kelime.length-1)){
    var sonuç= true
}
else if(kelime.slice(0,1)!==kelime.slice(-1)){
    sonuç=false
}
return sonuç}
console.log("soru 1: "+ kontrol());

// soru2
var paragraf="paragraf giriniz";
var step1;
var sonuc2;
const ters2=()=>{ if (paragraf=="paragraf giriniz") {
    sonuc2="17. satıra paragraf giriniz"
}
else {
step1=[...paragraf];
step1.reverse();
sonuc2 = step1.join("")
}
return sonuc2}
console.log("soru 2: "+ ters2());

// soru3
var paragraf2="paragraf giriniz";
var stepA;
var sonuc3;
const ters3=()=>{if (paragraf2=="paragraf giriniz") {
    sonuc3="32. satıra paragraf giriniz"
}
else {
stepA= paragraf2.split(" ");
stepA.reverse();
sonuc3 = stepA.join(" ")
}
return sonuc3}
console.log("soru 3: "+ ters3());

var car_brands = ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot']
var car_brands2 =['Citroen', 'Hyundai', 'Kia', 'Mazda', 'Suzuki', 'Toyota', 'Nissan', 'Honda', 'Mitsubishi'];

// soru4
console.log(car_brands.slice(0,5));

// soru5
console.log("soru 5.1: "+ car_brands.toString());
console.log("soru 5.2: "+ car_brands.join(","));

// soru6
console.log(car_brands.slice(-5));

// soru7
console.log("soru 7: "+car_brands[2]);

// soru8
var a=3;
var b=5;
var sonuc8=[...car_brands];
const changeTwoEleman = (a, b) => {sonuc8.splice(a,1,car_brands[b])
    sonuc8.splice(b,1,car_brands[a])
    return sonuc8;}
console.log(changeTwoEleman(a,b));

// soru9
var x = [1,2,3,3,4,5,5,6];
const sadeleştirme = (x) => {var unique = [];
    x.forEach(element => {
    if (!unique.includes(element)) {
        unique.push(element);
    }
    });
        return unique;
    }
console.log(sadeleştirme(x));

// soru10
console.log(car_brands.concat(car_brands2))
console.log([...car_brands, ...car_brands2])

// soru11:
car_brands.splice(0, 3)
console.log(car_brands);
var car_brands_new = ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot']
console.log(car_brands_new.slice(3, car_brands_new.length));