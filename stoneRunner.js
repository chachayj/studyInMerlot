
const TheStoneGame = require('./TheStoneGame');
const readline = require('readline');

( () => {
    
    try {
        const theStoneGame = new TheStoneGame();

        const readlineInterFacing = readline.createInterface({
            input: process.stdin,
            output: process.stdout
          });
        
        readlineInterFacing.on('line', function(line) {
            let winner;
            line.split().map((inputData) => {
               winner = theStoneGame.execute(inputData);
            });

            theStoneGame.showWinner(winner);
      
        })
        .on('close', function() {
            process.exit();
        });
        
    } catch (error) {
        console.log(error);
    }
    
})();
