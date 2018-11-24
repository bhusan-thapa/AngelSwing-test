const solution = function(a) {
  const num = +a.sort((x, y) => +('' + y + x) - +('' + x + y)).join('');
  if (num > Number.MAX_SAFE_INTEGER) {
    return 'NaN';
  }
  return num;
};
console.log(solution([1, 2, 3]) === 321); // `3` before `2` before `1`
console.log(solution([1, 12, 3]) === 3121); // `3` before `12` before `1`
console.log(solution([65, 4, 5]) === 6554); // `65` before `5` before `4`
console.log(isNaN(solution([23, 222, 333, 453, 233, 555, 6544, 5888])));
console.log(solution([44, 45, 21]) === 454421);
console.log(solution([4, 43, 81]) === 81443);
