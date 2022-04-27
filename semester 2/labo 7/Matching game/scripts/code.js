let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6
}
let SPEELVELDFRONTCARDS = []
let TURNEDCARD = null



const setup = () => {
    buildPlayFieldBackCard()
    SPEELVELDFRONTCARDS = buildPlayFieldFrontCard()
    for (let i=0;i<SPEELVELDFRONTCARDS.length;i++) {
        console.log(SPEELVELDFRONTCARDS[i].toString())
    }
}

const buildPlayFieldBackCard = () => {
    let speelveld = document.getElementById("playField")
    let urlachterkant = "Image/kaartAchterkant.png";

    let plaatsOpIndex = 0;

    for (let i=0;i<global.AANTAL_HORIZONTAAL;i++) {
        for (let j=0;j<global.AANTAL_VERTICAAL;j++) {
            let achterkantkaart = document.createElement("img")
            achterkantkaart.setAttribute("src", urlachterkant);
            achterkantkaart.setAttribute("Class", "Kaart")
            achterkantkaart.setAttribute("id", plaatsOpIndex.toString());
            plaatsOpIndex ++;
            achterkantkaart.addEventListener('click', turnCard)
            speelveld.appendChild(achterkantkaart);
        }
    }
}

const buildPlayFieldFrontCard = () => {
    getCardList();
    let listCards = getCardList();
    let frontCards = [];
    let numbersGotten = [];
    numbersGotten.length = listCards.length;
    frontCards.length = global.AANTAL_KAARTEN * 2;
    let randomNumbersIndexen = [];
    randomNumbersIndexen.length = global.AANTAL_KAARTEN * 2;
    for (let i=0; i < randomNumbersIndexen.length; i++){
        randomNumbersIndexen[i] = Math.round((i - 1) / 2);
    }
    randomNumbersIndexen = shuffleArray(randomNumbersIndexen);

    for (let i=0;i<frontCards.length;i++) {
        frontCards[i] = listCards[randomNumbersIndexen.pop()]
    }
    return frontCards;
}




const getCardList = () => {
    let listCards = []
    listCards.length = global.AANTAL_KAARTEN

    for (let i=0;i<listCards.length;i++) {
        listCards[i] = "Image/kaart" + (i + 1) + ".png"
    }
    return listCards
}

const turnCard = (event) => {
    let indexCardBack = event.target.getAttribute("id")
    let source = SPEELVELDFRONTCARDS[indexCardBack]
    //turn first card
    if (TURNEDCARD === null){
        TURNEDCARD = source
        event.target.setAttribute("src", source);
    }
    else{
        //check with turned card
        let playfield = document.getElementById("playField")
        let cards = playfield.children;
        if (source === TURNEDCARD){
            let newPlayField = [];
            for (let i=0;i<SPEELVELDFRONTCARDS.length;i++) {
                if (SPEELVELDFRONTCARDS[i] === TURNEDCARD){
                    playfield.removeChild(cards[i]);
                    i --;
                }
                else{
                    newPlayField[newPlayField.length] = SPEELVELDFRONTCARDS[i];
                }
            }
            SPEELVELDFRONTCARDS = newPlayField;
            if (cards.length === 0){
                window.alert("proficiat u bent gewonnen");
                setup()
            }else{
                setTimeout(turnEveryCard, 1000);
            }
        }
        else{
            for (let i=0;i<cards.length;i++) {
                cards[i].setAttribute("src", "Image/kaartAchterkant.png");
            }
        }
        TURNEDCARD = null;
    }
}
const turnEveryCard = () => {
    let playfield = document.getElementById("playField")
    let cards = playfield.children;
    for (let i=0;i<cards.length;i++) {
        cards[i].setAttribute("src", "Image/kaartAchterkant.png");
    }
    for (let i=0;i<SPEELVELDFRONTCARDS.length;i++) {
        console.log(SPEELVELDFRONTCARDS[i].toString())
    }
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