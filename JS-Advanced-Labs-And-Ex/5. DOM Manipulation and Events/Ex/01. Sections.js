function create(words) {
   //create <div>
   //create <p>
   //set <p> content
   //configure <p> to be hidden (display: none)
   //add <p> to <div>
   //add to <div> to page
   //configure <div> eventListener
   const content = document.getElementById('content');

   for (const word of words) {

      const div = document.createElement('div');
      const paragraph = document.createElement('p');
      paragraph.textContent = word; /*'Test Content'*/
      paragraph.style.display = 'none';
      div.appendChild(paragraph);

      div.addEventListener('click', reveal);
      content.appendChild(div);

      function reveal(e) {
        // e.currentTarget.childre[0].style.display = '';
         e.target.querySelector('p').style.display = '';
      }
   }
}