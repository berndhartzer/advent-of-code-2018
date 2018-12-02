const fs = require('fs');
const {
  inventoryManagementSystemPartOne,
} = require('../2-inventory-management-system');

describe('1. Inventory Mangement System', () => {
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
});
