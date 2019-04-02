const Stack = require('./Stack');
const readline = require('readline');

class MatchingBrace {
  constructor() {
  }

  execute() {
    let stackClass = new Stack();
    let isMatching = this.isMatching;
    let isOpen = this.isOpen;
    let cleanUp = this.cleanUp;
    let printTrueOrFalse = this.printTrueOrFalse;
    let pushIntoStack = this.pushIntoStack;

    const readlineInterFacing = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    readlineInterFacing.on('line', function(line) {
      let underflow = false;
      line.split('').map((inputData) => {

        let result = pushIntoStack(inputData, stackClass, underflow, isOpen, isMatching);
        stackClass = result.stackClass;
        underflow = result.underflow;
      });

      printTrueOrFalse(stackClass, underflow);


      stackClass = cleanUp(stackClass);
    })
      .on('close', function() {
        process.exit();
      });

  }

  printTrueOrFalse(stackClass, underflow) {
    if (stackClass.top === -1 && underflow === false) {
      console.log('true');
    } else {
      console.log('false');
    }
  }

  cleanUp(stackClass) {
    stackClass.clear();
    stackClass.dataStore = [];

    return stackClass;
  }

  pushIntoStack(inputData, stackClass, underflow, isOpen, isMatching) {
    if (isOpen(inputData)) {
      stackClass.push(inputData);
    } else if (inputData === ')' || inputData === '}') {
      let popedData = stackClass.pop();
      if (popedData === undefined) {
        underflow = true;
      }
    } else if (isMatching(stackClass, inputData)) {
      stackClass.pop();
    }

    return {stackClass, underflow};
  }


  isMatching(stack, data) {
    if (stack.peek() === '(' && data === ')') {
      return true;
    } else if (stack.peek() === '{' && data === '}') {
      return true;
    } else if (stack.peek() === '{' && data === ')') {
      return false;
    } else if (stack.peek() === '(' && data === '}') {
      return false;
    } else {
      return false;
    }
  }

  isOpen(data) {
    if (data === '(' || data === '{') {
      return true;
    } else {
      return false;
    }
  }
}


module.exports = MatchingBrace;