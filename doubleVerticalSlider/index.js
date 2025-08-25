const upButton = document.getElementById("up-button");
const downButton = document.getElementById("down-button");
const leftSlide = document.querySelector(".left-slide");
const rightSlide = document.querySelector(".right-slide");

const slidesLength = leftSlide.querySelectorAll("div").length;

let activeSlideIndex = 0;

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

function changeSlide(direction) {
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  leftSlide.style.transform = `translateY(-${(slidesLength - 1 - activeSlideIndex) * 100}vh)`;
  rightSlide.style.transform = `translateY(-${activeSlideIndex * 100}vh)`;
}
