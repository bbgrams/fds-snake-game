import {ROWS, COLS} from './config';

// NOTE: ROWS, COLS에는 행의 개수, 열의 개수가 저장되어 있습니다.
// 이 변수를 활용해서 코드를 작성하세요!

function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  this.joints = [
    { x: 2, y: 0 },
    { x: 1, y: 0 },
    { x: 0, y: 0 },
  ];

  // 먹이의 좌표
  this.fruit = {x: 3, y: 5};
  this.direction = 'right';
}

SnakeGameLogic.prototype.up = function() {
  // 위쪽 화살표 키를 누르면 실행되는 함수
  this.direction = 'up';
}

SnakeGameLogic.prototype.down = function() {
  // 아래쪽 화살표 키를 누르면 실행되는 함수
  this.direction = 'down';
}

SnakeGameLogic.prototype.left = function() {
  // 왼쪽 화살표 키를 누르면 실행되는 함수
  this.direction = 'left';
}

SnakeGameLogic.prototype.right = function() {
  // 오른쪽 화살표 키를 누르면 실행되는 함수
  this.direction = 'right';

}

SnakeGameLogic.prototype.nextState = function() {
  // 한 번 움직여야 할 타이밍마다 실행되는 함수
  // 게임이 아직 끝나지 않았으면 `true`를 반환
  // 게임이 끝났으면 `false`를 반환
  console.log(`nextState`);
  let newHead = this.joints
  // 'nextState'가 출력될때마다 움직인다.
  if (this.direction === 'up'){
    newHead.unshift({
      x : newHead[0].x,
      y : newHead[0].y - 1
    })
  } else if (this.direction === 'right') {
    newHead.unshift({
      x: newHead[0].x + 1,
      y: newHead[0].y
    })
  } else if(this.direction === 'down'){
    newHead.unshift({
      x: newHead[0].x,
      y: newHead[0].y + 1
    })
  } else if (this.direction === 'left') {
    newHead.unshift({
      x: newHead[0].x - 1,
      y: newHead[0].y
    })
  }
  
  // 먹이를 먹지 않았을 때는 꼬리가 떼지고 머리에 붙고,
  // 먹이를 먹었을 때는 꼬리가 떼지지 않고 머리가 붙는다.
  //                   랜덤한 위치에 먹이가 다시 생긴다.
  if ( newHead[0].x !== this.fruit.x || newHead[0].y !== this.fruit.y){
    newHead.pop()
  }else{
    this.fruit.x = Math.floor(Math.random() * COLS)
    this.fruit.y = Math.floor(Math.random() * ROWS)
  }


  

  return true;
  
  
}

export default SnakeGameLogic;
