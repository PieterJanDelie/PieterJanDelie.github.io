const setup = () => {
    document.getElementById("btnSubmit").addEventListener("click", spatiesOpConsole)
}
const spatiesOpConsole = () =>{
    let text = document.getElementById("textInput").value
    let answer = ""
    for (let i=0;i<text.length;i++) {
        if (text.charAt(i) !== " ") {
            answer += text.charAt(i) + " "
        }
    }
    console.log(answer.trim())
}
window.addEventListener("load", setup);