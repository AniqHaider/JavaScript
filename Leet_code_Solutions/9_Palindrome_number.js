// My solution for testing if number is palidromic number  

// let number = 121;
// let Reversed_number = 121;

// if (number === Reversed_number) {
//     console.log("palindromic number")
// } else {
//     console.log("Not a palindromic number")
// }

// function palidromic_nuumber (x){
// let number = x;
// let Reversed_number = Number(String(number).split('').reverse().join(''));

// if (number === Reversed_number) {
//     console.log("palindromic number")
// } else{
//     console.log("Not a palindromic number")
// };
// };

// x = 121
// z = palidromic_nuumber(x)

var isPalindrome = function(x) {
    if (x < 0) return false;
    let rev = 0, orig = x;
    while (x !== 0) {
        rev = rev * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return orig === rev;
};

//         or

// var isPalindrome = function(x) {
//     if (x < 0 || x % 10 == 0 && x !=0)  {
//         return false;
//     }
//     let t = 0;
//     while (x > t) {
//         t = t * 10 + x % 10;
//         x = Math.floor(x / 10);
//     }
//     return t==x || x==Math.floor(t/10);
// };

