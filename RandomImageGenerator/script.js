const imageContainer = document.getElementById("imageContainer");
const unsplashURL = "https://images.unsplash.com/photo-1744572617932-7d2b3203f5e2?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

function loadImages() {
    imageContainer.innerHTML = "";
    for (let i = 0; i < 9; i++) {
        const img = document.createElement("img");
        img.src = `${unsplashURL}${getRandomSize()}`;
        img.className = "image";
        imageContainer.appendChild(img);
    }
}

function getRandomSize() {
    return `${getRandomNr()}x${getRandomNr()}`;
}

function getRandomNr() {
    return Math.floor(Math.random() * 100) + 300;
}

loadImages();
