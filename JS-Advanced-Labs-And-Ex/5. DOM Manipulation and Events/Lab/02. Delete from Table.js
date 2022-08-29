function deleteByEmail() {

    const input = document.querySelector('input[type="text"]');
    let inputText = input.value;
    let table = document.querySelector("tbody");
    let result = document.getElementById("result");

    let tableElements = Array.from(document.querySelectorAll("tbody tr"));
    tableElements.forEach(element => {
        let text = element.textContent;
        if (text.includes(inputText)) {
            table.removeChild(element);
        }
    });
    const error = document.createElement('p');
    error.textContent = "Not found.";
    result.appendChild(error);

    input.value = "";
}