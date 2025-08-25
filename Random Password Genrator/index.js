const genrateBtn = document.querySelector(".genrate-btn");

const inputEle = document.querySelector("#input");

const copyEle = document.querySelector(".fa-copy")

const alertBox = document.querySelector(".alert-box");


genrateBtn.addEventListener("click", () => {
    console.log(createPassword());

});

function createPassword() {
    const charc = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 14;
    var password = " ";

    for (let i = 0; i < passwordLength; i++) {
        const randomNum = Math.floor(Math.random() * charc.length);
        password = password + charc.substring(randomNum, randomNum + 1)
        inputEle.value = password;
    }
    return password;

}

copyEle.addEventListener("click", () => {
    if (inputEle.value.trim() === "") {
        alert("Genrate Password ")
    } else {
        alertBox.innerHTML = inputEle.value;
        alertBox.classList.remove("active");
        setTimeout(() => {
            alertBox.classList.add("active");
        }, 4000);
    }
});

