import GetPriceAPI from "./GetPriceAPI.js";
import { tempProduct } from "./GetPriceAPI.js";

export class Proxy {
  constructor() {
    this.getValue = function (item) {
      const product = tempProduct.find((product) => product.title === item);
      // console.log(tempProduct.length);
      if (product) {
        const infoProduct = `${product.title} = ${product.price}`;
        return infoProduct;
      } else {
        const price = new GetPriceAPI().getValue(item);

        if (price) {
          return price;
        } else {
          console.log("Ürün bulunamadı.");
          return item;
        }
      }
    };
  }
}
