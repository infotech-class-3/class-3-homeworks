
// nokta1 = {x: 1, y: 2}
// nokta2 = {x: 4, y: 2}
// nokta3 = {x: 5, y: 6}
​
​
function Nokta(x, y){
    this.x = x;
    this.y = y;
}
​
​
function Ucgen(nokta1, nokta2, nokta3){
​
    if ((nokta1.x == nokta2.x) && (nokta2.x == nokta3.x)){
        console.log('boyle ucgen olmaz')
    
    }
​                                                              
    if ((nokta1.y == nokta2.y) && (nokta2.y == nokta3.y)){
        console.log('boyle ucgen olmaz')
    }
​
    // this.nokta1 = nokta1
    // this.nokta2 = nokta2
    // this.nokta3 = nokta3
    
    // this.a = Math.sqrt(Math.pow((this.nokta2.x - this.nokta1.x), 2) + Math.pow((this.nokta2.y - this.nokta1.y), 2))
    // this.b = Math.sqrt(Math.pow((this.nokta3.x - this.nokta1.x), 2) + Math.pow((this.nokta3.y - this.nokta1.y), 2))
    // this.c = Math.sqrt(Math.pow((this.nokta2.x - this.nokta3.x), 2) + Math.pow((this.nokta2.y - this.nokta3.y), 2))
    
    a = Math.sqrt(Math.pow((nokta2.x - nokta1.x), 2) + Math.pow((nokta2.y - nokta1.y), 2))
    b = Math.sqrt(Math.pow((nokta3.x - nokta1.x), 2) + Math.pow((nokta3.y - nokta1.y), 2))
    c = Math.sqrt(Math.pow((nokta2.x - nokta3.x), 2) + Math.pow((nokta2.y - nokta3.y), 2))
​
    this.cevreHesapla = function(){       
       return a+b+c
    }
​
    this.alanHesapla = function(){
        u = this.cevreHesapla() / 2
        alan = Math.sqrt(u*(u-a)*(u-b)*(u-c))
        return alan
    }
​
}
​
​
​
nokta_1 = new Nokta(0,0)
nokta_2 = new Nokta(0,3)
nokta_3 = new Nokta(4,3)
​
const yeniUcgen = new Ucgen(nokta_1, nokta_2, nokta_3)
​