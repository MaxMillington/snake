const chai     = require('chai');
const assert   = chai.assert;
const Block = require('../lib/snake').Block;
const Snake    = require('../lib/snake').Snake;

describe('Snake', function () {
  it('exists', function () {
    assert(new Snake());
  });

  it('has a head and a body', function () {
    let snake = new Snake();
    assert.equal(snake.head.x, 40);
    assert.equal(snake.head.y, 40);
    assert.equal(snake.head.width, 10);
    assert.equal(snake.head.height, 10);
    assert(snake.body)
  });

  it('should have a draw method', function () {
    let snake = new Snake();
    assert(snake.draw);
  });

  it('appends body part when it eats', function () {
    let snake = new Snake();
    snake.eat();
    assert(snake.body[1]);
    assert.equal(snake.body.length, 2)
  });
});


describe('Block', function () {
  it('exists', function () {
    assert(new Block(20, 20, 30, 30));
  });

  it('should instantiate with an x, y, height, and width', function(){
      let block = new Block(20, 20);
      assert.equal(block.x, 20);
      assert.equal(block.y, 20);
      assert.equal(block.width, 10);
      assert.equal(block.height, 10);
  });

  it('draws', function () {
    let snake = new Snake();
    assert(snake.draw);
  })
});


