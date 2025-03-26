const buttonEl = document.querySelector("#roll-btn");
const diceEl = document.querySelector(".dice");
const rollHistoryEl = document.querySelector(".roll-history");

let rollHistoryList = [];

function rollDice() {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    const diceface = getDiceFace(rollResult);
    console.log(diceface);
    diceEl.innerHTML = diceface;
    rollHistoryList.push(rollResult);
    updateRollHistory();

}

function updateRollHistory() {
    rollHistoryEl.innerHTML = "";

    for (let i = 0; i < rollHistoryList.length; i++) {
        const ListItems = document.createElement("li");
        ListItems.innerHTML = `Roll ${i + 1}: <span> ${getDiceFace(rollHistoryList[i])} </span> `;

        rollHistoryEl.appendChild(ListItems);
    }


}
function getDiceFace(rollResult) {

    switch (rollResult) {
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;";
        default:
            diceEl.innerHTML = " ";
    }

}
buttonEl.addEventListener("click", () => {
    diceEl.classList.add("dice-animation");
    setTimeout(() => {
        diceEl.classList.remove("dice-animation");
        rollDice();
    }, 1000);

});