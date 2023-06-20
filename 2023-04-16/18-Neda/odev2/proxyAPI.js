//proxy ara katmani:
import { GetPriceAPI } from "./getPriceAPI.js"; 
// asagida getPriceAPI'ya ihtiyacimiz oldugundan import ediyoruz

export class ProxyAPI{
    constructor() {
      this.api = new GetPriceAPI();
      this.cash = {}; 
    }
    getValue = function (item) {
      if (!this.cash[item]){
        this.cash[item] = this.api.getValue(item)
      } 
      return this.cash[item];
    };
  }
