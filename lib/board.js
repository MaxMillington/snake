const Block = require('./block').Block;
const Food  = require('./food').Food;

function Board(columns, rows) {
    this.columns = columns;
    this.rows    = rows;
    this.blocks  = [ ];
    this.food    = [ ];
}

Board.prototype.draw = function(canvas, context) {
  this.blocks.forEach(function (block) {
    block.draw(canvas, context)
  })
}

Board.prototype.findBlock = function (x, y) {
  for(var i=0; i < this.blocks.length; i++) {
    if (this.blocks[i].x === x && this.blocks[i].y === y) {
      return this.blocks[i];
    }
  }
};

 Board.prototype.addBlock = function (x, y) {
  let block = new Block(this, x, y);
  this.blocks.push(block);
  return block;
};

Board.prototype.addFood = function (food) {
  this.food.push(food);
}

module.exports = {Board: Board};
