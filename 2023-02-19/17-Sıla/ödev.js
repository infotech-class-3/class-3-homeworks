/**Part 1**/
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
console.log(characters.map((character)=> character.name));
//2. Tüm yüksekliklerin dizisini al
console.log(characters.map((character)=> character.height));
//3. Yalnızca ad ve yükseklik özelliklerine sahip nesne dizisini alın
console.log(characters.map((character)=> {return {ad: character.name, boy:character.height}}));
//4. Tüm ilk isimlerin dizisini al
console.log(characters.map((character)=> {return character.name.split(" ")[0]}));

//***REDUCE***
//1. Tüm karakterlerin toplam kütlesini alın
console.log(characters.map((character)=> {return character.mass}).reduce((total, number)=>total+number));
//2. Tüm karakterlerin toplam yüksekliğini alın
console.log(characters.map((character)=> {return character.height}).reduce((total, number)=>total+number));
//3. Göz rengine göre toplam karakter sayısını alın ?????????
//4. Tüm karakter adlarındaki toplam karakter sayısını alın ??????????


//***FILTER***
//1. 100'den büyük kütleye sahip karakterler alın
console.log(characters.filter((character) => character.mass > 100));
//2. 200'den az yüksekliğe sahip karakterler alın
console.log(characters.filter((character) => character.height < 200));
//3. Tüm erkek karakterleri al
console.log(characters.filter((character) => character.gender === 'male'));
//4. Tüm kadın karakterleri al
console.log(characters.filter((character) => character.gender === 'female'));

//***SORT***
//1. Kütleye göre sırala
console.log(characters.sort((a,b)=>b.mass-a.mass));
//2. Yüksekliğe göre sırala
console.log(characters.sort((a,b)=>b.height-a.height));
//3. İsme göre sırala ???????????
//4. Cinsiyete göre sırala ??????????

//***EVERY***
//1. Her karakterin mavi gözleri var mı?
console.log(characters.every((character) => character.eye_color === 'blue'));
//2. Her karakterin kütlesi 40'tan fazla mı?
console.log(characters.every((character) => character.mass > 40));
//3. Her karakter 200'den kısa mı?
console.log(characters.every((character) => character.height < 200));
//4. Her karakter erkek mi?
console.log(characters.every((character) => character.gender === 'male'));

//***SOME***
//1. En az bir erkek karakter var mı?
console.log(characters.some((character) => character.gender ==="male"))
//2. Mavi gözlü en az bir karakter var mı?
console.log(characters.some((character) => character.eye_color ==="blue"))
//3. 210'dan uzun en az bir karakter var mı?
console.log(characters.some((character) => character.height > 210))
//4. Kütlesi 50'den az olan en az bir karakter var mı?
console.log(characters.some((character) => character.mass < 50))

/**Part 2**/
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
console.log(people.map((person)=>{return parseInt(person.salary)}).reduce((acc, number)=>acc+number,0)/12);

// 2) Şu anda 30 yaşından büyük kişiler kimlerdir?
var atTheMoment = new Date;
console.log(people.filter((person) => atTheMoment.getFullYear()-person.DOB.split("/")[2]>30).map((character)=>{return character.firstName + " "+character.lastName}));

// 3) Kişilerin tam adının bir listesini alın (ad ve soyadı).
console.log(people.map((person)=>{return person.firstName +" "+ person.lastName}))

// 4) Küçükten büyüğe doğru sıralanmış dizideki kişilerin bir listesini alın.  ???????????????*
var YaşListesi=people.sort((a,b)=> b.DOB.split("/")[2]-a.DOB.split("/")[2]);
console.log(YaşListesi);

// 5) Her bölümde kaç kişi var? ????????????*
console.log(people.map((person)=>person.department));

/**Part 3**/
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
console.log(orders.every((a)=> a.delivered == true));

// 4) '123' kimlikli müşteri sipariş verdi mi?
console.log(orders.some((a)=>a.customerId == 123));

// 5) 123 kimlikli ürün satıldı mı? ???????????????
console.log(orders.some((a)=> a.items.productId == 123));
