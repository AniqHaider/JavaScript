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

class Dog extends Animal {
  constructor(name, height, weight, barkVolume, leashColor, speed){
    super(name, height, weight);

    this.barkVolume = barkVolume;
    this.leashColor = leashColor;
    this.speed = speed;
  }
   bark(){
     if (this.barkVolume > 50){
       console.log(this.name, "barks loudly! (volume:",this.barkVolume,")");
    }else{
      console.log(this.name, "barks timidly! (volume:",this.barkVolume,")");
    }

   }
}

class Fish extends Animal {
  constructor(name, height, weight, swimSpeed){
    super(name , height, weight);
    this.swimSpeed = swimSpeed;
  }
  swim(chaserSpeed){
    if (this.swimspeed > 50){
      console.log(this.name, "swims around quickly! (speed:", this.swimSpeed + ")");
    }else{
      console.log(this.name,"swims around slowly! (speed:", this.swimSpeed + ")")
    }
    if(this.swimSpeed > chaserSpeed){
      console.log(this.name, "got away!");
    }else{
      console.log(this.name,"got caught!");
    }
  }
}

 var king = new Dog("king", 45, 92, 10, "red", 43);
 var goldie = new Fish("goldie", 23 , 12 , 47);

  king.bark();
  goldie.swim(king.speed);
