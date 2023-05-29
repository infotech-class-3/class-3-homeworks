import { ProductList } from "./productList.js";

export var tempProduct = [];

export default class GetPriceAPI {
  constructor() {
    this.getValue = function (item) {
      console.log(`Veritabanindan veri cekiliyor : ${item}`);

      const findedProduct = ProductList.find(
        (product) => product.name === item
      );

      if (findedProduct) {
        const infoProduct = `${findedProduct.name} = ${findedProduct.price}`;
        tempProduct.push(findedProduct);
        return infoProduct;
      }
    };
  }
}
