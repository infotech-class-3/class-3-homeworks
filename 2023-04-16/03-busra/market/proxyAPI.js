import { GetPriceAPI } from "./getPriceAPI.js";
export class ProxyAPI {
        constructor() {
          this.api = new GetPriceAPI();
          this.cache = {};
        };
        
        getValue(item) {
          console.log("cache", this.cache);
          if (!this.cache[item]) {
            this.cache[item] = this.api.getValue(item);
          };
          
          return this.cache[item];
        };
      };