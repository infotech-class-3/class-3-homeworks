/*-------------------- Callback Function --------------------*/

// function mercimekSoup(callback) {
//   setTimeout(function () {
//     console.log("Preparing Mercimek Soup");
//     callback();
//     setTimeout(()=>{
//         console.log("Ready is the Mercimek Soup");
//     },6000)
//   }, 3000);
// }

// function mercimekSoupRecipe() {
//   setTimeout(() => {
//     const materials = {
//       soupName: "Mercimek",
//       material1: "Sogan",
//       material2: "Yag",
//       material3: "Havuc",
//       material4: "Patates",
//       material5: "Su",
//     };

//     setTimeout(() => {
//       console.log(`${materials.material2} Kizdirildi`);
//     }, 500);

//     setTimeout(() => {
//       console.log(`${materials.material1} Kavruldu`);
//     }, 1000);

//     setTimeout(() => {
//       console.log(
//         `${materials.soupName} ${materials.material3} ${materials.material4} ${materials.material5} Eklendi`
//       );
//     }, 1500);
//   }, 2000);
// }

// mercimekSoup(mercimekSoupRecipe)

/* ************************************************************ */

/*-------------------- PROMISE --------------------*/

// var isFatherHappy = true;

// const willGetPhone = new Promise((resolve, reject) => {
//   if (isFatherHappy) {
//     const phone = {
//       name: "Iphone 14",
//       price: "1000$",
//       color: "black",
//     };
//     resolve(phone);
//   } else {
//     const erorr = new Error("Father not happy and will not get a phone");
//     reject(erorr);
//   }
// });

// const showToFriends = function (phone) {
//   const message = " Heeyyy Friends! This is my new Phone " + phone.name;
//   return Promise.resolve(message);
// };

// function askFather() {
//   willGetPhone
//     .then(showToFriends)
//     .then((phoneName) => {
//       console.log(phoneName);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

//askFather();

/* ************************************************************ */

/*-------------------- ASYNC AWAIT --------------------*/

const isNoteGood = true;
const isarticle = true;

const isEntryUni = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isNoteGood) {
      resolve("You have earned the right to apply.");
    } else {
      reject("You have not earned the right to apply.");
    }
  }, 3000);
});

const haveArticle = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isarticle) {
      resolve("You have article");
    } else {
      reject("You have not article");
    }
  }, 2000);
});

const result = async () => {
 await isEntryUni
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.warn(err);
    });

  haveArticle
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
};

result();
