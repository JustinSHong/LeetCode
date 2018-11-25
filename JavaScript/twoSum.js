// Task Description
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// Method: Brute Force
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i == j) continue;
            else if (nums[i] + nums[j] == target) return [i, j];
        }
    }
};

// Method: Use a hash
var twoSum = function(nums, target) {
    const hash = {};
    // populate hash
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (hash.hasOwnProperty(complement)) return [i, hash[complement]];
        hash[nums[i]] = i;
    }
};

// Test Cases
twoSum([2, 7, 11, 15], 9); // [1, 0]
