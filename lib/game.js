var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var x = 50;
var y = 50;
var width = 10;
var height = 10;

document.onkeydown = function(e) {
    if (e.keyCode == '38') {
        moveUp();
    }
    else if (e.keyCode == '40') {
        moveDown();
    }
    else if (e.keyCode == '37') {
        moveLeft();
    }
    else if (e.keyCode == '39') {
        moveRight();
    }
};

function moveRight() {
    requestAnimationFrame(function gameLoop() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillRect(x++, y, width, height);
        if(x < canvas.width - 10) {
            requestAnimationFrame(gameLoop);
        }
    });
}

function moveDown() {
    requestAnimationFrame(function gameLoop() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillRect(x, y++, width, height);
        if (y < canvas.height - 10) {
            requestAnimationFrame(gameLoop);
        }
    });
}

function moveLeft() {
    requestAnimationFrame(function gameLoop() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillRect(x--, y, width, height);
        if(x > 0 ) {
            requestAnimationFrame(gameLoop);
        }
    });
}

function moveUp() {
    requestAnimationFrame(function gameLoop() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillRect(x, y--, width, height);
        if(y > 0) {
            requestAnimationFrame(gameLoop);
        }
    });
}