function bubbleSort(nums) {
  var num = nums.slice();
  for (let i = 0; i < num.length - 1; i++) {
    for (j = 0; j < num.length - 1 - i; j++) {
      if (num[j] > num[j + 1]) {
        [num[i], num[i + 1]] = [num[i + 1], num[i + 1]];
      }
    }
  }
  return num;
}

let array = [12, 1, 3, 6, 5, 7, 9];

console.log(bubbleSort(array)); // returns a new array which is sorted

console.log(array); // returns original array

// if we didn't use slice method to store a value in the varible we could not have got a new array and would have ended up modifying the exisiting one
