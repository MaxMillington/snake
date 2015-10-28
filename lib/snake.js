const Block = require('./block').Block;
const Board = require('./board').Board;
const $     = require('jQuery')

function Snake(board) {
    this.board = board;
    this.body = [new Block(board, 40, 40)];
    this.head = this.body[0];
    this.board.blocks.push(this.head);
    this.velocity = 2;
    return this;
}

Snake.prototype.move = function(direction) {
    //down
    if (direction == '38') {
       if (this.canMoveDown()) {
            this.moveOnYAxis(this.velocity * -1);
       }
    }
    //up
    else if (direction == '40') {
        if (this.canMoveUp()) {
            this.moveOnYAxis(this.velocity);
        }
    }
    //left
    else if (direction == '37') {
        if (this.canMoveLeft()) {
            this.moveOnXAxis(this.velocity * -1);
        }
    }
    //right
    else if (direction == '39') {
        if (this.canMoveRight()) {
            this.moveOnXAxis(this.velocity);
        }
    }
};

Snake.prototype.moveOnXAxis = function (velocity) {
    var snakeLength = this.body.length;
    for(var i = 1; i < snakeLength; i++) {
        this.body[snakeLength-i].x = this.body[snakeLength-i-1].x;
        this.body[snakeLength-i].y = this.body[snakeLength-i-1].y;
    }
    this.head.x  += velocity;

    this.headCheckForFood()
};

Snake.prototype.moveOnYAxis = function (velocity) {
    var snakeLength = this.body.length;

    for(var i = 1; i < snakeLength; i++) {
        this.body[snakeLength-i].x = this.body[snakeLength-i-1].x;
        this.body[snakeLength-i].y = this.body[snakeLength-i-1].y;
    }
    this.head.y  += velocity;

    this.headCheckForFood()
};

Snake.prototype.collisionAtEdge = function () {
     return this.isAtTop() || this.isAtBottom() || this.isAtLeftEdge() || this.isAtRightEdge()
}

Snake.prototype.collisionWithSelf = function (direction) {
    if (direction === '39' && this.blockToTheRight()) {
        return true
    } else if (direction === '37' && this.blockToTheLeft()) {
        return true
    } else if (direction === '38' && this.blockOnTop()) {
        return true
    } else if (direction === '40' && this.blockBelow()) {
        return true
    }
}

Snake.prototype.headCheckForFood = function () {
    let xDiff = Math.abs(this.head.x - this.board.food[0].x);
    let yDiff = Math.abs(this.head.y - this.board.food[0].y);

    if (xDiff < 10 && yDiff < 10) {
        for (let i = 0; i < 15; i++) {
            this.eat(new Block(this.board, this.body[0].x, this.body[0].y));
        }
        this.board.food[0].wasEaten();
        this.board.score += 100;
        $('span').text(this.board.score);
    }
};

Snake.prototype.canMoveUp = function () {
    return !(this.isAtTop() || this.blockBelow())
};

Snake.prototype.isAtRightEdge = function () {
    return this.head.x + 11 > this.board.columns;
};

Snake.prototype.canMoveRight = function () {
    return !(this.isAtRightEdge() || this.blockToTheRight())
};

Snake.prototype.isAtLeftEdge = function () {
    return this.head.x - 11 < 0;
};

Snake.prototype.canMoveLeft = function () {
    return !(this.isAtLeftEdge() || this.blockToTheLeft())
};

Snake.prototype.isAtBottom = function () {
    return this.head.y - 11 < 0;
};

Snake.prototype.isAtTop = function () {
    return this.head.y + 11 > this.board.rows;
};

Snake.prototype.canMoveDown = function () {
    return !(this.isAtBottom() || this.blockOnTop())
};


Snake.prototype.blockToTheLeft  = function () {
    return !!this.board.findBlock(this.head.x - 2, this.head.y);
};

Snake.prototype.blockToTheRight  = function () {
    return !!this.board.findBlock(this.head.x + 2, this.head.y);
};

Snake.prototype.blockOnTop  = function () {
    return !!this.board.findBlock(this.head.x, this.head.y - 2)
};

Snake.prototype.blockBelow = function () {
    return !!this.board.findBlock(this.head.x, this.head.y + 2)
};

Snake.prototype.draw = function () {
    context.fillRect(this.head.x, this.head.y, this.head.width, this.head.height);
    return this;
};

Snake.prototype.eat = function (block) {
    this.body.push(block);
    this.board.blocks.push(block);
};

module.exports = { Snake: Snake, Block: Block};
