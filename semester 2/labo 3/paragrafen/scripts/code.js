const setup = () => {
    wijzig()
}
const wijzig = () => {
    let paragrafen = document.getElementsByClassName("belangrijk")
    for (i=0;i<paragrafen.length;i++) {
        paragrafen[i].className = "belangrijk opvallend";
    }
}
window.addEventListener("load", setup);