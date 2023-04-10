//min
function min(arr, n){
    let res = arr[0]
    for (i = 0 ; i < n ; i++){
        if ( arr[i] <  res){
            res = arr[i]
        }
    }
    return res
}
const  num = [ 34 ,22 ,12 ,33 ,37 ,43 ]
console.log(min(num, 6))
