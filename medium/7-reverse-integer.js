// https://leetcode.com/problems/reverse-integer

var reverse = function (x) {
  let newNum = Math.abs(x);
  let result = 0;
  const sign = x < 0 ? -1 : 1;
  const MIN_INT = -(2 ** 31);
  const MAX_INT = 2 ** 31 - 1;

  while (newNum > 0) {
    const digit = newNum % 10;

    result = result * 10 + digit;
    newNum = Math.floor(newNum / 10);
  }

  const reversed = result * sign;

  if (reversed < MIN_INT || reversed > MAX_INT) {
    return 0;
  }

  return reversed;
};

console.log(reverse(102));
console.log(reverse(120));
console.log(reverse(-123));
console.log(reverse(123456789));
console.log(reverse(1534236469));
