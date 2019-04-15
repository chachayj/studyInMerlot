
const BuddySystem = require('../src/BuddySystem');

const readline = require('readline');

( () => {
    
    try {
        const buddySystem = new BuddySystem();
        

        const readlineInterFacing = readline.createInterface({
            input: process.stdin,
            output: process.stdout
          });
          let menu;
          let id = 0;
        readlineInterFacing.on('line', function(line) {
            
            
            line.split().map((inputData) => {
                if(inputData==1){
                    console.log("----------메모리 할당-------");
                    menu = 1;
                   
                } else if(menu == 1){
                    
                    buddySystem.allocate(inputData);

                    // buddyRepository.setId();
                }
                //    winner = theStoneGame.execute(inputData);
            });
            
           

            // theStoneGame.showWinner(winner);
      
        })
        .on('close', function() {
            process.exit();
        });
    
        
    } catch (error) {
        console.log(error);
    }
    
})();
