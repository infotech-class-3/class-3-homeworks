//***   bolum 1  ********
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
    }
]


//***MAP***

//1. Tüm isimlerin dizisini al
mappedCharactersNames = characters.map((characters) => {
    return {
        name: characters.name
    }
});
 console.log("tumisimler",mappedCharactersNames);

//2. Tüm yüksekliklerin dizisini al
mappedCharactersHeights = characters.map((characters) =>{
    return {
        height: characters.height
    }
});
 console.log("tumyukseklikler",mappedCharactersHeights);

//3. Yalnızca ad ve yükseklik özelliklerine sahip nesne dizisini alın
mappedCharacterssNamesAndHeight = characters.map((characters) => {
    return {
        name: characters.name, 
        height: characters.height
    }
});
console.log("adveyukseklik",mappedCharacterssNamesAndHeight);

//4. Tüm ilk isimlerin dizisini al
console.log("tum ilk isimler",characters.map((character)=> {return character.name.split(" ")[0]}));

//***REDUCE***

//1. Tüm karakterlerin toplam kütlesini alın
charactersTotalMass = characters.reduce((totalMass, characters) => {
    return totalMass + characters.mass
}, 0);
console.log("toplam kutle",charactersTotalMass);

//2. Tüm karakterlerin toplam yüksekliğini alın
charactersTotalHeight = characters.reduce((totalHeight, characters) => {
    return totalHeight + characters.height
}, 0);
console.log("toplam yukseklik",charactersTotalHeight);

//3. Göz rengine göre toplam karakter sayısını alın
eyeColoraGoreSayilar = characters.reduce((sayilar, character) => {
    (sayilar[character.eye_color] ? sayilar[character.eye_color]++ : sayilar[character.eye_color] = 1);
    return sayilar;
}, {});
console.log(eyeColoraGoreSayilar);

// ikinci yontem
eyeColoraGoreSayilar = characters.reduce((sayilar, character) => {
    (sayilar[character.eye_color] = sayilar[character.eye_color] || []).push(character); 
    return sayilar;
}, {});
console.log(eyeColoraGoreSayilar);

//4. Tüm karakter adlarındaki toplam karakter sayısını alın
karakterAdlari = characters.reduce((names, character) => {
    if (names[character.name]){
        names[character.name]++;
    } else {
        names[character.name] = 1;
    }
    return names;
}, {});

console.log(karakterAdlari);


//***FILTER***

//1. 100'den büyük kütleye sahip karakterler alın
yuzdenBuyukKutle = characters.filter((character) => character.mass > 100 );
console.log("yuzdenbuyukkutle",yuzdenBuyukKutle);

//2. 200'den az yüksekliğe sahip karakterler alın
ikiYuzdenAzYukseklik = characters.filter((character) => character.height < 200 );
console.log("200'den az yüksekliğe sahip karakterler alın",ikiYuzdenAzYukseklik);

//3. Tüm erkek karakterleri al
filteredCharacters = characters.filter((character) => character.gender === 'male');
console.log("Tüm erkek karakterleri al",filteredCharacters);

//4. Tüm kadın karakterleri al
filteredCharactersFemale = characters.filter((character) => character.gender === 'female');
console.log("Tüm kadın karakterleri al",filteredCharactersFemale);

//***SORT***

//1. Kütleye göre sırala
allMass = characters.map((characters) =>{
    return {
        mass: characters.mass
    }
});
console.log("Kutleye gore sirala" ,allMass.sort((a, b) => a.mass - b.mass));

//2. Yüksekliğe göre sırala
allHeights = characters.map((characters) =>{
    return {
        height: characters.height
    }
});
console.log("Yukseklige gore sirala " ,allHeights.sort((a, b) => a.height - b.height));

//3. İsme göre sırala--------?
allNames = characters.map((characters) =>{
    return {
        name: characters.name
    }
});

aboutNameOfUsers = allNames.sort((a, b) => {
    if (a.name < b.name){
        return -1
    } else if (b.name > a.name) {
        return 1
    } else {
        return 0
    } 
})


console.log(" isme gore siralamaa: ",aboutNameOfUsers);

//4. Cinsiyete göre sırala
allGender = characters.map((characters) =>{
    return {
        gender: characters.gender
    }
}); 

aboutGenderOfUsers = allGender.sort((a,b) => {
    if (a.gender < b.gender){
        return -1
    } else if (b.gender > a.gender) {
        return 1
    } else {
        return 0
    } 
})
console.log("cinsiyete gore sirala",aboutGenderOfUsers );

//***EVERY***

//1. Her karakterin mavi gözleri var mı?
allCharacterBlueEyes = characters.every((character) => character.eye_color === 'blue');
console.log("Her Karakterin mavi gozleri var mi?" , allCharacterBlueEyes);

//2. Her karakterin kütlesi 40'tan fazla mı?
allCharacterKirktanAgir = characters.every((character) => character.mass > 40 );
console.log("Her karakterin kütlesi 40'tan fazla mı?" , allCharacterKirktanAgir);

//3. Her karakter 200'den kısa mı?
allCharacterIkiYuzdenKisa = characters.every((character) => character.height < 200 );
console.log("Her karakter 200'den kısa mı?" , allCharacterIkiYuzdenKisa);

//4. Her karakter erkek mi?
allCharacterErkekMi = characters.every((character) => character.gender === 'male' ) ;
console.log(" Her karakter erkek mi?" , allCharacterErkekMi);

//***SOME***

//1. En az bir erkek karakter var mı?
 enAzBirErkekKarakterVarMi = characters.some((character) => character.gender === 'male');
 console.log("En az bir erkek karakter var mı?",enAzBirErkekKarakterVarMi);

//2. Mavi gözlü en az bir karakter var mı?
maviGozluBirKarakterVarMi = characters.some((character) => character.eye_color === 'blue');
 console.log("Mavi gözlü en az bir karakter var mı?",maviGozluBirKarakterVarMi);

//3. 210'dan uzun en az bir karakter var mı?
ikiyuzondanUzunBirKarakterVarMi = characters.some((character) => character.height > 210);
console.log("210'dan uzun en az bir karakter var mı?",ikiyuzondanUzunBirKarakterVarMi);

//4. Kütlesi 50'den az olan en az bir karakter var mı?
kutlesiEllidenAzOlanVarMi = characters.some((character) => character.mass < 50);
console.log("Kütlesi 50'den az olan en az bir karakter var mı?",kutlesiEllidenAzOlanVarMi);

//*** bolum 2*****
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

// 1) Dizideki tüm insanların ortalama geliri nedir? (acc = accumulator = toplayıcı parametre)
averageSalary = people.reduce(function(acc, number){
         return (acc + parseInt(number.salary))   
     }  , 0)  / (people.length)
    
     console.log("ortalama gelir",averageSalary)

// 2) Şu anda 30 yaşından büyük kişiler kimlerdir?
const sonuc = people.filter((person) => (new Date().getFullYear() - new Date(person.DOB).getFullYear()) > 30);

console.log(sonuc);

// 3) Kişilerin tam adının bir listesini alın (ad ve soyadı).
mappedPeopleFirstNameAndLastName = people.map((people) => {
    return {
        firstName: people.firstName, 
        lastName: people.lastName
    }
});
console.log(mappedPeopleFirstNameAndLastName);

// 4) Küçükten büyüğe doğru sıralanmış dizideki kişilerin bir listesini alın.
const kucuktenbuyugesiralanmis = people.sort((a, b) => new Date(b.DOB).getFullYear() - new Date(a.DOB).getFullYear() ); 
console.log("kucuktenbuyugesiralanmis" , kucuktenbuyugesiralanmis);

// 5) Her bölümde kaç kişi var? 

bolumSayilari = people.reduce((departments, people) => {
    if (departments[people.department]){
        departments[people.department]++;
    } else {
        departments[people.department] = 1;
    }
    return departments;
}, {});
console.log(bolumSayilari);

//*****bolum 3*************

const orders = [
    { orderId: '123', customerId: '123', deliveryDate: '01-01-2020', delivered: true, items: [
        { productId: '123', price: 55 },
        { productId: '234', price: 30 },
    ]},
    { orderId: '234', customerId: '234', deliveryDate: '01-02-2020', delivered: false, items: [
        { productId: '234', price: 30 },
    ]},
    { orderId: '345', customerId: '234', deliveryDate: '05-01-2020', delivered: true, items: [
        { productId: '567', price: 30 },
        { productId: '678', price: 80 },
    ]},
    { orderId: '456', customerId: '345', deliveryDate: '12-01-2020', delivered: true, items: [
        { productId: '789', price: 12 },
        { productId: '890', price: 90 },
    ]},
        { orderId: '578', customerId: '456', deliveryDate: '12-01-2020', delivered: true, items: [
        { productId: '901', price: 43 },
        { productId: '123', price: 55 },
    ]},
];

// 1) Teslim edilmeyen 234 ID'li müşteri için siparişlerin bir listesini alın.


// 2) Sipariş edilen ürünlerin toplam fiyatı ile her siparişte yeni bir özellik oluşturun.


// 3) Tüm siparişler teslim edildi mi?
haveAllOrdersBeenDelivered = orders.every((order) => order.delivered === 'true');
console.log("Tüm siparişler teslim edildi mi?" , haveAllOrdersBeenDelivered);

// 4) '123' kimlikli müşteri sipariş verdi mi?
console.log("123 kimlikli musteri siparis verdi mi", orders.some((a)=>a.customerId == 123));


// 5) 123 kimlikli ürün satıldı mı?

console.log("123 kimlikli ürün satıldı mı?",orders.some((a)=> a.items.productId == 123));