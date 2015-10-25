const Block    = require('../lib/block').Block;
const Board    = require('../lib/board').Board;
const Snake    = require('../lib/snake').Snake;

function Food(board) {
    this.board  = board;
    this.x      = Math.round(Math.floor((Math.random() * board.columns) + 0)/10) * 10;
    this.y      = Math.round(Math.floor((Math.random() * board.rows) + 0)/10) * 10;
    this.width  = 1;
    this.height = 1;
    this.board.addFood(this);
}




module.exports = {Food: Food};