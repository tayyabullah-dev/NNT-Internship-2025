const inputEl = document.querySelector("#password");
const outputEl = document.querySelector("#output");

inputEl.addEventListener("input", () => {
    const inputValue = inputEl.value;
    if (inputValue.length < 8) {
        outputEl.innerText = "Password is too short !";
        outputEl.style.color = "red";
    } else {
        if (inputValue.search(/[a-z]/) == -1) {
            outputEl.innerText = "lowercase letter missing !"
            outputEl.style.color = "red";
        } else if (inputValue.search(/[A-Z]/) == -1) {
            outputEl.innerText = "Upercase letter missing !"
            outputEl.style.color = "red";
        } else if (inputValue.search(/[0-9]/) == -1) {
            outputEl.innerText = "Number is  missing !"
            outputEl.style.color = "red";
        } else if (inputValue.search(/[!\@\#\$\%\^\&\*\(\)\_\+\{\}\:\"\<\>\?\|\[\]\\\;\'\,\.]/) == -1) {
            outputEl.innerText = "sepical character is  missing !"
            outputEl.style.color = "red";
        }
        else {
            outputEl.innerText = "Password is strong";
            outputEl.style.color = "green";
        }
    }
});