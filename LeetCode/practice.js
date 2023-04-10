// sum

let array = [2,3,1,4,6,5];

function sum(nums){
    let res = 0;
    for(i=0 ; i < nums.length ; i++){
        res += nums[i]
    }
    return res
}

console.log(sum(array))

//multiply

function multiply(nums){
    let res = 1;
    for(i=0 ; i < nums.length ; i++){
        res *= nums[i]
    }
    return res
}

console.log(multiply(array))


//min 

function min(arr){
    let res = arr[0];
    for(i=0 ; i < arr.length ; i++){
        if(arr[i] < res ){
            res = arr[i]
        }
    }
    return res
}

console.log(min(array))

// max

function max(arr){
    let res = arr[0];
    for(i=0; i<arr.length ; i++){
        if(arr[i]> res){
            res = arr[i]
        }
    }
    return res
}

console.log(max(array))


// two sum to a target

function twoSum(arr, target){
    for(i=0; i<arr.length ; i++){
        for(j=i+1; j<arr.length; j++){
            if(arr[i]+arr[j] == target){
                return[i, j]
            }
        }
    }
    return num
}

console.log(twoSum(array, 3))
