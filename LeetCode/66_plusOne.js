/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for(let i = digits.length - 1 ; i >= 0 ; i--){              
         // running reverse for loop
        if(digits[i] < 9){
            digits[i] = digits[i] + 1;
            return digits
        } else{
            digits[i] = 0;
        }
    }
    //if for loop completes with(else statement) and we get a zero we unshift one because lets say array = [9, 9] so we get back [1,0 , 0] and not [0 , 0]
    digits.unshift(1);
    return digits;
};


let array = [ 1,2,3];
let arrays = [9,9,0,9];
let arrayss = [9,9];
console.log(plusOne(array)) // [1,2,3] ---> [1,2,4] 
console.log(plusOne(arrays)) // [9,9,0,9] ---> [9,9,1,0] the 9 on 4 th index becomes zero ; i-- ;then for loop runs on the 3rd index and its 0 so o +1 in if conditon and it becomes 1 and array is returned hence [9,9,1,0] is returned.
console.log(plusOne(arrayss)) // [9,9] ---> [1,0,0] the 9 on 1st index becomes zero ; i--; then for loop runs on the on 0 th index and the 9 on oth index becomes 0 too ; i--;for loop breaks now because i becomes -1 and there for loop condition breaks; so we come out of for loop with [0,0] array and get to digits.unshift(1); which basicall adds1 to the start of the array. and we get [0,0] --> [1,0,0] 