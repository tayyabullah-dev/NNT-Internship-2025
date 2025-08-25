const insFollow = document.querySelector(".insFolow");
const fcFollow = document.querySelector(".fcFollow");
const ytFollow = document.querySelector(".ytFollow");
var insF = 1;
var faceF = 1;
var ytF = 1;

setInterval(function incf() {
    if (insF != 1200) {
        insF++;
        insFollow.innerText = `${insF}0`;
    }

}, 1);

setInterval(function faceFInc() {
    if (faceF != 500) {
        faceF++;
        fcFollow.innerText = `${faceF}0`;
    }

}, 16);

setInterval(function ytFInc() {
    if (ytF != 750) {
        ytF++;
        ytFollow.innerText = `${ytF}0`;
    }

}, 10);


