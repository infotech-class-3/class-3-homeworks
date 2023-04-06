//console.log("hello");

const baslik_div = document.createElement("div");
document.body.appendChild(baslik_div);

const baslik_h1 = document.createElement("h1");
baslik_h1.style.color = "red";
baslik_h1.innerText = "Custom fields";
baslik_div.appendChild(baslik_h1);

var form = document.createElement("form");
baslik_div.appendChild(form);
