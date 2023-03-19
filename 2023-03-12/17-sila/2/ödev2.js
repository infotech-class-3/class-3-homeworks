class Kronometre{
    basla(){
        const x = new Date().getSeconds()
        return x
    }
    dur(){
        const x = new Date().getSeconds()
        return x
    }  
    sonuc(){
        return this.basla()-this.dur()
    }
}
const timer= new Kronometre()
timer.basla()
timer.dur()
timer.sonuc()