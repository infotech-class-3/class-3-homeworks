/* # Koordinat sisteminde verilen ücgenin cevresi ve alan hesaplamalarinin yapilmasi

- class Nokta()
- class Ucgen()

## output

- const ucgen_1 = new Ucgen(......);
- ucgen_1.cevreHesapla() // 24
- ucgen_1.alanHesapla() // 36

- iki nokta arasi uzaklik formulu
- https://www.wikihow.com.tr/%C4%B0ki-Nokta-Aras%C4%B1ndaki-Mesafe-Nas%C4%B1l-Bulunur

- ucgen alaninin hesaplanmasi
  https://www.britannica.com/science/Herons-formula

### ÖNEMLI!!

- Javascript Karekök alma fonksiyonu : ` Math.sqrt(9) // 3`
- Javascript Üs alma fonksiyonu : ` Math.pow(4) // 16` */

import { Nokta } from "./nokta";
import {Ucgen} from "./ücgen";

const nokta_1 = new Nokta(1,1);
const nokta_2 = new Nokta(5,1);
const nokta_3 = new Nokta(5,4);



const ucgen = new Ucgen(nokta_1, nokta_2, nokta_3);

