function saysomething(phrase){
  console.log("You Said ," + phrase)
}
function getPhraseLength(phrase , another){
  var l = phrase.length;
  if (typeof another !== "undefined"){
    l += another.length;
  }
  return l;
}
var p1 = "This is a slightly longer sentence han the usual one"
var p2 = "This is a fairly shorter one"
var thislength = getPhraseLength(p1 , p2);

console.log(thislength);
