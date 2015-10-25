const Block = require('./block').Block;
const Food = require('./food').Food;

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
};

Board.prototype.addFood = function (food) {
  var board = this

      if (this.blocks.length === 0) {
        board.food.push(food)
      } else {
        // this.blocks.forEach(function (block) {
        //   } if(block.x === food.x && block.y === food.y) {
        //     new Food(board)
        //   } else {
        //     board.food.push(food)
        //   }
        // })
console.log("hello is it me you're looking for")
      }

}

module.exports = {Board: Board};
