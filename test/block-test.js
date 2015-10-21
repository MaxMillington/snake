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
});
