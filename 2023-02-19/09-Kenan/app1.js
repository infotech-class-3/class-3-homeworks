const characters = [
    {
      name: "Luke Skywalker",
      height: 172,
      mass: 77,
      eye_color: "blue",
      gender: "male",
    },
    {
      name: "Darth Vader",
      height: 202,
      mass: 136,
      eye_color: "yellow",
      gender: "male",
    },
    {
      name: "Leia Organa",
      height: 150,
      mass: 49,
      eye_color: "brown",
      gender: "female",
    },
    {
      name: "Anakin Skywalker",
      height: 188,
      mass: 84,
      eye_color: "blue",
      gender: "male",
    },
  ];
  

//***MAP***

// 1. Tüm isimlerin listesini al

tumAdListesi = characters.map(character => character.name)
console.log("1. Tüm isimlerin listesini al:", tumAdListesi);

// 2. Tüm yüksekliklerin dizisini al

tumYukseklikDizisi = characters.map(character => character.height)
console.log("2. Tüm yüksekliklerin dizisini al:", tumYukseklikDizisi);

// 3. Yalnızca ad ve yükseklik özelliklerine sahip nesne dizisini alın

adVeYukseklikListesi = characters.map(character => {
    return {
        'name': character.name,
        'height': character.height
    }
})
console.log("3. Yalnızca ad ve yükseklik özelliklerine sahip nesne dizisini alın:", adVeYukseklikListesi);

// 4. Tüm ilk isimlerin dizisini alın

tumIlkAdlarDizisi = characters.map(character => character.name.split(' ')[0])
console.log("4. Tüm ilk isimlerin dizisini alın:", tumIlkAdlarDizisi);


//***REDUCE***

//1. Tüm karakterlerin toplam kütlesini alın

toplamKutleListesi = characters.reduce((toplam, character) => {
    return toplam + character.mass
}, 0)
console.log("1. Tüm karakterlerin toplam kütlesini alın:", toplamKutleListesi);

// 2. Tüm karakterlerin toplam yüksekliğini alın

toplamYukseklikListesi = characters.reduce((toplam, character) => {
    return toplam + character.height
}, 0)
console.log("2. Tüm karakterlerin toplam yüksekliğini alın:", toplamYukseklikListesi);

// 3. Göz rengine göre toplam karakter sayısını alın

toplamGozRengiKarakterSayisi = characters.reduce((toplam, character) => {
    if (toplam[character.eye_color] == undefined){
        toplam[character.eye_color] = 1
    } else {
        toplam[character.eye_color] += 1
    }
    return toplam;
}, {})
console.log("3. Göz rengine göre toplam karakter sayısını alın:", toplamGozRengiKarakterSayisi);

// 4. Tüm adlardaki toplam karakter sayısını alın

toplamAdlardakiKarakterSayisi = characters.reduce((toplam, character)=>{
    return toplam + character.name.length
},0)

console.log("4. Tüm adlardaki toplam karakter sayısını alın:", toplamAdlardakiKarakterSayisi);


//***FILTER***

//1. 100’den büyük kütleye sahip karakterleri alın

yuzdenBuyukKutleyeSahipKarakterlerListesi = characters.filter(character => character.mass > 100)
console.log("1. 100’den büyük kütleye sahip karakterleri alın:", yuzdenBuyukKutleyeSahipKarakterlerListesi);

//2. 200’den az yüksekliğe sahip karakterleri alın

ikiyuzdenAzYuksekligeSahipKarakterlerListesi = characters.filter(character => character.height < 200)
console.log("2. 200’den az yüksekliğe sahip karakterleri alın:", ikiyuzdenAzYuksekligeSahipKarakterlerListesi);

//3. Tüm erkek karakterleri alın

tumErkekKarakterlerListesi = characters.filter(character => character.gender == 'male')
console.log("3. Tüm erkek karakterleri alın:", tumErkekKarakterlerListesi);

//4. Tüm kadın karakterleri alın

tumKadinKarakterlerListesi = characters.filter(character => character.gender == 'female')
console.log("4. Tüm kadın karakterleri alın:", tumKadinKarakterlerListesi);


//***SORT***

//1. Kütleye göre sırala

characters.sort((a, b) => a.mass - b.mass)
//console.log(kutleyeGoreSirala); Ana diziyi değiştirdiği için başka bir şey denedim
kutleyeGoreSirala  = characters.map(character => character)
console.log("1. Kütleye göre sırala:", kutleyeGoreSirala);

//2. Yüksekliğe göre sırala

characters.sort((a,b) => a.height - b.height)
yuksekligeGoreSirala = characters.map(character => character)
console.log("2. Yüksekliğe göre sırala:", yuksekligeGoreSirala);

//3. İsme göre sırala

characters.sort((a,b) => {
    if (a.name < b.name){
        return -1
    } else if (a.name > b.name) {
        return 1
    } else {
        return 0
    }
})
ismeGoreSirala = characters.map(character => character)
console.log("3. İsme göre sırala:", ismeGoreSirala);

//4. Cinsiyete göre sırala

characters.sort((a, b) => {
    if (a.gender < b.gender){
        return -1
    } else if (a.gender > b.gender) {
        return 1
    } else {
        return 0
    }    
})
cinsiyeteGoreSirala = characters.map(character => character)
console.log("4. Cinsiyete göre sırala:", cinsiyeteGoreSirala);


//***EVERY***

//1. Her karakterin mavi gözleri var mı?

herKarakterMaviGozlumu = characters.every(character => character.eye_color == 'blue')

console.log("1. Her karakterin mavi gözleri var mı?:", herKarakterMaviGozlumu);

//2. Her karakterin kütlesi 40'tan fazla mı?

herKarakterinKutlesi40danFazlami = characters.every(character => character.mass > 40)

console.log("2. Her karakterin kütlesi 40'tan fazla mı?:", herKarakterinKutlesi40danFazlami);

//3. Her karakter 200'den kısa mı?

herKarakter200denKisami = characters.every(character => character.height < 200)

console.log("3. Her karakter 200'den kısa mı?:", herKarakter200denKisami);

//4. Her karakter erkek mi?

herKarakterErkekmi = characters.every(character => character.gender == 'male')

console.log("4. Her karakter erkek mi?:", herKarakterErkekmi);


//***SOME***

//1. En az bir erkek karakter var mı?

enAzBirErkekKarakterVArmi = characters.some(character => character.gender == 'male')

console.log("1. En az bir erkek karakter var mı?:", enAzBirErkekKarakterVArmi);

//2. Mavi gözlü en az bir karakter var mı?

maviGozluEnAzBirKarakterVArmi = characters.some(character => character.eye_color == 'blue')

console.log("2. Mavi gözlü en az bir karakter var mı?:", maviGozluEnAzBirKarakterVArmi);

//3. 210'dan uzun en az bir karakter var mı?

ikiYuzOndanUzunEnAzBirKArakterVarmi = characters.some(character => character.height > 210)

console.log("3. 210'dan uzun en az bir karakter var mı?:", ikiYuzOndanUzunEnAzBirKArakterVarmi);

//4. Kütlesi 50'den az olan en az bir karakter var mı?

kutlesi50denAzEnAzBirKArakterVarmi = characters.some(character => character.mass < 50)

console.log("4. Kütlesi 50'den az olan en az bir karakter var mı?:", kutlesi50denAzEnAzBirKArakterVarmi);