var isHappy = function(n) {
    let slow = n, fast = n;
    do {
        slow = digitSquareSum(slow);
        fast = digitSquareSum(fast);
        fast = digitSquareSum(fast);
    } while(slow !== fast);
    if (slow === 1) return true;
    else return false;
};

var digitSquareSum = function(n) {
    let sum = 0;
    while (n > 0) {
        let digit = n % 10;
        sum += digit * digit;
        n = Math.floor(n / 10);
    }
    return sum;
};
