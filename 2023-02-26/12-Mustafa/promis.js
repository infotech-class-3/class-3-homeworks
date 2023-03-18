function siparisVer(yemek, miktar) {
  return new Promise(function(resolve, reject) {
    if (yemek && miktar) {
      
      setTimeout(function() {
        resolve("Siparişiniz başarıyla işleme alındı. Tahmini teslimat süresi: 30 dakika.");
      }, 3000);
    } else {
      reject("Lütfen geçerli bir yemek ve miktar belirtin.");
    }
  });
}


siparisVer("Pizza", 2)
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.log(error);
  });