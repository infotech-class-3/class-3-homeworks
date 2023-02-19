// strng = "abcda"
// console.log(strng)

// console.log(strng[0])
// console.log(strng[strng.length-1])

// console.log(strng[0] == strng[strng.length-1] )

function kontrol(metin) {
    if (metin[0] == metin[metin.length-1]) {
        return true
    } else {
        return false
    }
}


// console.log(kontrol("abcda"))
// console.log(kontrol("abcde"))

function kontrol2(metin) {
    return metin[0] == metin[metin.length-1]        
}

// console.log(kontrol2("abcda"))
// console.log(kontrol2("abcde"))

const kontrol3 = (metin) => metin[0] == metin[metin.length-1]

// console.log(kontrol3("abcda"))
// console.log(kontrol3("abcde"))

// 2.soru

// str_ornek = 'bugun hava cok guzel'
function tersineCevir(str2){
    yeni_str = ''
    for (let i = str2.length-1; i >=0 ; i--) {   
        yeni_str += str2[i]   
    }
    return yeni_str
}

// console.log('lezug koc avah nugub' == tersineCevir('bugun hava cok guzel'))
// console.log('12345' == tersineCevir('54321'))

// str3 = 'bugun hava cok guzel'
// yeni_str3 = str3.split('').reverse().join('')
// console.log(yeni_str3)

// console.log(str3.split(''))
// console.log(str3.split('').reverse())
// console.log(str3.split('').reverse().join(''))

function tersineCevir2(str2){
    return str2.split('').reverse().join('')
}

// console.log('lezug koc avah nugub' == tersineCevir2('bugun hava cok guzel'))

const tersineCevir3 = (str2) => str2.split('').reverse().join('')

// console.log(tersineCevir3('bugun hava cok guzel'))

// 3.soru
str4 = 'lorem ipsum dolor sit amet'
// console.log(str4.split(' '))
// console.log(str4.split(' ').reverse())
// console.log(str4.split(' ').reverse().join(' '))

const kelimeTersCevir = (str4) => str4.split(' ').reverse().join(' ')

// console.log(kelimeTersCevir('lorem ipsum dolor sit amet'))
// soru4
car_brands = ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot']

// console.log(car_brands.slice(0, 5))
// console.log(car_brands[1])

//soru5
// console.log(car_brands.join(','))


//soru6
// console.log(car_brands.slice(-5))

//soru7
// console.log(car_brands[2])
// console.log(car_brands)
// ikinci_eleman =  car_brands[1]
// console.log(ikinci_eleman)
// car_brands[1] = car_brands[2]
// console.log(car_brands)
// car_brands[2] = ikinci_eleman
// console.log(car_brands)

function diziDegerDegistir(dizi, index1, index2) {
    tempEleman =  dizi[index1]
    dizi[index1] = dizi[index2]
    dizi[index2] = tempEleman
    // console.log(dizi[index1])
    // console.log(dizi[index2])
    return dizi
}

// console.log(diziDegerDegistir(car_brands, 3, 5))

//soru9
dizi9 = [1,2,3,3,4,5,5,6]
function tekillestir(dizi) {
    let yeniDizi = []
    for (let i = 0; i < dizi.length; i++) {
        if (!yeniDizi.includes(dizi[i])) {
            yeniDizi.push(dizi[i])
        }
    }    
    return yeniDizi
}

function tekillestirIndexOf(dizi) {
    let yeniDizi = []
    for (let i = 0; i < dizi.length; i++) {
        if (yeniDizi.indexOf(dizi[i]) === -1) {
            yeniDizi.push(dizi[i])
        }
    }
    return yeniDizi
}
// console.log(tekillestir(dizi9))

// console.log(tekillestir("dizizzxdcfvgs   9".split('')).join(''))

//soru10
car_brands = ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot']
car_brands2 =['Citroen', 'Hyundai', 'Kia', 'Mazda', 'Suzuki', 'Toyota', 'Nissan', 'Honda', 'Mitsubishi'];

birlesikCars = car_brands.concat(car_brands2)
// console.log(birlesikCars)

birlesikCarsSpread = [...car_brands, ...car_brands2]

//soru11

console.log(car_brands)

// console.log(car_brands.splice(3))

console.log(car_brands.splice(3,4))
console.log(car_brands)

car_brands = ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot']

console.log(car_brands.slice(3,4))
