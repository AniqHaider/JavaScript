class Animal {
  constructor(name, height , weight){
    console.log("Created animal named", name)
    this.name = name;
    this.height = height;
    this.weight = weight;
  }
  nameLength(){
    return this.name.length;
  }
}

var dog = new Animal("Milo", 30, 95);
var fish = new Animal("Oldie", 10 , 25);

 console.log(dog.nameLength());


 var myMap = {};
 myMap["aniq"] = 23;
 myMap["aq"] = 21;
 myMap["ax"] = 22;
 
 console.log(myMap)

 const newMap = new Map();
 newMap.set("a",12);
 newMap.set("e",122);
 newMap.set("d",1221);
 console.log(newMap)

 console.log(newMap.get("e"))
 newMap.set("e", 34)
 console.log(newMap)
 console.log(newMap.get("e"))

 