const setup = () => {
    tree();
}
const tree = () =>{
    let hoogte = 6
    let ster = '*'
    for (let i = 1; i <= hoogte; i++) {
        console.log(ster)
        ster += '*'
        /*
        let afdruk = "";
        for (let j = 1; j <= i; j++) {
            afdruk += "*"
        }
        console.log(afdruk);
         */
    }
}
window.addEventListener("load", setup);