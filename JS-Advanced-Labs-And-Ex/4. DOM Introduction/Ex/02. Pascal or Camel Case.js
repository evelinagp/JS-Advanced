function solve() {
  const text = document.getElementById('text').value;
  const naming = document.getElementById('naming-convention').value;
  const resultContainer = document.getElementById('result');

  const splitted = text.split(" ");

  let resultString = "";
  if (naming == "Pascal Case") {
    for (let index = 0; index < splitted.length; index++) {
      resultString += splitted[index][0].toUpperCase() + splitted[index].slice(1, splitted[index].length).toLowerCase();
    }
    resultContainer.textContent = resultString;
  } else if (naming == "Camel Case") {
    resultString += splitted[0][0].toLowerCase() + splitted[0].slice(1, splitted[0].length).toLowerCase();
    for (let index = 1; index < splitted.length; index++) {
      resultString += splitted[index][0].toUpperCase() + splitted[index].slice(1, splitted[index].length).toLowerCase();
    }
    resultContainer.textContent = resultString;
  } else {
    resultContainer.textContent = "Error!";
  }
}