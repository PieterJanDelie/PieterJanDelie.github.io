const setup = () => {
    let button =document.getElementById("btnHerbereken");
    button.addEventListener("click", herbereken);
}
const herbereken = () => {
    let productprices = document.getElementsByClassName("price");
    let aantal = document.getElementsByClassName("numbers");
    let btws = document.getElementsByClassName("btw");
    let subtotals = document.getElementsByClassName("sub");
    let total = 0.0;
    for (let i = 0; i < productprices.length; i++) {
        let uitkomst = (parseFloat(productprices[i].innerHTML) * aantal[i].value * (1+(parseFloat(btws[i].innerHTML)/100)));
        total += uitkomst
        subtotals[i].innerHTML = (uitkomst.toFixed(2) + " EUR").toString();
    }
    document.getElementById("total").innerHTML = total.toFixed(2).toString() + "EUR";
}
window.addEventListener("load", setup);