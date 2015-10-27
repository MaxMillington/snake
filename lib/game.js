const Block    = require('../lib/block').Block;
const Board    = require('../lib/board').Board;
const Snake    = require('../lib/snake').Snake;
const Food     = require('../lib/food').Food;

let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

let board = new Board(600, 400);
let snake = new Snake(board);
let food  = new Food(board);

let direction = '0';

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  board.draw(context);
  food.draw(context);

  document.onkeydown = function(e) {
    direction = e.keyCode.toString();
  };
  snake.move(direction);
  requestAnimationFrame(gameLoop);
});
