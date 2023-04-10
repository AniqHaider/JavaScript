// for (i=0 ; i < 10 ; i++){
//     console.log(i)
// }

// let sum = 0
// let n = prompt("Enter the value of n")
// n = Number.parseInt(n)

// for (i = 0 ; i < n ; i++){
//     sum+= (i+1)
// }

// console.log(sum)


//for in loop

let obj = {
    a : 12,
    b : 28,
    c : 34,
    d : 23,
    e : 45
}

for (let a in obj){
    console.log("Value of " + a + " is " + obj[a])
}

// for of loop

for (let b of "Aniq"){
    console.log(b)
}

