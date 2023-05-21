function Kronometre(isim) {
    this.isim = isim;
    let baslamaZamani = 0;
    let bitisZamani = 0;
    let calisiyormu = false;
    let gecenSure = 0;
    
    this.sifirla = function (){
     baslamaZamani = 0;
     bitisZamani = 0;
     calisiyormu = false;
     gecenSure = 0;
    }
​
   this.basla = function () {
        if (calisiyormu) {
            console.warn('Zaten calisiyor')        
        } else {
            baslamaZamani = new Date()
            calisiyormu = true
        }
   }
​
   this.dur = function (){
        if (calisiyormu) {
            gecenSure = (new Date().getTime() - baslamaZamani.getTime() ) /1000
            calisiyormu = false
        } else {
            console.warn('Zaten calismiyor')
        }
   }
​
   // defineProperty GET ornegi
   Object.defineProperty(this, "sonuc", {
    get: function () { 
        return gecenSure
    }
   })
​
   Object.defineProperty(this, "lap", {
    get: function () { 
        if (calisiyormu) {
            return (new Date().getTime() - baslamaZamani.getTime() ) /1000
        } else {
            return 0
        }
    }
   }
   )
​
   
   
}
​
timer1 = new Kronometre('zamanlayici 1')
timer2 = new Kronometre('zamanlayici 2')                            