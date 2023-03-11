// bebek bakimi
function bebekBakimi() {
        return new Promise((resolve, reject) => {
          let uyuyor = true;
          let ac = true;
          let beziDolu = true;
      
        
          setTimeout(() => {
            uyuyor = false;
            console.log("Bebek uyandi.");
            if (ac && beziDolu) {
              reject("Bebek ac ve bezi degismeli.");
            } else if (ac) {
              reject("Bebek ac.");
            } else if (beziDolu) {
              reject("Bebegin bezi degismeli.");
            } else {
              resolve("Bebek mutlu.");
            }
          }, 5000);
        });
      }
      

      bebekBakimi()
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.error(error);
        });

      