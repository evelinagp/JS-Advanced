function sumTable() {
    //select first table
    const rows = document.querySelectorAll('table tr');
    let sum = 0;

    //select only rows, containing values
    //repeat for every row
    //find last cell
    //add cell value to sum

    for (let index = 1; index < rows.length - 1; index++) {
        const cell = rows[index].lastElementChild;
        sum += Number(cell.textContent);
    }
    //select element with id "sum" and set its value
    document.getElementById('sum').textContent = sum;
}