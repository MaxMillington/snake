const Block = require('./block').Block;
const Board = require('./board').Board;

var direction = '0';

function checkDirection() {
    document.onkeydown = function(e) {
        if(e){
            direction = e;
        }
    }
}

Snake.prototype.move = function(direction) {
    //down
    if (direction == '38') {
        this.moveDown();
    }
    //up
    else if (direction == '40') {
        this.moveUp();
    }
    //left
    else if (direction == '37') {
        this.moveLeft();
    }
    //right
    else if (direction == '39') {
        this.moveRight();
    }
};

Snake.prototype.moveRight = function () {
    var snakeLength = this.body.length;

    for(var i = 1; i < snakeLength; i++) {
        this.body[snakeLength-i].x = this.body[snakeLength-i-1].x;
        this.body[snakeLength-i].y = this.body[snakeLength-i-1].y;
    }
    this.head.x  += 10
};

Snake.prototype.moveLeft = function () {
    var snakeLength = this.body.length;

    for(var i = 1; i < snakeLength; i++) {
        this.body[snakeLength-i].x = this.body[snakeLength-i-1].x;
        this.body[snakeLength-i].y = this.body[snakeLength-i-1].y;
    }
    this.head.x  -= 10
};

Snake.prototype.moveUp = function () {
    var snakeLength = this.body.length;

    for(var i = 1; i < snakeLength; i++) {
        this.body[snakeLength-i].x = this.body[snakeLength-i-1].x;
        this.body[snakeLength-i].y = this.body[snakeLength-i-1].y;
    }
    this.head.y  += 10
};

Snake.prototype.moveDown = function () {
    var snakeLength = this.body.length;

    for(var i = 1; i < snakeLength; i++) {
        this.body[snakeLength-i].x = this.body[snakeLength-i-1].x;
        this.body[snakeLength-i].y = this.body[snakeLength-i-1].y;
    }
    this.head.y  -= 10
};

Snake.prototype.canMoveDown = function () {
  if (this.head.isAtBottom()) {
    return this.head.active = false;
  } else {
    return this.head.active
  }
}

Snake.prototype.canMoveRight = function () {
  if (this.head.isAtRight()) {
    return this.head.active = false;
  } else {
    return this.head.active
  }
}

Snake.prototype.canMoveLeft = function () {
  if (this.head.isAtLeft()) {
    return this.head.active = false;
  } else {
    return this.head.active
  }
}

Snake.prototype.canMoveUp = function () {
  if (this.head.isAtTop()) {
    return this.head.active = false;
  } else {
    return this.head.active
  }
}

function Snake(boardX, boardY) {
    var board = new Board(boardX, boardY);
    this.body = [new Block(board, 40,40)];
    this.head = this.body[0];
    board.blocks.push(this.head);
    return this;
}

Snake.prototype.draw = function () {
    context.fillRect(this.head.x, this.head.y, this.head.width, this.head.height);
    return this;
};

Snake.prototype.eat = function () {
    //this needs to be flushed out.
    var xForBlock = (this.body[this.body.length - 1].x - 10);
    var yForBlock = (this.body[this.body.length - 1].y);
    var newBlock = new Block(xForBlock, yForBlock);
    this.body.push(newBlock)
};

module.exports = { Snake: Snake, Block: Block};
