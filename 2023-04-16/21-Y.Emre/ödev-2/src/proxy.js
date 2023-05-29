import GetPriceAPI from "./getPriceAPI.js";
import { tempProduct } from "./getPriceAPI.js";

export class Proxy {
  constructor() {
    this.getValue = function (item) {
    //   console.log(`Veritabanindan veri cekiliyor : ${item}`);

      const findedProduct = tempProduct.find(
        (product) => product.name === item
      );

      if (findedProduct) {
        const infoProduct = `${findedProduct.name} = ${findedProduct.price}`;
        return infoProduct;
      } else {
        const price = new GetPriceAPI().getValue(item);

        if (price) {
          return price;
        } else {
          return console.log(`${item} Urunu bulamadik. Biz satmiyoruz..`);
        }
      }
    };
  }
}
