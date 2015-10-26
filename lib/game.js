const Block    = require('../lib/block').Block;
const Board    = require('../lib/board').Board;
const Snake    = require('../lib/snake').Snake;
const Food     = require('../lib/food').Food;

let canvas = document.getElementById('game');
let context = canvas.getContext('2d');

let board = new Board(600, 600);
let snake = new Snake(board)

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  board.draw(canvas, context)
  console.log("DO IT")
  requestAnimationFrame(gameLoop);
});

// module.exports = {GameLoop: gameLoop}
