function creatField() {
  const filedNameInput = document.getElementById("field-name");

  const filedName = filedNameInput.value.trim();

  

  if (filedName !== "") {
    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.name = filedName;
    newInput.placeholder = filedName;
    newInput.className = "data-input";

    const addValuesForm = document.getElementById("add-values-form");
    addValuesForm.insertBefore(newInput, addValuesForm.querySelector("button"))

    const dataTable = document.getElementById("data-table");
    const headerRow = dataTable.querySelector("thead tr");

    newHeaderCell = document.createElement("th");
    newHeaderCell.textContent = filedName;
    headerRow.appendChild(newHeaderCell);
  }
}

const creatFieldButton = document.getElementById("create-field");

creatFieldButton.addEventListener("click", creatField); 

// creatfield a parantez konulmamasının sebebi
// eğer parantez konulursa tek işlem yapar
// parantez koyulmazsa her işlem istendiğinde tekrar tekrar kullanılır

const addValuesForm = document.getElementById("add-values-form");
addValuesForm.addEventListener("submit", function (event) {
  event.preventDefault();
  //yukarıda olusturdugumz forma yönlendirmeyi engelledik

  const newRow = document.createElement("tr");

  //yeni bir element olarak tr olusturdk

  elements = addValuesForm.querySelectorAll(".data-input");

  //verileri tasıyan inputları query ile bulup onlara yukarıda yeni bir class verdik

  elements.forEach((element) => {
    const newCell = document.createElement("td");
    newCell.textContent = element.value;
    newRow.appendChild(newCell);
  });

  //forEach ile input sayısı kadar td oluşturma komuutu verdik

  //td leri ise tbody nin içine appendchild yaptık...


  const deleteButtonCell = document.createElement("td")

  const deleteButton = document.createElement("button")
  deleteButton.className = "btn btn-danger"
  deleteButton.textContent = "Delete"


  deleteButton.addEventListener("click", function () {
    deleteButton.parentNode.parentNode.remove()
    
  })


  deleteButtonCell.appendChild(deleteButton)
  newRow.appendChild(deleteButtonCell)


  const dataTable = document.getElementById("data-table");
  const bodyRow = dataTable.querySelector("tbody");
  bodyRow.appendChild(newRow);
});
