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
});
