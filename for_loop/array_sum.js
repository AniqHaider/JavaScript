// sum
function sum(arr){
    let sum = 0
    for (i = 0 ; i < arr.length ; i++){
        sum += arr[i]
    }
    return sum
}

const  numss = [ 34 ,22 ,12 ,33 ,37 ,43 ]
console.log(sum(numss))




// let array = [ 2, 3 , 5, 8, 9]
// sum = array.reduce((a, b) => {
//     return a + b
// });
// console.log("the sum is " , sum)