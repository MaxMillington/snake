const BodyPart = require('../lib/snake').BodyPart;
const Snake    = require('../lib/snake').Snake;


function Board(columns, rows) {
    this.columns = columns;
    this.rows    = rows;
    this.squares = [];
}

module.exports = Board;