/* # Kronometre yapimi

## const timer = new Kronometre()

### timer.sonuc // 0 sn

### timer.sonuc = 1000

### timer.sonuc // 0 sn

### timer.basla()

### timer.basla() // hata verir 'zaten calisiyor'

### timer.dur()

### timer.dur() // hata verir 'calismiyorki dursun :)'

### timer.sonuc // 21.234 sn

# Kronometre {basla: ƒ, dur: ƒ, sifirla: ƒ}
 */

function Kronometre() {

    let startTime = 0;
    let endTime = 0;
    let duration = 0;
    let isRunning = false;

    this.basla = function () { 

        if(isRunning) throw new Error("Halihazirda calisyor...");
        isRunning = true;
        startTime = new Date();

    }

    this.dur = function () {

        if(!isRunning) throw new Error("Zaten durdurulmus...");

        isRunning = false;
        endTime = new Date();

        duration = (endTime.getTime() - startTime.getTime())/1000;
    }
    this.sifirla = function () {
        startTime = 0;
        endTime = 0;
        duration = 0;
        isRunning = false;
    }

    Object.defineProperty(this, "sonuc", {

        get: function () {
        return duration + "sn"
        }
    });
}

const kronimetre = new Kronometre();