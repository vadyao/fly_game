const log = console.log;

const fly_amount = 3;
const gameArea = document.querySelector('.game-area')

for (let i = 0; i < fly_amount; i++) {
    gameArea.innerHTML += `
    <img class = "fly" src="src/img/fly.png" alt="">
`
}
const fly = gameArea.querySelectorAll('.fly')
log(fly)
let pressed = false;

let new_x = 0
let new_y = 0
let old_x = 0
let old_y = 0

for (let i = 0; i < fly_amount; i++) {
    fly[i].addEventListener('click', (e) => {
        pressed = true
        fly[i].src = 'src/img/spot.png'
        fly[i].flattened = true
    })
}


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


window.interval = setInterval(() => {
   let check_alive_fly = false
    for (let i = 0; i < fly_amount; i++) {
        if (!fly[i].flattened){
            check_alive_fly = true
            fly[i].style.left = FlyPositionX() + 'px'
            fly[i].style.top = FlyPositionX() + 'px'
            fly[i].style.transform = `rotate(${FlyRotate()}deg)`
        }
    }
    if (!check_alive_fly) end_game()
}, 1000)

function end_game(){
    clearInterval(window.interval)
    alert("congratulations")
}



document.addEventListener('click', (e) => {
    log(e)
    if (pressed) {
        fly[0].style.left = e.clientX + 'px'
        fly[0].style.top = e.clientY + 'px'
    }
})