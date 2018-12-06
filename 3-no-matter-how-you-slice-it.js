/**
 * Use at your own risk - these functions are extremely inefficient...
 */

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

const noMatterHowYouSliceItPartTwo = (input) => {
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
            const claimHere = typeof grid[coord] !== 'undefined' ? [...grid[coord], claim] : [claim];
            return { ...inner, [coord]: claimHere };
          }, {})
        }
      }, {})
    }
  }, {});

  const knownOverlaps = [...new Set(Object.values(fabric).filter(o => o.length > 1).reduce((a, p) => a.concat(p)))];

  return input.reduce((a, val) => {
    const [claim, x, y, w, h] = val.match(/\d+/g).map(n => Number(n));
    if (knownOverlaps.includes(claim)) return a;
    return [...a, claim];
  }, [])[0];
};

module.exports = {
  noMatterHowYouSliceItPartOne,
  noMatterHowYouSliceItPartTwo,
};
