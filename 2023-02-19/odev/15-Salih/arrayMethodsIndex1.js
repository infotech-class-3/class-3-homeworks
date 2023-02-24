
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
    return { adi:  eleman.name,
             boyu: eleman.height
    }
   
});
console.log(allname);

// dizi of height
allname = characters.map((eleman)=>{
    return eleman.height
   
});
console.log(allname);

                    //***REDUCE***
                    console.log('==========REDUCE========');
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

              //***FILTER***
              console.log('==========FILTER========');
//1
filteredcharacter = characters.filter((Character)=>Character.mass > 100);
console.log(filteredcharacter);
//2
filteredcharacter = characters.filter((Character)=>Character.height < 200);
console.log(filteredcharacter);
//3
filteredcharacter = characters.filter((Character)=>Character.gender === 'male');
console.log(filteredcharacter);
//4
filteredcharacter = characters.filter((Character)=>Character.gender === 'female');
console.log(filteredcharacter);

              //***SORT***
              console.log('==========SORT========');
//1
console.log(characters.sort((a,b) => b.mass-a.mass));
//2
console.log(characters.sort((a,b) => b.height-a.height));
//3
console.log(characters.sort());
//4
console.log(characters.sort((a,b) => b.gender-a.gender));

              //***EVERY***
              console.log('==========EVERY========');
//1
isAllEyesBlue = characters.every((character) => character.eye_color === 'blue');
console.log(isAllEyesBlue);

//2
isAllCharacterBig40 = characters.every((character) => character.mass > 40);
console.log(isAllCharacterBig40);

//3
isAllCharacterShortFrom200 = characters.every((character) => character.height < 200);
console.log(isAllCharacterShortFrom200);

//4
isAllCharacterAman = characters.every((character) => character.gender === 'male');
console.log(isAllCharacterAman);

              //***SOME***
              console.log('=========SOME=========');
//1
isThereAman = characters.some((character) => character.gender === 'male');
console.log(isThereAman);

//2
isThereSomeOneWithBlueEyes = characters.some((character) => character.eye_color === 'blue');
console.log(isThereSomeOneWithBlueEyes);

//3
isThereSomeOneLongFrom210 = characters.some((character) => character.height > 210);
console.log(isThereSomeOneLongFrom210);

//4
isThereSomeOneLessFrom50 = characters.some((character) => character.mass < 50);
console.log(isThereSomeOneLessFrom50);

                      console.log('==========INDEX2========');


const people = [
    { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
    { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
    { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
    { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
    { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
    { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
    { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
    { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
    { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
    { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
    { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
    { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
];

//1
avarageEarnings = people.reduce((accumulator, person) =>{
    return total = Math.floor((accumulator + Number(person.salary)) / people.length)
}, 0);
console.log(avarageEarnings);
