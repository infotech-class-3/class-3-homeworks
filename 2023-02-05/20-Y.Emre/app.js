// var x = "ankara"

// console.log(x[0])
// console.log(x[x.length-1])

// console.log(x[0] == x[x.length-1])


// answer-1

function control(metin){
   return (metin[0] == metin[metin.length-1])
 
  }

console.log(control("hengelo"))
console.log(control("nuenen"))

// answer-2

var x = "bugun hava cok guzel"

function tersCevir(text){
  
  new_string = ""

  for(let i=text.length-1; i>=0; i--){
    new_string += text[i]
  }
  return new_string

}

console.log(tersCevir("bugun hava cok guzel"))


// answer-3

x = "lorem ipsum dolar sit amet"


//split metoduyla string ifadenin arrays e çevrilmiş hali...
// console.log(x.split(" "))
// console.log(x.split(" ").reverse())
// console.log(x.split(" ").reverse().join(" "))

function tersCevir(x){
  return x.split(" ").reverse().join(" ")
}

console.log(tersCevir("lorem ipsum dolat sit amet"))




car_brands = ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot']
car_brands2 =['Citroen', 'Hyundai', 'Kia', 'Mazda', 'Suzuki', 'Toyota', 'Nissan', 'Honda', 'Mitsubishi'];

// // answer-4

// console.log(car_brands.slice(0,5))


// // answer-5

// console.log(car_brands.join(","))


// // answer-6

// console.log(car_brands.splice(4,8))


// //answer-7

// console.log(car_brands[2])


// answer-8



function placeChange(Liste, index1, index2){
   
  eldeTutulan = Liste[index1]
  Liste[index1] = Liste[index2]
  Liste[index2] = eldeTutulan

  return Liste
}

console.log(placeChange(car_brands, 1,5))


//answer-9

let array = [1,2,3,3,4,5,5,6];

function tekil(array){
  let newArray =[]
  for(let i=0;  i<array.length; i++){
    if(newArray.indexOf(array[i]) === -1){
        newArray.push(array[i])
    }
  }
  return newArray
}

console.log(tekil(array));


//answer-10

car_brands = ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot']
car_brands2 =['Citroen', 'Hyundai', 'Kia', 'Mazda', 'Suzuki', 'Toyota', 'Nissan', 'Honda', 'Mitsubishi'];


console.log(car_brands.concat(car_brands2))

newcarSpread = [...car_brands, ...car_brands2]

console.log(newcarSpread)


//answer-11

car_brands = ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot']

console.log(car_brands.splice(3))

console.log(car_brands.slice(3))