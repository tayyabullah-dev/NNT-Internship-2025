const outputScreen = document.querySelector(".output-screen");
const buttons = document.querySelectorAll("button");
let stringValue = "";
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let inputValue = e.target.innerText;
        if (inputValue === "=") {
            stringValue = eval(stringValue);
        } else if (inputValue === "AC") {
            stringValue = "";

        } else if (inputValue === "DEL") {
            stringValue = stringValue.slice(0, -1);
        }
        else {
            stringValue = stringValue + inputValue;
        }
        outputScreen.innerHTML = stringValue;
    });
});