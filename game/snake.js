class SnakePart {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

const snakeParts = [];
let tailLenghth = 3;

let headX = 10;
let headY = 10;

function drawSnake() {
    //Snake parts
    ctx.fillStyle = 'green';
    for (let i = 0; i < snakeParts.length; i++) {
        let part = snakeParts[i];
        ctx.fillRect(part.x * box, part.y * box, miniBoxSize, miniBoxSize)
    }
    snakeParts.push(new SnakePart(headX, headY));
    if (snakeParts.length > tailLenghth) {
        snakeParts.shift();
    }
    //Snake head
    ctx.fillStyle = 'orange';
    ctx.fillRect(headX * box, headY * box, miniBoxSize, miniBoxSize)
}

function checkCollision() {
    if (foodX === headX && foodY === headY) {
        foodX = Math.floor(Math.random() * (box - 1));
        foodY = Math.floor(Math.random() * (box - 5));
        tailLenghth++;
        score++;
        eatSound.play();
    }
    for (let i = 0; i < snakeParts.length; i++) {
        let part = snakeParts[i];
        if (foodX === part.x && foodY === part.y) {
            foodX = Math.floor(Math.random() * (box - 1));
            foodY = Math.floor(Math.random() * (box - 5));
        }
    }
}
