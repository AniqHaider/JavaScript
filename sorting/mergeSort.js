



// Implementation 2.

// function mergeSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   const middle = Math.floor(arr.length / 2);
//   const left = arr.slice(0, middle);
//   const right = arr.slice(middle);

//   return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//   let result = [];
//   let i = 0;
//   let j = 0;

//   while (i < left.length && j < right.length) {
//     if (left[i] < right[j]) {
//       result.push(left[i]);
//       i++;
//     } else {
//       result.push(right[j]);
//       j++;
//     }
//   }

//   return result.concat(left.slice(i)).concat(right.slice(j));
// }

// const myArray = [4, 2, 1, 3, 5];
// const sortedArray = mergeSort(myArray);
// console.log(sortedArray); // [1, 2, 3, 4, 5]
