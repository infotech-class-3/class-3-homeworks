function Kronometre() {
  let startTime = 0;
  let endTime = 0;
  let duration = 0;
  let isRunning = false;

  this.basla = function () {
    if (isRunning) throw new Error("zaten çalışıyor...");
    isRunning = true;
    startTime = new Date();
  };

  this.dur = function () {
    if (!isRunning) throw new Error("durması için çalışması gerekli...");

    isRunning = false;
    endTime = new Date();

    duration = (endTime.getTime() - startTime.getTime()) / 1000;
  };

  this.sıfırla = function () {
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

const endKronometre = new Kronometre();
