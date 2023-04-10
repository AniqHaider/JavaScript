function getPhrase(params){

  var l = 0;

  if(typeof params.phrase !== "undefined"){
    l = params.phrase.length;
  }

  if (typeof params.another !== "undefined"){
    l += params.another.length;
  }
  console.log("The type of another is :" + (typeof params.another))
  console.log("The type of abc is :" + (typeof params.abc))
  console.log("The type of params is :" + (typeof params))
  return l;
}

var p1 = "This is a slightly longer sentence than the usual one"
var p2 = "This is a fairly shorter one"
var obj = {another : p2, abc: 23}
var computed = getPhrase(obj);

console.log("the length of phrase is " + computed);
