
const body = document.querySelector('body');


const h1 = document.createElement('h1');
h1.textContent = 'Custom Alanlar';
body.appendChild(h1);

const customForm = document.createElement('form');
customForm.id = 'custom-form';
body.appendChild(customForm);

const customNameLabel = document.createElement('label');
customNameLabel.textContent = 'Custom Alan Adı:';
customNameLabel.setAttribute('for', 'custom-name');
customForm.appendChild(customNameLabel);

const customNameInput = document.createElement('input');
customNameInput.type = 'text';
customNameInput.id = 'custom-name';
customForm.appendChild(customNameInput);

const addCustomButton = document.createElement('button');
addCustomButton.type = 'button';
addCustomButton.id = 'add-custom-';
addCustomButton.textContent = 'Ekle';
addCustomButton.className = 'btn btn-danger';
customForm.appendChild(addCustomButton);



const valueForm = document.createElement('form');
valueForm.id = 'value-form';
body.appendChild(valueForm);

const customInput = document.createElement('input');
customInput.type = 'text';
customInput.name = 'custom-';
valueForm.appendChild(customInput);

const addValueButton = document.createElement('button');
addValueButton.type = 'submit';
addValueButton.textContent = 'Değer Ekle';
valueForm.appendChild(addValueButton);


const valueTable = document.createElement('table');
valueTable.id = 'value-table';
body.appendChild(valueTable);

const tableHeaderRow = document.createElement('tr');
tableHeaderRow.id = 'table-header-row';
valueTable.appendChild(tableHeaderRow);

const customHeader = document.createElement('th');
customHeader.textContent = 'Custom Alan Adı';
tableHeaderRow.appendChild(customHeader);


const deleteHeader = document.createElement('th');
deleteHeader.textContent = 'Sil';
tableHeaderRow.appendChild(deleteHeader);


const tableBody = document.createElement('tbody');
tableBody.id = 'table-body';
valueTable.appendChild(tableBody);
// buraya kadar  normalde html ile yazacagimiz kodlar
//interaktif tablo icin gerekli kodlar
addCustomButton.addEventListener("click", () => {
	const customNameValue = customNameInput.value;
	if (customNameValue) {
	  const input = document.createElement("input");
	  input.type = "text";
	  input.name = customNameValue;
	  input.placeholder = customNameValue;
	  valueForm.insertBefore(input, valueForm.lastChild);
      
	  const th = document.createElement("th");
	  th.textContent = customNameValue;
	  tableHeaderRow.insertBefore(th, tableHeaderRow.lastChild);
      
	  customNameInput.value = "";
	}
      });
      
      const addValue = (e) => {
	e.preventDefault();
	const row = document.createElement("tr");
	const input = document.querySelectorAll("input[type='text']");
	for (let i = 0; i < input.length; i++) {
	  const td = document.createElement("td");
	  td.textContent = input[i].value;
	  row.appendChild(td);
	}
      
	const deleteButton = document.createElement("button");
	deleteButton.type = "button";
	deleteButton.textContent = "Sil";
	deleteButton.className = "btn btn-primary"
	deleteButton.addEventListener("click", () => {
	  row.remove();
	});
      
	const deleteCell = document.createElement("td");
	deleteCell.appendChild(deleteButton);
	row.appendChild(deleteCell);
      
	tableBody.appendChild(row);
	valueForm.reset();
      };
      
      valueForm.addEventListener("submit", addValue);
      