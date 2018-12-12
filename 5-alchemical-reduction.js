const alchemicalReductionPartOne = (input) => {
  const polymer = input.split('');
  let i = 0;

  while (polymer[i + 1]) {
    const current = polymer[i].charCodeAt();
    const next = polymer[i + 1].charCodeAt();

    if (Math.abs(current - next) === 32) {
      polymer.splice(i, 2);
      i = (i - 1 <= 0) ? 0 : i - 1;
      continue;
    }
    i = i + 1;
  }

  return polymer.length;
};

module.exports = {
  alchemicalReductionPartOne,
};
