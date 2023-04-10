// nested for loop method

var twoSum = function(number, target){
    for(i = 0 ; i < number.length ; i++){
        for(j = i + 1 ; j < number.length ; j++){
            if(number[i] + number[j] == target){
                return[i, j]
            }
        }
    }
};

const array = [ 2,3,4,5,6,7,8];
console.log(twoSum(array, 6))


// hash map method
// var twoSum = function(nums, target) {
//     let map = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         let complement = target - nums[i];
//         if (map.has(complement)) {
//             return [map.get(complement), i];
//         }
//         map.set(nums[i], i);
//     }
// };
