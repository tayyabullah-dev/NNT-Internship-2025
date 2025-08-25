const inputEl = document.querySelector("#qr-input");
const buttonEl = document.querySelector("#qr-button");
const imgEl = document.querySelector("#qr-img");

buttonEl.addEventListener("click", () => {
    const inputValue = inputEl.value;

    if (inputValue === "") {
        alert("Please Enter  URL !");
    }else {

        imgEl.style.display = "block";
        imgEl.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        imgEl.alt = `${inputValue}`;
    }
});