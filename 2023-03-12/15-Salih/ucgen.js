 
 function DvdPlayer(brand){
    this.marka = brand;
    const powerSupply = {
        input:"220V",
        outout:"5V",
    };

    this.play = function(){
        console.log(`dvd calisiyor giris voltaji ${powerSupply.input}`);
    };
    Object.defineProperty(this, "getPowerSupllyInfo",{
        get: function(){
            return powerSupply;
        },
        set: function(yeniDeger){
            if( !yeniDeger.input || !yeniDeger.outout){
                console.error("Hayirdir ne yapmaya calisiyorsun");
                return;
            }
        }
    });
 }

 const dvd = new DvdPlayer("sony");
//  dvd.play();
 dvd.getPowerSupllyInfo ="hekledim";