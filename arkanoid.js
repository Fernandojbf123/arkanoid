//


//funciones del juego


const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');

//canvas size
canvas.width = 600;
canvas.height = 400;



// Ball Variables
const ballRadius = 4;
let ballPosX = canvas.width/2;
let ballPosY = canvas.height-30;
let ballSpeedX = -2;
let ballSpeedY = -2;

function drawBall () {
    ctx.beginPath();
    ctx.arc(ballPosX,ballPosY,ballRadius,0,Math.PI*2);
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.closePath();
}

function ballMovement () {
    ballPosX = ballPosX+ballSpeedX;
    ballPosY = ballPosY+ballSpeedY;
    //right collision
    if (ballPosX + ballRadius > canvas.width) {
        ballSpeedX = ballSpeedX*-1;
    }
    //left collision
    if (ballPosX - ballRadius < 0) {
        ballSpeedX = ballSpeedX*-1;
    }
    //top collision
    if (ballPosY - ballRadius < 0 ) {
        ballSpeedY = ballSpeedY*-1
    }
    if (ballPosY + ballRadius > canvas.height) {
        console.log("GAME OVER")
        document.location.reload()
    }
}

//Paddle variables
const paddleWidth = 100;
const paddleHeight = 20;
let paddlePosX = (canvas.width - paddleWidth) /2;
let paddlePosY = (canvas.height - paddleHeight -10);

function drawPaddle() {
    ctx.beginPath()
    ctx.fillStyle = "red";
    ctx.fillRect(paddlePosX,paddlePosY,paddleWidth,paddleHeight)
    ctx.closePath();
}




function clearCanvas() {
    ctx.clearRect(0,0,canvas.width, canvas.height)
}


//Draw canvas
function draw() {

    clearCanvas()
    //draw ball
    drawBall()
    //draw paddle
    drawPaddle()
    //draw bricks

    //check ball movement
    ballMovement()
    
    //check paddle movement


    window.requestAnimationFrame(draw)
}

draw()