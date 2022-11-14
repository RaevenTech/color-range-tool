const hexInput = document.getElementById("hexInput");
const inputColor = document.getElementById("inputColor");
const sliderText = document.getElementById("sliderText");
const slider = document.getElementById("slider");

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

// converst RGB to hex
const convertRGBToHex = (r, g, b) => {
    const firstPair = ("0" + r.toString(16)).slice(-2);
    const secondPair = ("0" + g.toString(16)).slice(-2);
    const thirdPair = ("0" + b.toString(16)).slice(-2);

    const hex = "#" + firstPair + secondPair + thirdPair;
    return hex;
};

// function to alter the color from value to percentage
const alterColor = (hex, percentage) => {
    const { r, g, b } = converetHexToRGB(hex);
    const amount = Math.floor((percentage / 100) * 255);

    const newR = increaseWithin0To255(r, amount);
    const newG = increaseWithin0To255(g, amount);
    const newB = increaseWithin0To255(b, amount);
    console.log({ newR, newG, newB });
    return convertRGBToHex(newR, newG, newB);
};

const increaseWithin0To255 = (hex, amount) => {
    const newHex = hex + amount;
    if (newHex > 255) return 255;
    if (newHex < 0) return 0;
    return newHex;
};

console.log(alterColor("fff", 10));

// add event listner for the range input
slider.addEventListener("input", () => {
    sliderText.textContent = slider.value + "%";
    //console.log(slider.value);
});
