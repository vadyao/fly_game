const log = console.log;

let fly_amount = 2;
let fly = []
let pressed = false;
let current_fly = 0
let new_x = 0
let new_y = 0
let old_x = 0
let old_y = 0

const gameArea = document.querySelector('.game-area')
const myProgress = document.querySelector('#myProgress')
const restart = document.querySelector('#restart')
restart.addEventListener('click', init)

function init() {
    fly_amount++
    gameArea.innerHTML = ''
    for (let i = 0; i < fly_amount; i++) {
        gameArea.innerHTML += `
        <img class="fly" name="${i}" src="src/img/fly.png" alt="">
    `
    }
    fly = gameArea.querySelectorAll('.fly')

    for (let i = 0; i < fly_amount; i++) {
        fly[i].addEventListener('click', (e) => {
            log('name:', e.target.name)
            pressed = true
            current_fly = e.target.name
            fly[i].src = 'src/img/spot.png'
            fly[i].flattened = true
            myProgress.style.width = width() + '%'
        })
    }
    loop()
    myProgress.style.width = '100%'
}

init()


function FlyPositionX() {
    return Math.round(Math.random() * document.body.clientWidth)
}

function FlyPositionY() {
    return Math.round(Math.random() * window.innerHeight)
}

function FlyRotate() {
    return Math.round(Math.random() * 360)
}

function FlyRotate2() {

}

function loop() {
    window.interval = setInterval(() => {
        check_alive_fly = false
        window.amount_alive_fly = 0
        for (let i = 0; i < fly_amount; i++) {
            if (!fly[i].flattened) {
                check_alive_fly = true
                window.amount_alive_fly++
                fly[i].style.left = FlyPositionX() + 'px'
                fly[i].style.top = FlyPositionX() + 'px'
                fly[i].style.transform = `rotate(${FlyRotate()}deg)`
            }
        }
        if (!check_alive_fly) end_game()
        log('amount_alive_fly', window.amount_alive_fly)

    }, 1000)
}


function end_game() {
    clearInterval(window.interval)
    setTimeout(() => {
        alert("congratulations")
    }, 0)
}


document.addEventListener('click', (e) => {
    log(e)
    if (pressed) {
        fly[current_fly].style.left = e.clientX + 'px'
        fly[current_fly].style.top = e.clientY + 'px'
        pressed = false
    }
})


function width() {
    x = ((window.amount_alive_fly - 1) * 100) / fly_amount
    log(window.amount_alive_fly)
    return x
}