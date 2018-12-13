const fs = require('fs');
const {
  alchemicalReductionPartOne,
  alchemicalReductionPartTwo,
} = require('../5-alchemical-reduction');

describe('5. Alchemical Reduction', () => {
  describe('Part one', () => {
    test('Test one', () => {
      const input = 'dabAcCaCBAcCcaDA';
      const output = alchemicalReductionPartOne(input);
      expect(output).toBe(10);
    });

    test('Actual input', () => {
      const input = fs
        .readFileSync('./inputs/5-alchemical-reduction.txt', 'utf8')
        .split('\n')
        .filter(x => x)[0];
      const output = alchemicalReductionPartOne(input);
      console.log(`Part one answer: ${output}`);
    });
  });

  describe('Part two', () => {
    test('Test one', () => {
      const input = 'dabAcCaCBAcCcaDA';
      const output = alchemicalReductionPartTwo(input);
      expect(output).toBe(4);
    });

    test('Actual input', () => {
      const input = fs
        .readFileSync('./inputs/5-alchemical-reduction.txt', 'utf8')
        .split('\n')
        .filter(x => x)[0];
      const output = alchemicalReductionPartTwo(input);
      console.log(`Part two answer: ${output}`);
    });
  });
});
