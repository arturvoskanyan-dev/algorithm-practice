// https://leetcode.com/problems/palindrome-number/description/
// Difficulty: Easy

const isPalindrome = function(x) {
    return +x.toString().split("").reverse().join("") === x
};

console.log(isPalindrome(969));
console.log(isPalindrome(156));


// let x = 245;
// console.log(x.toString() === "161"); => true
// console.log(+x.toString().split("").reverse().join("") === x ? true : false);


