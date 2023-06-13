import { ProxyAPI } from "./proxyAPI.js";



const proxy = new ProxyAPI();

console.log(proxy.getValue("ekmek"));
console.log(proxy.getValue("ekmek"));
console.log(proxy.getValue("ekmek"));
console.log(proxy.getValue("ekmek"));
console.log(proxy.getValue("su"));
console.log(proxy.getValue("su"));
console.log(proxy.getValue("ekmek"));

const getPrice = new GetPriceAPI();

console.log(getPrice.getValue("ekmek"));
console.log(getPrice.getValue("su"));
console.log(getPrice.getValue("patates"));
