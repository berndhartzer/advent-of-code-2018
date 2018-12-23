const theSumOfItsPartsPartOne = (input, steps = null, completed = []) => {
  if (!steps) {
    steps = input.reduce((a, instruction) => {
      const parts = instruction.split(' ');
      const step = parts[7];
      const dep = parts[1];
      const stepDeps = a[step] || [];

      return {
        ...a,
        [step]: [...stepDeps, dep],
        [dep]: a[dep] || [],
      }
    }, {});
  }

  const available = Object.entries(steps).reduce((a, [step, dep]) => {
    if (!completed.includes(step)) {
      if (dep.length === 0) return [...a, step]

      const remainingDeps = dep.filter(x => !completed.includes(x));
      if (remainingDeps.length === 0) return [...a, step];
    }
    return a;
  }, []);

  available.sort();
  completed = [...completed, available[0]];

  if (available.length !== 0) return theSumOfItsPartsPartOne(input, steps, completed);
  return completed.join('');
};

const theSumOfItsPartsPartTwo = (input) => {
  return 0;
};

module.exports = {
  theSumOfItsPartsPartOne,
  theSumOfItsPartsPartTwo,
};
