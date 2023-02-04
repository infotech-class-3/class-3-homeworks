function hesapla(s1, s2, islem) {

        if(isNaN(s1) || isNaN(s2)){
            console.log("islem");
            return
        }    
    
    var sonuc = {
        dogru: "", 
        yanlis: "",
    };
    
    
         
        var isaret = ["+", "-", "*", "/"]
    
        for(let i=0; i<isaret.length; i++){
            if(islem === isaret[i]){
                switch (islem) {
                    case "+":
                        console.log("topla:" + (sonuc.dogru = s1 + s2));
                    break;
                    case "-":
                        console.log("çıkar:" + (sonuc.dogru = s1 - s2));
                    break;
                    case "*":
                        console.log("çarp:" + (sonuc.dogru = s1 * s2));
                    break;
                    case "/":
                        if(s2 === 0 ){
                            console.log(sonuc.hata = "sifirla bölme islemi yapilamaz")
                            return
                        }
                        
                        console.log("böl:" + (sonuc.dogru = s1 / s2));
                    break;
                    
                }
                return
            }
    
    
        }
        console.log(sonuc.hata = "Gecersiz İslem...")
     
    }
    
    
    

    