const fs = require('fs');
const {
  chronalCalibrationPartOne,
  chronalCalibrationPartTwo,
} = require('../1-chronal-calibration');

describe('1. Chronal Calibration', () => {
  describe('Part one', () => {
    test('Test one', () => {
      const input = ['+1', '+1', '+1'];
      const output = chronalCalibrationPartOne(input);
      expect(output).toBe(3);
    });

    test('Test two', () => {
      const input = ['+1', '+1', '-2'];
      const output = chronalCalibrationPartOne(input);
      expect(output).toBe(0);
    });

    test('Test three', () => {
      const input = ['-1', '-2', '-3'];
      const output = chronalCalibrationPartOne(input);
      expect(output).toBe(-6);
    });

    test('Test four', () => {
      const input = ['-11', '+22', '+4333'];
      const output = chronalCalibrationPartOne(input);
      expect(output).toBe(4344);
    });

    test('Actual input', () => {
      const input = fs
        .readFileSync('./inputs/1-chronal-calibration.txt', 'utf8')
        .split('\n')
        .filter(x => x);
      const output = chronalCalibrationPartOne(input);
      console.log(`Part one answer: ${output}`);
    });
  });

  describe('Part two', () => {
    test('Test one', () => {
      const input = ['+1', '-1'];
      const output = chronalCalibrationPartTwo(input);
      expect(output).toBe(0);
    });

    test('Test two', () => {
      const input = ['+3', '+3', '+4', '-2', '-4'];
      const output = chronalCalibrationPartTwo(input);
      expect(output).toBe(10);
    });

    test('Test three', () => {
      const input = ['-6', '+3', '+8', '+5', '-6'];
      const output = chronalCalibrationPartTwo(input);
      expect(output).toBe(5);
    });

    test('Test four', () => {
      const input = ['+7', '+7', '-2', '-7', '-4'];
      const output = chronalCalibrationPartTwo(input);
      expect(output).toBe(14);
    });

    test('Actual input', () => {
      const input = fs
        .readFileSync('./inputs/1-chronal-calibration.txt', 'utf8')
        .split('\n')
        .filter(x => x);
      const output = chronalCalibrationPartTwo(input);
      console.log(`Part two answer: ${output}`);
    });
  });
});
