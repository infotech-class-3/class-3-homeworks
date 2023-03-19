/* Callback + promise */
//Otobüs-yolcu alma-bilet kesme
// -> alert yolcu için
// -> console şoför için
// -> 6 ve 23. satırlardaki boolean değişkenleri kontrol edilebilir
const newPersonCameIntoBus = true;
const yolcuBinisi=() =>{
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{ if (newPersonCameIntoBus) {
            resolve("Durakta Yolcu Var, Kapıları Açın")
        } else {
            reject("Durakta Yolcu Yok, Devam Ediniz")
        }},1500)
    })
}
const yolIzni=()=>{
   setTimeout(()=>{ if (newPersonCameIntoBus && !newPersonShowedTicket) {
        console.log("Yolcu için yeni bilet kesiniz");
    } else{
        console.log("Yola Devam Ediniz");
    }},4300)
}
const newPersonShowedTicket = false
const geçişIzni=(callback)=>{
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if (newPersonShowedTicket) {
            resolve("Bilet okundu, yerinize oturunuz")
        } else {
            console.error("Bilet okunamadı, bekleyiniz");
            reject("Şoförden yeni bilet alınız")
        }
        callback;
    },1300)
})}
yolcuBinisi()
    .then(
        (a)=>{console.log(a)
       geçişIzni(yolIzni()).then((a)=>alert(a))
        .catch((b)=> alert(b))
        })
        .catch((b)=> console.log(b));