const nextBtn = document.querySelector(".next-btn")
const prevBtn = document.querySelector(".prev-btn")
const slides = document.querySelectorAll(".slide")
const NummberofSlide = slides.length;
let slideNummer = 0

// Slider Next Button
nextBtn.onclick = () => {
slides.forEach((slid) => {
    slid.classList.remove("active")
})
slideNummer++;
if (slideNummer >= NummberofSlide - 1){
    slideNummer = 0
}
slides[slideNummer].classList.add("active");
}
// Slider prevBtn Button
prevBtn.onclick = () => {

slides.forEach((slid) => {
    slid.classList.remove("active")
})
slideNummer--;
if (slideNummer < 0 ) {
    slideNummer = NummberofSlide - 1;
}
slides[slideNummer].classList.add("active");
}






// {}