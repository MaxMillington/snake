const chai     = require('chai');
const assert   = chai.assert;
const Block    = require('../lib/block').Block;
const Board    = require('../lib/board').Board;
const Snake    = require('../lib/snake').Snake;
const Food     = require('../lib/food').Food;

describe('Snake', function () {
  it('exists', function () {
    let board = new Board(60, 60);
    assert(new Snake(board));
  });

  it('has a head and a body', function () {
    let board = new Board(60, 60);
    let snake = new Snake(board);
    assert.equal(snake.head.x, 40);
    assert.equal(snake.head.y, 40);
    assert.equal(snake.head.width, 1);
    assert.equal(snake.head.height, 1);
    assert(snake.body)
  });

  it('should have a draw method', function () {
    let board = new Board(60, 60);
    let snake = new Snake(board);
    assert(snake.draw);
  });

  describe('Snake Eats', function () {
    it('eats block and appends block to end of body', function () {
      let board = new Board(60, 60);
      let snake = new Snake(board);
      assert.equal(snake.body.length, 1);
      let block = new Block(snake.board, 50, 40);
      snake.eat(block)
      assert.equal(snake.body.length, 2)
    })
  });

  describe('canMoveDown', function () {
    it('should be true if it can move down', function () {
      let board = new Board(60, 60);
      let snake = new Snake(board);
      snake.head.x = 10;
      snake.head.y = 10;
      assert.equal(snake.canMoveDown(), true);
    });

    it('should be false if at the bottom edge of the board', function () {
      let board = new Board(30, 20);
      let snake = new Snake(board);
      snake.head.x = 1;
      snake.head.y = 20;
      assert.equal(snake.canMoveDown(), false);
    });

});

describe('canMoveRight', function () {

  it('should be true if it can move right', function () {
    let board = new Board(30, 20);
    let snake = new Snake(board);
    snake.head.x = 1;
    snake.head.y = 20;
    assert.equal(snake.canMoveRight(), true);
  });

  it('should be false if against the right wall', function () {
    let board = new Board(30, 20);
    let snake = new Snake(board);
    snake.head.x = 30;
    snake.head.y = 20;
    assert.equal(snake.canMoveRight(), false);
  });

});

describe('canMoveLeft', function () {

  it('should be true if it can move left', function () {
    let board = new Board(30, 20);
    let snake = new Snake(board);
    snake.head.x = 10;
    snake.head.y = 1;
    assert.equal(snake.canMoveLeft(), true);
  });

  it('should be false if against the Left wall', function () {
    let board = new Board(30, 20);
    let snake = new Snake(board);
    snake.head.x = 0;
    snake.head.y = 1;
    assert.equal(snake.canMoveLeft(), false);
  });

});

describe('canMoveUp', function () {

  it('should be true if it can move up', function () {
    let board = new Board(30, 20);
    let snake = new Snake(board);
    snake.head.x = 10;
    snake.head.y = 10;
    assert.equal(snake.canMoveUp(), true);
  });

  it('should be false if against the top wall', function () {
    let board = new Board(30, 20);
    let snake = new Snake(board);
    snake.head.x = 5;
    snake.head.y = 0;
    assert.equal(snake.canMoveUp(), false);
  });

});


  describe('Snake Moves Right', function () {
    it('body block, on the same y-axis of the head block takes the coordinates of the head block once the head block moves right', function () {
      let board = new Board(60, 60);
      let snake = new Snake(board);
      let block = new Block(board, 39, 40);
      let food   = new Food(board);
      snake.body.push(block);
      snake.move('39');
      assert.equal(snake.head.x, 41);
      assert.equal(snake.head.y, 40);
      assert.equal(snake.body[1].x, 40);
      assert.equal(snake.body[1].y, 40)
    });

    it('body block, on the same x-axis of the head block takes the coordinates of the head block once the head block moves right', function () {
      let board = new Board(60, 60);
      let snake = new Snake(board);
      let block = new Block(board, 40, 39);
      let food   = new Food(board);
      snake.body.push(block);
      snake.move('39');
      assert.equal(snake.head.x, 41);
      assert.equal(snake.head.y, 40);
      assert.equal(snake.body[1].x, 40);
      assert.equal(snake.body[1].y, 40)
    });

    it('moves 3-block snake into the right coordinates when the head moves right', function () {
      let board = new Board(60, 60);
      let snake = new Snake(board);
      let block1 = new Block(board, 40, 41);
      let block2 = new Block(board, 40, 42);
      let food   = new Food(board);
      snake.body.push(block1);
      snake.body.push(block2);
      snake.move('39');

      assert.equal(snake.head.x, 41);
      assert.equal(snake.head.y, 40);

      assert.equal(snake.body[1].x, 40);
      assert.equal(snake.body[1].y, 40);

      assert.equal(snake.body[2].x, 40);
      assert.equal(snake.body[2].y, 41);
    });

    it('moves 4-block snake into the right coordinates when the head moves right', function () {
      let board = new Board(60, 60);
      let snake = new Snake(board);
      let block1 = new Block(board, 40, 39);
      let block2 = new Block(board, 39, 39);
      let block3 = new Block(board, 39, 40);
      let food   = new Food(board);
      snake.body.push(block1);
      snake.body.push(block2);
      snake.body.push(block3);
      snake.move('39');

      assert.equal(snake.head.x, 41);
      assert.equal(snake.head.y, 40);

      assert.equal(snake.body[1].x, 40);
      assert.equal(snake.body[1].y, 40);

      assert.equal(snake.body[2].x, 40);
      assert.equal(snake.body[2].y, 39);

      assert.equal(snake.body[3].x, 39);
      assert.equal(snake.body[3].y, 39)
    });
  });

  describe('Snake Moves Up', function () {
    it('body block, on the same y-axis of the head block takes the coordinates of the head block once the head block moves up', function () {
      let board = new Board(60, 60);
      let snake = new Snake(board);
      let block = new Block(board, 39, 40);
      let food   = new Food(board);
      snake.body.push(block);
      snake.move('40');
      assert.equal(snake.head.x, 40);
      assert.equal(snake.head.y, 41);
      assert.equal(snake.body[1].x, 40);
      assert.equal(snake.body[1].y, 40)
    });

    it('body block, on the same x-axis of the head block takes the coordinates of the head block once the head block moves up', function () {
      let board = new Board(60, 60);
      let snake = new Snake(board);
      let block = new Block(board, 40, 39);
      let food   = new Food(board);
      snake.body.push(block);
      snake.move('40');
      assert.equal(snake.head.x, 40);
      assert.equal(snake.head.y, 41);
      assert.equal(snake.body[1].x, 40);
      assert.equal(snake.body[1].y, 40)
    });

    it('moves 3-block snake into the right coordinates when the head moves up', function () {
      let board = new Board(60, 60);
      let snake = new Snake(board);
      let block1 = new Block(board, 40, 39);
      let block2 = new Block(board, 40, 38);
      let food   = new Food(board);
      snake.body.push(block1);
      snake.body.push(block2);
      snake.move('40');

      assert.equal(snake.head.x, 40);
      assert.equal(snake.head.y, 41);

      assert.equal(snake.body[1].x, 40);
      assert.equal(snake.body[1].y, 40);

      assert.equal(snake.body[2].x, 40);
      assert.equal(snake.body[2].y, 39)
    });

    it('moves 4-block snake into the right coordinates when the head moves Up', function () {
      let board = new Board(60, 60);
      let snake = new Snake(board);
      let block1 = new Block(board, 40, 39);
      let block2 = new Block(board, 39, 39);
      let block3 = new Block(board, 39, 40);
      let food   = new Food(board);
      snake.body.push(block1);
      snake.body.push(block2);
      snake.body.push(block3);
      snake.move('40');

      assert.equal(snake.head.x, 40);
      assert.equal(snake.head.y, 41);

      assert.equal(snake.body[1].x, 40);
      assert.equal(snake.body[1].y, 40);

      assert.equal(snake.body[2].x, 40);
      assert.equal(snake.body[2].y, 39);

      assert.equal(snake.body[3].x, 39);
      assert.equal(snake.body[3].y, 39)
    });
  });

  describe('Snake Moves Down', function () {
    it('body block, on the same y-axis of the head block takes the coordinates of the head block once the head block moves down', function () {
      let board = new Board(60, 60);
      let snake = new Snake(board);
      let block = new Block(board, 39, 40);
      let food   = new Food(board);
      snake.body.push(block);
      snake.move('38');
      assert.equal(snake.head.x, 40);
      assert.equal(snake.head.y, 39);
      assert.equal(snake.body[1].x, 40);
      assert.equal(snake.body[1].y, 40)
    });

    it('body block, on the same x-axis of the head block takes the coordinates of the head block once the head block moves down', function () {
      let board = new Board(60, 60);
      let snake = new Snake(board);
      let block = new Block(board, 40, 41);
      let food   = new Food(board);
      snake.body.push(block);
      snake.move('38');
      assert.equal(snake.head.x, 40);
      assert.equal(snake.head.y, 39);
      assert.equal(snake.body[1].x, 40);
      assert.equal(snake.body[1].y, 40)
    });

    it('moves 3-block snake into the right coordinates when the head moves down', function () {
      let board = new Board(60, 60);
      let snake = new Snake(board);
      let block1 = new Block(board, 40, 41);
      let block2 = new Block(board, 40, 42);
      let food   = new Food(board);
      snake.body.push(block1);
      snake.body.push(block2);
      snake.move('38');

      assert.equal(snake.head.x, 40);
      assert.equal(snake.head.y, 39);

      assert.equal(snake.body[1].x, 40);
      assert.equal(snake.body[1].y, 40);

      assert.equal(snake.body[2].x, 40);
      assert.equal(snake.body[2].y, 41);
    });

    it('moves 4-block snake into the right coordinates when the head moves down', function () {
      let board = new Board(60, 60);
      let snake = new Snake(board);
      let block1 = new Block(board, 40, 39);
      let block2 = new Block(board, 39, 39);
      let block3 = new Block(board, 39, 40);
      let food   = new Food(board);
      snake.body.push(block1);
      snake.body.push(block2);
      snake.body.push(block3);
      snake.move('38');

      assert.equal(snake.head.x, 40);
      assert.equal(snake.head.y, 39);

      assert.equal(snake.body[1].x, 40);
      assert.equal(snake.body[1].y, 40);

      assert.equal(snake.body[2].x, 40);
      assert.equal(snake.body[2].y, 39);

      assert.equal(snake.body[3].x, 39);
      assert.equal(snake.body[3].y, 39);
    });
  });

  describe('Snake Moves Left', function () {
    it('body block, on the same y-axis of the head block takes the coordinates of the head block once the head block moves left', function () {
      let board = new Board(60, 60);
      let snake = new Snake(board);
      let block = new Block(board, 39, 40);
      let food   = new Food(board);
      snake.body.push(block);
      snake.move('37');
      assert.equal(snake.head.x, 39);
      assert.equal(snake.head.y, 40);
      assert.equal(snake.body[1].x, 40);
      assert.equal(snake.body[1].y, 40)
    });

    it('body block, on the same x-axis of the head block takes the coordinates of the head block once the head block moves left', function () {
      let board = new Board(60, 60);
      let snake = new Snake(board);
      let block = new Block(board, 40, 41);
      let food   = new Food(board);
      snake.body.push(block);
      snake.move('37');
      assert.equal(snake.head.x, 39);
      assert.equal(snake.head.y, 40);
      assert.equal(snake.body[1].x, 40);
      assert.equal(snake.body[1].y, 40)
    });

    it('moves 3-block snake into the right coordinates when the head moves left', function () {
      let board = new Board(60, 60);
      let snake = new Snake(board);
      let block1 = new Block(null, 40, 41);
      let block2 = new Block(null, 40, 42);
      let food   = new Food(board);
      snake.body.push(block1);
      snake.body.push(block2);
      snake.move('37');

      assert.equal(snake.head.x, 39);
      assert.equal(snake.head.y, 40);

      assert.equal(snake.body[1].x, 40);
      assert.equal(snake.body[1].y, 40);

      assert.equal(snake.body[2].x, 40);
      assert.equal(snake.body[2].y, 41);
    });

    it('moves 4-block snake into the right coordinates when the head moves left', function () {
      let board = new Board(60, 60);
      let snake = new Snake(board);
      let block1 = new Block(null, 40, 39);
      let block2 = new Block(null, 39, 39);
      let block3 = new Block(null, 39, 40);
      let food   = new Food(board);
      snake.body.push(block1);
      snake.body.push(block2);
      snake.body.push(block3);
      snake.move('37');

      assert.equal(snake.head.x, 39);
      assert.equal(snake.head.y, 40);

      assert.equal(snake.body[1].x, 40);
      assert.equal(snake.body[1].y, 40);

      assert.equal(snake.body[2].x, 40);
      assert.equal(snake.body[2].y, 39);

      assert.equal(snake.body[3].x, 39);
      assert.equal(snake.body[3].y, 39);
    });
  });

  describe('snake head checks for body parts', function () {
    it('cannot move left onto itself', function () {
      let board = new Board(60, 60);
      let snake = new Snake(board);
      let block1 = new Block(snake.board, 40, 39);
      let block2 = new Block(snake.board, 39, 39);
      let block3 = new Block(snake.board, 39, 40);
      let block4 = new Block(snake.board, 30, 41);
      let food   = new Food(board);
      snake.eat(block1);
      snake.eat(block2);
      snake.eat(block3);
      snake.eat(block4);

      assert.equal(snake.body.length, 5);
      assert.equal(snake.canMoveLeft(), false);
    });

    it('cannot move right onto itself', function () {
      let board = new Board(60, 60);
      let snake = new Snake(board);
      let block1 = new Block(snake.board, 40, 39);
      let block2 = new Block(snake.board, 41, 40);
      let block3 = new Block(snake.board, 41, 41);
      let block4 = new Block(snake.board, 41, 42);
      let food   = new Food(board);
      snake.eat(block1);
      snake.eat(block2);
      snake.eat(block3);
      snake.eat(block4);

      assert.equal(snake.canMoveRight(), false);
    });

    it('cannot move up onto itself', function () {
      let board = new Board(60, 60);
      let snake = new Snake(board);
      let block1 = new Block(snake.board, 39, 40);
      let block2 = new Block(snake.board, 39, 39);
      let block3 = new Block(snake.board, 40, 39);
      let block4 = new Block(snake.board, 41, 39);
      let food   = new Food(board);
      snake.eat(block1);
      snake.eat(block2);
      snake.eat(block3);
      snake.eat(block4);

      assert.equal(snake.canMoveUp(), false);
    });

     it('cannot move down onto itself', function () {
       let board  = new Board(60, 60);
       let snake  = new Snake(board);
       let block1 = new Block(snake.board, 39, 40);
       let block2 = new Block(snake.board, 39, 41);
       let block3 = new Block(snake.board, 40, 41);
       let block4 = new Block(snake.board, 41, 41);
       let food   = new Food(board);
       snake.eat(block1);
       snake.eat(block2);
       snake.eat(block3);
       snake.eat(block4);

       assert.equal(snake.canMoveDown(), false);
     });
  });

  describe('SnakeEatsFood', function () {
    it('eats when the head has same coordinates as food', function () {
      let board  = new Board(60, 60);
      let snake  = new Snake(board);
      let food   = new Food(board);
      food.x     = 41
      food.y     = 40
      assert.equal(snake.body.length, 1)
      snake.move('39')
      assert.equal(snake.body.length, 2)
    })
  })

});
