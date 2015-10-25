const chai     = require('chai');
const assert   = chai.assert;
const Block    = require('../lib/block').Block;
const Board    = require('../lib/board').Board;
const Snake    = require('../lib/snake').Snake;
const Food     = require('../lib/food').Food;


describe('Food', function () {
    it('exists', function () {
        let board = new Board(60, 60);
        assert(new Food(board));
    });

    it('has a location', function () {
        let board = new Board(60, 60);
        let food = new Food(board);
        assert(food.x);
        assert(food.y);
    });

    it('instantiates at a random location', function () {
        let board = new Board(60, 60);
        let food1 = new Food(board);
        let food2 = new Food(board);
        assert.notDeepEqual(food1, food2);
    });

    it('instantiates on the board', function () {
        let board = new Board(60, 60);
        let food = new Food(board);
        assert.deepEqual(board.food[0], food);
    });

    it.skip('does not instantiate on top of the snake', function () {
        let board     = new Board(2, 2);
        let snake     = new Snake(board);
        snake.head.x  = 1;
        snake.head.y  = 1;
        let block1    = new Block(snake.board, 0, 1);
        let block2    = new Block(snake.board, 0, 0);
        snake.eat(block1);
        snake.eat(block2);
        let food      = new Food(board);
        console.log(food);
        assert.equal(food.x, 1);
        assert.equal(food.y, 0);
    });
});
