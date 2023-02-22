// question1 

let str = "adana kozan";
let str2 = "bursa";

let myFunction = (x) => {
let check = x[0] === x[x.length-1];
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

// question2

let myFunction2 = (x) => {
let y = x.split("").reverse().join('')
console.log(y);
}
myFunction2(str);
myFunction2(str2);
// farkli bir yol
const tersinecevirme = (x) => x.split('').reverse('').join('');
console.log(tersinecevirme('bugun hava cok guzel'));

//

// question3

 x4 = 'bugun hava cok guzel'
 console.log(x4.split('').reverse().join(''));

 const kelimeterscevirme = (x5) => x5.split('').reverse('').join('');
 console.log(kelimeterscevirme('bugun hava cok guzel'));


// question 4

car_brands = ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot']

console.log(car_brands.slice(0, 5));

// question 5

console.log(car_brands.join(', '))

// question 6

console.log(car_brands.slice(-5,).join(', '))

// question 7

console.log(car_brands[2]);

// question 8 
console.log(car_brands);
second_element = car_brands[1]
car_brands[1]= car_brands[2]
console.log(car_brands);
car_brands[2]= second_element
console.log(car_brands)

function changeAriaInZ(z, index1, index2){
    tempElement = z[index1]
    z[index1] = z[index2]
    z[index2] = tempElement
    console.log(z[index1]);
    console.log(z[index2]);
    return z
}
console.log(changeAriaInZ(car_brands, 3, 5));

// question 9

w = [1,2,3,4,5]
function singularisation(w){
    let newW = []
    for(let i=0; i<w.length; i++){
        if( !newW.includes(w[i])){
            newW.push(w[i])
        }
    }
    return newW
}
console.log(singularisation(w));
console.log(singularisation("asfksdkfsdgjskdfgaaaaa   ".split('').join(', ')))

// question 10

car_brands = ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel', 'Fiat']
car_brands2 =['Citroen', 'Hyundai', 'Kia'];

togetherCars= car_brands.concat(car_brands2)
console.log(togetherCars);


console.log('-----------------------');
togetherCarsWithSpread= [...car_brands, ...car_brands2];
console.log(togetherCarsWithSpread);

// question 11

console.log('-----------------------');
console.log(car_brands.splice(3));


console.log('====================');
console.log(car_brands.slice(3, car_brands.length-1));




