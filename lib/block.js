function Block (board, x, y) {
  this.board  = board;
  this.x      = x;
  this.y      = y;
  this.width  = 10;
  this.height = 10;
}

Block.prototype.draw = function (context) {
  context.beginPath();
  context.arc(this.x, this.y, 10, 0, 2 * Math.PI, false);
  context.fillStyle = 'brown';
  context.fill();
  return this;
}

Block.prototype.blockBelow = function () {
  return this.board.findBlock(this.x, this.y + 1);
}

Block.prototype.blockToTheRight = function () {
  return this.board.findBlock(this.x + 1, this.y);
}

module.exports = {Block: Block};
