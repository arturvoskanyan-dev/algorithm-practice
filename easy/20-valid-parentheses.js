// https://leetcode.com/problems/valid-parentheses/description/

var isValid = function (s) {
  if (s.length % 2 !== 0) return false;

  const stack = [];
  const pairs = {
    "]": "[",
    ")": "(",
    "}": "{",
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (!pairs[char]) {
      stack.push(char);
    } else if (pairs[char] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid("()[]{}{}"));
console.log(isValid("{)}"));
console.log(isValid("(]"));
console.log(isValid("{}{}"));
