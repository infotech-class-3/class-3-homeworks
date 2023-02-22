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
//1. Map all the names
mappedNames = characters.map((character) =>{ 
    return {name: character.name}
});
// console.log(mappedNames);

//2. Map all the heights
mappedHeights = characters.map((character) =>{ 
    return {height: character.height}
});
// console.log(mappedHeights);

//3. Map only names and heights
mappedNamesAndHeights = characters.map((character) =>{ 
    return {name: character.name, height: character.height}
});
// console.log(mappedNamesAndHeights);

//4. Map only first names
mappedFirstNames = characters.map((character) =>{ 
    return {name: character.name.split(' ')[0]}
});
// console.log(mappedFirstNames);

//***REDUCE***
//1. Total mass of the characters
reduceMass = characters.reduce((totalMass, character) => {
    return totalMass + character.mass;
}, 0);
// console.log(reduceMass);

//2. Total height of the characters
reduceHeights = characters.reduce((totalHeight, character) => {
    return totalHeight + character.height;
}, 0);
// console.log(reduceHeights);

//3. Number of blue eyed characters
reduceEyeColor = characters.reduce((eyeColor, character) => {
    eyeColor[character.eye_color] ? eyeColor[character.eye_color]++ : eyeColor[character.eye_color] = 1; 
    return eyeColor;
}, {});
// console.log(reduceEyeColor);

//4. Total char of the name in the character array
reduceCharCount = characters.reduce((charCount, character) => {
    return charCount + character.name.length;
}, 0);
// console.log(reduceCharCount);

//***FILTER***
//1. Characters with mass over 100
filterMassOver100 = characters.filter((character) => 
    character.mass > 100);
// console.log(filterMassOver100);

//2. Characters with mass less than 200
filterHeightLess200 = characters.filter((character) => 
    character.height < 200);
// console.log(filterHeightLess200);

//3. All male characters
filterMale = characters.filter((character) => 
    character.gender == 'male');
// console.log(filterMale);

//4. All female characters
filterFemale = characters.filter((character) => 
    character.gender == 'female');
// console.log(filterFemale);

//***SORT***
//1. Sort by mass
// console.log(characters.sort((a, b) => a.mass - b.mass));

//2. Sort by height
// console.log(characters.sort((a, b) => a.totalHeight - b.height));

//3. Sort by name
// console.log(characters.sort((a, b) => a.name - b.name));

//4. Sort by gender
// console.log(characters.sort((a, b) => a.gender - b.gender));

//***EVERY***
//1. Has each character blue eyes?
allBlue = characters.every((character) => character.eye_color == 'blue');
// console.log(allBlue);

//2. Has each characters mass over 40?
allMassOver40 = characters.every((character) => character.mass > 40);
// console.log(allMassOver40);

//3. Has each characters height less than 200?
allHeightLess200 = characters.every((character) => character.height < 200);
// console.log(allHeightLess200);

//4. Is each character male?
allMale = characters.every((character) => character.gender == 'male');
// console.log(allMale);

//***SOME***
//1. Is there at least one male character?
someMale = characters.some((character) => character.gender == 'male');
// console.log(someMale);

//2. Is there at least one blue eyed character?
someBlue = characters.some((character) => character.eye_color == 'blue');
// console.log(someBlue);

//3. Is there at least one character over height 210?
someHeightOver210 = characters.some((character) => character.height > 210);
// console.log(someHeightOver210);

//4. Is there at least one character mass less than 50?
someMassLess50 = characters.some((character) => character.mass < 50);
// console.log(someMassLess50);