const Block    = require('../lib/block').Block;
const Board    = require('../lib/board').Board;
const Snake    = require('../lib/snake').Snake;
const Food     = require('../lib/food').Food;

let canvas = document.getElementById('game');
let context = canvas.getContext('2d');

let board = new Board(600, 600);
let snake = new Snake(board)

let direction = '0';

// function checkDirection() {
    // document.onkeydown = function(e) {
    //     if(e){
    //         let direction = e.keyCode;
    //         console.log(direction)
    //     }
    // }
// }

// console.log(checkDirection())

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  board.draw(canvas, context);
  document.onkeydown = function(e) {
        if(e){
            direction = e.keyCode.toString();
        }
    }
  snake.move(direction)
  // console.log(snake.move(direction))
  requestAnimationFrame(gameLoop);
});
