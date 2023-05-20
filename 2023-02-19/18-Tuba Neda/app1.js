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
// 1.
nameList = characters.map(character => character.name)

// console.log(nameList)

// 2.
heightList = characters.map(character => character.height)

// console.log(heightList)

// 3.
nameHeightList = characters.map(character => {
    return {
        'name': character.name,
        'height': character.height
    }
})

// console.log(nameHeightList)

// 4. 
firstnameList = characters.map(character => character.name.split(' ')[0])

// console.log(firstnameList)

//***REDUCE***
//1. 

totalMass = characters.reduce((acc, character) => {
    return acc + character.mass
}, 0)

// console.log(totalMass)

// 2.
totalHeight = characters.reduce((acc, character) => {
    return acc + character.height
}, 0)

// console.log(totalHeight)

// 3.

eyeColorList = characters.reduce((total, character) => {
    if (total[character.eye_color] == undefined){
        total[character.eye_color] = 1
    } else {
        total[character.eye_color] += 1
    }
    return total
}, {})

// console.log(eyeColorList)

// 4.
sumOfCharacterNameLength = characters.reduce((total, character)=>{
    return total + character.name.length
},0)

// console.log(sumOfCharacterNameLength)

//***FILTER***
//1.

listMassOver100 = characters.filter(character => character.mass > 100)

// console.log(listMassOver100)

//2.
listHeightLess200 = characters.filter(character => character.height < 200)
// console.log(listHeightLess200)

//3.

listOfGenderMale = characters.filter(character => character.gender == 'male')
// console.log(listOfGenderMale)

//4.

listOfGenderFemale = characters.filter(character => character.gender == 'female')
// console.log(listOfGenderFemale)

//***SORT***
//1. 

// characters.sort((a, b) => {
//     return a.mass - b.mass
// })

// console.log(characters)

//2.

// characters.sort((a,b) => a.height - b.height)

// console.log(characters)

//3. 

kelime1 = 'abc'
kelime2 = 'xyz'

// console.log(kelime1 < kelime2)

// characters.sort((a,b) => {
//     if (a.name < b.name){
//         return -1
//     } else if (a.name > b.name) {
//         return 1
//     } else {
//         return 0
//     }
// })

// console.log(characters)

//4.
// characters.sort((a, b) => {
//     if (a.gender < b.gender){
//         return -1
//     } else if (a.gender > b.gender) {
//         return 1
//     } else {
//         return 0
//     }    
// })

// console.log(characters)


//***EVERY***
//1. 

hasEveryCharacterHasBlueEyes = characters.every(character => character.eye_color == 'blue')

// console.log(hasEveryCharacterHasBlueEyes)

//2.
hasEveryCharacterHasMassOver40 = characters.every(character => character.mass > 40)

// console.log(hasEveryCharacterHasMassOver40)

//3.
hasEveryCharacterHeightLessThan200 = characters.every(character => character.height < 200)

// console.log(hasEveryCharacterHeightLessThan200)

//4.
isAllMale = characters.every(character => character.gender == 'male')

// console.log(isAllMale)

//***SOME***
//1. 
isThereAnyMale = characters.some(character => character.gender == 'male')

// console.log(isThereAnyMale)

//2. 

isThereAnyBlueEyes = characters.some(character => character.eye_color == 'blue')

// console.log(isThereAnyBlueEyes)

//3.
isThereAnyHeightOver210 = characters.some(character => character.height > 210)

// console.log(isThereAnyHeightOver210)

//4.
isThereAnyMassLessThan50 = characters.some(character => character.mass < 50)

console.log(isThereAnyMassLessThan50)