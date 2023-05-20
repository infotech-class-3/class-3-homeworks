import {GetPriceAPI} from "./GetPriceAPI.js";
export class ProxyAPI{
    constructor(){
      this.api = new GetPriceAPI();
      this.cache = {};
    }
    getValue = function (item){
      if(!this.cache[item]){
        this.cache[item]=this.api.getValue(item);
      }
      return this.cache[item];
    };
  }
  