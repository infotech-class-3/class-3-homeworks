console.log("Hi");
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

//. ....................MAP........................................

//1
// const isimler = characters.map(user => {
//     user.name= `${user.name}`;
//     return {
//         name:user.name
//     }
// })
//  console.log(isimler);

//  //2
//  const yüksek = characters.map(user => {
//     user.height= `${user.height}`;
//     return {
//         height:user.height
//     }
// })
//  console.log(yüksek);

//   //3

//   const yüksekvead = characters.map(user => {
//     user.height= `${user.height} ${user.name}`;
//     return {
//         yükseklikveisim:user.height
        
//     }
// })
//  console.log(yüksekvead);

//    //4
//    const firstNames = characters.map(function(character) {
//     return character.name.split(" ")[0];
//   });
  
//   console.log(firstNames);       

  //.....................REDUCE........................................
//1
// const totalMass = characters.reduce((accumulator, currentCharacter) => {
//     return accumulator + currentCharacter.mass;
// }, 0);

// console.log(`Tüm karakterlerin toplam kütlesi: ${totalMass} kg`);

// //2
// const totalheight = characters.reduce((accumulator, currentCharacter) => {
//     return accumulator + currentCharacter.height;
// }, 0);

// console.log(`Tüm karakterlerin toplam yüksekliği: ${totalheight} cm`);

// //3
// const eyeColorCount = characters.reduce((accumulator, currentCharacter) => {
//     if (accumulator[currentCharacter.eye_color]) {
//         accumulator[currentCharacter.eye_color]++;
//     } else {
//         accumulator[currentCharacter.eye_color] = 1;
//     }
//     return accumulator;
// }, {});

// console.log('Göz renklerine göre karakter sayısı:', eyeColorCount);

// //4
// const totalNameCharacters = characters.reduce((accumulator, currentCharacter) => {
//     return accumulator + currentCharacter.name.length;
// }, 0);

// console.log(`Tüm karakter adlarındaki toplam karakter sayısı: ${totalNameCharacters}`);

 //.....................FILTER........................................

 //1
//  const heavyCharacters = characters.filter(character => character.mass > 100);

//  console.log('100 den büyük kütleye sahip karakterler:');
//  console.log(heavyCharacters);

//  //2
//  const lowheigt= characters.filter(character => character.height <200 );
//  console.log("200 den az yükseklikleri: ");
//  console.log(lowheigt);

//  //3
//  const maleCharacters = characters.filter(character => character.gender === 'male');

// console.log('Tüm erkek karakterler:');
// console.log(maleCharacters);

// //4
// const femaleCharacters = characters.filter(character => character.gender === 'female');

// console.log('Tüm kadın karakterler:');
// console.log(femaleCharacters);


//.....................SORT........................................
//1
// const sortedCharacters = characters.sort((a, b) => a.mass - b.mass);

// console.log('Kütleye göre sıralanmış karakterler:');
// console.log(sortedCharacters);

// //2
// const heightCharacters = characters.sort((a, b) => a.height - b.height);

// console.log('Yüksekliğe göre sıralanmış karakterler:');
// console.log(sortedCharacters);

// //3
// const namedCharacters = characters.sort((a, b) => a.name.localeCompare(b.name));

// console.log('İsme göre alfabetik olarak sıralanmış karakterler:');
// console.log(namedCharacters);

// //4
// const femaleCharacters = characters.sort((a, b) => {
//     if (a.gender < b.gender) {
//       return -1;
//     }
//     if (a.gender > b.gender) {
//       return 1;
//     }
//     return 0;
//   });
//   console.log('Cinsiyete göre sıralanmış karakterler:');
// console.log(femaleCharacters);

//.....................EVERY........................................
//1

// const allHaveBlueEyes = characters.every(character => character.eye_color === 'blue');

// if (allHaveBlueEyes) {
//   console.log('Tüm karakterlerin mavi gözleri var.');
// } else {
//   console.log('Tüm karakterlerin mavi gözleri yok.');
// }

// //2
// const allHaveWeightOver40 = characters.every(character => character.mass > 40);

// if (allHaveWeightOver40) {
//   console.log('Her karakterin kütlesi 40\'tan fazladır.');
// } else {
//   console.log('Her karakterin kütlesi 40\'tan fazla değildir.');
// }

// //3
// const allAreShorterThan200 = characters.every(character => character.height < 200);

// if (allAreShorterThan200) {
//   console.log('Her karakter 200\'den kısadır.');
// } else {
//   console.log('Her karakter 200\'den kısa değildir.');
// }

// //4
// const allAreMale = characters.every(character => character.gender === 'male');

// if (allAreMale) {
//   console.log('Her karakter erkektir.');
// } else {
//   console.log('Her karakter erkek değildir.');
// }


//.....................SOME........................................

//1
const hasMaleCharacter = characters.some(character => character.gender === 'male');

if (hasMaleCharacter) {
  console.log('En az bir erkek karakter var.');
} else {
  console.log('Erkek karakter yok.');
}

//2
const hasBlueEyedCharacter = characters.some(character => character.eye_color === 'blue');

if (hasBlueEyedCharacter) {
  console.log('En az bir mavi gözlü karakter var.');
} else {
  console.log('Mavi gözlü karakter yok.');
}

//3
const hasTallCharacter = characters.some(character => character.height > 210);

if (hasTallCharacter) {
    console.log('En az bir 210 dan uzun karakter var.');
} else {
    console.log('210 dan uzun karakter yok.');
}

//4
const hasLightCharacter = characters.some(character => character.mass < 50);

if (hasLightCharacter) {
    console.log('En az bir 50 den hafif karakter var.');
} else {
    console.log('50 den hafif karakter yok.');
}









 