function missingno(numbers){
  var missing = -1;

  for (i = 0 ; i <= numbers.length; i++){
    if(numbers.indexOf(i) === -1){
      missing = i;
    }
  }
  return missing;
}

var numbers = [ 11 , 20 , 3 , 4 , 7 , 5 , 8 , 12 , 10, 1 , 9 , 15 , 14 , 13 , 18 ,17, 16,19,2]

console.log(missingno(numbers))
