// https://leetcode.com/problems/guess-number-higher-or-lower/description/

var guessNumber = function(n) {
    let left = 1;
    let right = n;

    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        const guessResult = guess(mid);

        if(guessResult === -1) {
            right = mid - 1;
        } else if (guessResult === 1) {
            left = mid + 1;
        } else {
            return mid;
        }
    }
};
