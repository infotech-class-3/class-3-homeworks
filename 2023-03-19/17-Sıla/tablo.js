const baslık=document.createElement("h1")
baslık.innerText="Custom Fields"
document.body.appendChild(baslık)
/**Form-1**/
const form_1=document.createElement("form")
document.body.appendChild(form_1)

var label_1 = document.createElement("label")
label_1.innerText= "Field Name: "
form_1.appendChild(label_1)

var input_1 = document.createElement("input")
input_1.type= 'text'
form_1.appendChild(input_1)

var btn_1 = document.createElement("button")
btn_1.innerText="Create field"
btn_1.className='btn btn-primary'
form_1.appendChild(btn_1)

br_1= document.createElement('br')
document.body.appendChild(br_1)

hr_1= document.createElement("hr")
document.body.appendChild(hr_1)

br_1= document.createElement('br')
document.body.appendChild(br_1)

/**Form-2**/
const form_2=document.createElement("form")
document.body.appendChild(form_2)
form_2.className="grid-container"

var btn_2 = document.createElement("button")
btn_2.innerText="Add Values"
btn_2.className='btn btn-primary'
form_2.appendChild(btn_2)

br_1= document.createElement('br')
document.body.appendChild(br_1)

hr_1= document.createElement("hr")
document.body.appendChild(hr_1)

br_1= document.createElement('br')
document.body.appendChild(br_1)

// Tablo //
var tablo = document.createElement("table")
tablo.className="contanier container-fluid"
document.body.appendChild(tablo)
var tablo_baslık = document.createElement("thead")
tablo.appendChild(tablo_baslık)
var tr_1=document.createElement("tr")
tablo_baslık.appendChild(tr_1)
var tablo_govde = document.createElement("tbody")
tablo.appendChild(tablo_govde)
var tr_2=document.createElement("tr")
tablo_govde.appendChild(tr_2)


var silme= document.createElement("button")
    silme.innerText="Delete"
    silme.className='btn btn-danger'
    
                
btn_1.addEventListener("click", function (x) {
    x.preventDefault()
    var input_2 = document.createElement("input")
    input_2.type= 'text'
    form_2.appendChild(input_2)
    input_2.placeholder=input_1.value
    var th=document.createElement("th")
    tr_1.appendChild(th)
    th.innerText= input_2.placeholder
    
    var td=document.createElement("td")
    tr_2.appendChild(td)
            btn_2.addEventListener("click", function (x) {
                x.preventDefault()
                var th=document.createElement("th")
                tr_1.appendChild(th)
                th.innerText= ""
                td.innerText= input_2.value
                
                tr_2.appendChild(silme)
                silme.addEventListener("click", function (a) {
                    a.preventDefault()
                    a.target.parentNode.remove()
                // td_sil=document.createElement("td")
                // tr_2.appendChild(td_sil)
                // td_sil.appendChild(silme)
                })
            })
})

/**
 ?? sonradan gelen verilerin aşağıya yeni satır oluşturması. (benimkinde yanına geliyor)
 ?? 2. butonun sağda kalması lazım
 ?? tablonun css düzenlemesi
 */

