// setDataValue.js
export function setDataValue(element, attribute ,message = ""){
    element.dataset[attribute] = message;
}