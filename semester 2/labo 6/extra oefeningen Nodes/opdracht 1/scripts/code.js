const setup = () => {
    let text = document.querySelectorAll(".changeText")
    for (let i = 0; i < text.length; i++) {
        text[i].innerHTML = "Good Job!"
    }
}
window.addEventListener("load", setup);