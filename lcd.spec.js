const lcd = require('./lcd');
const numbers = require('./number-representations');

describe('tests', () => {

  const one = numbers[1];
  const two = numbers[2];

  const twelve = [
    '    _ ',
    '  | _|',
    '  ||_ '
  ];

  it('should create lines for 1', () => {
    expect(lcd.getLcdLinesFromNumberRepresentations([one])).toEqual(one);
  });

  it('should create lines 2', () => {
    expect(lcd.getLcdLinesFromNumberRepresentations([two])).toEqual(two);
  });

  it('should create lines 12', () => {

    expect(lcd.getLcdLinesFromNumberRepresentations([one, two])).toEqual(twelve);
  });

  it('should print 1 to lcd', () => {
    expect(lcd.getLcdLinesFromNumber('1')).toEqual(one);
  });

  it('should print 2 to lcd', () => {
    expect(lcd.getLcdLinesFromNumber('2')).toEqual(two);
  });

  it('should print 12 to lcd', () => {
    expect(lcd.getLcdLinesFromNumber('12')).toEqual(twelve);
  });

  it('should print 3 to lcd', () => {
    const res = [
      ' _  _ ',
      '| | _|',
      '|_| _|'
    ]
    expect(lcd.getLcdLinesFromNumber('03')).toEqual(res);
  });

  it('should print 42 to lcd', () => {
    const res = [
      '    _ ',
      '|_| _|',
      '  ||_ '
    ]
    expect(lcd.getLcdLinesFromNumber('42')).toEqual(res);
  });
})
