const setup = () => {
    toonGemeentes()
}
const compare = (a,b) => {
    return a.localeCompare(b)
}
const voegGemeentesToe = () => {
    let gemeente = "default"
    let result = [];
    while (gemeente !== "stop"){
        gemeente = window.prompt("Geef een gemeente op", "onbekend");
        if (gemeente !== "stop"){
            result.push(gemeente)
        }
    }
    result.sort(compare)
    return result;
}
const toonGemeentes = () => {
    let result = voegGemeentesToe()
    let dropdown = document.getElementById("Gemeente")
    for (i=0;i <result.length;i++) {
        let gemeente = result[i]
        dropdown.innerHTML += "<option>" + gemeente + "</option>"
        console.log(result[i])
    }
}

window.addEventListener("load", setup);