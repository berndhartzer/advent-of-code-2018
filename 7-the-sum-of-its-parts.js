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

const theSumOfItsPartsPartTwo = (input, workers, stepDuration, steps = null, completed = [], work = [], counter = 0) => {
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

  let availableWorkers = workers - work.length;

  const addToWork = available.map(x => {
    if (availableWorkers <= 0) return null;
    if (work.find(y => y.step === x)) return null;

    availableWorkers = availableWorkers - 1;
    return {
      step: x,
      timeLeft: (x.charCodeAt(0) - 64) + stepDuration,
    };
  }).filter(z => z !== null);

  const workUpdated = [...work, ...addToWork];

  const workDone = workUpdated.map(x => {
    return {
      step: x.step,
      timeLeft: x.timeLeft - 1,
    };
  });

  const updatedCompleted = workDone.reduce((a, step) => {
    if (step.timeLeft <= 0) return [...a, step.step];
    return a;
  }, completed);

  const workFinished = workDone.filter(step => {
    return !step.timeLeft <= 0;
  });

  const newCount = counter + 1;

  if (Object.keys(steps).length !== updatedCompleted.length) {
    return theSumOfItsPartsPartTwo(input, workers, stepDuration, steps, updatedCompleted, workFinished, newCount);
  }
  return newCount;
};

module.exports = {
  theSumOfItsPartsPartOne,
  theSumOfItsPartsPartTwo,
};
