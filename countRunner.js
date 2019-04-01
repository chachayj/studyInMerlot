
const CountingContinuousString = require('./CountingContinuousString');

( () => {
    try {
        const countingContinuousString = new CountingContinuousString;
        countingContinuousString.execute();
    } catch (error) {
        console.log(error);
    }
    
})();
