function Kronometre() {
    let startTime = 0;
    let endTime = 0;
  
    this.basla = function() {
      if (startTime !== 0) {
        throw new Error("Kronometre zaten başladı");
      }
      startTime = new Date();
    };
  
    this.dur = function() {
      if (startTime === 0) {
        throw new Error("Kronometre henüz başlamadı");
      }
      endTime = new Date();
    };
  
    Object.defineProperty(this, "sonuc", {
      get: function() {
        if (endTime === 0) {
          throw new Error("Kronometre henüz durdurulmadı");
        }
        return (endTime.getTime() - startTime.getTime()) / 1000 + " sn";
      }
    });
  }
  
  const kron = new Kronometre();

/* function Kronometre() {
  let startTime = 0;
  let endTime = 0;
  let duration = 0;
  let isRunning = false;

  this.basla = function () {
    if (isRunning) throw new Error("Zaten kronometre calisiyor...");

    isRunning = true;
    startTime = new Date();
  };

  this.dur = function () {
    if (!isRunning) throw new Error("Daha kronometre calismadi ki..."); //early error pattern

    isRunning = false;
    endTime = new Date();

    duration = (endTime.getTime() - startTime.getTime()) / 1000;
  };

  this.sifirla = function () {
    startTime = 0;
    endTime = 0;
    duration = 0;
    isRunning = false;
  };

  Object.defineProperty(this, "sonuc", {
    get: function () {
      return duration + "sn";
    },
  });
}

const kron = new Kronometre();
 */


  