const fs = require('fs');
const {
  theSumOfItsPartsPartOne,
  theSumOfItsPartsPartTwo,
} = require('../7-the-sum-of-its-parts');

describe('7. The Sum of Its Parts', () => {
  describe('Part one', () => {
    test('Test one', () => {
      const input = [
        'Step C must be finished before step A can begin.',
        'Step C must be finished before step F can begin.',
        'Step A must be finished before step B can begin.',
        'Step A must be finished before step D can begin.',
        'Step B must be finished before step E can begin.',
        'Step D must be finished before step E can begin.',
        'Step F must be finished before step E can begin.',
      ];
      const output = theSumOfItsPartsPartOne(input);
      expect(output).toBe('CABDFE');
    });

    test('Actual input', () => {
      const input = fs
        .readFileSync('./inputs/7-the-sum-of-its-parts.txt', 'utf8')
        .split('\n')
        .filter(x => x);
      const output = theSumOfItsPartsPartOne(input);
      console.log(`Part one answer: ${output}`);
    });
  });

  describe('Part two', () => {
    test('Test one', () => {
      const input = [
      ];
      const output = theSumOfItsPartsPartTwo(input, 32);
      // expect(output).toBe();
    });

    test('Actual input', () => {
      const input = fs
        .readFileSync('./inputs/7-the-sum-of-its-parts.txt', 'utf8')
        .split('\n')
        .filter(x => x);
      const output = theSumOfItsPartsPartTwo(input);
      console.log(`Part two answer: ${output}`);
    });
  });
});
