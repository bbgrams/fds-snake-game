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
  this.currentKey = 1;

  // 먹이의 좌표
  this.fruit = {x: 3, y: 5};
  this.direction = 'right'
}
SnakeGameLogic.prototype.circle = function(x, y){
  for ( let i = 1; i < this.joints.length; i++){
    if ( this.joints[i].x === this.joints[0].x && this.joints[i].y === this.joints[0].y){
      return true;
    }
  }
  return false;
}

SnakeGameLogic.prototype.eat = function(){
  if ( this.joints[0].x === this.fruit.x && this.joints[0].y === this.fruit.y){
    return true;
    return false;
  }
}

SnakeGameLogic.prototype.setFruit = function(){
  this.fruit.x = Math.floor(Math.random() * COLS );
  this.fruit.y = Math.floor(Math.random() * ROWS );
  if ( this.joints.some(item => item.x === this.fruit.x) &&
       this.joints.some(item => item.y === this.fruit.y)){
         this.setFruit();
       }
}

SnakeGameLogic.prototype.up = function() {
  // 위쪽 화살표 키를 누르면 실행되는 함수
  this.currentKey = 0;
}

SnakeGameLogic.prototype.down = function() {
  // 아래쪽 화살표 키를 누르면 실행되는 함수
  console.log('down');
  // 배열안의 객체안의 숫자를 변경하고싶다.
  this.currentKey = 2;
}

SnakeGameLogic.prototype.left = function() {
  // 왼쪽 화살표 키를 누르면 실행되는 함수
  this.currentKey = 3;
}

SnakeGameLogic.prototype.right = function() {
  // 오른쪽 화살표 키를 누르면 실행되는 함수
  this.currentKey = 1;
}

SnakeGameLogic.prototype.nextState = function() {
  // 한 번 움직여야 할 타이밍마다 실행되는 함수
  // 게임이 아직 끝나지 않았으면 `true`를 반환
  // 게임이 끝났으면 `false`를 반환
  // console.log(`nextState`);
  let tail;

  if(this.eat()){
    tail = this.joints.slice();
    this.setFruit();
  }else{
    tail = this.joints.pop();
  }

  tail.x = this.joints[0].x;
  tail.y = this.joints[0].y;

  if ( this.currentKey === 0){ // currentKey 말고 direction = 'right' 를 이용해서도 할 수 있다. 이게 더 직관적일수도.
    tail.y--;
  }else if ( this.currentKey === 1){
    tail.x++;
  }else if ( this.currentKey === 2){
    tail.y++;
  }else if( this.currentKey === 3){
    tail.x--;
  }
  this.joints.unshift(tail);

  if( this.joints[0].x < 0 || this.joints[0].x >= COLS ||
      this.joints[0].y < 0 || this.joints[0].y >= ROWS){
        return false
  }

  if( this.circle()){
    return false
  }
  

  return true;
  
  
}

export default SnakeGameLogic;
