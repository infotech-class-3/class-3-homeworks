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

// averageSalary = people.reduce(function(acc, number){
//     return (acc + parseInt(number.salary))     //Number(number.salary) 
// }  , 0)  / (people.length)

// console.log(averageSalary)


// console.log(averageSalary)

// 2) Şu anda 30 yaşından büyük kişiler kimlerdir?

// const sonuc = people.filter((person) => (new Date().getFullYear() - new Date(person.DOB).getFullYear()) > 30);

// console.log(sonuc);


// 3) Kişilerin tam adının bir listesini alın (ad ve soyadı).

// for (let i = 0; i<people.length; i++){
//     console.log(people[i].firstName+ " " +people[i].lastName)
// }


// 4) Küçükten büyüğe doğru sıralanmış dizideki kişilerin bir listesini alın.

const sonuc = people.sort((a, b) => new Date(b.DOB).getFullYear() - new Date(a.DOB).getFullYear() ); 

console.log(sonuc);



// 5) Her bölümde kaç kişi var? 

// const sonuc = people.filter(person => person.department === "Development")

// console.log(sonuc)

// const sonuc = people.filter(person => person.department === "Marketing")

// console.log(sonuc)

// const sonuc = people.filter(person => person.department === "Sales")

// console.log(sonuc)

// const sonuc = people.filter(person => person.department === "Office Management")

// console.log(sonuc)