const Block    = require('../lib/block').Block;
const Board    = require('../lib/board').Board;
const Snake    = require('../lib/snake').Snake;

//image = 'mouse.png';

function Food(board) {
    this.board  = board;
    this.width  = 10;
    this.height = 10;
    this.setRandomPosition();
    this.board.addFood(this);
}

Food.prototype.draw = function (context) {
  context.beginPath();
  context.arc(this.x, this.y, 8, 0, 2 * Math.PI, false);
  context.lineWidth = 2;
  context.strokeStyle = 'orange';
  context.stroke();
  return this;
};

Food.prototype.setRandomPosition = function () {
  this.x = Math.floor((Math.random() * 560 - 20) + 20);
  this.y = Math.floor((Math.random() * 360 - 20) + 20);
};

Food.prototype.wasEaten = function () {
  this.setRandomPosition();
};

module.exports = {Food: Food};
