const fs = require('fs');
const {
  alchemicalReductionPartOne
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
});
