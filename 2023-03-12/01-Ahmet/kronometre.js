class Kronometre {

    constructor () {
        this.beginZeit = null;
        this.stopZeit = null;
        this.result =0;
        this.istArbeit = false;
    }

    begin () {
        if(this.istArbeit)
        console.log("schon hat beginnen");
        this.istArbeit=true;
        this.beginZeit = new Date();
    }

    stop () {
        if(!this.istArbeit)
        console.log("schon hat stoppen");
        this.istArbeit=false;
        this.stopZeit = new Date();
        const diff = this.stopZeit - this.beginZeit;
        this.result += diff; 
    }

    nullmacht () { 
        this.beginZeit = null;
        this.stopZeit = null;
        this.result =0;
        this.istArbeit = false;
    }
}

const timer = new Kronometre();
console.log (timer.result)
timer.begin();
timer.stop();
console.log (timer.result)