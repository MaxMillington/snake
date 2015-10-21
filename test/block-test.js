const chai     = require('chai');
const assert   = chai.assert;
const Block    = require('../lib/block').Block;
const Board    = require('../lib/board').Board;


describe('Block', function () {

  beforeEach(function () {
    this.board = new Board(300, 200);
  });

  it('should have access to a board', function () {
    let block = new Block(this.board);
    assert.equal(block.board, this.board);
  });

  it('should have access to a Boards X-coordinate', function () {
    let block = this.board.addBlock(10, 10);
    assert.equal(block.x, 10);
  });

  it('should have access to a Boards Y-coordinate', function () {
    let block = this.board.addBlock(10, 10);
    assert.equal(block.y, 10);
  });
});
