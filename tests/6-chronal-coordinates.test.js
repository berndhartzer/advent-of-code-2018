const fs = require('fs');
const {
  chronalCoordinatesPartOne,
  chronalCoordinatesPartTwo,
} = require('../6-chronal-coordinates');

describe('6. Chronal Coordinates', () => {
  describe('Part one', () => {
    test('Test one', () => {
      const input = [
        '1, 1',
        '1, 6',
        '8, 3',
        '3, 4',
        '5, 5',
        '8, 9',
      ];
      const output = chronalCoordinatesPartOne(input);
      expect(output).toBe(17);
    });

    test('Actual input', () => {
      const input = fs
        .readFileSync('./inputs/6-chronal-coordinates.txt', 'utf8')
        .split('\n')
        .filter(x => x);
      const output = chronalCoordinatesPartOne(input);
      console.log(`Part one answer: ${output}`);
    });
  });

  describe('Part two', () => {
    test('Test one', () => {
      const input = [
        '1, 1',
        '1, 6',
        '8, 3',
        '3, 4',
        '5, 5',
        '8, 9',
      ];
      const output = chronalCoordinatesPartTwo(input);
      expect(output).toBe(17);
    });

    test.skip('Actual input', () => {
      const input = fs
        .readFileSync('./inputs/6-chronal-coordinates.txt', 'utf8')
        .split('\n')
        .filter(x => x);
      const output = chronalCoordinatesPartOne(input);
      console.log(`Part two answer: ${output}`);
    });
  });
});
