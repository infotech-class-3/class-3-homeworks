
const balance = true;

let balanceValue = new Promise(function (resolve, reject) {
  
  if (balance) {
        resolve("Puan bakiyeniz yeterli!");
    } else {
        reject("Puan bakiyeniz yetersiz! ...Link->");
    }
});


balanceValue
  .then(function successValue(result) {
    console.log(result);
  })

  .then(function successValue1() {
    console.log("Hesabınızdaki puanlarınızı kullanabilirsiniz... Link->");
  })
  
  .catch(
    function errorValue(result) {
        console.log(result);
    });