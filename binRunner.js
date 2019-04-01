
const BinarySum = require('./BinarySum');


( () => {
    
    try {
        const binarySum = new BinarySum();
        binarySum.execute();
    } catch (error) {
        console.log(error);
    }
    
})();
