const setup = () => {
    console.log(vervang("Gisteren zat de jongen op de stoep en at de helft van de appel"))
}
const vervang = (txt) => {
    let index = txt.indexOf("de")
    while(index !== -1){
        txt = txt.slice(0, index) + "het" + txt.slice(index + 2, txt.length);
        index = txt.indexOf("de");
    }
    return txt;
}
window.addEventListener("load", setup);