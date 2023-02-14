const WINNING_SUM = 123.40;

/**
@param {Array} cartItemsPrices
*/
function doesCartWinPrize(cartItemsPrices) {
  let sum = cartItemsPrices.map(e => +e)
    .reduce((a, b) => a + b).toFixed(2)
    
    return sum == WINNING_SUM.toFixed(2)
}

module.exports = doesCartWinPrize;
