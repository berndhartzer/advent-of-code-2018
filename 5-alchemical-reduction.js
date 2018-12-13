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

const alchemicalReductionPartTwo = (input) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

  const polymers = alphabet.map(letter => {
    const re = new RegExp(`[${letter}${String.fromCharCode(letter.charCodeAt() - 32)}]`, 'g');
    const stripped = input.replace(re, '');
    return alchemicalReductionPartOne(stripped);
  });

  return polymers.reduce((a, length) => Math.min(a, length));
};

module.exports = {
  alchemicalReductionPartOne,
  alchemicalReductionPartTwo,
};
