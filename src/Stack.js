//Stack 클래스

class Stack {
  constructor() {
    //스택의 요소가 저장되는 배열
    this.dataStore = [];

    //스택의 위치
    this.top = -1;
  }

  push(element) {
    this.top = this.top + 1;
    this.dataStore[this.top] = element;
  }

  //스택의 꼭대기의 요소를 반환한다.
  //단 top이 감소하는것은 아니다.
  peek() {
    return this.dataStore[this.top];
  }

  //스택 최상층의 요소를 반환한다.
  pop() {
    //Stack underflow
    if (this.top <= -1) {
      console.log('Stack underflow!!!');
      return;
    } else {
      var popped = this.dataStore[this.top];

      //top을 1 감소시킨다.
      this.top = this.top - 1;
      return popped;
    }
  }

  // 전체 요소를 삭제한다.
  clear() {
    this.top = -1;
  }

  //스택에 저장된 데이터 수
  length() {
    return this.top + 1;
  }

}

module.exports = Stack;
