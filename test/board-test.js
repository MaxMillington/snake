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
        let board = new Board(20, 0);
        assert.equal(board.columns, 20);
    });

    it('has rows', function() {
        let board = new Board(0, 30);
        assert.equal(board.rows, 30);
    });

});