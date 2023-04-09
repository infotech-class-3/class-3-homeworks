var baslik =document.createElement('h1')
baslik.textContent='Custom Fields'
document.body.appendChild(baslik)

//düzenleyebilmek için tablo ekledim
 var tablo = document.createElement('table')
// 
document.body.appendChild(tablo)
var td = document.createElement('td')
var td2 = document.createElement('td')
 tablo.appendChild(td2)
 tablo.appendChild(td)
//formun baslığı
var tfield =document.createElement('p')
tfield.textContent='Field Name:  '
td2.appendChild(tfield)
//form ekleme
var form = document.createElement('form')
td.appendChild(form)
var input =document.createElement('input')
input.type='text'
input.placeholder='alan ekle'
form.appendChild(input)
//buton ekleme
const submit = document.createElement('button')
submit.textContent='Create Field'
submit.className='btn btn-primary btn-sm '
form.appendChild(submit)



//2. Form Alanı

//buton-add values
var submit_alan = document.createElement('button')
submit_alan.textContent='Add Values'
submit_alan.className= 'btn btn-primary btn-sm'

var form_alan = document.createElement('form')
document.body.appendChild(form_alan)

//3. alan için tablo oluşturma
var tablo2=document.createElement('table')
tablo2.className ='table table-bordered '
document.body.appendChild(tablo2)
var tr =document.createElement('tr')
tablo2.appendChild(tr)
var sayac=0;
var dizi=[];
var dizi_input=[];
// create field- buton metodu----------------------------------
form.addEventListener('submit', function(frm){
frm.preventDefault()
var input_alan = document.createElement('input')
input_alan.type='text'
input_alan.placeholder=input.value
form_alan.appendChild(input_alan)
dizi_input.push(input_alan)
console.log("dizi_input: "+dizi_input);
var baslik=document.createElement('th')
baslik.textContent=input.value
tablo2.appendChild(baslik)

dizi[sayac]=dizi_input[sayac];
sayac++
console.log(sayac);
console.log("dizi:"+dizi[sayac-1]);
})
form_alan.appendChild(submit_alan)
// add values-buton metodu-------------------------------
form_alan.addEventListener('submit', function(frm){
    frm.preventDefault()
   
    var satir =document.createElement('tr')
    tablo2.appendChild(satir)
    for (let index = 0; index < sayac; index++) {        
        var stun = document.createElement('td')        
        stun.textContent=dizi[index].value
        satir.appendChild(stun)
        
    }
    //delete butonu metodu
    var sil =document.createElement('button')
    sil.textContent='Delete'
    sil.className= 'btn btn-danger btn-sm'
satir.appendChild(sil)
     sil.addEventListener('click', function(event){
        event.target.parentNode.remove()
        
        
        })
    })

