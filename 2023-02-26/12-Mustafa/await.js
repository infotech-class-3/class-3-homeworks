function sayiTopla(sayilar) {
    return new Promise (function(resolve, reject){
        let toplam = 0;
        for (let i = 0; i<sayilar.length; i++){
            toplam += sayilar[i];
        }
            resolve (toplam);
    });
}async function islem(){
    let sayilar =[1,2,3,4,5,6,7,8,9];
    let toplam = await sayiTopla(sayilar);
    console.log("toplam:" + toplam);
}
 islem();