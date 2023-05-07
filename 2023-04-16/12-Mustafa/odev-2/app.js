// Market programi yapiyoruz.

import { ProxyAPI } from "./proxyAPI.js";

// proxy ara katmani yazmaniz gerekiyor.




const proxy = new ProxyAPI();

console.log(proxy.getValue("ekmek"));
console.log(proxy.getValue("ekmek"));
console.log(proxy.getValue("ekmek"));
console.log(proxy.getValue("ekmek"));
console.log(proxy.getValue("su"));
console.log(proxy.getValue("su"));
console.log(proxy.getValue("ekmek"));

// console.log(getPrice.getValue("ekmek"));
// console.log(getPrice.getValue("su"));
// console.log(getPrice.getValue("patates"));