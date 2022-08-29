function addItem() {

    const items = document.getElementById('items');
    const newItem = document.getElementById('newItemText');

    const newLiEl = document.createElement('li');
    newLiEl.textContent = newItem.value;

    const button = document.createElement('a');
    button.href = '#';
    button.textContent = '[Delete]';
    button.addEventListener('click', onDelete)

    newLiEl.appendChild(button);

    items.appendChild(newLiEl);

    newItem.value = '';

    function onDelete(e) {
        const parent = e.target.parentNode;
        parent.remove();
    }
}