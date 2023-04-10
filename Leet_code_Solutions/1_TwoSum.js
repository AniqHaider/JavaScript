var twoSum = function (nums, target) {
    if (nums.length < 2) return false;
    nums.filter(n => n <= target);
    let v1, v2;
    for (let i = 0; i < nums.length; i++) {
        v1 = nums[i];
        v2 = target - v1;
        if (nums.indexOf(v2, i + 1) !== -1)
            return [i, nums.indexOf(v2, i + 1)]
    }
};

let Array = [2,7,13,11];
let target = 9;
let n = Array.length;

console.log(twoSum)


/* when parametres are not needed and we have to work on a specific value.

let Array=[7,2,13,11];
let target =24;
let n= Array.length;
console.log(n);

for (let i=0; i<n-1; i++){
    for (let j=i+1; j<n; j++){
        if (Array[i]+Array[j]==target){
            console.log(i, j);
        }
    }

}    */

/*

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

*/