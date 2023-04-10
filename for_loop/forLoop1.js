// for (i = 0 ; i < 20 ; i++){
//     console.log(i)
// }

// let sum = 0 
// let n = prompt("Enter the value of n")
// n = Number.parseInt(n)

// for (i = 0 ; i < n ; i++){
//     sum += (i+1)
// }

// console.log(sum)

let obj = {
    z:223,
    k:344,
    u:445,
    f:123,
    r:267
}

for(let a in obj){
    console.log("Value of "+ a +" is " + obj[a])
}