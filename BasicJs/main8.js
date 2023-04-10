var hobbies =["gaming","eating","reading","scientifical facts","programmng"]
console.log(hobbies.pop());
console.log(hobbies.push("Archery"));
hobbies.shift();
console.log(hobbies.shift())
hobbies.unshift("blacksmithing");
hobbies.forEach(function(item, index){
  console.log("I like,", item, index);
})
