function BodyPart(x, y, width, height) {
  this.x       = x;
  this.y       = y;
  this.width   = 10;
  this.height  = 10;
}

function Snake() {
   this.body = [new BodyPart(40,40)];
   this.head = this.body[0];
   return this;
}

Snake.prototype.draw = function () {
  context.fillRect(this.head.x, this.head.y, this.head.width, this.head.height);
  return this;
};

Snake.prototype.eat = function () {
  var xForBodyPart = (this.body[this.body.length - 1].x - 10)
  var yForBodyPart = (this.body[this.body.length - 1].y - 10)
  var newBodyPart = new BodyPart(xForBodyPart, yForBodyPart)
  this.body.push(newBodyPart)
}

module.exports = { Snake: Snake, BodyPart: BodyPart};
