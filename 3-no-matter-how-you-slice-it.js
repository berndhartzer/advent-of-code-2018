const noMatterHowYouSliceItPartOne = (input) => {
  const fabric = input.reduce((grid, row) => {
    const [claim, x, y, w, h] = row.match(/\d+/g).map(n => Number(n));
    const width = [...Array(w).keys()];
    const height = [...Array(h).keys()];

    return {
      ...grid,
      ...width.reduce((outer, ww) => {
        return {
          ...outer,
          ...height.reduce((inner, hh) => {
            const coord = `${x + ww},${y + hh}`;
            const count = typeof grid[coord] !== 'undefined' ? grid[coord] + 1 : 1;
            return { ...inner, [coord]: count };
          }, {})
        }
      }, {})
    }
  }, {});

  return Object.values(fabric).filter(u => u > 1).length;
};

module.exports = {
  noMatterHowYouSliceItPartOne,
};
