// Market programi yapiyoruz.

// function GetPriceAPI() {
//     this.getValue = function (item) {
//       console.log("Veritabanindan bilgiler cekiliyor...");
//       switch (item) {
//         case "ekmek":
//           return "0.50 €";
//         case "su":
//           return "0.25 €";
//         case "elma":
//           return "1.50 €";
//         case "patates":
//           return "1.25 €";
//       }
//     };
//   }
  
  // proxy ara katmani yazmaniz gerekiyor.
  //
  
  
  // const proxy = new ProxyAPI();
  
  // console.log(proxy.getValue("ekmek"));
  // console.log(proxy.getValue("ekmek"));
  // console.log(proxy.getValue("ekmek"));
  // console.log(proxy.getValue("ekmek"));
  // console.log(proxy.getValue("su"));
  // console.log(proxy.getValue("su"));
  // console.log(proxy.getValue("ekmek"));
  
//import GetPriceAPI from "./src/getPriceAPI.js";
import { Proxy } from "./src/proxy.js";

const proxy = new Proxy();

console.log(proxy.getValue("ekmek"));
console.log(proxy.getValue("ekmek"));
console.log(proxy.getValue("ekmek"));
console.log(proxy.getValue("su"));
console.log(proxy.getValue("su"));
  
  //const getPrice = new GetPriceAPI();


   //console.log(getPrice.getValue("ekmek"));
   //console.log(getPrice.getValue("su"));
  // console.log(getPrice.getValue("patates"));
  