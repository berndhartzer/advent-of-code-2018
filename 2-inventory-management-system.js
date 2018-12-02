const inventoryManagementSystemPartOne = (input) => {
  const counts = input.reduce((outer, i) => {
    const matches = i.split('').sort().join('').match(/(.)\1+/g);
    if (!matches) return outer;

    return {
      ...outer,
      ...matches.reduce((inner, j) => {
        if (inner[j.length]) return inner;
        if (outer[j.length]) {
          return { ...inner, [j.length]: outer[j.length] + 1 }
        }
        return { ...inner, [j.length]: 1 }
      }, {})
    }
  }, {});

  return counts['2'] * counts['3'];
};

module.exports = {
  inventoryManagementSystemPartOne,
};
