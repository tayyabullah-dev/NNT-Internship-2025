const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector("#prevbtn");
const nextBtn = document.querySelector("#nextbtn");

let countSlide = 0;

slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}% `;
    }
);


nextBtn.addEventListener("click", () => {
    if (countSlide < slides.length - 1) {
        countSlide++;
        slideImage();
    }
});

prevBtn.addEventListener("click", () => {
    if (countSlide > 0) {
        countSlide--;
        slideImage();
    }
});

const slideImage = () => {
    slides.forEach((slid) => {
        slid.style.transform = `translateX(-${countSlide * 100}%)`;

    });

    updateBodyBackground();
}
const updateBodyBackground = () => {
    document.body.style.backgroundImage = `url(${slides[countSlide].src})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = " no-repeat";
    document.body.style.transition = "background 0.5s ease-out";
};

updateBodyBackground();
