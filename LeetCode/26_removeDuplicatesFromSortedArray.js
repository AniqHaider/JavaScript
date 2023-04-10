/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if(nums.length === 0) return 0;
  let i = 0;
  for(let j = 1; j < nums.length; j++) {
      if(nums[j] !== nums[i]) {
          i++;
          nums[i] = nums[j];
      }
  }
  return nums.slice(0, i + 1)
};

// var array = [1,1,2,3,4,4,5,5,5,6]
// console.log(removeDuplicates(array))

// function removeDuplicates(arr) {
//   if (arr.length == 0 || arr.length == 1)
//       return arr.length;

   // To store index of next unique element
//   var j = 0;

  // Just maintaining another updated index i.e. j
//   for (i = 0; i < arr.length - 1; i++)
//       if (arr[i] != arr[i + 1])
//           arr[j++] = arr[i];

//   arr[j++] = arr[arr.length - 1];

//   return j;
//  }