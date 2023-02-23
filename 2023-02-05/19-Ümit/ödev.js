// frage 1-----------------------------
function check (str) {
    return Boolean (str[0]==str[str.length-1]); 
    }
    console.log(check("umita"));
    
    
    // frage 2-----------------------------
    function umgekehrt (str) {
        var neustr = "";
        for (i=str.length-1; i>=0;i--)
            neustr+=str[i];
        return neustr
        }  
        console.log(umgekehrt("umit"));
    
    // frage3-----------------------------
    function umgekehrtsetze (str) {
        return str.split(" ").reverse().join(" "); 
        }
        console.log(umgekehrtsetze("umit top at"));
    
    
    // frage 4-----------------------------
    var car_brands = ['BMW', 'Mercedes', 'Audi', 'Ford', 'Opel', 'Fiat', 'Volkswagen', 'Renault', 'Peugeot']
    var car_brands2 =['Citroen', 'Hyundai', 'Kia', 'Mazda', 'Suzuki', 'Toyota', 'Nissan', 'Honda', 'Mitsubishi'];
    
    let erstfünf = [];
    for (i=0; i<5; i++)
    {
        // erstfünf.push(car_brands[i]);
        erstfünf[i]= car_brands[i];
    }
    console.log(erstfünf);
    
    
    // frage 5-----------------------------
    console.log(car_brands.join(","));
    
    
    // frage 6-----------------------------
    let lestefünf = [];
    for (i=car_brands.length-5; i<car_brands.length; i++)
    {
        lestefünf.push(car_brands[i]);
        //lestefünf[i]= car_brands[i];
    }
    console.log(lestefünf);
    
    
    // frage 7-----------------------------
    console.log(car_brands[2]);
    
    
    // frage 8-----------------------------
    car_brands.splice(2, 1, 'Opel');
    car_brands.splice(4, 1, 'Audi'); 
    console.log(car_brands);
    
    
    // frage 9-----------------------------
    var zahlen= [1,2,3,3,4,5,5,6];
    var essiz = [...new Set(zahlen)];
    console.log(essiz);
    
    
    // frage 10-----------------------------
    var car = car_brands.concat(car_brands2);
    console.log(car);
    var car1 = [...car_brands,...car_brands2];
    console.log(car);
    
    
    // frage 11-----------------------------
    car_brands.splice(0, 3);
    console.log(car_brands);
    
    car_brands.slice(3, 8);
    console.log(car_brands);
    