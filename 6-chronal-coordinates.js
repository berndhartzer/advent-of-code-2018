const chronalCoordinatesPartOne = (input) => {
  const coords = input.map(coord => {
    const [x, y] = coord.match(/\d+/g).map(n => Number(n));
    return { x, y };
  });

  const bounds = coords.reduce((a, coord) => {
    if (coord.x > a.x && coord.y > a.y) return coord;
    if (coord.x > a.x) return { ...a, x: coord.x };
    if (coord.y > a.y) return { ...a, y: coord.y };
    return a;
  }, { x: 0, y: 0 });

  const gridWidth = [...Array(bounds.x + 1).keys()];
  const gridHeight = [...Array(bounds.y + 1).keys()];

  const grid = gridHeight.map(y => {
    const inner = gridWidth.map(x => {
      const closest = coords.reduce((a, coord) => {
        const distance = (Math.abs((coord.x - x)) + Math.abs((coord.y - y)));
        if (a.distance === null) return { ...coord, distance }
        if (a.distance < distance) return a;
        if (distance < a.distance) return { ...coord, distance }
        return { x: null, y: null, distance: a.distance };
      }, { x: null, y: null, distance: null })
      return closest;
    });
    return inner;
  });

  const topEdge = grid[0].map(x => `${x.x},${x.y}`);
  const leftEdge = grid.map(y => `${y[0].x},${y[0].y}`);
  const rightEdge = grid.map(y => `${y[bounds.x].x},${y[bounds.x].y}`);
  const bottomEdge = grid[bounds.y].map(x => `${x.x},${x.y}`);

  const allEdges = [...new Set([...topEdge, ...leftEdge, ...rightEdge, ...bottomEdge])];

  const areas = grid.reduce((a, row) => {
    return {
      ...a,
      ...row.reduce((b, coord) => {
        const coordStr = `${coord.x},${coord.y}`;
        if (allEdges.includes(coordStr)) return b;
        return { ...b, [coordStr]: (b[coordStr] || 0) + 1 }
      }, a)
    }
  }, {});

  return Object.values(areas).reduce((a, n) => (a > n) ? a : n);
};

const chronalCoordinatesPartTwo = (input) => {
  return 0;
};

module.exports = {
  chronalCoordinatesPartOne,
  chronalCoordinatesPartTwo,
};
