let hexInput = document.getElementById("hexInput");
let inputColor = document.getElementById("inputColor");
//Create a keyup event handler for hexInput
hexInput.addEventListener("keyup", () => {
    const hex = hexInput.value;
    //Check if hex color is valid
    if (!isValidHex(hex)) return;

    const strippedHex = hex.replace("#", "");
    //If hex color is valid, update the background color of inputColor
    inputColor.style.backgroundColor = "#" + strippedHex;
});

// frunction to check if hex code is a valid hex code
const isValidHex = (hex) => {
    if (!hex) return false;
    // fromve the "#" form the hex code
    const strippedHex = hex.replace("#", "");
    return strippedHex.length === 6 || strippedHex.length === 3;
};
