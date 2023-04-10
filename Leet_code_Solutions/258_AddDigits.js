/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    // if num is less than 10, it already has only one digit
    if (num < 10) return num;
    // if num is greater than or equal to 10, repeatedly add its digits
    // until the result has only one digit
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return addDigits(sum);
};
