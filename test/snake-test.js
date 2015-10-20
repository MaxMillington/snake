const chai = require('chai');
const assert = chai.assert;
const BodyPart = require('../lib/snake');

describe('my test suite', function () {
  it('should work', function () {
      assert(true);
  });
});

describe('Snake', function () {
  it('exists', function () {
    assert(new BodyPart);
  });

  // it('should instantiate with an x, y, height, and width', function(){
  //     let bodyPart = new BodyPart(20, 20, 30, 30);
  //     assert.equal(bodyPart.x, 20);
  //     assert.equal(bodyPart.width, 30);
  //     assert.equal(bodyPart.height, 30);
  //     assert.equal(bodyPart.y, 20);
  // });
});
