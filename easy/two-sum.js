// https://leetcode.com/problems/two-sum/description/
// Difficulty: Easy

const twoSum = function(nums, target) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(nums[i], i)
    }
}

console.log(twoSum([1, 2, 3, 4, 5], 9));
console.log(twoSum([3, 2, 3], 6));
