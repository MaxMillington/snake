const chai     = require('chai');
const assert   = chai.assert;
const Block    = require('../lib/snake').Block;
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

  describe('Snake Moves', function () {
    it('moves two block snake right when both blocks are heading right', function () {
      let snake = new Snake();
      let block = new Block(null, 30, 40);
      snake.body.push(block)
      snake.move('39')
      assert.equal(snake.head.x, 50)
      assert.equal(snake.head.y, 40)
      assert.equal(snake.body[1].x, 40)
      assert.equal(snake.body[1].y, 40)
    });

    it('moves two block snake right when both blocks are heading down', function () {
      let snake = new Snake();
      let block = new Block(null, 40, 30);
      snake.body.push(block)
      snake.move('39')
      assert.equal(snake.head.x, 50)
      assert.equal(snake.head.y, 40)
      assert.equal(snake.body[1].x, 40)
      assert.equal(snake.body[1].y, 40)
    });
  });
});
