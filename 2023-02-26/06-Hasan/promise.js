 var giris=true;
 var p=new Promise(function(resolve,reject){
     if(giris){
         resolve("para çekme onaylandı");
     }
     else{reject("bakiye yetersiz!");}

 });
 var banknot=true;
 var p2=new Promise(function(resolve,reject){
     if(banknot){resolve("uygun banknot var");}
           else{reject("uygun banknot yok, tekrar deneyin");}
 });

 p2.then(function(miktar){
     console.log(miktar);
     p.then((miktar)=>console.log(miktar))
     .catch((error)=>console.log(error))
    
 }).catch(function (error) {
     console.log(error);
  
 });