const setup = () => {
    let leeftijd = 34;
    let intrest = 0.12;
    let isGevaarlijk=true;
    let vandaag = new Date();
    console.log(leeftijd + typeof(leeftijd))
    console.log(intrest + typeof(intrest))
    console.log(isGevaarlijk + typeof(isGevaarlijk))
    console.log(vandaag + typeof(vandaag))

}
window.addEventListener("load", setup);