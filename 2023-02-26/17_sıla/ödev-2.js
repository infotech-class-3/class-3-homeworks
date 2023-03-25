/*  async-await */
// Kek Tarifi
// 5-6-7. satırlardaki boolean değerleri ile değişiklik yapılabilir
const malzemeler = ["şeker", "yumurta", "süt", "un", "kabartma tozu"]
const malzemelerEklendi_mi = true
const malzemelerÇırpıldı_mı = malzemelerEklendi_mi && false
const firinIsitildi_mi = true
const x=()=> { 
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{ if (!malzemelerEklendi_mi) {
              resolve("Malzemeleri Bir Kaba Ekleyiniz: " + malzemeler)
          } else {
              reject("Malzemeler Eklendi, Bir Sonraki Adıma Geçiniz")
          }},1700)
      })    
};

const y= ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{ if (!malzemelerÇırpıldı_mı) {
              resolve("Malzemeleri Bir Kabın İçinde Çırpınız")
          } else {
              reject("Malzemeler Çırpıldı, Bir Sonraki Adıma Geçiniz")
          }},1500)
      })};

const t= ()=>{
    return new Promise((resolve, reject)=>{setTimeout(()=>{ 
        if (!firinIsitildi_mi) {
            resolve("Fırını önceden ısıtınız")} else {
            reject("Fırın Isıtıldı, Bir Sonraki Adıma Geçiniz")}},1300)})};


async function z() {
    await x().then((a)=>console.log(a)).catch((a)=>console.log(a));
    await y().then((a)=>console.log(a)).catch((a)=>console.log(a));
    await t().then((a)=>console.log(a)).catch((a)=>console.log(a));
    setTimeout(()=>{console.log("180 derecede 40 dakika pişiriniz")},1000);
}
z();
