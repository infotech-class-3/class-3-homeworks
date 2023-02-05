let sayi1 = Number(prompt("Lütfen ilk sayiyi giriniz"));
console.log(sayi1);

let sayi2 = Number(prompt("Simdi ikincisayiyi giriniz")) ;
console.log(sayi2);


const sum = (sayi1, sayi2) => {
    
    const resultSum = sayi1 + sayi2;
    return resultSum ;
     
};

const substract =(sayi1, sayi2) => {
   const resultSubst = sayi1 - sayi2;
   return resultSubst ;
};
const multp =(sayi1, sayi2) => {
   const resultMult = sayi1 * sayi2;
   return resultMult;
};
const divided =(sayi1, sayi2) => {
   const resultDiv = sayi1 / sayi2;
   if(!sayi2 || sayi2 == 0) {
      alert("ikinci sayiyi 0 dan farkli veya rakam girin");
    return
   }
   return resultDiv;
};




console.log(sum(sayi1,sayi2));
console.log(substract(sayi1,sayi2));
console.log(multp(sayi1,sayi2));
console.log(divided(sayi1,sayi2));


