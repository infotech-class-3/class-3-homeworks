import Nokta from "./nokta_export.js";
import {Ucgen} from "./ucgen_export.js";

const nokta_1 = new Nokta(1, 1);
const nokta_2 = new Nokta(5, 1);
const nokta_3 = new Nokta(5, 4);



const ucgen = new Ucgen(nokta_1, nokta_2, nokta_3);
console.log (ucgen);