const bg = document.querySelector(".bg");
const loading = document.querySelector(".loading");

let load = 0;
let int = setInterval(blurring , 100);

function blurring () {
    load ++;
   if(load > 99){
    clearInterval(int);
   }
   loading.innerText = load + "%";
   loading.style.opacity = scale(load, 8, 100, 1, 8);
   bg.style.filter =  blur((load, 0, 100, 30, 0));
}

function scale(number, inMin, inMax, outMin, outMax) { 
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
