const chai     = require('chai');
const assert   = chai.assert;
const BodyPart = require('../lib/snake').BodyPart;
const Snake    = require('../lib/snake').Snake;

describe('Snake', function () {
  // beforeEach(function () {
  //   this.canvas = document.createElement('canvas');
  //   this.canvas.id = 'game'
  //   this.canvas.width = 400;
  //   this.canvas.height = 400;
  //   this.context = canvas.getContext('2d');
  // });

  it('exists', function () {
    assert(new Snake());
  })

  it('has a head and a body', function () {
    let snake = new Snake();
    assert.equal(snake.head.x, 40)
    assert.equal(snake.head.y, 40)
    assert.equal(snake.head.width, 10)
    assert.equal(snake.head.height, 10)
    assert(snake.body)
  });

  it('should have a draw method', function () {
    let snake = new Snake();
    assert(snake.draw);
  });
});


describe('BodyPart', function () {
  it('exists', function () {
    assert(new BodyPart(20, 20, 30, 30));
  });

  it('should instantiate with an x, y, height, and width', function(){
      let bodyPart = new BodyPart(20, 20, 30, 30);
      assert.equal(bodyPart.x, 20);
      assert.equal(bodyPart.y, 20);
      assert.equal(bodyPart.width, 30);
      assert.equal(bodyPart.height, 30);
  });
});
