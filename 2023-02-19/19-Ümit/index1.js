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
function getName(item) {
    return [item.name].join(" ");
  }
console.log(characters.map(getName));

//2. Tüm yüksekliklerin dizisini al
function getHeight(item) {
    return [item.height].join(" ");
  }
console.log(characters.map(getHeight));

//3. Yalnızca ad ve yükseklik özelliklerine sahip nesne dizisini alın
function NameHeight(item) {
    return [item.name,item.height].join(",");
    }
     console.log(characters.map(NameHeight));

//4. Tüm ilk isimlerin dizisini al    
FirsName = characters.map((kk)=> {
return {
    name: kk.name.split(" ").shift()
}
});
console.log(FirsName);


//***REDUCE***
//1. Tüm karakterlerin toplam kütlesini alın
Totalmass = characters.reduce((totalm,deger) => totalm + deger.mass, 0);
console.log (Totalmass);

//2. Tüm karakterlerin toplam yüksekliğini alın
Totalheight = characters.reduce((totalh,deger) => totalh + deger.height, 0);
console.log (Totalheight);

//3. Göz rengine göre toplam karakter sayısını alın
let countedEye = characters.reduce(function (allNames, eyename) { 
    if (eyename.eye_color in allNames) {
      allNames[eyename.eye_color]++
    } else {
      allNames[eyename.eye_color] = 1
    }
    return allNames
  }, {})
  console.log(countedEye)

//4. Tüm karakter adlarındaki toplam karakter sayısını alın
Totalchracter = characters.reduce((totalc,deg) => totalc + deg.name.length, -characters.length);
console.log(Totalchracter);

//***FILTER***
//1. 100'den büyük kütleye sahip karakterler alın
let yuzdenbuyuk = characters.filter((yuzdenb) => yuzdenb.mass > 100);
console.log(yuzdenbuyuk);

//2. 200'den az yüksekliğe sahip karakterler alın
let ikiyuzdenkucuk = characters.filter((ikiyuzdenk) => ikiyuzdenk.height < 200);
console.log(ikiyuzdenkucuk);

//3. Tüm erkek karakterleri al
let erkek = characters.filter((erke) => erke.gender === 'male');
console.log(erkek);

//4. Tüm kadın karakterleri al
let kadin = characters.filter((kadi) => kadi.gender === 'female');
console.log(kadin);

//***SORT***
//1. Kütleye göre sırala
console.log(characters.sort((a, b) => a.mass - b.mass));

//2. Yüksekliğe göre sırala
console.log(characters.sort((a, b) => a.height - b.height));

//3. İsme göre sırala
const sorter2 = (sortBy) => (a, b) => a[sortBy].toLowerCase() > b[sortBy].toLowerCase() ? 1 : -1;
characters.sort(sorter2('name'));
console.log(characters);

//4. Cinsiyete göre sırala
const sorterGender = (sortBy) => (a, b) => a[sortBy].toLowerCase() > b[sortBy].toLowerCase() ? 1 : -1;
characters.sort(sorterGender('gender'));
console.log(characters);

//***EVERY***
//1. Her karakterin mavi gözleri var mı?
allChracterEye = characters.every((personel) => personel.eye_color === 'blue');
console.log(allChracterEye);

//2. Her karakterin kütlesi 40'tan fazla mı?
allChracterMass = characters.every((personel) => personel.mass > 40);
console.log(allChracterMass);

//3. Her karakter 200'den kısa mı?
allChracterHeight = characters.every((personel) => personel.height < 200);
console.log(allChracterHeight);

//4. Her karakter erkek mi?
allChracterGender = characters.every((personel) => personel.gender === 'male');
console.log(allChracterGender);

//***SOME***
//1. En az bir erkek karakter var mı?
isThereMale = characters.some((personel) => personel.gender === 'male');
console.log(isThereMale);

//2. Mavi gözlü en az bir karakter var mı?
isThereBlue = characters.some((personel) => personel.eye_color === 'blue');
console.log(isThereBlue);

//3. 210'dan uzun en az bir karakter var mı?
isThereHeight = characters.some((personel) => personel.height > 200 );
console.log(isThereHeight);

//4. Kütlesi 50'den az olan en az bir karakter var mı?
isThereMass = characters.some((personel) => personel.mass < 40 );
console.log(isThereMass);
