const chai     = require('chai');
const assert   = chai.assert;
const Block    = require('../lib/snake').Block;
const Snake    = require('../lib/snake').Snake;
const Board    = require('../lib/board').Board;

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

    it('has an array of blocks', function() {
        let board = new Board(600, 600);
        assert.isArray(board.blocks);
    });

    describe('findBlockAtCoodinates', function() {
        it('should find a block at given coordinates', function() {
            let board = new Board(600, 600);
            let block = new Block(300, 200, board);
            board.blocks.push(block);
            assert.equal(board.findBlock(300, 200), block);
        });
    });
});