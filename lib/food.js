const Block    = require('../lib/block').Block;
const Board    = require('../lib/board').Board;
const Snake    = require('../lib/snake').Snake;

function Food(board) {
    this.board  = board;
    this.x      = Math.floor((Math.random() * board.columns) + 0);
    this.y      = Math.floor((Math.random() * board.rows) + 0);
    this.width  = 10;
    this.height = 10;
    this.board.addFood(this);
}

Food.prototype.draw = function (context) {
  context.beginPath()
  context.arc(this.x, this.y, 8, 0, 2 * Math.PI, false);
  context.lineWidth = 2;
  context.strokeStyle = 'orange';
  context.stroke();
  return this;
}

module.exports = {Food: Food};
