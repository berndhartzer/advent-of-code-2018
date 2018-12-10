const fs = require('fs');
const {
  reposeRecordPartOne,
  reposeRecordPartTwo,
} = require('../4-repose-record');

describe('4. Repose Record', () => {
  describe('Part one', () => {
    test('Test one', () => {
      const input = [
        '[1518-11-01 00:30] falls asleep',
        '[1518-11-01 00:00] Guard #10 begins shift',
        '[1518-11-01 00:05] falls asleep',
        '[1518-11-01 00:55] wakes up',
        '[1518-11-01 00:25] wakes up',
        '[1518-11-01 23:58] Guard #99 begins shift',
        '[1518-11-02 00:50] wakes up',
        '[1518-11-03 00:24] falls asleep',
        '[1518-11-03 00:05] Guard #10 begins shift',
        '[1518-11-04 00:02] Guard #99 begins shift',
        '[1518-11-03 00:29] wakes up',
        '[1518-11-02 00:40] falls asleep',
        '[1518-11-04 00:36] falls asleep',
        '[1518-11-05 00:55] wakes up',
        '[1518-11-04 00:46] wakes up',
        '[1518-11-05 00:03] Guard #99 begins shift',
        '[1518-11-05 00:45] falls asleep',
      ];

      const output = reposeRecordPartOne(input);
      expect(output).toBe(240);
    });

    test('Actual input', () => {
      const input = fs
        .readFileSync('./inputs/4-repose-record.txt', 'utf8')
        .split('\n')
        .filter(x => x);
      const output = reposeRecordPartOne(input);
      console.log(`Part one answer: ${output}`);
    });
  });

  describe.skip('Part two', () => {
    test('Test one', () => {

    });

    test('Actual input', () => {

    });
  });
});
