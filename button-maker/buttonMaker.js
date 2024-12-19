
let bgColorInput = document.getElementById("bgColorInput");
let fontColorInput = document.getElementById("fontColorInput");
let fontSizeInput = document.getElementById("fontSizeInput");
let fontWeightInput = document.getElementById("fontWeightInput");
let paddingInput = document.getElementById("paddingInput");
let borderRadiusInput = document.getElementById("borderRadiusInput");
let customButton = document.getElementById("customButton")
function onApplyProprties() {
    let bgColorValue = bgColorInput.value;
    let fontColorValue = fontColorInput.value;
    let fontSizeValue = fontSizeInput.value;
    let fontWeightValue = fontWeightInput.value;
    let paddingValue = paddingInput.value;
    let borderRadiusValue = borderRadiusInput.value;

    customButton.style.backgroundColor = bgColorValue;
    customButton.style.color = fontColorValue;
    customButton.style.fontSize = fontSizeValue;
    customButton.style.fontWeight = fontWeightValue;
    customButton.style.padding = paddingValue;
    customButton.style.borderRadius = borderRadiusValue;

}


