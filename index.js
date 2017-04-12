const lcd = require('./lcd');

if(process.argv.length != 3 || isNaN(parseInt(process.argv[2]))){
  console.error('Usage: npm start <number>');
  process.exit(-1)
}

lcd.printNumberToLcd(process.argv[2]);