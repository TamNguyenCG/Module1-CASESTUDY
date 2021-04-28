class SnakePart{
    constructor(x,y) {
        this.x=x;
        this.y=y;
    }
}
const snakeParts=[];
let tailLenghth = 3;

let headX = 10;
let headY = 10;

function drawSnake() {
    //Snake parts
    ctx.fillStyle= 'green';
    for (let i = 0; i < snakeParts.length; i++) {
        let part = snakeParts[i];
        ctx.fillRect(part.x * tileCount, part.y *tileCount,tileSize,tileSize)
    }
    snakeParts.push(new SnakePart(headX,headY));
    if(snakeParts.length > tailLenghth){
        snakeParts.shift();
    }
    //Snake head
    ctx.fillStyle = 'orange';
    ctx.fillRect(headX*tileCount , headY*tileCount , tileSize, tileSize)
}

function checkCollision() {
    if (foodX === headX && foodY === headY) {
        foodX = Math.floor(Math.random() * (tileCount - 1));
        foodY = Math.floor(Math.random() * (tileCount - 5));
        tailLenghth++;
        score++;
    }
    for (let i = 0; i < snakeParts.length; i++) {
        let part = snakeParts[i];
        if (foodX === part.x && foodY === part.y) {
            foodX = Math.floor(Math.random() * (tileCount - 1));
            foodY = Math.floor(Math.random() * (tileCount - 5));
        }
    }
}
