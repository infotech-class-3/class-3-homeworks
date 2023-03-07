//----------- Callback ----------------



function suKaynat(callback) {
    setTimeout(function () {
      console.log("Su kaynatılıyor...");
      callback(4);
    }, 1000);
  }
  
  function bulyonEkle(suMiktari, callback) {
    setTimeout(function () {
      console.log("Tavuk bulyon ekleniyor...");
      suMiktari += 1;
      callback(suMiktari);
    }, 1500);
  }
  
  function sebzeleriEkle(suMiktari, callback) {
    setTimeout(function () {
      console.log("Sebzeler ekleniyor...");
      suMiktari += 3;
      callback(suMiktari);
    }, 2000);
  }
  
  function baharatlariEkle(suMiktari, callback) {
    setTimeout(function () {
      console.log("Baharatlar ekleniyor...");
      suMiktari += 2;
      callback(suMiktari);
    }, 1000);
  }
  
  function corbaYap(callback) {
    suKaynat(function (suMiktari) {
      bulyonEkle(suMiktari, function (suMiktari) {
        sebzeleriEkle(suMiktari, function (suMiktari) {
          baharatlariEkle(suMiktari, function (suMiktari) {
            callback(
              "Çorba hazır! Toplam " + suMiktari + " bardak çorba elde edildi."
            );
          });
        });
      });
    });
  }
  
  corbaYap(function (result) {
    console.log(result);
  });
  
  
  
  //----------- Promise ----------------
  
  /*
  function suKaynat() {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          console.log("Su kaynatılıyor...");
          resolve(4);
                
          
        }, 1000);
      });
    }
    
    function bulyonEkle(suMiktari) {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          console.log("Tavuk bulyon ekleniyor...");
          suMiktari += 1;
          resolve(suMiktari);
        }, 1500);
      });
    }
    
    function sebzeleriEkle(suMiktari) {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          console.log("Sebzeler ekleniyor...");
          suMiktari += 3;
          resolve(suMiktari);
        }, 2000);
      });
    }
    
    function baharatlariEkle(suMiktari) {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          console.log("Baharatlar ekleniyor...");
          suMiktari += 2;
          resolve(suMiktari);
        }, 1000);
      });
    }
    
    suKaynat()
      .then(function(suMiktari) {
        return bulyonEkle(suMiktari);
      })
      .then(function(suMiktari) {
        return sebzeleriEkle(suMiktari);
      })
      .then(function(suMiktari) {
        return baharatlariEkle(suMiktari);
      })
      .then(function(suMiktari) {
        console.log("Çorba hazır! Toplam " + suMiktari + " bardak çorba elde edildi.");
      })
      .catch(function(error) {
        console.log(error);
        
      });
    
  */
  
  //----------- Async-Await ----------------
  
  /*
  function suKaynat() {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          console.log("Su kaynatılıyor...");
          resolve(4);
        }, 2000);
      });
    }
    
    function bulyonEkle(suMiktari) {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          console.log("Tavuk bulyon ekleniyor...");
          suMiktari += 1;
          resolve(suMiktari);
        }, 1000);
      });
    }
    
    function sebzeleriEkle(suMiktari) {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          console.log("Sebzeler ekleniyor...");
          suMiktari += 3;
          resolve(suMiktari);
        }, 1500);
      });
    }
    
    function baharatlariEkle(suMiktari) {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          console.log("Baharatlar ekleniyor...");
          suMiktari += 2;
          resolve(suMiktari);
        }, 1000);
      });
    }
    
    async function corbaYap() {
      try {
        let suMiktari = await suKaynat();
        suMiktari = await bulyonEkle(suMiktari);
        suMiktari = await sebzeleriEkle(suMiktari);
        suMiktari = await baharatlariEkle(suMiktari);
        console.log("Çorba hazır! Toplam " + suMiktari + " bardak çorba elde edildi.");
      } catch (error) {
        console.log(error);
      }
    }
    
    corbaYap();
    */
  