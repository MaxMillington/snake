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
    let block = this.board.addBlock(100, 100);
    assert.equal(block.x, 100);
  });

  it('should have access to a Boards Y-coordinate', function () {
    let block = this.board.addBlock(100, 100);
    assert.equal(block.y, 100);
  });

  it('should be a member of the board passed in', function () {
    let block = this.board.addBlock(50, 50);
    assert.include(this.board.blocks, block);
  });
});

describe('canMoveDown', function () {
  beforeEach(function () {
    this.board = new Board(300, 200);
  });

  it('should be true if it can move down', function () {
    let block = this.board.addBlock(10, 100);
    assert.equal(block.canMoveDown(), true);
  });

  it('should be false if at the bottom edge of the board', function () {
    let block = this.board.addBlock(10, 200);
    assert.equal(block.canMoveDown(), false);
  });

});

describe('canMoveRight', function () {
  beforeEach(function () {
    this.board = new Board(300, 200);
  });

  it('should be true if it can move right', function () {
    let block = this.board.addBlock(10, 10);
    assert.equal(block.canMoveRight(), true);
  });

  it('should be false if against the right wall', function () {
    let block = this.board.addBlock(300, 10);
    assert.equal(block.canMoveRight(), false);
  });


});
