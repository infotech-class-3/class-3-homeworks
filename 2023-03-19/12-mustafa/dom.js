function createField () {
    const fieldNameInput = document.getElementById(`field-name`);
    const fieldName = fieldNameInput.value.trim();

    if (fieldName !== ""){

   const newFieldInput = document.createElement(`input`)
   newFieldInput.name = fieldName
   newFieldInput.type = `text`
   newFieldInput.placeholder = fieldName
   newFieldInput.className =`data-input`

   const addValuesForm = document.getElementById(`add-values-form`)
//    addValuesForm.appendChild(newFieldInput)
addValuesForm.insertBefore(newFieldInput, addValuesForm.lastChild.previousSibling)

   const dataTable = document.getElementById(`data-table`)
   const headerRow =dataTable.querySelector("thead tr")

   const newHeaderCell = document.createElement(`th`)
   newHeaderCell.textContent = fieldName
   headerRow.appendChild(newHeaderCell)
    }
}

const createFieldButton = document.getElementById(`create-field`)
createFieldButton.addEventListener(`click`, createField)

const addValuesForm = document.getElementById(`add-values-form`)

addValuesForm.addEventListener(`submit`, function(event){
    event.preventDefault()
   
    const newRow =document.createElement(`tr`)
    elements = addValuesForm.querySelectorAll(`.data-input`)
     
    
    elements.forEach(e => {
        const newCell = document.createElement(`td`)
        newCell.textContent = e.value
        newRow.appendChild(newCell)
     });

     const deleteButtonCell = document.createElement(`td`)

     const deleteButton = document.createElement(`button`)
     deleteButton.className = `btn btn-danger`
     deleteButton.textContent = `Delete`

     deleteButton.addEventListener(`clik`, function(event){
       event.target.parentNode.parentNode.remove()
     })

     deleteButtonCell.appendChild(deleteButton)
     newRow.appendChild(deleteButtonCell)

     const dataTable = document.getElementById(`data-table`)
   const bodyRow =dataTable.querySelector("tbody")

     bodyRow.appendChild(newRow)

})