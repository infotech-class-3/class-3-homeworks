import { ProductsList } from "./productList.js";

export var tempProduct = [];

export default class GetPriceAPI {
  constructor() {
    this.getValue = function (item) {
      console.log("Veritabanindan bilgiler cekiliyor..." + item);

      const product = ProductsList.find((product) => product.title === item);

      if (product) {
        const infoProduct = `${product.title} = ${product.price}`;
        tempProduct.push(product);
        return infoProduct;
      }
    };
  }
}
