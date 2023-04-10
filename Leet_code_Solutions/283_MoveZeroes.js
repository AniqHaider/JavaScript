/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let nonZeroIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIndex] = nums[i];
            nonZeroIndex++;
        }
    }
    for (let i = nonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
};


let nums = [0,1,0,3,12];
moveZeroes(nums);
console.log(nums);  // Output: [1,3,12,0,0]

let numss = [0,1,5,2,4,10,0,56,0,67];
moveZeroes(numss);
console.log(numss); // Ouput: [1,2,4,5,10,56,67,0,0,0]