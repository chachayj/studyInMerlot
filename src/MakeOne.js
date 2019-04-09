class MakeOne {

    execute(num){
        let remain = num;
        let count = 0;

        console.log("시작 : "+remain);
        return this._recursive(remain, count);
    }

    display(resultCount){
      console.log(`---------------- resultCount : ${resultCount} -------------`)
    }

    _recursive(remain, count){
        count++;

        if((remain - 1) % 3 == 0){
            remain = remain - 1;
        } else if(remain % 3 == 0){
            remain = remain / 3
        } else if (remain % 2 == 0){
            remain = remain / 2
        } else {
            remain = remain - 1;
        }

        console.log('remain: '+remain);
        if(remain <= 1){
            return count;
        }
        
        return this._recursive(remain, count);
        
    }


    
    
}

module.exports = MakeOne;