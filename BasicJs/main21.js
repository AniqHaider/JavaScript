class Animal {
  constructor(name, height , weight){
    console.log("Created animal named", name , "and height is", height , ",weight is" , weight)
    this.name = name;
    this.height = height;
    this.weight = weight;
  }
  nameLength(){
    return this.name.length;
  }
}

Animal.planet="Earth";
var dog = new Animal("Milo", 30, 95);
var fish = new Animal("Oldie", 10 , 25);

 console.log(dog.constructor.planet);
