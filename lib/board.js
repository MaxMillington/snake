const Block = require('../lib/snake').Block;
const Snake = require('../lib/snake').Snake;



function Board(columns, rows) {
    this.columns = columns;
    this.rows    = rows;
    this.blocks  = [];
}

Board.prototype.findBlock = function (x, y) {
    this.blocks.forEach(function(block){
        if (block.x === x && block.y === y) {
            return block;
        }
    })
};

module.exports = {Board: Board};