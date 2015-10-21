function Block(x, y, board) {
    this.x       = x;
    this.y       = y;
    this.board   = board;
    this.width   = 10;
    this.height  = 10;
}

var direction = '0';

function checkDirection() {
    document.onkeydown = function(e) {
        if(e){
            direction = e;
        }
    }
}

Snake.prototype.move = function(e) {
    //down
    if (direction.keyCode == '38') {
        snake.head.moveDown();
    }
    //up
    else if (direction.keyCode == '40') {
        snake.head.moveUp();
    }
    //left
    else if (direction.keyCode == '37') {
        snake.head.moveLeft();
    }
    //right
    else if (direction.keyCode == '39') {
        snake.head.moveRight();
    }
}

function Snake() {
    this.body = [new Block(40,40)];
    this.head = this.body[0];
    return this;
}

Snake.prototype.draw = function () {
    context.fillRect(this.head.x, this.head.y, this.head.width, this.head.height);
    return this;
};

Snake.prototype.eat = function () {
    var xForBlock = (this.body[this.body.length - 1].x - 10);
    var yForBlock = (this.body[this.body.length - 1].y - 10);
    var newBlock = new Block(xForBlock, yForBlock);
    this.body.push(newBlock)
};

module.exports = { Snake: Snake, Block: Block};
