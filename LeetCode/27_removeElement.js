var removeElement = function(nums , val){
    let i = 0;
    for(j = 0 ; j<nums.length ; j++){
        if(nums[j] !== val){
            nums[i] = nums[j];
            i++;
        }
    }
    return i
}

let array = [2,3,4,5,2,34,2,4]

console.log(removeElement(array, 2))
// Answer is 5 elements left after removing 2.