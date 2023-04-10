function saysomething(phrase){
  console.log("You Said ," + phrase)
}
function getPhraseLength(phrase){
  var l = phrase.length;
  return l;
}
var thislength = getPhraseLength("This is a slightly longer sentence than the usual one")
console.log(thislength)
