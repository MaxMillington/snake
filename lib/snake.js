//const $ = require('jquery');

//var canvas = document.getElementById('game');
//var context = canvas.getContext('2d');
//var list = [];
//var x = 50;
//var y = 50;
//var width = 10;
//var height = 10;

function BodyPart(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}

//var bodyPart = new BodyPart();
//var snake = new Snake();

//createSnake(snake);

function Snake() {
   this.body = [new BodyPart(40,40,10,10)];
   this.head = this.body[0];
}

Snake.prototype.eat = function () {
    var newBodyPart = new BodyPart("what goes here")
    this.body.push(newBodyPart)
}

//BodyPart.prototype.draw = function () {
//    context.fillRect(x, y, width, height);
//};


//function createSnake(snake) {
//    for (i=0; i < 10; i++){
//        snake.body.push(new bodyPart(snake.body[snake.body.length-1].x - 1,
//            snake.body[snake.body.length-1].y))
//    }
//};


module.exports = { Snake: Snake, BodyPart: BodyPart};
