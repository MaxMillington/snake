const chai = require('chai');
const assert = chai.assert;
const Snake = require('../lib/index');

describe('my test suite', function () {
    it('should work', function () {
        assert(true);
    });
});
describe('Snake', function () {
    it('should instantiate with an x, y, height, and width', function(){
        let bodyPart = new BodyPart({ x: 20, y: 20, width: 30, height: 30});
        assert.equal(bodyPart.x, 20);
        assert.equal(bodyPart.width, 30);
        assert.equal(bodyPart.height, 30);
        assert.equal(bodyPart.y, 20);
    });
});