let global = {
    aantal_horizontal: 4,
    aantal_vertical: 3,
    aantal_kaarten: 6
}
let speelveldFrontCards = []
let turnedCard = null
let isBusy = false

const setup = () => {
    buildPlayFieldBackCard()
    speelveldFrontCards = buildPlayFieldFrontCard()
    for (let i=0; i<speelveldFrontCards.length; i++) {
        console.log(speelveldFrontCards[i].toString())
    }
}

const buildPlayFieldBackCard = () => {
    let score = document.getElementById("score");
    score.innerHTML = 0;
    let speelveld = document.getElementById("playField");
    let urlachterkant = "Image/kaartAchterkant.png";

    let plaatsOpIndex = 0;

    for (let i=0; i<global.aantal_vertical; i++) {
        let row = document.createElement("div");
        row.setAttribute("Class", "row");
        for (let j=0;j<global.aantal_horizontal;j++) {
            let achterkantkaart = document.createElement("img");
            achterkantkaart.setAttribute("src", urlachterkant);
            achterkantkaart.setAttribute("class", "Kaart")
            achterkantkaart.setAttribute("id", plaatsOpIndex.toString());
            plaatsOpIndex ++;
            achterkantkaart.addEventListener('click', turnCard);
            row.appendChild(achterkantkaart);
        }
        speelveld.appendChild(row);
    }
}

const buildPlayFieldFrontCard = () => {
    getCardList();
    let listCards = getCardList();
    let frontCards = [];
    let numbersGotten = [];
    numbersGotten.length = listCards.length;
    frontCards.length = global.aantal_kaarten * 2;
    let randomNumbersIndexen = [];
    randomNumbersIndexen.length = global.aantal_kaarten * 2;
    for (let i=0; i < randomNumbersIndexen.length; i++){
        randomNumbersIndexen[i] = Math.round((i - 1) / 2);
    }
    randomNumbersIndexen = shuffleArray(randomNumbersIndexen);

    for (let i=0;i<frontCards.length;i++) {
        frontCards[i] = listCards[randomNumbersIndexen.pop()];
    }
    return frontCards;
}




const getCardList = () => {
    let listCards = [];
    listCards.length = global.aantal_kaarten;

    for (let i=0;i<listCards.length;i++) {
        listCards[i] = "Image/kaart" + (i + 1) + ".png";
    }
    return listCards;
}

const turnCard = (event) => {
    if (isBusy === false){
        isBusy = true;

        let indexCardBack = event.target.getAttribute("id");
        let source = speelveldFrontCards[indexCardBack];

        //turn first card
        if (turnedCard === null){
            turnedCard = source;
            event.target.setAttribute("src", source);
            event.target.removeEventListener("click", turnCard);
            event.target.setAttribute("class", "Kaart turnedCard");
            isBusy = false;
        }

        //turn second card
        else{
            let score = document.getElementById("score");
            score.innerHTML = parseInt(score.innerHTML) + 1;
            //correct
            if (turnedCard === source){
                event.target.removeEventListener('click', turnCard);
                event.target.setAttribute('src', source);
                let pairedCard = document.getElementsByClassName("turnedCard")[0];
                pairedCard.setAttribute("class", "Kaart");
                pairedCard.removeEventListener('click', turnCard);
                correctAlert();
            }

            //incorrect
            else{
                event.target.setAttribute("src", source);
                event.target.removeEventListener('click', turnCard);
                event.target.setAttribute("class", "Kaart turnedCard");
                setTimeout(turnBack, 1000);
                wrongAlert();
            }
            turnedCard = null;
        }
    }
}
const wrongAlert = () =>{
    let antwoord = document.getElementById("correct");
    let el = document.createElement("div");
    el.setAttribute("class","wrongAlert");
    el.innerHTML = "De twee prenten komen niet overeen";
    setTimeout(function(){
        el.parentNode.removeChild(el);
    },1000);
    antwoord.appendChild(el);
}

const correctAlert = () =>{
    let antwoord = document.getElementById("correct");
    let el = document.createElement("div");
    el.setAttribute("class","correctAlert");
    el.innerHTML = "De twee prenten komen overeen";
    setTimeout(function(){
        el.parentNode.removeChild(el);
    },1000);
    antwoord.appendChild(el);
    isBusy = false;
}

const turnBack = () => {
    let turnedCard = document.getElementsByClassName("turnedCard");
    while (turnedCard.length > 0){
        turnedCard[0].setAttribute("src","Image/kaartAchterkant.png" );
        turnedCard[0].addEventListener('click', turnCard);
        turnedCard[0].setAttribute("class", "Kaart");
    }
    isBusy = false;

}



const shuffleArray = (array) => {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

window.addEventListener("load", setup);