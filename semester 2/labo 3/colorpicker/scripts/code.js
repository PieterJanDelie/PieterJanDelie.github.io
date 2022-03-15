const setup = () => {
    changeColor();
    let sliders = document.getElementsByClassName("slider");
    for (i=0;i<sliders.length;i++) {
        sliders[i].addEventListener("input", changeColor);
    }
}
const changeColor = () =>{
    let colorsquares = document.getElementById("swatch")
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;
    let color = "rgb( " + red + "," + green + "," + blue + ")";
    colorsquares.style.backgroundColor = color;
    document.getElementById("lblRed").innerHTML = red;
    document.getElementById("lblGreen").innerHTML = green;
    document.getElementById("lblBlue").innerHTML = blue;
}
window.addEventListener("load", setup);