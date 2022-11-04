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

//Create a function to convert Hex to RGB
const converetHexToRGB = (hex) => {
    if (!isValidHex) return null;

    let strippedHex = hex.replace("#", "");
    //this should work with 3 or 6 character hex values
    if (strippedHex.length === 3) {
        strippedHex =
            strippedHex[0] +
            strippedHex[0] +
            strippedHex[1] +
            strippedHex[1] +
            strippedHex[2] +
            strippedHex[2];
    }
    // convert a hex value to a decimal value
    const r = parseInt(strippedHex.substring(0, 2), 16);
    const g = parseInt(strippedHex.substring(2, 4), 16);
    const b = parseInt(strippedHex.substring(4, 6), 16);
    //should return an object with 3 properties - r,g, and b
    return { r, g, b };
};
//Test function with a few different use cases
//console.log(converetHexToRGB("ffe"));
