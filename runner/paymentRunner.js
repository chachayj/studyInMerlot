
const ThePayment = require('../src/ThePayment');
const readline = require('readline');

( () => {
    
    try {
        const thePayment = new ThePayment();

        const readlineInterFacing = readline.createInterface({
            input: process.stdin,
            output: process.stdout
          });

        console.log('돈의 종류와 가격을 입력하시오 ex) 5,2000 ' );
        readlineInterFacing.on('line', function(line) {
            let payCount;
            let moneyType;
            let payment;
            let arr = [];

            line.split(',').map((inputData) => {
              arr.push(inputData);

            });
            moneyType = arr[0];
            payment = arr[1];

            payCount = thePayment.execute(moneyType, payment);
            thePayment.showPayCount(payCount);
      
        })
        .on('close', function() {
            process.exit();
        });
        
    } catch (error) {
        console.log(error);
    }
    
})();
