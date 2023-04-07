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


console.log("Index 2 ----------------------------------------");
// 1) Dizideki tüm insanların ortalama geliri nedir? (acc = accumulator = toplayıcı parametre)
totIncome = people.reduce((acc, person) =>  acc = acc + parseInt(person.salary), 0);
ortIncome = totIncome/people.length;
console.log(ortIncome);//39916.666666666664

// 2) Şu anda 30 yaşından büyük kişiler kimlerdir?

allOver30 = people.filter(person => {
    age = new Date().getFullYear() - new Date(person.DOB).getFullYear();
    console.log(age);
    return age > 30;
});
console.log(allOver30);

// 3) Kişilerin tam adının bir listesini alın (ad ve soyadı).

allFirstNameAndLastName = people.map(person => `${person.firstName} ${person.lastName}`);
console.log(allFirstNameAndLastName);//(12) ['Sam Hughes', 'Terri Bishop', 'Jar Burke', 'Julio Miller', 'Chester Flores', 'Madison Marshall', 'Ava Pena', 'Gabriella Steward', 'Charles Campbell', 'Tiffany Lambert', 'Antonio Gonzalez', 'Aaron Garrett']


// 4) Küçükten büyüğe doğru sıralanmış dizideki kişilerin bir listesini alın.

/* people.sort((a,b) => {
    return new Date(a.DOB) - new Date(b.DOB);
});
console.log(people); */

// 5) Her bölümde kaç kişi var? 


grupDeparmentList = people.reduce((total, person) => {
    if(total[person.department] == undefined){
        total[person.department] = 1;

    }else{
        total[person.department] += 1;
    }
    return total;
}, {}) ;

console.log(grupDeparmentList);//{Development: 6, Marketing: 2, Sales: 3, Office Management: 1
