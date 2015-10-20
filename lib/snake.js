// var canvas = document.getElementById('game');
// var context = canvas.getContext('2d');

function BodyPart(x, y, width, height, canvas, context) {
    this.x       = x;
    this.y       = y;
    this.width   = width;
    this.height  = height;
    this.canvas  = canvas
    this.context = context
}

function Snake() {
   this.body = [new BodyPart(40,40,10,10)];
   this.head = this.body[0];
   return this;
}

Snake.prototype.draw = function () {
  context.fillRect(this.head.x, this.head.y, this.head.width, this.head.height);
  return this;
};

// Snake.prototype.eat = function () {
//     var newBodyPart = new BodyPart("what goes here")
//     this.body.push(newBodyPart)
// }

module.exports = { Snake: Snake, BodyPart: BodyPart};
