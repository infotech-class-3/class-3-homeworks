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
nameListesi = characters.map (characters => characters.name)
//console.log(nameListesi)
//2. Tüm yüksekliklerin dizisini al

yukseklik =characters.map (characters => characters.height)
//console.log(yukseklik)

//3. Yalnızca ad ve yükseklik özelliklerine sahip nesne dizisini alın

ad_yukseklik = characters.map (characters => {
    return{
        "name" : characters.name,
        "height": characters.height
    }


})

//console.log(ad_yukseklik)
//4. Tüm ilk isimlerin dizisini al

firstNameList = characters.map(characters => characters.name.split(` `)[0])
//console.log (firstNameList)


//***REDUCE***
//1. Tüm karakterlerin toplam kütlesini alın

totalMass = characters.reduce((acc, character) => {
   return acc + character.mass
}, 0)

//console.log(totalMass)


//2. Tüm karakterlerin toplam yüksekliğini alın

totalHeight = characters.reduce((acc, characters) => {
    return acc + characters.height
}, 0)
//console.log(totalHeight)

//3. Göz rengine göre toplam karakter sayısını alın
eyeColorList = characters.reduce((total, character) => {
    if (total[character.eye_color] == undefined){
        total[character.eye_color] = 1
    } else {
        total[character.eye_color] += 1
    }
    return total
}, {})
//4. Tüm karakter adlarındaki toplam karakter sayısını alın

nameLenght = characters.reduce ((acc, characters) => {
    return acc + characters.name.length
}, 0)
//console.log (nameLenght)


//***FILTER***
//1. 100'den büyük kütleye sahip karakterler alın

yuzdenBuyuk = characters.filter(characters => characters.mass >100)
//console.log (yuzdenBuyuk)
//2. 200'den az yüksekliğe sahip karakterler alın

ikiyuzdenAZ = characters.filter(characters => characters.height<200)
//console.log(ikiyuzdenAZ)

//3. Tüm erkek karakterleri al

peopleMale = characters.filter(character => character.gender == 'male')
 //console.log(peopleMale)

//4. Tüm kadın karakterleri al
 peopleFamale =characters.filter(characters => characters.gender == `female`)
 //console.log(peopleFamale)



//***SORT***
//1. Kütleye göre sırala

characters.sort ((a, b) => {
    return a.mass - b.mass

})

//console.log(characters)

//2. Yüksekliğe göre sırala

characters.sort ((a,b) => {
    return a.height - b.height
})

//console.log(characters)
//3. İsme göre sırala


characters.sort((a, b) =>{
    if (a.name < b.name){
    return -1

    }else if (a.name > b.name) {
    return 1
    } else {
        return 0
    }    
})

//console.log(characters)
//4. Cinsiyete göre sırala


characters.sort ((a,b) => {
if (a.gender < b.gender) {
    return -1

} else if (a.gender > b.gender) {
    return 1

} else {
    return 0
}

})

//console.log(characters)


//***EVERY***
//1. Her karakterin mavi gözleri var mı?

eyesColor = characters.every(character => character.eye_color == 'blue')

console.log(eyesColor)


//2. Her karakterin kütlesi 40'tan fazla mı?

massBuyuk40 = characters.every(characters => characters.mass > 40)

console.log (massBuyuk40)

//3. Her karakter 200'den kısa mı?

heightKisa = characters.every (characters => characters.height <200)

console.log(heightKisa)

//4. Her karakter erkek mi?

evreyMale = characters.every (characters => characters.gender ==`male`)
console.log(evreyMale)



//***SOME***
//1. En az bir erkek karakter var mı?

enAzBirMAle = characters.some (characters => characters.gender == `male`)

console.log(enAzBirMAle)

//2. Mavi gözlü en az bir karakter var mı?

maviEyes = characters.some (characters => characters.eye_color == `blue`)

console.log(maviEyes)

//3. 210'dan uzun en az bir karakter var mı?

height210 = characters.some (characters => characters.height > 210)

console.log(height210)

//4. Kütlesi 50'den az olan en az bir karakter var mı?
mass50 = characters.some(character => character.mass < 50)

console.log(mass50)