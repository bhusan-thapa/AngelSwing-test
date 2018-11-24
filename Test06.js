const solution = function(word, array) {
  let index;
  for (i = 0; i < array.length; i++) {
    if (word === array[i]) {
      index = i;
      break;
    }
  }
  return index;
};

console.log(solution('hi', ['hi']) === 0);
console.log(solution('a', ['', 'a', '', '', 'b']) === 1);
console.log(solution('adf', ['abc', 'abd', '', '', 'adf', '']) === 4);
