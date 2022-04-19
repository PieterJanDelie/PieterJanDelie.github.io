const setup = () => {
    let btnToon = document.getElementById(("btnToon"));
    btnToon.addEventListener("click", toonTrigram)
}
const trigram = (txt) => {
    let result = [];
    for (i=0;(i + 3)<=txt.length;i++) {
        result.push(txt.slice(i, i+3))
    }
    return result
}
const toonTrigram = () => {
    let result = trigram("onoorbaar")
    for (i=0;i <result.length;i++) {
        console.log(result[i])
    }
}

window.addEventListener("load", setup);