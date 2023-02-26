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
    const isimler = characters.map(function(isim) {
        return isim.name; 
    });
    console.log(isimler);
    //2. Tüm yüksekliklerin dizisini al
    const boylar = characters.map(function(boy) {
        return boy.height; 
    });
    console.log(boylar);
    
    //3. Yalnızca ad ve yükseklik özelliklerine sahip nesne dizisini alın
    const isimlerVeBoylar = characters.map(isimVeBoy =>({ad: isimVeBoy.name, boy: isimVeBoy.height})) ;
    console.log(isimlerVeBoylar);
    

    //4. Tüm ilk isimlerin dizisini al
   

    
    
    //***REDUCE***
    //1. Tüm karakterlerin toplam kütlesini alın
    const kiloToplam = characters.map(characters => characters.mass).reduce((sum, mass) => sum + mass);

    console.log(kiloToplam);

    //2. Tüm karakterlerin toplam yüksekliğini alın
    const boyToplam = characters.map(characters => characters.height).reduce((sum, height) => sum + height);

    console.log(boyToplam);
    //3. Göz rengine göre toplam karakter sayısını alın
    const maviGöz = characters.filter(characters => characters.eye_color === 'blue').length;
    const sariGöz = characters.filter(characters => characters.eye_color === 'yellow').length;
    const kahverengiGöz = characters.filter(characters => characters.eye_color === 'brown').length;

    console.log("mavi göz: " +maviGöz);
    console.log("sari göz: " +sariGöz);
    console.log("kahverengi göz: " +kahverengiGöz);
    //4. Tüm karakter adlarındaki toplam karakter sayısını alın
    const toplamKarakter = characters.reduce((acc, character) => {
        return acc + character.name.length;
      }, 0);
      
      console.log(toplamKarakter);

    
    
    //***FILTER***
    //1. 100'den büyük kütleye sahip karakterler alın
    const kilo100Ustu = characters.filter(characters => characters.mass > 100);
    kilo100Ustu.forEach(characters => console.log("100 den byuk kütle: " +characters.name));

    //2. 200'den az yüksekliğe sahip karakterler alın
    const boy200alti = characters.filter(characters => characters.height < 200);
    boy200alti.forEach(characters => console.log("200 den kücük boy: " + characters.name));
    //3. Tüm erkek karakterleri al
    const erkek = characters.filter(characters => characters.gender === 'male');
    erkek.forEach(characters => console.log("erkek: " + characters.name));
    //4. Tüm kadın karakterleri al
    const kadin = characters.filter(characters => characters.gender === 'female');
    kadin.forEach(characters => console.log("kadin: " + characters.name));
    
    
    //***SORT***
    //1. Kütleye göre sırala
    characters.sort((a, b) => a.mass - b.mass);
    characters.forEach(character => console.log(character.name + ' ' + character.mass));
    //2. Yüksekliğe göre sırala
    characters.sort((a, b) => a.height - b.height);
    characters.forEach(character => console.log(character.name + ' ' + character.height));
    //3. İsme göre sırala
    
    //4. Cinsiyete göre sırala
    const cinsiyetSirala = characters.sort(function(a, b) {
    return a.gender.localeCompare(b.gender);
      });
      
      console.log(cinsiyetSirala);
    
    
    //***EVERY***
    //1. Her karakterin mavi gözleri var mı?
   const herkesMaviGöz = characters.every ((character) => character.eye_color === "blue");
    console.log(herkesMaviGöz);
    
    //2. Her karakterin kütlesi 40'tan fazla mı?
    const kütle40Uzeri = characters.every ((character) => character.mass > 40);
    console.log(kütle40Uzeri);

    //3. Her karakter 200'den kısa mı?
    const herkes200uzeri = characters.every((character) => character.height > 200);
    console.log(herkes200uzeri);
    //4. Her karakter erkek mi?
    const herKarakterErkek = characters.every((character)=> character.gender === "male");
    console.log(herKarakterErkek);
    
    
    //***SOME***
    //1. En az bir erkek karakter var mı?
    const hicErkekVarMi = characters.some((character)=> character.gender === "male");
    console.log(hicErkekVarMi);
    //2. Mavi gözlü en az bir karakter var mı?
    const maviGözVar = characters.some ((character) => character.eye_color === "blue");
    console.log(maviGözVar);

    //3. 210'dan uzun en az bir karakter var mı?
    const boy200Uzeri = characters.some((character) => character.height > 200);
    console.log(boy200Uzeri);
    //4. Kütlesi 50'den az olan en az bir karakter var mı?
    const kütle50Alti = characters.some ((character) => character.mass < 50);
    console.log(kütle50Alti);