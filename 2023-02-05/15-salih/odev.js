let str = "adana kozan";
let str2 = "bursa";

let myFunction = (x) => {
let check = x[0] === x[x.length-1];
console.log(check);
if (check){
    console.log("string'in ilk ve son karakteri ayni",check);
}
else{
    console.log("string'in ilk ve son karakteri farkli",check);
}
}

myFunction(str);
myFunction(str2);
myFunction('kars');
myFunction('ankara');

let myFunction2 = (x) => {
let arr = x.split("").reverse()
console.log(arr);

let reversed = arr.join("");
console.log(reversed);

}
myFunction2(str);
myFunction2(str2);








