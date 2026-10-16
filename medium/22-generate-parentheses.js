var generateParenthesis = function (n) {
  const result = [];

  function backtrack(current, openCount, closeCount) {
    if (current.length === n * 2) {
      result.push(current);
      return;
    }

    if(openCount < n) {
        backtrack(current + "(", openCount + 1, closeCount);
    }

    if(openCount > closeCount) {
        backtrack(current + ")", openCount, closeCount + 1);
    }
  }

  backtrack("", 0, 0);

  return result;
};

console.log(generateParenthesis(2))
console.log(generateParenthesis(3))
