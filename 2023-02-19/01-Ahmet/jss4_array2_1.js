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

const names = characters.map (character => 
    {return character.name})
console.log(names)


//2. Tüm yüksekliklerin dizisini al

const heights = characters.map (character => 
    {return character.height})
console.log(heights)

//3. Yalnızca ad ve yükseklik özelliklerine sahip nesne dizisini alın
const namesundheight = characters.map (character => 
    {return {name : character.name, 
        height : character.height}
    })
console.log(namesundheight)
//4. Tüm ilk isimlerin dizisini al

const firstnames = characters.map (character => 
    {return character.name.split(" ")[0]})
console.log(firstnames)

//***REDUCE***
//1. Tüm karakterlerin toplam kütlesini alın
const totalmass = characters.reduce ((total, character) => {
return total=total+character.mass
}, 0)
console.log(totalmass)
//2. Tüm karakterlerin toplam yüksekliğini alın

const totalheight = characters.reduce ((total, character) => {
    return total=total+character.height
    }, 0)
    console.log(totalheight)
//3. Göz rengine göre toplam karakter sayısını alın
const eye_color_group = characters.reduce ((total, character) => {
    if (total[character.eye_color] == undefined) {
        total[character.eye_color] =1
    }
    else {
        total[character.eye_color]+=1
    }
    return total
    }, {})
    console.log(eye_color_group)

//4. Tüm karakter adlarındaki toplam karakter sayısını alın
name_zeichen_total = characters.reduce ((total,character) => {
    return total + character.name.length
}, 0)
console.log(name_zeichen_total)

//***FILTER***
//1. 100'den büyük kütleye sahip karakterler alın

listMassOver100 = characters.filter(character => character.mass>100)
console.log(listMassOver100)
//2. 200'den az yüksekliğe sahip karakterler alın
listHeightLess200 = characters.filter(character => character.height<200)
console.log(listHeightLess200)

//3. Tüm erkek karakterleri al

listGenderMale = characters.filter (character => character.gender=='male')
console.log(listGenderMale)

//4. Tüm kadın karakterleri al
listGenderFemale = characters.filter (character => character.gender=='female')
console.log(listGenderFemale)

//***SORT***
//1. Kütleye göre sırala

characters.sort((a, b)=> {
    return a.mass-b.mass
})
//console.log(characters)
//2. Yüksekliğe göre sırala

characters.sort((a, b)=> a.height-b.height)
//console.log(characters)
//3. İsme göre sırala

characters.sort((a, b)=> {
    if (a.name<b.name) {
        return -1
    }
    else if (a.name > b.name)
    {return 1}
    else
    {return 0}
})
//console.log(characters)

//4. Cinsiyete göre sırala

characters.sort((a, b)=> {
    if (a.gender<b.gender) {
        return -1
    }
    else if (a.gender > b.gender)
    {return 1}
    else
    {return 0}
})
//console.log(characters)

//***EVERY***
//1. Her karakterin mavi gözleri var mı?

hasEveryCharacterHasBlueEyes= characters.every(character => character.eye_color=='blue')
console.log(hasEveryCharacterHasBlueEyes)

//2. Her karakterin kütlesi 40'tan fazla mı?
hasEveryCharacterHasMassOver40= characters.every(character => character.mass> 40)
console.log(hasEveryCharacterHasMassOver40)

//3. Her karakter 200'den kısa mı?
hasEveryCharacterHasHeigtLess200= characters.every (character => character.height < 200)
console.log(hasEveryCharacterHasHeigtLess200)

//4. Her karakter erkek mi?
isAllMale= characters.every(character => character.gender=='male')
console.log(isAllMale)

//***SOME***
//1. En az bir erkek karakter var mı?
isThereAnyMale= characters.some(character => character.gender=='male')
console.log(isThereAnyMale)

//2. Mavi gözlü en az bir karakter var mı?

isThereAnyBlueEyes= characters.some(character => character.eye_color=='blue')
console.log(isThereAnyBlueEyes)

//3. 210'dan uzun en az bir karakter var mı?

isThereAnyHeigtOver210= characters.some (character => character.height > 210)
console.log(isThereAnyHeigtOver210)

//4. Kütlesi 50'den az olan en az bir karakter var mı?

isThereAnyMassLessThan50= characters.every(character => character.mass < 50)
console.log(isThereAnyMassLessThan50)