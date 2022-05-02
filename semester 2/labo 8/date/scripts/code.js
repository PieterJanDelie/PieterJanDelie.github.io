const setup = () => {
    let start = new Date();
    console.log(start);
    console.log(start.getDate())
    console.log(start.getDay())
    console.log(start.getFullYear())

    let d = new Date(2022,4,25,10,33,0)

    console.log(d)

    let geboortedatum = new Date(2002, 4, 27)
    let vandaag = new Date()

    let verschil = Math.round((vandaag - geboortedatum) /86400000)

    console.log("Je leeft al: " +verschil)
}
window.addEventListener("load", setup);