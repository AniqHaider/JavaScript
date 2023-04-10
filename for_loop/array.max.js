function findMaxima(arr){
    let max = 0;
    for (i = 1; i < arr.length ; i++){
            if(arr[i] > max){
                max = arr[i]
            }
        }
        return max
    }

    const array = [ 2,3,6,1,4];
    console.log(findMaxima(array))
