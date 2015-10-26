const Block = require('./block').Block;
const Board = require('./board').Board;

function Snake(board) {
    this.board = board;
    this.body = [new Block(board, 40,40)];
    this.head = this.body[0];
    this.board.blocks.push(this.head);
    return this;
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

Snake.prototype.headCheckForFood = function () {
    if (this.head.x === this.board.food[0].x && this.head.y === this.board.food[0].y) {
        this.eat(new Block(this.board, this.board.food[0].x, this.board.food[0].y))
    }
}

Snake.prototype.moveRight = function () {
    var snakeLength = this.body.length;

    for(var i = 1; i < snakeLength; i++) {
        this.body[snakeLength-i].x = this.body[snakeLength-i-1].x;
        this.body[snakeLength-i].y = this.body[snakeLength-i-1].y;
    }
    this.head.x  += 1

    this.headCheckForFood()
};

Snake.prototype.moveLeft = function () {
    var snakeLength = this.body.length;

    for(var i = 1; i < snakeLength; i++) {
        this.body[snakeLength-i].x = this.body[snakeLength-i-1].x;
        this.body[snakeLength-i].y = this.body[snakeLength-i-1].y;
    }
    this.head.x  -= 1

    this.headCheckForFood()
};

Snake.prototype.moveUp = function () {
    var snakeLength = this.body.length;

    for(var i = 1; i < snakeLength; i++) {
        this.body[snakeLength-i].x = this.body[snakeLength-i-1].x;
        this.body[snakeLength-i].y = this.body[snakeLength-i-1].y;
    }
    this.head.y  += 1

    this.headCheckForFood()
};

Snake.prototype.moveDown = function () {
    var snakeLength = this.body.length;

    for(var i = 1; i < snakeLength; i++) {
        this.body[snakeLength-i].x = this.body[snakeLength-i-1].x;
        this.body[snakeLength-i].y = this.body[snakeLength-i-1].y;
    }
    this.head.y  -= 1

    this.headCheckForFood()
};

Snake.prototype.canMoveDown = function () {
  if (this.head.isAtBottom()) {
    return this.head.active = false;
  } else if (this.blockBelow()) {
      return false;
  } else {
    return this.head.active
  }
}

Snake.prototype.isAtRightEdge = function () {
  return this.head.x === this.board.columns;
}

Snake.prototype.canMoveRight = function () {
  if (this.isAtRightEdge()) {
    return false;
  } else if (this.blockToTheRight()) {
      return false;
  } else {
    return true;
  }
}

Snake.prototype.isAtLeftEdge = function () {
  return this.head.x === 0;
}

Snake.prototype.canMoveLeft = function () {
  if (this.isAtLeftEdge()) {
    return false;
  } else if (this.blockToTheLeft()) {
      return false;
  } else {
    return true;
  }
}

Snake.prototype.isAtTopEdge = function () {
  return this.head.y === 0;
}

Snake.prototype.canMoveUp = function () {
  if (this.isAtTopEdge()) {
    return false;
  } else if (this.blockOnTop()) {
      return false;
  } else {
    return true;
  }
}


Snake.prototype.blockToTheLeft  = function () {
    if (this.board.findBlock(this.head.x - 1, this.head.y)) {
        return true
    } else {
        return false
    }
}

Snake.prototype.blockToTheRight  = function () {
    if (this.board.findBlock(this.head.x + 1, this.head.y)) {
        return true
    } else {
        return false
    }
}

Snake.prototype.blockOnTop  = function () {
    if (this.board.findBlock(this.head.x, this.head.y - 1)) {
        return true
    } else {
        return false
    }
};

Snake.prototype.blockBelow = function () {
    if (this.board.findBlock(this.head.x, this.head.y + 1)) {
        return true
    } else {
        return false
    }
};

Snake.prototype.draw = function () {
    context.fillRect(this.head.x, this.head.y, this.head.width, this.head.height);
    return this;
};

Snake.prototype.eat = function (block) {
    this.body.push(block)
    this.board.blocks.push(block)
};

module.exports = { Snake: Snake, Block: Block};
