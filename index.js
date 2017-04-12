const numberRepresentation = require('./number-representations');

/**
 * Main entry point
 * @param {*} number 
 */
function getLcdLinesFromNumber(number) {
  const numberAsLcdArray = [];
  for (c of number.toString()) {
    numberAsLcdArray.push(numberRepresentation[parseInt(c)]);
  }
  return getLcdLinesFromNumberRepresentations(numberAsLcdArray);
}

/**
 * Convert number array to printable string
 * @param {*} numbers 
 */
function getLcdLinesFromNumberRepresentations(numbers) {
  const lcdLines = ['', '', ''];
  numbers.forEach((n, index) => {
    lcdLines[0] += n[0];
    lcdLines[1] += n[1];
    lcdLines[2] += n[2];
    if (index != numbers.length - 1) {
      lcdLines[0] += ' ';
      lcdLines[1] += ' ';
      lcdLines[2] += ' ';
    }
  })
  return lcdLines;
}


function printNumberToLcd(number) {
  getLcdLinesFromNumber(number)
    .forEach(a => console.log(a));
}


printNumberToLcd(12);
printNumberToLcd(1111);
printNumberToLcd(12122);



module.exports = {
  getLcdLinesFromNumber,
  getLcdLinesFromNumberRepresentations,
  printNumberToLcd
}