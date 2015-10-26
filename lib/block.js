function Block (board, x, y) {
  this.board  = board;
  this.x      = x;
  this.y      = y;
  this.width  = 1;
  this.height = 1;
  this.active = true;
}

Block.prototype.draw = function () {
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
}

Block.prototype.inactive = function () {
  return !this.active;
}

Block.prototype.isAtBottom = function () {
  return this.y + 1 > this.board.rows;
}

Block.prototype.blockBelow = function () {
  return this.board.findBlock(this.x, this.y + 1);
}

Block.prototype.blockToTheRight = function () {
  return this.board.findBlock(this.x + 1, this.y);
}

module.exports = {Block: Block};
