const setup = () => {

}
const showResult = () => {
    let roker = document.querySelector("#ckRoker").checked;
    let moedertaal = document.querySelector("input[type=radio][name=moedertaal]:checked").value
    let selectElement = document.querySelector('#drpBuurland');
    let favoBuurland = selectElement.options[selectElement.selectedIndex].value;
    let select = document.querySelectorAll('#drpBestelling');
    let bestelling = [...select].map(option => option.value)
    let answer = "is ";
    if (!roker){
        answer += "g";
    }
    answer += "een roker\nmoedertaal is "  + moedertaal + 
        "\nfavoriete buurland is " + favoBuurland +
        "\nbestelling bestaat uit aardappelen ";
    for (let i = 0; i < bestelling.length; i++) {
        answer += bestelling[i]+ " ";
    }
    
    console.log(answer.trim());
}
window.addEventListener("load", setup);