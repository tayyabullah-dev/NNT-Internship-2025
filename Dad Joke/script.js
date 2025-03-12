const joke = document.querySelector("#dad-joke");
const btn = document.querySelector("#get-joke");

btn.addEventListener("click" , getJoke);

async function getJoke() {

    btn.style.backgroundColor = " rgb(192, 75, 201)";
const config = {
    headers:{
        Accept: "Application/json",
    },
 };
    let url = await fetch('https://icanhazdadjoke.com/' , config);
    let data = await url.json();

    joke.innerText = data.joke;
}