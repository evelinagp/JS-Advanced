function addItem() {
    //•	Your function should take the values of newItemText and newItemValue.
    let newItemText = document.getElementById('newItemText');
    let newItemValue = document.getElementById('newItemValue');

    //After that you should create a new option element 
    let select = document.getElementById('menu');
    let option = document.createElement('option');

    //and set its textContent and its value to the newly taken ones.
    option.textContent = newItemText.value
    option.value = newItemValue.value;

    //	Once you have done all of that, you should append the newly created option
    // as a child to the select item with id "menu".
    select.appendChild(option);

    //	Finally, you should clear the value of the two input fields.
    newItemText.value = '';
    newItemValue.value = '';

}