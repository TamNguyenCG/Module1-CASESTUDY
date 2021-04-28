const canvas = document.getElementById('myCanvas')
const ctx = canvas.getContext("2d");

let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
gradient.addColorStop(0.5, "orange");
gradient.addColorStop(1.0, "red");

let speed = 1;
let name = prompt("Enter your name to start play:")
let tileCount = 25;
let tileSize = 22;

let xDirection = 0;
let yDirection = 0;

let score = 0;
let eatSound;
let hitSound;
let DieSound;
let nameSave;

function clearScreen() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function changeSnakePosition() {
    headX += xDirection;
    headY += yDirection;
}

function drawPlayerName() {
    ctx.fillStyle = "white";
    ctx.font = "16px Arial";
    ctx.fillText("Player Name: " + name, 5, 15);
    // console.log(name);
}

function isGameOver() {
    let flag = false;
    if (yDirection === 0 && xDirection === 0) {
        return false;
    }
    if (headX < 0 || headY < 0) {
        flag = true;
        hitSound.play();
    } else if (headX === tileCount - 1) {
        flag = true;
        hitSound.play();
    } else if (headY === tileCount - 5) {
        flag = true;
        hitSound.play();
    }
    for (let i = 0; i < snakeParts.length; i++) {
        let part = snakeParts[i];
        if (part.x === headX && part.y === headY) {
            flag = true;
            hitSound.play();
            break;
        }
    }
    if (flag) {
        ctx.font = "45px Airal";
        ctx.fillStyle = gradient;
        ctx.font = "70px Arial"
        ctx.fillText("GAME OVER", 100, 250);
        if (confirm("Do you want to save your scores?")) {
            nameSave=prompt("Enter your nickname to save:")
            saveScoreArray(score);
            showHighestScore();
            DieSound.play();
        }else{
            DieSound.play();
        }
    }
    // console.log(score);
    return flag;
}

function showHighestScore() {
    document.getElementById('saveScore').innerHTML = `${loadScoreArray()}`
}

function showScore() {
    document.getElementById('score').innerHTML = `${score}`;
}

function showSpeed(speed) {
    ctx.fillStyle = 'white';
    ctx.font = "16px Arial"
    ctx.fillText('Speed:' + speed, 11 * tileCount, 15)
}

document.addEventListener('keydown', keyDown);

function keyDown(event) {
    //Di len
    if (event.keyCode === 38) {
        if (yDirection === 1)
            return;
        yDirection = -1;
        xDirection = 0
    }
    //Di xuong
    if (event.keyCode === 40) {
        if (yDirection === -1)
            return;
        yDirection = 1;
        xDirection = 0
    }
    //Sang trai
    if (event.keyCode === 37) {
        if (xDirection === 1)
            return;
        yDirection = 0;
        xDirection = -1;
    }
    //Sang phai
    if (event.keyCode === 39) {
        if (xDirection === -1)
            return;
        yDirection = 0;
        xDirection = 1;
    }
}

function drawGame() {
    changeSnakePosition();
    let result = isGameOver();
    if (result) {
        return;
    }
    clearScreen();
    drawPlayerName();
    showSpeed(speed);
    drawSnake();
    drawFood();
    checkCollision();
    showScore();
    setTimeout(drawGame, 1000 / speed)
    console.log(speed);
    eatSound = new sound("audio/eat.wav")
    hitSound = new sound("audio/hit.mp3")
    DieSound = new sound("audio/Die.wav")
}

document.getElementById('butStart').addEventListener('click', function () {
    drawGame();
})




