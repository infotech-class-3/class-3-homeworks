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
        const ortalamaMaas = people.reduce((accumulator, person) =>{
        return total = Math.floor((accumulator + Number(person.salary)) / people.length)
        }, 0);
        console.log(ortalamaMaas);
    
    
    
    // 2) Şu anda 30 yaşından büyük kişiler kimlerdir?
    const yas30Ustu = people.filter((person)=> (new Date().getFullYear() - new Date(person.DOB).getFullYear()) > 30);
    console.log(yas30Ustu);
    
    // 3) Kişilerin tam adının bir listesini alın (ad ve soyadı).
    const tamIsim = people.map((person)=>{
    return person.firstName + ' ' + person.lastName
    });
    console.log(tamIsim);

    
    
    
    // 4) Küçükten büyüğe doğru sıralanmış dizideki kişilerin bir listesini alın.
    const kücüktenBüyüge=people.sort((a,b)=> new Date(b.DOB)- new Date(a.DOB))
    console.log(kücüktenBüyüge);
    
    
    // 5) Her bölümde kaç kişi var? 
    const bolumMevcutKisiler = people.reduce((department, person) =>{
        if(department[person.department]){
            department[person.department]++;
        }else{department[person.department]=1;}
        return department;
    },{});
    console.log(bolumMevcutKisiler);
    
    