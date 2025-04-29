const board = document.querySelector('.board')

for (let i = 0; i < 100; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    board.appendChild(square)

    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = randomColor()
    })

    square.addEventListener('mouseleave', () => {
        setTimeout(() => {
            square.style.backgroundColor = '#333'
        }, 500)
    })
}

function randomColor() {
    return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
}
