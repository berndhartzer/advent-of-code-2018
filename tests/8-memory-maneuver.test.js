const fs = require('fs');
const {
  memoryManeuverPartOne,
  memoryManeuverPartTwo,
} = require('../8-memory-maneuver');

describe('8. Memory Maneuver', () => {
  describe('Part one', () => {
    test('Test one', () => {
      const input = '2 3 0 3 10 11 12 1 1 0 1 99 2 1 1 2'
        .split(' ')
        .filter(x => x)
        .map(x => Number(x));
      const output = memoryManeuverPartOne(input);
      expect(output).toBe(138);
    });

    test('Actual input', () => {
      const input = fs
        .readFileSync('./inputs/8-memory-maneuver.txt', 'utf8')
        .split(' ')
        .filter(x => x)
        .map(x => Number(x));
      const output = memoryManeuverPartOne(input);
      console.log(`Part one answer: ${output}`);
    });
  });
});
