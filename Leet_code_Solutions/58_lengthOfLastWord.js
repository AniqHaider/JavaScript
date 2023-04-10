let lengthOfLastWord = function(s) {
    s = s.trim();
    let arr = s.split(' ');
    return arr[arr.length-1].length;
};

let tomato = "Is a red fruit";

console.log(lengthOfLastWord(tomato))

// var lengthOfLastWord = function(s) {
//     let trimmedString = s.trim();
    
//     return trimmedString.length - trimmedString.lastIndexOf(' ') - 1;
// };