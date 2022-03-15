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
        let uitkomst = (parseInt(productprices[i].innerHTML,10) * aantal[i].value * (1+(parseInt(btws[i].innerHTML,10)/100)));
        total += uitkomst
        subtotals[i].innerHTML = (uitkomst + " EUR").toString();
        console.log(parseInt("15",10));
        console.log(aantal[i].value.toString());
        //console.log(aantal[i]);
        //console.log(btws[i]);
        //console.log(subtotals[i]);
    }
    document.getElementById("total").innerHTML = total.toString() + "EUR";
}
window.addEventListener("load", setup);