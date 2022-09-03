function solution() {

    let name = document.querySelector('.card input');
    const addBtn = document.querySelector('.card button');
    const cardLists = document.querySelectorAll(`.container section ul`)
    const giftsList = cardLists[0];
    const sentGiftsList = cardLists[1];
    const discardGiftsList = cardLists[2];

    addBtn.addEventListener("click", onclick);

    function onclick(event) {
        event.preventDefault();
        const productName = name.value.trim();
        if (productName == '') {
            return;
        }
        const liEl = e("li", `${productName}`, "gift");
        const sendButton = e("button", "Send", "sendButton");
        const discardButton = e("button", "Discard", "discardButton");

        liEl.appendChild(sendButton);
        liEl.appendChild(discardButton);
        giftsList.appendChild(liEl);


        let sortedList = Array.from(giftsList.querySelectorAll('li'));
        sortedList
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(li => giftsList.appendChild(li));

        name.value = "";

        sendButton.addEventListener('click', onSend);

        function onSend(ev) {
            ev.preventDefault();
            sentGiftsList.appendChild(liEl);
            liEl.removeChild(sendButton);
            liEl.removeChild(discardButton);

        }
        discardButton.addEventListener('click', onDiscard);

        function onDiscard(ev) {
            ev.preventDefault();
            discardGiftsList.appendChild(liEl);
            console.log(discardGiftsList);

            liEl.removeChild(sendButton);
            liEl.removeChild(discardButton);

        }

    }

    function e(type, content, className) {
        let element = document.createElement(type);

        if (type === "img") {
            element.src = content;
        } else {
            element.textContent = content;
        }

        if (className) {
            element.className = className;
        }

        return element;
    }
}