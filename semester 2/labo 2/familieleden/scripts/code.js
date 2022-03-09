
let familieleden = ['an', 'anja', 'anna', 'annita', 'anne']
const setup = () => {
    console.log(familieleden.length);
    for (let i = 0; i < familieleden.length; i+=2) {
            console.log('familielid ' + familieleden[i]);
    }
    let person = prompt("Please enter the name you want to add on your familie");
    voegNaamToe(person);
    console.log(familieleden)
}
const voegNaamToe = (naam) =>{
    familieleden.push(naam)
    console.log('De naam ' + naam + ' is toegevoegd aan de array')
}
window.addEventListener("load", setup);