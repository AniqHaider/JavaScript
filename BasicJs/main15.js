function getPhrase(phrase , another){

  var l = phrase.length;

  if (typeof another !== "undefined"){
    l += another.length;
  }
  function printBoth(){
    return phrase + " " + another;
  }
  return printBoth();
}
var p1 = "This is a slightly longer sentence han the usual one"
var p2 = "This is a fairly shorter one"
var computed = getPhrase(p1 , p2);

console.log(computed);
