
                console.log('==========INDEX1========');
const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];
                    //***MAP***
                    console.log('==========MAP========');
// dizi of all name
allname = characters.map((eleman)=>{
    return { name:  eleman.name,
    }
   
});
console.log(allname);

// dizi of height
allheight = characters.map((eleman)=>{
    return eleman.height
   
});
console.log(allheight);

//3 
allnameandheight = characters.map((eleman)=>{
    return { name:eleman.name,
             height:eleman.height
    }
});
console.log(allnameandheight);

//4
allFirstName = characters.map((eleman)=>{
    return   eleman.name.split(' ')[0];
    
   
});
console.log(allFirstName);

//                     //***REDUCE***
//                     console.log('==========REDUCE========');
//1
x= characters.reduce((total, character) => {
    return total = total + character.mass
}, 0 );
console.log(x);
//2
y= characters.reduce((total, character) => {
    return total = total + character.height
}, 0 );
console.log(y);
//3
groupOfColorEye= characters.reduce((character, person)=>{
if(characters[person.eye_color]){
    characters[person.eye_color]++;
}else{characters[person.eye_color]=1;}
return characters;
},{});
console.log(groupOfColorEye);
//4
lengthOfNames= characters.reduce((character, person)=>{
    characters[person.name]=person.name.length;
    return characters;
    },{});
    console.log(lengthOfNames);
//               //***FILTER***
//               console.log('==========FILTER========');
// //1
// filteredcharacter = characters.filter((Character)=>Character.mass > 100);
// console.log(filteredcharacter);
// //2
// filteredcharacter = characters.filter((Character)=>Character.height < 200);
// console.log(filteredcharacter);
// //3
// filteredcharacter = characters.filter((Character)=>Character.gender === 'male');
// console.log(filteredcharacter);
// //4
// filteredcharacter = characters.filter((Character)=>Character.gender === 'female');
// console.log(filteredcharacter);

//               //***SORT***
//               console.log('==========SORT========');
// //1
// console.log(characters.sort((a,b) => b.mass-a.mass));
// //2
// console.log(characters.sort((a,b) => b.height-a.height));
// //3
// console.log(characters.sort());
// //4
// console.log(characters.sort((a,b) => b.gender-a.gender));

//               //***EVERY***
//               console.log('==========EVERY========');
// //1
// isAllEyesBlue = characters.every((character) => character.eye_color === 'blue');
// console.log(isAllEyesBlue);

// //2
// isAllCharacterBig40 = characters.every((character) => character.mass > 40);
// console.log(isAllCharacterBig40);

// //3
// isAllCharacterShortFrom200 = characters.every((character) => character.height < 200);
// console.log(isAllCharacterShortFrom200);

// //4
// isAllCharacterAman = characters.every((character) => character.gender === 'male');
// console.log(isAllCharacterAman);

//               //***SOME***
//               console.log('=========SOME=========');
// //1
// isThereAman = characters.some((character) => character.gender === 'male');
// console.log(isThereAman);

// //2
// isThereSomeOneWithBlueEyes = characters.some((character) => character.eye_color === 'blue');
// console.log(isThereSomeOneWithBlueEyes);

// //3
// isThereSomeOneLongFrom210 = characters.some((character) => character.height > 210);
// console.log(isThereSomeOneLongFrom210);

// //4
// isThereSomeOneLessFrom50 = characters.some((character) => character.mass < 50);
// console.log(isThereSomeOneLessFrom50);

//                       console.log('==========INDEX2========');


// const people = [
//     { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
//     { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
//     { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
//     { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
//     { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
//     { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
//     { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
//     { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
//     { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
//     { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
//     { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
//     { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
// ];

// //1
// avarageEarnings = people.reduce((accumulator, person) =>{
//     return total = Math.floor((accumulator + Number(person.salary)) / people.length)
// }, 0);
// console.log(avarageEarnings);
// //2
// over30YearsOld = people.filter((person)=> (new Date().getFullYear() - new Date(person.DOB).getFullYear()) > 30);
// console.log(over30YearsOld);

// // peopleOlderThan30 = people.filter(person => {
// //     age = new Date().getFullYear() - new Date(person.DOB).getFullYear()
// //     console.log(age)
// //     return age > 30
// // })

// //3
// fullName = people.map((person)=>{
//     return person.firstName + ' ' + person.lastName
// });
// console.log(fullName);
// //4
// people.sort((a,b)=> new Date(b.DOB)- new Date(a.DOB))
// console.log(people);

// //5
// bolumMevcutKisiler = people.reduce((department, person) =>{
//     if(department[person.department]){
//         department[person.department]++;
//     }else{department[person.department]=1;}
//     return department;
// },{});
// console.log(bolumMevcutKisiler);

// const orders = [
//     { orderId: '123', customerId: '123', deliveryDate: '01-01-2020', delivered: true, items: [
//         { productId: '123', price: 55 },
//         { productId: '234', price: 30 },
//     ]},
//     { orderId: '234', customerId: '234', deliveryDate: '01-02-2020', delivered: false, items: [
//         { productId: '234', price: 30 },
//     ]},
//     { orderId: '345', customerId: '234', deliveryDate: '05-01-2020', delivered: true, items: [
//         { productId: '567', price: 30 },
//         { productId: '678', price: 80 },
//     ]},
//     { orderId: '456', customerId: '345', deliveryDate: '12-01-2020', delivered: true, items: [
//         { productId: '789', price: 12 },
//         { productId: '890', price: 90 },
//     ]},
//         { orderId: '578', customerId: '456', deliveryDate: '12-01-2020', delivered: true, items: [
//         { productId: '901', price: 43 },
//         { productId: '123', price: 55 },
//     ]},
// ];

// //1
// nonDeliveredOrdersCustomer234 = orders.filter((order)=> order.customerId=='234' && !order.delivered);
// console.log(nonDeliveredOrdersCustomer234);
// //2
// ordersWithPrices = orders.map((order) =>{
//     return {
//         ...order,
//         orderPrice:order.items.reduce((total, item)=>{
//         return total + item.price
//     }, 0)
// }
// });
// console.log(ordersWithPrices);
// //3
// isAllorderdelivered= orders.every((order)=> order.delivered);
// console.log(isAllorderdelivered);
// //4
// isCustomerId123Ordered= orders.some((order)=> order.customerId=='123');
// console.log(isCustomerId123Ordered);
// //5
// isthereAnyProductId123= orders.some(
//     (order)=> {
//         return order.items.some(item =>{
//             return item.productId=='123'
//         })
//     }
// );
// console.log(isthereAnyProductId123);



 