const chai     = require('chai');
const assert   = chai.assert;
const Block    = require('../lib/block').Block;
const Board    = require('../lib/board').Board;
const Snake    = require('../lib/snake').Snake;
const Food     = require('../lib/food').Food;


describe('Food', function () {
    it('exists', function () {
        let board = new Board(600, 600);
        assert(new Food(board));
    });

    it('has a location', function () {
        let board = new Board(600, 600);
        let food = new Food(board);
        assert(food.x);
        assert(food.y);
    });

    it('instantiates at a random location', function () {
        let board = new Board(600, 600);
        let food1 = new Food(board);
        let food2 = new Food(board);
        assert.notDeepEqual(food1, food2);
    });

    it('instantiates on the board', function () {
        let board = new Board(600, 600);
        let food = new Food(board);
        assert.deepEqual(board.food[0], food);
    });

    it('does not instantiate on top of the snake', function () {
        let board = new Board(600, 600);
        let snake = new Snake(board);
        let block1 = new Block(snake.board, 30, 40);
        let block2 = new Block(snake.board, 30, 50);
        let block3 = new Block(snake.board, 40, 50);
        let block4 = new Block(snake.board, 50, 50);
        snake.eat(block1);
        snake.eat(block2);
        snake.eat(block3);
        snake.eat(block4);
        let food = new Food(board);
    });
});

