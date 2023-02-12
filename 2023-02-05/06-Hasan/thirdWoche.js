// madde 1
function ilkSonKontrolEt(string1){
    let x = false;
    let string1son = string1.slice(-1);    
    let string1ilk = string1.charAt(0);
    if(string1son==string1ilk)
    x=true;
    console.log("GÖREV 1: ilk ve son karakter aynı ise true");    
    console.log(x);    
   return x;
}
ilkSonKontrolEt("sas");
console.log("----------------------------------------------------------------------------");
// madde 2
function tersCevir(string1){
    let dizi=string1.split("");
    let tersHali="";
    for (let index = dizi.length-1; index >= 0; index--) {
        tersHali=tersHali+dizi[index];    
    }
    console.log("GÖREV 2: Verilen String'i terse çevirir");
    console.log(tersHali);
    return tersHali;
}
tersCevir("InfoTech Academy");
console.log("----------------------------------------------------------------------------");
//madde 3
function kelimeTersCevir(string1){
    let dizi=string1.split(" ");
    let tersHali="";
    for (let index = dizi.length-1; index >= 0; index--) {
        tersHali=tersHali+" "+dizi[index];    
    }
    console.log("GÖREV 3: Stringi tersten yazar"); 
    console.log(tersHali);
    return tersHali;
}
kelimeTersCevir("lorem ipsum dolor sit amet");

console.log("----------------------------------------------------------------------------");
//----------------------------------------------------------
car_brands = ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot']
car_brands2 =['Citroen', 'Hyundai', 'Kia', 'Mazda', 'Suzuki', 'Toyota', 'Nissan', 'Honda', 'Mitsubishi'];

//-----------------------------------------------------------

// madde 4
let ilkBesEleman= [];
for (let index = 0; index < 5; index++) {    
    let x=car_brands[index];
    ilkBesEleman[index]=x;    
 }
 console.log("GÖREV 4: car_brands dizisinin ilk bes elemanını yazma"); 
 console.log(ilkBesEleman);
 console.log("----------------------------------------------------------------------------");
//madde 5
let yeni=car_brands[0];
for (let index = 1; index < car_brands.length; index++) {    
    yeni=yeni+","+car_brands[index];
    }
console.log("GÖREV 5: car_brands dizisini virgül koyarak yazma");   
console.log(yeni);
console.log("----------------------------------------------------------------------------");
// madde 6
let sonBesEleman= [];
for (let index = 4; index <car_brands.length; index++) {    
    let y=car_brands[index];
    sonBesEleman[index-4]=y;       
    }
console.log("GÖREV 6: car_brands dizisinin son 5 elemanını yazma");    
console.log(sonBesEleman);
console.log("----------------------------------------------------------------------------");
// madde 7
console.log("GÖREV 7: car_brands dizisinin 3. elemanını yazma");
console.log(car_brands[2]);
console.log("----------------------------------------------------------------------------");
// madde 8
function degistir(car_brands, k, l){
    let z= car_brands[k];        
    car_brands[k]=car_brands[l];        
    car_brands[l]=z;
    console.log("GÖREV 8: car_brands dizisinin 2 elemanını yer degistirme");
    console.log(car_brands);
    return car_brands;
    }
let car_degis=car_brands.slice();
degistir(car_degis,3,5);
console.log("----------------------------------------------------------------------------");
// madde 9
function tekilYap(array1){
    let x=array1.length;
    let array2=[];
    let index=0;
    array2.push(array1[0]);
     while(index < x-2) {
        let element1 = array1[index];            
        let element2 = array1[index+1];          
        if(element1!=element2){          
            array2.push(element2);            
            }           
        index=index+1;       
        }
    if((array1[array1.length-1])!=(array2[array2.length-1]))
        array2.push(array1[array1.length-1]);        
    console.log(array2);
    return array2;    
    }
    dizim=['1','1','2','2','3','4','5','5','6'];
    console.log("GÖREV 9: dizinin aynı elemanlarını yazdırmama");
    console.log("dizim: "+dizim);
    tekilYap(dizim);   
console.log("----------------------------------------------------------------------------");  
// madde 10 
let a10=car_brands.slice();
for (let index = 0; index < car_brands2.length; index++) {
     a10.push(car_brands2[index])        
     }
console.log("GÖREV 10: car_brands dizisine car_brands2 dizisini ekleme");
console.log(a10);
// madde 10-concat
let a11=car_brands.slice();
let a20=a11.concat(car_brands2);
console.log("car_brands dizi concat hali: "+a20);    
  
// madde 10-spread  
let spreadDizi=[...car_brands, ...car_brands2];
console.log("car_brands dizi spread hali: "+spreadDizi);  
console.log("----------------------------------------------------------------------------");    
// madde 11
let a15=[];
for (let index = 0; index < car_brands.length-3; index++) {
    a15[index]=car_brands[index+3];        
     }
console.log("GÖREV 11: car_brands dizisinin ilk 3 elemanını silme");
console.log(a15);

// madde 11-splice
let a13=car_brands.slice();
a13.splice(0,3);
console.log("splice ile silme: "+ a13);

// madde 11-slice
let a12=car_brands.slice();    
for (let index = 0; index < 3; index++) {        
    a12.shift();
    }
console.log("slice ile silme: "+a12);
