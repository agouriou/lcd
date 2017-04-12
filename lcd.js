/**
 * A numberRepresentation is an array containing 3 strings of 3 charachters,
 * each stirng corresponding to a line of the lcd representation
 */
const numberRepresentation = require('./number-representations');

/**
 * Print this number to console
 * Handles numbers from 0 to 4.
 * 01 will be printed as '01' (and not '1')
 * @param {string} numberAsString 
 */
function printNumberToLcd(numberAsString) {
  getLcdLinesFromNumber(numberAsString)
    .forEach(a => console.log(a));
}

/**
 * Return the lcd lines representing this number.
 * 
 * @param {string} numberAsString a number to print as lcd
 */
function getLcdLinesFromNumber(numberAsString) {
  const allLcdRepresentations = [];
  for (c of numberAsString) {
    const rep = numberRepresentation[parseInt(c)];
    if(!rep){
      throw new Error(`Oops, representation for ${c} doesn't exist`)
    }
    allLcdRepresentations.push(rep);
  }
  return getLcdLinesFromNumberRepresentations(allLcdRepresentations);
}

/**
 * Convert number array to printable string
 * @param {numberRepresentation[]} numbers 
 */
function getLcdLinesFromNumberRepresentations(numbers) {
  const lcdLines = ['', '', ''];
  numbers.forEach((n, index) => {
    for (let i in [0, 1, 2]) {
      lcdLines[i] += n[i];
    }
  });
  return lcdLines;
}


module.exports = {
  getLcdLinesFromNumber,
  getLcdLinesFromNumberRepresentations,
  printNumberToLcd
}