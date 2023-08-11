const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 60)
});

var nav = document.querySelector(".navbar")
var btn = document.querySelector("#menuIcon")
var x = 0
btn.addEventListener("click", function () {
    if (x == 0) {
        nav.style.opacity = 1
        x = 1
    } else {
        nav.style.opacity = 0
        x = 0
    }
})