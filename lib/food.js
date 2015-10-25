const Block    = require('../lib/block').Block;
const Board    = require('../lib/board').Board;
const Snake    = require('../lib/snake').Snake;

function Food(board, x, y) {
    this.board  = board;
    this.x      = x;
    this.y      = y;
    this.width   = 10;
    this.height  = 10;
}

module.exports = {Food: Food};