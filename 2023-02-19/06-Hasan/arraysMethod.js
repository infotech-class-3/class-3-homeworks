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

//MAP-1

names = characters.map((isim)=> {return isim.name});
console.log("Tüm isimlerin dizisi:");
console.log(names);

//MAP-2
heights = characters.map((yukseklik)=>{return yukseklik.height});
console.log("Tüm yüksekliklerin dizisi:");
console.log(heights);

//MAP-3
name_height = characters.map((yuksekHeight)=>{return {name: yuksekHeight.name, height: yuksekHeight.height}});
console.log("Yalnızca ad ve yükseklik özellikleri olan nesneler");
console.log(name_height);

//MAP-4
firstName = characters.map((isim)=> {return (isim.name).substring(0,(isim.name).indexOf(" "))});
console.log("Tüm ilk isimler:");
console.log(firstName);


//REDUCE-1
topMass = characters.reduce((total, agirlik)=> {return total + agirlik.mass} , 0);
console.log("Toplam kütle:");
console.log(topMass);

//REDUCE-2
topHeight = characters.reduce((total, yuksek)=> {return total + yuksek.height} , 0);
console.log("Toplam yükseklik:");
console.log(topHeight);

//REDUCE-3
renklereGore = characters.reduce((goz, kisi)=>{
      if(goz[kisi.eye_color]){
             goz[kisi.eye_color]++;            
         }
         else{
           goz[kisi.eye_color]=1;            
        }
        return goz;
     },{});
    console.log("Göz rengine göre toplam karakterler:");
    console.log(renklereGore);

//REDUCE-4
adKarakter = characters.reduce((total, karakter)=> {return total + (karakter.name).length} , -4);
console.log("Tüm karakter adlarındaki toplam karakter sayısı:");
console.log(adKarakter);

//FILTER-1
sisman = characters.filter((kilo)=>kilo.mass>100);
console.log("100'den büyük kütleye sahip karakterler:");
console.log(sisman);

//FILTER-2
kisa = characters.filter((boy)=>boy.height<200);
console.log("200'den az yüksekliğe sahip karakterler:");
console.log(kisa);

//FILTER-3
erkek =characters.filter((cinsiyet)=>cinsiyet.gender==='male');
console.log("Tüm erkek karakterler:");
console.log(erkek);

//FILTER-4
kadin =characters.filter((cinsiyet)=>cinsiyet.gender==='female');
console.log("Tüm kadın karakterler:");
console.log(kadin);

//SORT-1
massSort = characters.sort((a,b)=>a.mass-b.mass);
console.log("Kütleye göre sıralama:");
console.log(massSort);

//SORT-2
heightSort = characters.sort((a,b)=>a.height-b.height);
console.log("Yüksekliğe göre sıralama:");
console.log(heightSort);

//SORT-3
nameSort = characters.sort((a,b)=>a.name-b.name);
console.log("İsme göre sıralama:");
console.log(nameSort);

//SORT-4
genderSort = characters.sort((a,b)=>a.gender-b.gender);
console.log("Cinsiyete göre sıralama:");
console.log(genderSort);

//EVERY-1
isAllBlue = characters.every((goz)=>goz.eye_color==='blue');
console.log("Her karakterin mavi gözleri var mı?");
console.log(isAllBlue);

//EVERY-2
isAllMass = characters.every((kutle)=>kutle.mass>40);
console.log("Her karakterin kütlesi 40'tan fazla mı?");
console.log(isAllMass);

//EVERY-3
isAllHeight =characters.every((boy)=>boy.height<200);
console.log("Her karakter 200'den kısa mı?");
console.log(isAllHeight);

//EVERY-4
isAllMale = characters.every((erkek)=> erkek.gender==='male');
console.log("Her karakter erkek mi?");
console.log(isAllMale);

//SOME-1
isThereMale = characters.some((erkek)=>erkek.gender==='male');
console.log("En az bir erkek karakter var mı?");
console.log(isThereMale);

//SOME-2
isThereBlue = characters.some((goz)=>goz.eye_color==='blue');
console.log("Mavi gözlü en az bir karakter var mı?");
console.log(isThereBlue);

//SOME-3
isThereHeight =characters.some((boy)=>boy.height>210);
console.log("210'dan uzun en az bir karakter var mı?");
console.log(isThereHeight);

//SOME-4
isThereMass = characters.some((kutle)=>kutle.mass<50);
console.log("Kütlesi 50'den az olan en az bir karakter var mı?");
console.log(isThereMass);




