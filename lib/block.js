function Block (board, x, y) {
  this.board  = board;
  this.x      = x;
  this.y      = y;
  this.active = true;
}

Block.prototype.inactive = function () {
  return !this.active;
}

Block.prototype.isAtBottom = function () {
  return this.y + 1 > this.board.rows;
}

Block.prototype.blockBelow = function () {
  return this.board.findBlockAtCoordinates(this.x, this.y + 1);
}

Block.prototype.blockToTheRight = function () {
  return this.board.findBlockAtCoordinates(this.x + 1, this.y);
}

Block.prototype.blockToTheLeft  = function () {
  return this.board.findBlockAtCoordinates(this.x - 1, this.y);
}

Block.prototype.canMoveDown = function () {
  if (this.isAtBottom()) {
    return this.active = false;
  } else {
    return this.active
  }
}

module.exports = {Block: Block};
