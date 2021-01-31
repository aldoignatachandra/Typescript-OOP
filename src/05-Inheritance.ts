namespace Inheritance {
  class Animal {
    name: string = "";
    legs: number = 0;

    breathing() {
      console.log(`${this.name} is breathing`);
    }
  }

  class Rabbit extends Animal {
    colour: string = "white";
  }

  const rabbit = new Rabbit();
  rabbit.name = "rex";
  rabbit.legs = 2;
  rabbit.colour = "blue";
  console.log("LOG ->", rabbit);

  rabbit.breathing();
}
