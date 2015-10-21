const chai     = require('chai');
const assert   = chai.assert;
const BodyPart = require('../lib/snake').BodyPart;
const Snake    = require('../lib/snake').Snake;
const Board    = require('../lib/board');

describe('Board', function () {

   it('exists', function () {
       assert(new Board());
   });

    it('has columns', function() {
        let board = new Board(600, 0);
        assert.equal(board.columns, 600);
    });

    it('has rows', function() {
        let board = new Board(0, 600);
        assert.equal(board.rows, 600);
    });

    it('has an array of squares', function() {
        let board = new Board(600, 600);
        assert.isArray(board.squares);
    });

});