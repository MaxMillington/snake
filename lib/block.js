function Block (board, x, y) {
  this.board  = board;
  this.x      = x;
  this.y      = y;
  this.width   = 10;
  this.height  = 10;
  this.active = true;
}

Block.prototype.inactive = function () {
  return !this.active;
}

Block.prototype.isAtBottom = function () {
  return this.y + 1 > this.board.rows;
}

Block.prototype.isAtRight = function () {
  return this.x + 1 > this.board.columns;
}

Block.prototype.isAtTop = function () {
  return this.y - 1 < 0;
}

Block.prototype.blockBelow = function () {
  return this.board.findBlock(this.x, this.y + 1);
}

Block.prototype.blockToTheRight = function () {
  return this.board.findBlock(this.x + 1, this.y);
}

module.exports = {Block: Block};
