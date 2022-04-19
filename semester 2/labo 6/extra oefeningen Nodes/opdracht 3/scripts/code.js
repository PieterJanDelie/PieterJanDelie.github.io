const setup = () => {

}
const appendElement = () => {
    let pElement = document.createTextNode("Dit is een nieuw P element")
    document.getElementById("myDIV").appendChild(pElement)
}
window.addEventListener("load", setup);