// App.js
import { setDataValue } from "./form/setDataValue.js";
import { validateEmail } from "./form/validateEmail.js";
import { validateInputLength } from "./form/validateInputLength.js";

const formContact = document.querySelector(".form");
const inputEmail = document.querySelector("#email");
const inputName = document.querySelector("#name");
const inputMessage = document.querySelector("#message");
const formDialog = document.querySelector(".form__dialog");
const closeDigalogBtn = document.querySelector(".form__btn--close");
const labels = Array.from(document.querySelectorAll("[data-status]"));



formContact.addEventListener("submit", handleSubmitForm);

function handleSubmitForm(e){
    e.preventDefault();

    let statusName = validateInputLength(inputName, 6);
    let statusMessage = validateInputLength(inputMessage, 6);
    let statusEmail = validateEmail(inputEmail);

    if(
        statusName &&
        statusMessage &&
        statusEmail
    ){

        labels.forEach(label =>{
            setDataValue(label, "status");
        })
        formContact.reset();
        formDialog.showModal();

    }
}

closeDigalogBtn.addEventListener("click", function(e){
    formDialog.close();
});