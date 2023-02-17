var zahl1= parseFloat(prompt("Bitte geben Sie erste Zahl ein"));
if(isNaN(zahl1)) 
{
alert("!Fehler : Bitte geben Sie erste Zahl ein")

}
var zahl2= parseFloat(prompt("Bitte geben Sie zweite Zahl ein"));
if(isNaN(zahl2)) 
{
alert("!Fehler : Bitte geben Sie zweite Zahl ein")
}

var opr = prompt ("Bitte geben Sie eine opr (+, -, *, /)");

switch (opr) {
    case ("+") : 
        alert(zahl1+zahl2);
    break;  
    
    case ("-") : 
        alert(zahl1-zahl2);
    break;     
    
    case("*") : 
        alert(zahl1*zahl2);
    break;      
    
    case("/") : 
        if (!zahl2==0) {
        alert(zahl1/zahl2);
    }
    else 
    alert("keine ergebnis");
        break;    
    
    default :
    alert("fehler")
}

