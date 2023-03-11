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

console.log("Index 1 ----------------------------------------")

//***MAP***
console.log("MAP----------------------------------------")
//1. Tüm isimlerin dizisini al
console.log("1. sorunun cevabi----------------------------------------")
const characterNames = characters.map((character) => character.name);
console.log(characterNames); // ["Luke Skywalker", "Darth Vader", "Leia Organa", "Anakin Skywalker"]

//2. Tüm yüksekliklerin dizisini al
console.log("2. sorunun cevabi----------------------------------------")
const characterHeights = characters.map((character) => character.height);
console.log(characterHeights);

//3. Yalnızca ad ve yükseklik özelliklerine sahip nesne dizisini alın
console.log("3. sorunun cevabi----------------------------------------")
const characterNameAndHeights = characters.map((character) => character.name + ' ' + character.height);
console.log(characterNameAndHeights);
//4. Tüm ilk isimlerin dizisini al
console.log("4. sorunun cevabi----------------------------------------")
const firstNames = characters.map(character => {
    return character.name.split(' ')[0];
});
console.log(firstNames);


//***REDUCE***
console.log("REDUCE----------------------------------------")
//1. Tüm karakterlerin toplam kütlesini alın
console.log("1. sorunun cevabi----------------------------------------")
const totalMass = characters.reduce((accumulator, character) => {
    return accumulator + character.mass;
}, 0);
console.log(totalMass);

//2. Tüm karakterlerin toplam yüksekliğini alın
console.log("2. sorunun cevabi----------------------------------------")
const totalHeight = characters.reduce((accumulator, character) => {
    return accumulator + character.height ;
}, 0);
console.log(totalHeight);

//3. Göz rengine göre toplam karakter sayısını alın
console.log("3. sorunun cevabi----------------------------------------")
const characterCountByEyeColor = characters.reduce((accumulator, character) => {
    accumulator[character.eye_color] = (accumulator[character.eye_color] || 0) + 1;
    return accumulator;
}, {});

console.log(characterCountByEyeColor)


//4. Tüm karakter adlarındaki toplam karakter sayısını alın
const totalCharacterNameCount = characters.reduce((accumulator, character) => {
    return accumulator + character.name.length;
}, 0);

console.log(totalCharacterNameCount);


//***FILTER***
console.log("FILTER----------------------------------------")
//1. 100'den büyük kütleye sahip karakterler alın
console.log("1. sorunun cevabi----------------------------------------")

const charactersWithMassGreaterThan100 = characters.filter((character) => {
    return character.mass > 100;
});
console.log(charactersWithMassGreaterThan100);

//2. 200'den az yüksekliğe sahip karakterler alın
console.log("2. sorunun cevabi----------------------------------------")

const charactersWithMassLessThan200 = characters.filter((character) => {
    return character.mass < 200;
});
console.log(charactersWithMassLessThan200);
//3. Tüm erkek karakterleri al
console.log("3. sorunun cevabi----------------------------------------")

const charactersFemale = characters.filter((character) => {
    return character.gender == 'female';
});
console.log(charactersFemale);
//4. Tüm kadın karakterleri al
console.log("4. sorunun cevabi----------------------------------------")

const charactersMale = characters.filter((character) => {
    return character.gender == 'male';
});
console.log(charactersMale);


//***SORT***
console.log("SORT----------------------------------------")
//1. Kütleye göre sırala
console.log("1. sorunun cevabi----------------------------------------")

const charactersSortedByMass = characters.sort((a, b) => {
    return b.mass - a.mass;
});

console.log(charactersSortedByMass);

//2. Yüksekliğe göre sırala
console.log("2. sorunun cevabi----------------------------------------")

const charactersSortedByHeight = characters.sort((a, b) => {
    return b.height - a.height;
});

console.log(charactersSortedByHeight);

//3. İsme göre sırala
console.log("3. sorunun cevabi----------------------------------------")

characters.sort((a, b) => a.name.localeCompare(b.name));

console.log(characters);

//4. Cinsiyete göre sırala
console.log("4. sorunun cevabi----------------------------------------")

characters.sort((a, b) => a.gender.localeCompare(b.gender));

console.log(characters);


//***EVERY***
console.log("EVERY----------------------------------------")
//1. Her karakterin mavi gözleri var mı?
console.log("1. sorunun cevabi----------------------------------------")

const hasBlueEyes = characters.every((character) => character.eye_color === 'blue');

console.log(hasBlueEyes);

//2. Her karakterin kütlesi 40'tan fazla mı?
console.log("2. sorunun cevabi----------------------------------------")

const massGreaterThan40 = characters.every((character) => character.mass > 40);

console.log(massGreaterThan40);

//3. Her karakter 200'den kısa mı?
console.log("3. sorunun cevabi----------------------------------------")

const heightLessThan200 = characters.every((character) => character.height < 200);

console.log(heightLessThan200);

//4. Her karakter erkek mi?
console.log("4. sorunun cevabi----------------------------------------")

const everyCharactersAreMale = characters.every((character) => character.gender === 'male');

console.log(everyCharactersAreMale);


//***SOME***
console.log("SOME----------------------------------------")
//1. En az bir erkek karakter var mı?
console.log("1. sorunun cevabi----------------------------------------")

const hasAnyMaleCharacter = characters.some((character) => character.gender === 'male');

console.log(hasAnyMaleCharacter);

//2. Mavi gözlü en az bir karakter var mı?
console.log("2. sorunun cevabi----------------------------------------")

const hasAnyBlueEyeCharacter = characters.some((character) => character.eye_color === 'blue');

console.log(hasAnyBlueEyeCharacter);

//3. 210'dan uzun en az bir karakter var mı?
console.log("3. sorunun cevabi----------------------------------------")
const hasAnyCharacterLongerThan210 = characters.some((character) => character.height > 210);

console.log(hasAnyCharacterLongerThan210);

//4. Kütlesi 50'den az olan en az bir karakter var mı?
console.log("4. sorunun cevabi----------------------------------------")

const hasAnyCharacterMassGreaterThan50 = characters.some((character) => character.mass >50 );

console.log(hasAnyCharacterMassGreaterThan50);
