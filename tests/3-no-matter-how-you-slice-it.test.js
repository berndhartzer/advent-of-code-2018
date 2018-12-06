const fs = require('fs');
const {
  noMatterHowYouSliceItPartOne,
  noMatterHowYouSliceItPartTwo,
} = require('../3-no-matter-how-you-slice-it');

describe('3. No Matter How You Slice It', () => {
  describe('Part one', () => {
    test('Test one', () => {
      const input = [
        '#1 @ 1,3: 4x4',
        '#2 @ 3,1: 4x4',
        '#3 @ 5,5: 2x2',
      ];
      const output = noMatterHowYouSliceItPartOne(input);
      expect(output).toBe(4);
    });

    test('Actual input', () => {
      const input = fs
        .readFileSync('./inputs/3-no-matter-how-you-slice-it.txt', 'utf8')
        .split('\n')
        .filter(x => x);
      const output = noMatterHowYouSliceItPartOne(input);
      console.log(`Part one answer: ${output}`);
    });
  });

  describe('Part two', () => {
    test('Test one', () => {
      const input = [
        '#1 @ 1,3: 4x4',
        '#2 @ 3,1: 4x4',
        '#3 @ 5,5: 2x2',
      ];
      const output = noMatterHowYouSliceItPartTwo(input);
      expect(output).toBe(3);
    });

    test('Actual input', () => {
      const input = fs
        .readFileSync('./inputs/3-no-matter-how-you-slice-it.txt', 'utf8')
        .split('\n')
        .filter(x => x);
      const output = noMatterHowYouSliceItPartTwo(input);
      console.log(`Part two answer: ${output}`);
    });
  });
});
