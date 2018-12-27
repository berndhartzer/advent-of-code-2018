const memoryManeuverPartOne = (input, parent = true) => {
  const [children, meta, ...rest] = input;

  let indexesDone = 2;
  let ignore = 0;
  let childrenDone = 0;
  let metaDone = 0;

  const metaSum = rest.reduce((a, v, i) => {
    if (i < ignore) return a;
    if (metaDone >= meta) return a;

    if (children > 0 && childrenDone < children) {
      const child = memoryManeuverPartOne(rest.slice(i), false);
      ignore = i + child.indexesDone;
      indexesDone = indexesDone + child.indexesDone;
      childrenDone = childrenDone + 1;
      return a + child.metaSum;
    }

    indexesDone = indexesDone + 1;
    metaDone = metaDone + 1;
    return a + v;
  }, 0);

  return parent ? metaSum : { metaSum, indexesDone };
};

const memoryManeuverPartTwo = (input) => {
  return 0;
};

module.exports = {
  memoryManeuverPartOne,
  memoryManeuverPartTwo,
};
