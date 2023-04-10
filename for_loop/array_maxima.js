// max
function max(arr, n){
    let res= arr[0]
    for ( i = 0 ; i < n ; i++){
        if( arr[i] > res){
            res = arr[i]
        }
    }
    return res
}

const  nums = [ 34 ,22 ,12 ,33 ,37 ,43 ]
console.log(max(nums, 6))

// function max(array, n){
//     let max = 0;
//     for (i = 0 ; i < n ; i++){
//         if (array[i] > max){
//             max = array[i]
//         }
//     }
//     return max;
// }

// const numbers = [22,311,42,57,85,1100];
// console.log(max(numbers, 6))