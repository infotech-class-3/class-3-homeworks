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
//1. Tüm isimlerin dizisini al
const allNames = characters.map((character) => character.name );
console.log(allNames);//(4) ['Luke Skywalker', 'Darth Vader', 'Leia Organa', 'Anakin Skywalker']

//2. Tüm yüksekliklerin dizisini al
const allHeights = characters.map((character) => character.height);
console.log(allHeights);//(4) [172, 202, 150, 188]

//3. Yalnızca ad ve yükseklik özelliklerine sahip nesne dizisini alın

const allNamesPlusHeights = characters.map((character) => {
    return {
        "name"  : character.name,
        "height": character.height
    }
});
console.log(allNamesPlusHeights);

//4. Tüm ilk isimlerin dizisini al

const firstNameOfCharacters = characters.map(character => character.name.split(" ")[0]);
console.log(firstNameOfCharacters);//4) ['Luke', 'Darth', 'Leia', 'Anakin']

//***REDUCE***
//1. Tüm karakterlerin toplam kütlesini alın

totalMass = characters.reduce((acc,character) =>  {
    return  acc + character.mass;
}, 0);
console.log(totalMass);//346


//2. Tüm karakterlerin toplam yüksekliğini alın
totalHeight = characters.reduce((acc, character) => {
    return acc + character.height
}, 0);
console.log(totalHeight);//712


//3. Göz rengine göre toplam karakter sayısını alın
eyeColorGrupList = characters.reduce((total, character) => {
    if(total[character.eye_color] == undefined) {
        total[character.eye_color] = 1;
    }else {
        total[character.eye_color] += 1;
    }
    return total;
}, {});

console.log(eyeColorGrupList);//{blue: 2, yellow: 1, brown: 1}

//4. Tüm karakter adlarındaki toplam karakter sayısını alın
totCharacterNameLength = characters.reduce((total, character) => {
    total = total + character.name.length;
    return total;
}, 0);
console.log(totCharacterNameLength);//52


//***FILTER***
//1. 100'den büyük kütleye sahip karakterler alın

über100Mass = characters.filter((character) => character.mass > 100);
console.log(über100Mass);/* {
    "name": "Darth Vader",
    "height": 202,
    "mass": 136,
    "eye_color": "yellow",
    "gender": "male"
} */

//2. 200'den az yüksekliğe sahip karakterler alın
wenig200Height = characters.filter(character => character.height < 200);
console.log(wenig200Height);/* (3) [{…}, {…}, {…}] */

//3. Tüm erkek karakterleri al
allMan = characters.filter(character => character.gender == "male");
console.log(allMan);/* (3) [{…}, {…}, {…}] */

//4. Tüm kadın karakterleri al
allWomen = characters.filter(character => character.gender == "female");
console.log(allWomen);/* [{…}] */

//***SORT***
//1. Kütleye göre sırala

/* characters.sort((a,b) => {
    return a.mass-b.mass;
});
console.log(characters); */

//2. Yüksekliğe göre sırala

/* characters.sort((a,b) => {
    return a.height - b.height
})
console.log(characters);  */

//3. İsme göre sırala
/* characters.sort((a,b) => {
   if(a.name < b.name){
    return -1;
   }else if(a.name > b.name) {
    return 1;
   }else{
    return 0;
   }
})
console.log(characters); */

//4. Cinsiyete göre sırala
/* characters.sort((a,b) => {
    if(a.gender < b.gender){
        return -1;
    }else if(a.gender > b.gender){
        return 1
    }else{
        return 0;
    }
});
console.log(characters); */

//***EVERY***
//1. Her karakterin mavi gözleri var mı?
hasEveryEyecolorBlue = characters.every(character => character.eye_color == "blue");
console.log(hasEveryEyecolorBlue); ///false

//2. Her karakterin kütlesi 40'tan fazla mı?
hasEveryWeightOver40 = characters.every(character => character.mass > 40);
console.log(hasEveryWeightOver40); ///true

//3. Her karakter 200'den kısa mı?
hasEveryHeightWenig200 = characters.every(character => character.height >200);
console.log(hasEveryHeightWenig200); ///false

//4. Her karakter erkek mi?
isAllMan = characters.every(character => character.gender == "male");
console.log(isAllMan); ///false


//***SOME***
//1. En az bir erkek karakter var mı?

isThereanyMale = characters.some(character => character.gender == "male");
console.log(isThereanyMale); ///true

//2. Mavi gözlü en az bir karakter var mı?
isThereanyEyecolorBlue = characters.some(character => character.eye_color == "blue");
console.log(isThereanyEyecolorBlue); ///true

//3. 210'dan uzun en az bir karakter var mı?
isThereanyOver210 = characters.some(character => character.height > 210);
console.log(isThereanyOver210); ///false

//4. Kütlesi 50'den az olan en az bir karakter var mı?
isThereanyMassOver50 = characters.some(character => character.mass < 50);
console.log(isThereanyMassOver50); ///true
