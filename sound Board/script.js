const btn1 = document.querySelector("#applause");
const btn2 = document.querySelector("#boo");
const btn3 = document.querySelector("#gsap");
const btn4 = document.querySelector("#tada");
const btn5 = document.querySelector("#victory");
const btn6 = document.querySelector("#wrong");

const audio1 = document.querySelector("#audio-applause");
const audio2 = document.querySelector("#audio-boo");
const audio3 = document.querySelector("#audio-gsap");
const audio4 = document.querySelector("#audio-tada");
const audio5 = document.querySelector("#audio-victory");
const audio6 = document.querySelector("#audio-wrong");

btn1.addEventListener("click" , () => {
    audioStop();
    audio1.play();
});

btn2.addEventListener("click" , () => {
    audioStop();
    audio2.play();
});

btn3.addEventListener("click" , () => {
    audioStop();
    audio3.play();
});

btn4.addEventListener("click" , () => {
    audioStop();
    audio4.play();
});

btn5.addEventListener("click" , () => {
    audioStop();
    audio5.play();
});

btn6.addEventListener("click" , () => {
    audioStop();
    audio6.play();
});

function audioStop() {
   var audios = [audio1 , audio2 , audio3 , audio4 , audio5 , audio6];

   audios.forEach ( (audio) => {
    audio.pause();
    audio.currentTime = 0;
   });
}

