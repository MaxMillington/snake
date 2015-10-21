const Block = require('../lib/snake').Block;
const Snake = require('../lib/snake').Snake;



function Board(columns, rows) {
    this.columns = columns;
    this.rows    = rows;
    this.blocks  = [];
}

Board.prototype.findBlock = function (x, y) {
  for(var i=0; i < this.blocks.length; i++) {
    if (this.blocks[i].x === x && this.blocks[i].y === y) {
      return this.blocks[i];
    }
  }
};

module.exports = {Board: Board};
