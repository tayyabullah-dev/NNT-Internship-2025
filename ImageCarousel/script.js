const imageContainer = document.getElementById("image-container");
const images = document.querySelectorAll(".carousel-image");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let index = 0;

nextBtn.addEventListener("click", () => {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    updateCarousel();
});

prevBtn.addEventListener("click", () => {
    index--;
    if (index < 0) {
        index = images.length - 1;
    }
    updateCarousel();
});

function updateCarousel() {
    imageContainer.style.transform = `translateX(-${index * 600}px)`;
}
