const btnEl = document.querySelector(".btn");
const videoContainer = document.querySelector(".video-trailer");
const removevidContBtn = document.querySelector(".remove-btn");
const videoEl = document.querySelector("#video");
btnEl.addEventListener("click", () => {
  videoContainer.classList.remove("active");
});

removevidContBtn.addEventListener("click" , () => {
    videoContainer.classList.add("active");
    videoEl.pause();
    videoEl.currentTime = 0;
});