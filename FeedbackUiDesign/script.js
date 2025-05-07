const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');
let selectedRating = 'Satisfied';

ratingsContainer.addEventListener('click', (e) => {
    if (e.target.closest('.rating')) {
        removeActive();
        e.target.closest('.rating').classList.add('active');
        selectedRating = e.target.closest('.rating').querySelector('small').innerText;
    }
});

sendBtn.addEventListener('click', () => {
    panel.innerHTML = `
        <h2>Thank You!</h2>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We appreciate your input!</p>
    `;
});

function removeActive() {
    ratings.forEach(rating => rating.classList.remove('active'));
}
