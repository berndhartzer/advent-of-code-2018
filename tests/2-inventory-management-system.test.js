const fs = require('fs');
const {
  inventoryManagementSystemPartOne,
  inventoryManagementSystemPartTwo,
} = require('../2-inventory-management-system');

describe('2. Inventory Mangement System', () => {
  describe('Part one', () => {
    test('Test one', () => {
      const input = [
        'abcdef',
        'bababc',
        'abbcde',
        'abcccd',
        'aabcdd',
        'abcdee',
        'ababab',
      ];
      const output = inventoryManagementSystemPartOne(input);
      expect(output).toBe(12);
    });

    test('Actual input', () => {
      const input = fs
        .readFileSync('./inputs/2-inventory-management-system.txt', 'utf8')
        .split('\n')
        .filter(x => x);
      const output = inventoryManagementSystemPartOne(input);
      console.log(`Part one answer: ${output}`);
    });
  });

  describe('Part two', () => {
    test('Test one', () => {
      const input = [
        'abcde',
        'fghij',
        'klmno',
        'pqrst',
        'fguij',
        'axcye',
        'wvxyz',
      ];
      const output = inventoryManagementSystemPartTwo(input);
      expect(output).toBe('fgij');
    });

    test('Actual input', () => {
      const input = fs
        .readFileSync('./inputs/2-inventory-management-system.txt', 'utf8')
        .split('\n')
        .filter(x => x);
      const output = inventoryManagementSystemPartTwo(input);
      console.log(`Part two answer: ${output}`);
    });
  });
});
