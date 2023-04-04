const valueInput = document.getElementById("valueInput");
const btnCreate = document.getElementById("btnCreate");
const myForm = document.getElementById("myform");

//CERATED BTNFILED
const btnAddFiled = document.createElement("button");

// CREATED TABLE

myTable = document.createElement("table");
myThead = document.createElement("thead");
myTr = document.createElement("tr");

var countInput = 0;
myForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (valueInput.value === "") {
    alert("Can not be empty Field Area");
    return;
  }
  countInput += 1;
  //ADDED INPUT FILEDS
  myFiledInput = document.createElement("input");
  myFields.appendChild(myFiledInput);

  myFiledInput.type = "text";
  myFiledInput.className = "form-control w-25";
  myFiledInput.placeholder = valueInput.value.toUpperCase();

  for (let i = 0; i < countInput; i++) {
    myFiledInput.id = i;
  }

  //myFiledInput.setAttribute("disabled", "")

  //ADDED BTN
  btnAddFiled.textContent = "ADD";
  btnAddFiled.className = "btn btn-outline-primary";
  myFields.appendChild(btnAddFiled);

  // TABLE TITLE
  myTable.className = "table table-bordered  my-5";
  showTable.appendChild(myTable);
  myTable.appendChild(myThead);

  myThead.appendChild(myTr);
  myTh = document.createElement("th");
  myTr.appendChild(myTh);
  myTh.innerText = valueInput.value.toUpperCase();

  // EMPTY valueInput
  valueInput.value = "";
});

// CREATE TABLE BODY
myTbody = document.createElement("tbody");
var emptyThCount = 0;

btnAddFiled.onclick = function () {
  myTable.appendChild(myTbody);
  myBodyTr = document.createElement("tr");
  myTbody.appendChild(myBodyTr);

  // Control empty add inputs
  for (let j = 0; j < countInput; j++) {
    var myFiledInputValueCheck = document.getElementById(j);
    if (myFiledInputValueCheck.value === "") {
      alert("all columns must be filled");
      return;
    }
  }

  for (let i = 0; i < countInput; i++) {
    var myFiledInputValue = document.getElementById(i);

    console.log(myFiledInputValue.value);

    myBodyTd = document.createElement("td");
    myBodyTr.appendChild(myBodyTd);
    myBodyTd.innerText = myFiledInputValue.value;
  }

  var deleteTd = document.createElement("td");
  myBodyTr.appendChild(deleteTd);

  //CREATE EMPTY TH

  if (emptyThCount === 0) {
    var emptyTh = document.createElement("th");
    myTr.appendChild(emptyTh);
    emptyThCount += 1;
  }

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "bnt btn-sm btn-danger";
  deleteTd.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", (event) => {
    console.log(event.target.parentNode.parentNode.remove());
  });

  // RESET ADD INPUTS
  for (let i = 0; i < countInput; i++) {
    const resetInput = document.getElementById(i);
    resetInput.value = "";
  }

  console.log("Add Butonuna tiklandi");
};

// btnCreate.addEventListener('click', function () {
//     console.log("Butona tiklandi ikinci yol")
// })
