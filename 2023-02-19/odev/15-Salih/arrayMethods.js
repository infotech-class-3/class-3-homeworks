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
//1
console.log(characters.sort((a,b) => b.mass-a.mass));
//2
console.log(characters.sort((a,b) => b.height-a.height));
//3
console.log(characters.sort());
//4
console.log(characters.sort((a,b) => b.gender-a.gender));

              //***EVERY***
