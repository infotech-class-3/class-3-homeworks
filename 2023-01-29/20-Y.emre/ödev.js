function hesapla(x, y, islem) {

    if(isNaN(x) || isNaN(y)){
        console.log("Sayı Giriniz...");
        return
    }    

var sonuc = {
    dogru: "", 
    hata: "",
};


     
    var isaret = ["+", "-", "*", "/"]

    for(let i=0; i<isaret.length; i++){
        if(islem === isaret[i]){
            switch (islem) {
                case "+":
                    console.log("topla:" + (sonuc.dogru = x + y));
                break;
                case "-":
                    console.log("çıkar:" + (sonuc.dogru = x - y));
                break;
                case "*":
                    console.log("çarp:" + (sonuc.dogru = x * y));
                break;
                case "/":
                    if(y === 0 ){
                        console.log(sonuc.hata = "Sıfır Kullanılamaz...")
                        return
                    }
                    
                    console.log("böl:" + (sonuc.dogru = x / y));
                break;
                
            }
            return
        }


    }
    console.log(sonuc.hata = "Gecersiz İslem...")

    



    


}



hesapla(5, 3,"+")