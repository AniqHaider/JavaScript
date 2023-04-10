/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // using the Gauss' Formula to find the sum of all numbers from 0 to n
    // which is (n * (n + 1)) / 2
    let expectedSum = (nums.length * (nums.length + 1)) / 2;
    // calculating the actual sum of the given array
    let actualSum = nums.reduce((a, b) => a + b, 0);
    // returning the difference between expected and actual sum
    return expectedSum - actualSum;
};
