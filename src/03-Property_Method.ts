namespace PropertyMethod {
  class Animal {
    name: string = "";
    legs: number = 0;
    mammals: boolean = false;

    breathing() {
      console.log(`${this.name} is breathing`);
    }
  }

  const dog = new Animal();
  console.log("LOG 1 -> ", dog);

  dog.name = "Dog";
  dog.legs = 4;
  console.log("LOG 2 -> ", dog);
  dog.breathing();
}
