const readline = require('readline');

class CountingContinuousString {
    constructor() {
    }

    execute() {
        let divideData = this.divideData;
        let makeString = this.makeString;

        const readlineInterFacing = readline.createInterface({
            input: process.stdin,
            output: process.stdout
          });
          let mergeString;
          readlineInterFacing.on('line', function(line) {
            let strArr = [];
            let countArr = Array(Array());
            let countIndex = 0;
            line.split('').map((inputData) => {

                let result = divideData(strArr, inputData, countArr, countIndex);
                strArr = result.strArr;
                countArr = result.countArr;
                countIndex = result.countIndex;
                
                mergeString = makeString(strArr, countArr, mergeString);
                

            });
            console.log('--------------');
            console.log('     결과     ');
            console.log(mergeString);
            console.log('              ');
            console.log('--------------');
        
          })
            .on('close', function() {
        
              process.exit();
            });
    }

    makeString(strArr, countArr, mergeString) {
        strArr.forEach((element, idx) => {
            if(idx == 0){
                mergeString = element+countArr[idx].length;
            } else {
                mergeString += element+countArr[idx].length;
            }
            
        });
        return mergeString;
    }
    
    divideData(strArr, inputData, countArr, countIndex){
        if(strArr.length === 0) {
            strArr.push(inputData);
            countArr[countIndex].push(inputData);
        } else {
            let lastString = strArr.slice(strArr.length-1, strArr.length);
                if(inputData != lastString){
                    strArr.push(inputData);
                    countIndex++;
                    countArr[countIndex] = Array();
                    countArr[countIndex].push(inputData);
                    
                } else{
                    countArr[countIndex].push(inputData);
                }
        }

        return {strArr, countArr, countIndex};
    }
    
  
}

module.exports = CountingContinuousString;