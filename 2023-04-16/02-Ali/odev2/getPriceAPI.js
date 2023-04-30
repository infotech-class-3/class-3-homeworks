import data from './urunlistesi.js';

export function GetPriceAPI() {
    this.getValue = function (item){

        const bulunan_urun = data.filter((urun)=> urun.type == item);
        return bulunan_urun[0].price;

        
    };
    
}