const newMap = new Map();
 newMap.set("a",12);
 newMap.set("e",122);
 newMap.set("d",1221);
 console.log(newMap)

 console.log(newMap.get("e"))
 newMap.set("e", 34)
 console.log(newMap)
 console.log(newMap.get("e"))

// Method	Description
// new Map()	Creates a new Map object
// set()	Sets the value for a key in a Map
// get()	Gets the value for a key in a Map
// clear()	Removes all the elements from a Map
// delete()	Removes a Map element specified by a key
// has()	Returns true if a key exists in a Map
// forEach()	Invokes a callback for each key/value pair in a Map
// entries()	Returns an iterator object with the [key, value] pairs in a Map
// keys()	Returns an iterator object with the keys in a Map
// values()	Returns an iterator object of the values in a Map
// Property	Description
// size	Returns the number of Map elements