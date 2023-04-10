let singleNumber = function(nums) {
    let result = 0;
    for(let i = 0; i < nums.length; i++) {
        result ^= nums[i];
    }
    return result;
};


// result is initialized to 0.
// In the first iteration, i is 0 and nums[0] is 2. The code performs result ^= nums[i], which is equivalent to result = result ^ 2, so result becomes 2.
// In the second iteration, i is 1 and nums[1] is 2. The code performs result ^= nums[i], which is equivalent to result = result ^ 2, so result becomes 0.
// In the third iteration, i is 2 and nums[2] is 1. The code performs result ^= nums[i], which is equivalent to result = result ^ 1, so result becomes 1.
// The loop has finished, so the code returns result, which is 1.
// So, the code returns 1, which is the number that appears only once in the input array [2, 2, 1].


// 0 xor 2 is
// The result of 0 XOR 2 is 2.

// In binary representation, 0 is 0 and 2 is 10. To perform the XOR operation, 
// you compare each bit position: if both bits are the same, the result is 0, and if they are different,
// the result is 1. So, in this case:

// XOR 1 0
// ------
// 1 0

// Converting this binary representation back to decimal, we get 2.

