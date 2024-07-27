function analyzeArray(array) {
  const avg = array.reduce((accum, curr) => accum + curr) / array.length;

  const min = Math.min(...array);

  const max = Math.max(...array);

  const len = array.length;

  return { average: avg, min: min, max: max, length: len };
}

export { analyzeArray };
