const MatchingBrace = require('../src/MatchingBrace');

(() => {
  try {
    const matchingBrace = new MatchingBrace;
    matchingBrace.execute();
  } catch (error) {
    console.log(error);
  }

})();
