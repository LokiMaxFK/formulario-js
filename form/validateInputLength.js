// validateInputLength
import { setDataValue } from "./setDataValue.js";

export function validateInputLength(input, minimumLength = 6){
    let inputLength = input?.value.trim().length ?? 0;
    let nameInput = input?.dataset.text;
    let parentLabel = input?.closest(".form__label");

    if(inputLength >= minimumLength){
        setDataValue(parentLabel, "message");
        setDataValue(parentLabel, "status", "success");

        return true;
    }else{
        let messageUser = `El ${nameInput} necesita mínimo ${minimumLength} caracteres para ser validado`
        setDataValue(parentLabel, "message", messageUser);
        setDataValue(parentLabel, "status", "error");

        return false;
    }
}