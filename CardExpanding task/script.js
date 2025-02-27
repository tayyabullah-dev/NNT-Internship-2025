const cards = document.querySelectorAll(".box");
function removeActiveClasses(){
    cards.forEach(card =>{
        card.classList.remove("active")
    })
}
cards.forEach(card =>{
    card.addEventListener('click' , () =>{
        removeActiveClasses()
        card.classList.add("active")
    });

})

//  const cards = document.querySelectorAll('.inner-container');

// function removeActiveClasses() {
//     cards.forEach(card => {
//         card.classList.remove("active")
//     });
// }
// cards.forEach(card => {
//     card.addEventListener('click', () => {
//         removeActiveClasses();
//         card.classList.add("active")
//     });
// })