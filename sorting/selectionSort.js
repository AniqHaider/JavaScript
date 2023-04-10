function selectionSort(nums){
    const num = nums.slice();
    for(let i = 0; i < num.length - 1; i++){
        let minIndex = i;
        for(let j = i+1; j < num.length; j++){
            if(num[j] < num[minIndex]){
                minIndex = j;
            }
        }
        [num[i] , num[minIndex]] = [num[minIndex] , num[i]]
    }
    return num
}


let array = [12, 1, 3, 6, 5, 7, 9];

console.log(selectionSort(array)); // returns a new array which is sorted

console.log(array); // returns original array

// if we didn't use slice method to store a value in the varible we could not have got a new array and would have ended up modifying the exisiting one