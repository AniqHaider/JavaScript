function quickSort(array){
    if(array.length == 1){
        return array;
    }
    const pivot = array[array.length - 1]
    const leftArr = [];
    const rightArr = [];
    for(let i = 0; i < array.length - 1 ; i++){
        if(array[i] < pivot){
            leftArr.push(array[i])
        } else {
            rightArr.push(array[i])
        }
    }
    if(leftArr.length > 0 && rightArr.length > 0 ){
        return[...quickSort(leftArr), pivot, ...quickSort(rightArr)]      
    } else if(leftArr.length > 0){
        return[...quickSort(leftArr), pivot];
    } else{
        return[pivot, ...quickSort(rightArr)];
    }
}

arr = [2,1,3,7,4,5,10,16,12,45];
console.log(quickSort(arr))

// ... is spread operator and returns the left or right array like this 1,2,3 from this [1,2,3].
// our pivot in above code is last element in the array