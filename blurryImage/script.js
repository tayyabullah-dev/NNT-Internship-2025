const bg = document.querySelector(".bg");
const loading = document.querySelector(".loading");

let load = 0;
let int = setInterval(blurring , 100);

function blurring() {
    load++;
    if (load > 99) {
        clearInterval(int);
    }
    loading.innerText = load + "%";
    loading.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}
// this function use for to map one range value to another range value
function scale(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
