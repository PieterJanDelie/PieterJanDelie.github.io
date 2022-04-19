const setup = () => {
    let liElements = document.getElementsByTagName("li")
    for (let i = 0; i < liElements.length; i++) {
        liElements[i].style.color = "red"
    }
    let image = document.getElementsByTagName("img")[0];
    image.setAttribute("src", "../../../../Personal Homepage/Images/Home/Oscar_Crucke.jpg")
}
window.addEventListener("load", setup);