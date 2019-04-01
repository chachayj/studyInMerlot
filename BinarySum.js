const readline = require('readline');

class BinarySum {
    constructor() {
    }

    execute() {
        let filTheArray = this.filTheArray;
        let sum = this.sum;
        let makeArrayToString = this.makeArrayToString;

        const readlineInterFacing = readline.createInterface({
            input: process.stdin,
            output: process.stdout
          });
        
          readlineInterFacing.on('line', function(line) {
            let carry = 0;
            let arr = [];
            let arr1 = [];
            let arr2 = [];
            let result = [];
            
            line.split('+').map((inputData) => {
                console.log(inputData);
                let checkNum = inputData.split('');
                checkNum.forEach(element => {
                    if(element == 1 || element == 0){
                   
                    } else {
                        throw new Error('1 또는 0을 입력하세요.');
                    } 
                });

                arr.push(inputData);
            });
            
        
            arr1 = arr[0].split('');
            arr2 = arr[1].split('');
            
            filTheArray(arr1, arr2);
            
            sum(arr1, arr2, result, carry);
            
            result = makeArrayToString(result);
        
            console.log('결과값: ' + result); 
          })
            .on('close', function() {
        
              process.exit();
            });
    }

    sum(arr1, arr2, result, carry) {
        for (let i = arr1.length - 1; i >= 0; i--) {
            switch (carry) {
            case 0: {
                if ((arr1[i] == '1') && (arr2[i] == '1')) {
                    result.push('0');
                    carry = 1;
                    if(i === 0){
                        result.push('1');
                    }
                } else if ((arr1[i] == '0') && (arr2[i] == '0')) {
                    result.push('0');
                }
    
                else {
                    result.push('1');
                }
                break;
            }
            case 1: {
                if ((arr1[i] == '1') && (arr2[i] == '1')){
                    result.push('1');
                    carry = 1;
                    if(i === 0){
                        result.push('1');
                    }
                }
                else if ((arr1[i] == '0') && (arr2[i] == '0')) {
                    result.push('1');
                    carry = 0;
                } else{
                    result.push('0');
                    carry = 1;
                    if(i === 0){
                        result.push('1');
                    }
                }
                break;
            }
          }
        }
    }

    filTheArray(arr1, arr2) {
        if(arr1.length > arr2.length){
            let insertZero = arr1.length - arr2.length
            for (let i = insertZero -1; i >= 0; i--) {
                arr2.unshift(0);
            }
            
        } else if (arr2.length > arr1.length){
            let insertZero = arr2.length - arr1.length
            for (let i = insertZero -1; i >= 0; i--) {
                arr1.unshift(0);
            }
        }
    }

    
    makeArrayToString(result){
        result = result.reverse();
        result = result.join();
        for (let index = 0; index < result.length; index++) {
            result = result.replace(',','');
        }
        return result;
    }
  
}

module.exports = BinarySum;