function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const input = document.getElementById("searchField");
      let inputText = input.value.toLowerCase();

      let tableElements = Array.from(document.querySelectorAll("tbody tr"));
      tableElements.forEach(element => {
         let text = element.textContent.toLowerCase();
         if (text.includes(inputText)) {
            element.classList.add("select");
         } else {
            element.classList.remove("select");

         }
      });
   }
}