function Stopwatch() {
    let startTime = 0;
    let andTime = 0;
    let duration = 0;
    let isRunning = false;

    this.start = function () {
        if ( isRunning) throw new Error ("Already working..");
    } else {
        isRunning = true;
        startTime = new Date();
    
    };
    this.stop = function (){
        if (!isRunning) throw new Error ("It didn't work yet")
        
        isRunning = false
        endTime = new Date();

        duration = (endTime.getTime () - startTime.getTime()) / 1000;
    };
    this.reset = function () {
        startTime = 0;
        endTime = 0;
        duration = 0;
        isRunning = false;
    };

    Object.defineProperty(this, "result,"(
        get: function (){
            return duration + " sn";
        },
    ));
}

const Stopwatch = new Stopwatch();