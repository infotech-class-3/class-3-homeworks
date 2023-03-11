let barcode = new Promise(function (resolve, reject){
    setTimeout(function(){
        resolve('Aylık harcama rapor grafiğiniz aşağıdaki gibidir;')}, 4000);
});

async function asyncFunc() {
    try {
        let result = await barcode;
        console.log(result);
        console.log('Grafik....');
    }
    catch(error){
        console.log(error);
    }
}
asyncFunc();