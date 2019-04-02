class TheStoneGame {

    execute(stone){
        let remainStone = stone;
        let winner;
        while (true) {
            for(let player = 0; player < 2; player++){
                if(player == 0){
                    // console.log('LN turn');
                    let LNtake = this.predictResult(remainStone);
                    // console.log('LNtake : '+ LNtake);
                    remainStone = this.takeStone(remainStone, LNtake);  
                    if(remainStone == 0) {
                        winner = 'LN';
                        break;
                    }
                } else if(player == 1){
                    // console.log('AR turn');
                    let ARtake = this.predictResult(remainStone);
                    // console.log('ARtake : '+ ARtake);
                    remainStone = this.takeStone(remainStone, ARtake);
                    if(remainStone == 0) {
                        winner = 'AR';
                        break;
                    }
                }
                
            }
            if(remainStone == 0) {
                break;
            }
        }
        return winner;
    }

    showWinner(winner){
        if(winner=='LN'){
            console.log("----------------------------- LN win -----------------------------");
        }else if(winner=='AR'){
            console.log("----------------------------- AR win -----------------------------");
        }
        
    }
    
    predictResult(stone){
        let takenPrediction;
        if(stone <= 0){
            takenPrediction = 0;
        } else if((stone - 2) == 3|| stone == 1 || (stone % 3 == 0 && stone != 3 && stone != 6)){
            takenPrediction = 1;
        } else if((stone - 3) == 3||stone == 2){
            takenPrediction = 2;
        } else {
            takenPrediction = 3; 
        }

        return takenPrediction;
    }

    takeStone(stones, take){
        return stones - take;
    }

}

module.exports = TheStoneGame;