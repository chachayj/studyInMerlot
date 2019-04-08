
const MakeOne = require('../src/MakeOne');
const readline = require('readline');

( () => {
    
    try {
        const makeOne = new MakeOne();

        const readlineInterFacing = readline.createInterface({
            input: process.stdin,
            output: process.stdout
          });
        
        readlineInterFacing.on('line', function(line) {
            line.split().map((inputData) => {
                if(isNaN(inputData)){
                    console.log('숫자를 입력하시오');
                    return;
                } else if (inputData <= 0 || inputData >= 1000000){
                    console.log('1 부터 1000000 까지 범위를 입력하시오');
                    return;
                } else {
                    var selector = "taskTime"
                    console.time(selector);
                    let resultCount = makeOne.execute(inputData);
                    makeOne.display(resultCount);
                    console.log('resultCount : '+ resultCount);
                    console.timeEnd(selector);
                
                }
               
            });
        })
        .on('close', function() {
            process.exit();
        });
        
    } catch (error) {
        console.log(error);
    }
    
})();
