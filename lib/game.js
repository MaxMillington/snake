////
//Snake.prototype.play = function() {
//    animate();
//};
//
//snake.play();
//
//function animate() {
//    requestAnimationFrame(function gameLoop() {
//        checkDirection();
//        context.clearRect(0, 0, canvas.width, canvas.height);
//        snake.draw();
//        if (direction != '0') {
//            snake.move();
//            list.push([snake.head.x, snake.head.y])
//            followHead(snake);
//        }
//        if(snake.head.checkValidity()){
//            requestAnimationFrame(gameLoop);
//        }
//    }, 60);
//    context.clearRect(0, 0, canvas.width, canvas.height);
//}
//
//function followHead(block) {
//    if(list.length > snake.body.length){
//        list.shift();
//    }
//    for(i = 0; i < list.length; i++){
//        snake.body[i].x = list[i][0]
//        snake.body[i].y = list[i][1]
//    }
//}
//
//function checkDirection() {
//    document.onkeydown = function(e) {
//        if(e){
//            direction = e;
//        }
//    }
//}
//
//Snake.prototype.move = function(e) {
//    if (direction.keyCode == '38') {
//        snake.head.subtractY();
//    }
//    else if (direction.keyCode == '40') {
//        snake.head.addY();
//    }
//    else if (direction.keyCode == '37') {
//        snake.head.subtractX();
//    }
//    else if (direction.keyCode == '39') {
//        snake.head.addX();
//    }
//};
//
//Snake.prototype.draw = function() {
//    for(i = 0; i < snake.body.length; i++){
//        snake.body[i].draw();
//    }
//};
//
//Block.prototype.subtractX = function() {
//    this.x -= 20
//};
//
//Block.prototype.subtractY = function() {
//    this.y -= 20
//};
//
//Block.prototype.addX = function() {
//    this.x += 20
//}
//
//Block.prototype.addY = function() {
//    this.y += 20
//}