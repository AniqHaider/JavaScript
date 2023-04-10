/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    // if n is less than or equal to 0, it is not a power of 2
    if (n <= 0) return false;
    // if n is a power of 2, it will only have one bit set to 1
    // we can use the bitwise AND operator to check if there is only one set bit
    return (n & (n - 1)) === 0;
};

console.log(isPowerOfTwo(4));  // Output: true
console.log(isPowerOfTwo(5));  // Output: false
