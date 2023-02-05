function hesapla(sayi1,sayi2,islem){
switch (islem) {
    case "topla":
        var toplama = sayi1 + sayi2
        console.log(toplama)
        
        break;
    case "cikar":
        var cikarma = sayi1 - sayi2
        console.log(cikarma)
            
        break;
        case "carp":
            var carpma = sayi1 * sayi2
            console.log(carpma)
            
            break;
        case "bölme":
            var bölme = sayi1 / sayi2
            console.log(bölme)
                
            break;    
    default:
        break;
}
}
hesapla(3,2,"cikar")