function validate() {
    document.querySelector("#submit").type = "button";
    document.querySelector("#company").addEventListener("change", (e) => {
        console.log(e.target);
        if (document.querySelector("#company").checked) {
            document.querySelector("#companyInfo").style.display = "block";
        } else {
            document.querySelector("#companyInfo").style.display = "none";
        }
    });

    document.querySelector("#submit").addEventListener("click", (e) => {
        let validOut = [];
        let userName = document.querySelector("#username");
        let email = document.querySelector("#email");
        let passWord = document.querySelector("#password");
        let confirmPass = document.querySelector("#confirm-password");
        let checkBox = document.querySelector("#company");
        let userTest = /^[A-Za-z0-9]{3,20}$/;
        let emailTest = /^[^@.]+@[^@]*\.[^@]*$/;
        let passTest = /^[\w]{5,15}$/;

        //console.log(checkBox.checked);

        if (userTest.exec(userName.value) === null) {
            userName.style.borderColor = "red";
            validOut.push(false);
        } else {
            userName.style.borderColor = "";
            validOut.push(true);
        }

        if (emailTest.exec(email.value) === null) {
            email.style.borderColor = "red";
            validOut.push(false);
        } else {
            email.style.borderColor = "";
            validOut.push(true);
        }

        if (
            passWord.value === confirmPass.value &&
            passTest.exec(confirmPass.value) != null &&
            passTest.exec(passWord.value) != null
        ) {
            confirmPass.style.borderColor = "";
            passWord.style.borderColor = "";
            validOut.push(true);
        } else {
            confirmPass.style.borderColor = "red";
            passWord.style.borderColor = "red";
            validOut.push(false);
        }

        if (checkBox.checked) {
            let company = document.querySelector("#companyNumber");
            if (company.value < 1000 || company.value > 9999) {
                company.style.borderColor = "red";
                validOut.push(false);
            } else {
                company.style.borderColor = "";
                validOut.push(true);
            }
        }

        if (!validOut.includes(false)) {
            document.querySelector("#valid").style.display = "block";
        } else {
            document.querySelector("#valid").style.display = "none";
        }
    });
}

/* function validate() {
    const usernameRegex = /(^[A-Za-z0-9]{3,20}$)/;
    const passwordRegex = /(^[\w]{5,15}$)/;
    const emailRegex = /^[^@.]+@[^@]*\.[^@]*$/;
    // const emailRegex = /(^[\w]+@[\w]+\.[\w]+$)/; - not completly valid regex

    let isValidInput = true;
    let isChecked = false;

    const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", (e) => {
        e.preventDefault();
        const usernameField = document.getElementById("username");

        if (!usernameRegex.test(usernameField.value)) {
            isValidInput = false;
            usernameField.style.borderColor = "red";
        } else {
            usernameField.style.borderColor = "";;
        }

        const passwordField = document.getElementById("password");
        const confPasswordField = document.getElementById("confirm-password");

        let passwordRed = false;
        if (!passwordRegex.test(passwordField.value)) {
            isValidInput = false;
            passwordRed = true;
            passwordField.style.borderColor = "red";
            confPasswordField.style.borderColor = "red";
        } else {
            passwordField.style.borderColor = "";;
            confPasswordField.style.borderColor = "";;
        }

        if (passwordField.value != confPasswordField.value) {
            isValidInput = false;
            confPasswordField.style.borderColor = "red";
        } else {
            if (!passwordRed) {
                confPasswordField.style.borderColor = "";;
            }
        }
        const emailField = document.getElementById("email");
        if (!emailRegex.test(emailField.value)) {
            isValidInput = false;
            emailField.style.borderColor = "red";
        } else {
            emailField.style.borderColor = "";;
        }
        const validDiv = document.getElementById("valid");
        if (isValidInput) {
            validDiv.style.display = "block";
        } else {
            validDiv.style.display = "none";
        }
        if (isChecked) {
            const companyNumber = document.getElementById("companyNumber");
            if (Number(companyNumber.value) < 1000 || Number(companyNumber.value) > 9999) {
                companyNumber.style.borderColor = "red";
            } else {
                companyNumber.style.borderColor = "";;
            }
        }
    });
    document.getElementById("company").addEventListener("change", e => {

        const companyField = document.getElementById("companyInfo");
        if (e.target.checked) {
            isChecked = true;
            companyField.style.display = "block";
        } else {
            isChecked = false;
            companyField.style.borderColor = "";;
        }
    });
}
*/