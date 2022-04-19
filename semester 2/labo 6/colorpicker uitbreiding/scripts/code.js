const setup = () => {
    changeColor();
    let sliders = document.getElementsByClassName("slider");
    for (let i=0;i<sliders.length;i++) {
        sliders[i].addEventListener("input", changeColor);
    }
}
const getColor = () => {
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;
    return "rgb( " + red + "," + green + "," + blue + ")";
}
const changeColor = () => {
    let colorsquares = document.getElementById("swatch")
    colorsquares.style.backgroundColor = getColor();
    document.getElementById("lblRed").innerHTML = document.getElementById("sldRed").value;
    document.getElementById("lblGreen").innerHTML = document.getElementById("sldGreen").value;
    document.getElementById("lblBlue").innerHTML = document.getElementById("sldBlue").value;
}
const saveColor = () => {
    let savedcolors = document.getElementById("savedColors");
    let closeButton = document.createElement("button");
    closeButton.innerHTML = "X";
    closeButton.onclick = deleteColor;


    const node = document.createElement("li");
    node.className = "swatch";
    node.style.backgroundColor = getColor();
    node.onclick = chooseColor;
    node.appendChild(closeButton);

    savedcolors.appendChild(node);
}

const chooseColor = (event) => {
    let colorsquares = document.getElementById("swatch")
    let backgroundColor = event.target.style.backgroundColor
    colorsquares.style.backgroundColor = backgroundColor;

    let indexFirsthaakje = backgroundColor.indexOf("(")
    let indexLasthaakje = backgroundColor.indexOf(")")
    let indexFirstComma = backgroundColor.indexOf(",")
    let indexLastcomma = backgroundColor.lastIndexOf(",")

    let red = backgroundColor.substring(indexFirsthaakje + 1, indexFirstComma)
    let green = backgroundColor.substring(indexFirstComma + 1, indexLastcomma)
    let blue = backgroundColor.substring(indexLastcomma + 1, indexLasthaakje)

    document.getElementById("lblRed").innerHTML = red;
    document.getElementById("lblGreen").innerHTML = green;
    document.getElementById("lblBlue").innerHTML = blue;

    document.getElementById("sldRed").value = red;
    document.getElementById("sldGreen").value = green;
    document.getElementById("sldBlue").value = blue;

}


const deleteColor = (event) => {
    event.target.parentElement.remove()
}
window.addEventListener("load", setup);