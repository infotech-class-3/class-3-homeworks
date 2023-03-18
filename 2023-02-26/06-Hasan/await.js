var durum=true;
var sorgu=false;
function formDoldur(){
  
    var p=new Promise(function(resolve,reject){
        if(durum){
            resolve();
            sorgu=true;
        }
        else{reject("tüm boşluklar doldurulmalıdır");}
    });

  p.then()
  .catch((error)=>console.log(error))
  return p;
}
function kaydet(){
   if(sorgu)console.log("kayıt basarılı");
}
async function kayit(){
    await formDoldur();
    kaydet();


}
kayit();