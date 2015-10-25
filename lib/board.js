const Block = require('./block').Block;

function Board(columns, rows) {
    this.columns = columns;
    this.rows    = rows;
    this.blocks  = [ ];
    this.food    = [ ];
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
}

module.exports = {Board: Board};
