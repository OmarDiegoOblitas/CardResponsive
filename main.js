// grap Dom Elements
let activeIndex = 0;
const breakPoint = 768;
const questionElements = document.querySelectorAll(".faq__question");
const image = document.querySelector(".image__element")

questionElements[activeIndex].classList.add("active");
// Listen for Events
questionElements.forEach((element, index) => {
    element.addEventListener("click", (event) => {
        questionElements[activeIndex].classList.remove("active");
        activeIndex = index;
        questionElements[activeIndex].classList.add("active");
        // Do this on thase elements
    });
});

function changeImage() {
    if (window.innerWidht > breakPoint) {
        image.src = "images/illustration-woman-online-desktop.svg"
    }
    else {
        image.src = "images/illustration-woman-online-mobile.svg"
    }
   // image.src = `images/illustration-woman-online-${(window.innerWidth > breakPoint) ? "desktop" : "mobile"}.svg`//
}
window.onload = changeImage
window.addEventListener("resize", changeImage)