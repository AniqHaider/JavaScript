// Define the `merge` function that takes in two sorted arrays, `nums1` and `nums2`
var merge = function(nums1, m, nums2, n) {
    // Initialize the pointer for `nums1` starting at the end of its valid values
    let i = m - 1;
    // Initialize the pointer for `nums2` starting at the end of its valid values
    let j = n - 1;
    // Initialize the pointer for the merged array starting at the end of the first `nums1` value
    let k = m + n - 1;
    // While there are still values in `nums2`
    while (j >= 0) {
        // If there are still values in `nums1` and the current `nums1` value is greater than the current `nums2` value
        if (i >= 0 && nums1[i] > nums2[j]) {
            // Copy the current `nums1` value into the merged array
            nums1[k] = nums1[i];
            // Decrement the merged array pointer
            k--
            // Decrement the `nums1` pointer
            i--
        } else {
            // Otherwise, copy the current `nums2` value into the merged array
            nums1[k] = nums2[j];
            // Decrement the merged array pointer
            k--
            // Decrement the `nums2` pointer
            j--
        }
    }
};

// Define the two arrays to be merged
let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
// Call the `merge` function
merge(nums1, 3, nums2, 3);
// Print the merged array
console.log(nums1);
// Output: [1, 2, 2, 3, 5, 6]
