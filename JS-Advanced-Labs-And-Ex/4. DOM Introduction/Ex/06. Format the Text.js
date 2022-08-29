function solve() {
  const text = document.getElementById("input").value;
  const splittedText = text.split(".").filter((el) => el != "");
  const output = document.getElementById("output");

  for (let index = 0; index < splittedText.length; index += 3) {
    let arr = [];
    for (let y = 0; y < 3; y++) {
      if (splittedText[index + y]) {
        arr.push(splittedText[index + y]);
      }
    }
    let paragraph = arr.join(". ") + ".";
    output.innerHTML += `<p>${paragraph}</p>`;
  }
}
