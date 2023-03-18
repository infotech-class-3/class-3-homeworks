function Discount(callback,num){
    setTimeout(() => {
         console.log("Kod geçerli! İndirim kazandiniz");
        callback(num);
     }, 3000);
 }

 function Calc(num){
    let tutar = 100;
    var son_tutar = tutar - (tutar * num /100);
    console.log("Yeni tutar:",son_tutar);
}
Discount(Calc,'20')




