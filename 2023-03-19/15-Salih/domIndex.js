function createField() {
    const fieldNameInput = document.getElementById("field-name");
    const fieldName = fieldNameInput.value.trim();
    if (fieldName !== "") {
      const newFieldInput = document.createElement("input");
      newFieldInput.type = "text";
      newFieldInput.name = fieldName;
      newFieldInput.placeholder = fieldName;
      newFieldInput.className = "data-input";

      const addValuesForm = document.getElementById("add-values-form");
      addValuesForm.insertBefore(
        newFieldInput,
        addValuesForm.querySelector("button")
      );

      const dataTable = document.getElementById("data-table");
      const headerRow = dataTable.querySelector("thead tr");

      const newHeaderCell = document.createElement("th");
      newHeaderCell.textContent = fieldName;
      headerRow.appendChild(newHeaderCell);

      fieldNameInput.value = "";
    }
  }

  const createFieldButton = document.getElementById("create-field");
  createFieldButton.addEventListener("click", createField);

  const addValuesForm = document.getElementById("add-values-form");

  addValuesForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const newRow = document.createElement("tr");
    elements = addValuesForm.querySelectorAll(".data-input");
    arrayData = {};
    elements.forEach((e) => {
      const newCell = document.createElement("td");
      newCell.textContent = e.value;
      newCell.addEventListener("click", function (event) {
        const newValue = prompt(
          "Enter new value: current value= " + event.target.textContent
        );
        if (newValue) event.target.textContent = newValue;
      });
      newRow.appendChild(newCell);
    });

    const deleteButtonCell = document.createElement("td");

    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger";
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function (event) {
      deleteButton.parentNode.parentNode.remove();
    });

    deleteButtonCell.appendChild(deleteButton);
    newRow.appendChild(deleteButtonCell);

    const dataTable = document.getElementById("data-table");
    const bodyRow = dataTable.querySelector("tbody");

    bodyRow.appendChild(newRow);

    addValuesForm.reset();
  });