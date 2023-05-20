

function sayilariTopla(sayi, callback) {

    let toplamm =0;
    for (let i= 0; i<sayi.length; i++){
        toplamm += sayi[i];

    }
    callback (toplamm);
  }

  sayilariTopla([1,2,3,4,5,6,7], function (toplamm){
    console.log(toplamm);
  });