const setup = () => {
   document.getElementById("btnSubmit").addEventListener('click', toon);



}

const toon = () => {

    console.log(maakMetSpaties(document.getElementById("txtInput").value));
}
const maakMetSpaties = (inputText) => {
    let result="";
    for (let i=0;i<inputText.length;i++) {
        if (inputText.charAt(i) !== " ") {
            result += inputText.charAt(i) + " "
        }
    }
    return result.trim();
}
window.addEventListener("load", setup);