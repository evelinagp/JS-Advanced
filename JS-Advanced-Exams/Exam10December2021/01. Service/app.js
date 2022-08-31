window.addEventListener('load', solve);

function solve() {

    let clientNameField = document.getElementById("client-name");
    let phoneField = document.getElementById("client-phone");
    let descriptionField = document.getElementById("description");
    let receivedOrders = document.getElementById("received-orders");
    let completedOrders = document.getElementById("completed-orders");
    let selectModule = document.querySelector("#right select");
    const sendBtn = document.querySelector("#right button");
    const clearBtn = document.querySelector("#completed-orders button");
    /* const submitBtn = document.getElementById("submitBTN");
     const editBtn = document.getElementById("editBTN");
     const continueBtn = document.getElementById("continueBTN");*/


    sendBtn.addEventListener("click", onSend);


    function onSend(event) {
        event.preventDefault();
        const clientName = clientNameField.value.trim();
        const phone = phoneField.value.trim();
        const description = descriptionField.value.trim();
        const type = selectModule.value.trim();
        //console.log(type);


        if (clientName == "" || phone == "" || description == ""
            /*|| type != 'Computer' ||
                       type != 'Phone'*/
        ) {
            return;
        }

        const divEl = e("div", "", "container");
        const productEl = e("h2", `Product type for repair: ${type}`);
        const nameAndPhoneEl = e("h3", `Client information: ${clientName}, ${phone}`);
        const descriptionEl = e("h4", `Description of the problem: ${description}`);
        const startBtn = e("button", "Start repair", "start-btn");
        const finishBtn = e("button", "Finish repair", "finish-btn");

        divEl.appendChild(productEl);
        divEl.appendChild(nameAndPhoneEl);
        divEl.appendChild(descriptionEl);
        divEl.appendChild(startBtn);
        divEl.appendChild(finishBtn);


        receivedOrders.appendChild(divEl);

        clientNameField.value = "";
        phoneField.value = "";
        descriptionField.value = "";


        startBtn.disabled = false;
        finishBtn.disabled = true;

        startBtn.addEventListener("click", onStart);

        function onStart(event) {
            event.preventDefault();
            startBtn.disabled = true;
            finishBtn.disabled = false;

        }
        finishBtn.addEventListener("click", onFinish);

        function onFinish(event) {
            event.preventDefault();
            divEl.removeChild(startBtn);
            divEl.removeChild(finishBtn);
            completedOrders.appendChild(divEl);

        }
        clearBtn.addEventListener("click", onClear)

        function onClear(event) {
            event.preventDefault();
            completedOrders.removeChild(divEl);

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