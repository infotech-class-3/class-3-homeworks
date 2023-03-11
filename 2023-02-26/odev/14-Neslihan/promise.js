  function makeCoffee() {
    console.log("Kahve yapılıyor...");
    const isCoffeeReady = true;
     // kahvenin hazır olup olmadığını burada belirledik
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isCoffeeReady) {
          resolve("Kahve hazır.");
        } else {
          reject(new Error("Kahve makinesinde arıza var."));
        }
      }, 3000);
    });
  }
  
  function serveCoffee() {
    console.log("Kahve servisi yapılıyor...");
  
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Kahve servisi tamamlandı.");
      }, 1000);
    });
  }
  
  makeCoffee()
    .then((result) => {
      console.log(result);
      return serveCoffee();
    })
    
    .then((result) => console.log(result))
    .catch((error) => console.log("Hata oluştu: " + error.message));
  
  console.log("Kahve siparişi verildi.");
  