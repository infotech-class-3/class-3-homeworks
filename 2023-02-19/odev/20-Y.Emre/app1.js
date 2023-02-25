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

// const newCharacters = characters.map(character => character.name)

// console.log(newCharacters)


//2. Tüm yüksekliklerin dizisini al

// const newCharacters = characters.map(character => character.height)

// console.log(newCharacters);

//3. Yalnızca ad ve yükseklik özelliklerine sahip nesne dizisini alın

// const newCharacters = characters.map(character => character.name + " " + character.height)

// console.log(newCharacters)

//4. Tüm ilk isimlerin dizisini al

// const sonuc = characters.map((item) => item.name.split(" ")[0])

// console.log(sonuc)


//***REDUCE***
//1. Tüm karakterlerin toplam kütlesini alın

// totalMass = characters.reduce((toplam, kütle) => toplam + (kütle.mass), 0)

// console.log(totalMass)

//2. Tüm karakterlerin toplam yüksekliğini alın

// totalHeight = characters.reduce((toplam, yükseklik) => toplam +(yükseklik.height),0)
 
// console.log(totalHeight)

//3. Göz rengine göre toplam karakter sayısını alın

// const renklerGöre = characters.reduce((renkler, person) =>{
//     if (renkler[person.eye_color]){
//         renkler[person.eye_color]++;
//     }
//     else {
//         renkler[person.eye_color] = 1;
//     }
//     return renkler ;} , {} )

//     console.log(renklerGöre);
      


//4. Tüm karakter adlarındaki toplam karakter sayısını alın

// const harfeGöre = characters.reduce((harf, person) =>{
//     harf += person.name.length
//     return harf;}, 0);

//     console.log(harfeGöre);

//***FILTER***
//1. 100'den büyük kütleye sahip karakterler alın

// const sonuc = characters.filter(character => character.mass > 100 )

// console.log(sonuc)

//2. 200'den az yüksekliğe sahip karakterler alın

// const sonuc = characters.filter(character => character.height < 200)

// console.log(sonuc)

//3. Tüm erkek karakterleri al

// const sonuc = characters.filter (character => character.gender === "male")

// console.log(sonuc)

//4. Tüm kadın karakterleri al

// const sonuc = characters.filter (character => character.gender === "female")

// console.log(sonuc)



//***SORT***
//1. Kütleye göre sırala

// characters.sort((a,b)=>{
//     return a.mass-b.mass
// })

// console.log(characters)

//2. Yüksekliğe göre sırala

// characters.sort((a,b)=>{
//     return a.height-b.height
// })

// console.log(characters)

//3. İsme göre sırala

// const sonuc = characters.sort((a, b) => {
//     if (a.name < b.name) {
//       return -1;
//     } else if (a.name > b.name) {
//       return 1;
//     } else {
//       return 0;
//     }
//   });
  
//   console.log(sonuc);


//4. Cinsiyete göre sırala

// const sonuc = characters.sort((a, b) =>{
//     if (a.gender < b.gender) {
//         return -1;        
//     }
//     else if (a.name > b.name){
//         return 1;
//     }
//     else {
//         return 0;
//     }
// });

// console.log(sonuc);


//***EVERY***
//1. Her karakterin mavi gözleri var mı?

// const sonuc = characters.every (character => character.eye_color === "blue")

// console.log(sonuc)

//2. Her karakterin kütlesi 40'tan fazla mı?

// const sonuc = characters.every (character => character.mass > 40)

// console.log(sonuc)

//3. Her karakter 200'den kısa mı?

// const sonuc =characters.every (character => character.height < 200)

// console.log(sonuc);

//4. Her karakter erkek mi?

// const sonuc = characters.every (character => character.gender === "male")

// console.log(sonuc);


//***SOME***
//1. En az bir erkek karakter var mı?

// const sonuc =characters.some (character => character.gender <= "male")

// console.log(sonuc);

//2. Mavi gözlü en az bir karakter var mı?

// const sonuc =characters.some (character => character.eye_color <= "blue")

// console.log(sonuc);


//3. 210'dan uzun en az bir karakter var mı?

// const sonuc =characters.some (character => character.height >= 210)

// console.log(sonuc);

//4. Kütlesi 50'den az olan en az bir karakter var mı?

// const sonuc =characters.some (character => character.mass <= 50)

// console.log(sonuc);