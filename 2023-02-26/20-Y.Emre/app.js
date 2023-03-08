// -----------------------------------callback function--------------------------------

// const birinciİslem = (ikinciİslem) => {

//     setTimeout(() => {
//          console.log("Bilet alınmalı!!!");

//          ikinciİslem ()

//     }, 2000);

// }

// const ikinciİslem = () => {

//     setTimeout(() => {
//         console.log("Sinema salonuna giriş yapabilirsiniz...");
//     }, 3000);

// }

// birinciİslem (ikinciİslem)

//------------------------------------------promise------------------------------------------

// const mezunOldumu = true;

// const porjeTamamlandımı = true;

// const mezun = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (mezunOldumu) {
//         resolve("Final projesi tamamlandı");
//       } else {
//         reject("Proje BAŞARISIZ!!!");
//       }
//     }, 3000);
//   });
// };


// const proje = () => {
//   const sonuc = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (porjeTamamlandımı) {
//         resolve("Bütün projeler yüklendi");
//       } else {
//         reject("Proje BULUNAMADI!!!");
//       }
//     });
//   }, 2000);
//   return sonuc; 
// };


// mezun()
  
//   .then((mezunOldumu) => {
//     console.log(mezunOldumu);
    
//         proje ()
//                 .then((projeOldumu) => {
//                 console.log(projeOldumu);
//           })

//                 .catch((projeHata) => {
//                 console.warn(projeHata);
//           });


//       })

//   .catch((mezunHata) => {
//     console.warn(mezunHata);
// });





//------------------------------------------async-await----------------------------------------



const mezunOldumu = true;

const porjeTamamlandımı = true;

const mezun = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mezunOldumu) {
        resolve("Final projesi tamamlandı");
      } else {
        reject("Proje BAŞARISIZ!!!");
      }
    }, 3000);
  });
};


const proje = () => {
  const sonuc = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (porjeTamamlandımı) {
        resolve("Bütün projeler yüklendi");
      } else {
        reject("Proje BULUNAMADI!!!");
      }
    });
  }, 2000);
  return sonuc; 
};


const islem = async () => {
  
  await mezun ()

        .then((sonuc) => console.log(sonuc))
        .catch((hata) => console.log(hata))


        proje ()

        .then ((sonuc) => console.log(sonuc))
        .catch ((hata) => console.log(hata))
}

islem()
