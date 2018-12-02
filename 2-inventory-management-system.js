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
    };
  }, {});

  return counts['2'] * counts['3'];
};

const inventoryManagementSystemPartTwo = (input) => {
  return input.reduce((outer, item, i) => {
    const itemParts = item.split('');
    const remaining = input.slice(i + 1, input.length);

    const match = remaining.reduce((inner, innerItem) => {
      const innerParts = innerItem.split('');
      const matchingChars = itemParts.filter((char, j) => char === innerParts[j]);
      if (matchingChars.length === itemParts.length - 1) return matchingChars.join('');
      return inner;
    }, '');

    if (match.length === 0) return outer;
    return match
  }, '');
};

module.exports = {
  inventoryManagementSystemPartOne,
  inventoryManagementSystemPartTwo,
};
