/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for(let i= 0; i<nums.length;i++){
// checking if ith index value is equal torget.
        if(nums[i] == target){
            return i;
        }
//checking if ith index value is greater than target.
        else if(nums[i]>target){
            return i;
        }
//if all the ith value index value are smaller than the target ; we return the totsl length as the spot where it should be placed.
        else if(nums[nums.length-1]< target){
            return nums.length;
        }
    }
};


let array = [1,3,4,5]
console.log(searchInsert(array, 2)) // gives index 1.
console.log(searchInsert(array, 0)) // 0
console.log(searchInsert(array, 6))// 4