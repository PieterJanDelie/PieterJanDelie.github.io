const setup = () => {
    let text = "De man van An geeft geen hand aan ambetante verwanten";
    console.log(vooraan(text));
    console.log(achteraan(text));
}
const vooraan = (txt) => {
    let aantal = 0;
    let i = 0;
    let search = true
    while (search) {
        let index = txt.toLowerCase().indexOf("an", i);
        if (index !== -1) {
            aantal++;
            i = index + 1;
        }
        else {
            search = false
        }
    }
    return aantal
}
const achteraan = (txt) => {
    let aantal = 0;
    let i = txt.length;
    let search = true
    while (search) {
        let index = txt.toLowerCase().lastIndexOf("an", i);
        if (index !== -1) {
            aantal++;
            i = index - 1;
        }
        else {
            search = false
        }
    }
    return aantal
}
window.addEventListener("load", setup);