const slider = document.getElementById("slider");
const sliderValue = document.getElementById("slider-value");

slider.oninput = function () {
    sliderValue.textContent = slider.value;
};
