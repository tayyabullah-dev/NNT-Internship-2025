const password = document.getElementById('password');
const background = document.getElementById('background');

password.addEventListener('input', () => {
    const passwordLength = password.value.length;
    const blurValue = 20 - (passwordLength * 2);
    background.style.filter = `blur(${blurValue}px)`;
});
