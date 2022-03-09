const setup = () => {
    //alert();
    //confirm();
    //prompt()
}
const alert = () =>{
    window.alert("Dit is een mededeling");
}
const confirm = () =>{
    //ok = true
    //annuleer = false
    let sure = window.confirm("Weet u het zeker?");
    console.log(sure);
}
const prompt = () =>{
    //bij oke is het de naam
    //bij annuleer is het null
    let name = window.prompt("Wat is uw naam", "onbekend");
    console.log(name)
}
window.addEventListener("load", setup);