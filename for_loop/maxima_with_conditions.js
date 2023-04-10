function max(arr){
    let res = arr[0];
    for ( i = 0 ; i < arr.length && (arr[0] == 1) && (arr[1] == 2) ; i++){
        if(arr[i] > res){
            res = arr[i]
        } 
    }
    return res
}

const num = [1,2,5,6,72,32,67,86,12]
console.log(max(num))