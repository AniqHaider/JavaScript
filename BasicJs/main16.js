function getPhrase(params){

  var l = params.phrase.length;

  if (typeof params.another !== "undefined"){
    l += params.another.length;
  }

  return l;
}

var p1 = "This is a slightly longer sentence than the usual one"
var p2 = "This is a fairly shorter one"
var computed = getPhrase({phrase : p1 , another : p2});

console.log(computed);
