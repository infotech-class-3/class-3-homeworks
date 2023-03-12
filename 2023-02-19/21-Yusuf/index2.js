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

// #1 - the average income of all the people in the array
peopleTotalSalary = people.reduce((totalSalary, person) => {return Number(totalSalary) + Number(person.salary)}, 0);
// console.log(peopleTotalSalary);

averageSalary = peopleTotalSalary / people.length;
// console.log(Math.ceil(averageSalary));

// #2 - the people over 30 at the moment
var d = new Date().getFullYear();

peopleAge = people.map((person) => {
    
    return {
        ...person,
        age:d - person.DOB.substring(6)
    }
});
// console.log(peopleAge);

peopleOver30 = peopleAge.filter((person) =>  person.age > 30);
// console.log(peopleOver30);

// #3 - the list of people's full name
peopleName = people.map((person) => {return { fullname: person.firstName + ' ' + person.lastName}});
console.log(peopleName);

// #4 - the list of people in the array, sorted from smallest to largest
// console.log(people.sort((a, b) => a.firstName - b.firstName));

// #5 - how many people are in each depatment? 
peopleDepartment = people.reduce((department, person) => {
    (department[person.department] ? department[person.department]++ : department[person.department] = 1);
    return department;
}, {});
// console.log(peopleDepartment);