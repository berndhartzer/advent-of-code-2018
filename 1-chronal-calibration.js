const chronalCalibrationPartOne = (input) => input.reduce((a, i) => a + Number(i), 0);

const chronalCalibrationPartTwo = (input) => {
  const all = [0];
  const unique = new Set([0]);
  let i = 0;

  do {
    const frequency = Number(input[i]) + (all.length === 0 ? 0 : all[all.length - 1]);
    all.push(frequency);
    unique.add(frequency);
    i = (i >= input.length - 1 ? 0 : i + 1);
  } while (all.length === unique.size);

  return all[all.length - 1];
};

module.exports = {
  chronalCalibrationPartOne,
  chronalCalibrationPartTwo,
};
