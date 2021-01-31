namespace AbstarctClass {
  abstract class Animal {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    eat(): void {
      console.log(`${this.name} is eating`);
    }

    abstract move(): void;
  }

  class Cat extends Animal {
    constructor() {
      super("cat");
    }

    move(): void {
      console.log("Cat Moving");
    }
  }

  class Whale extends Animal {
    constructor() {
      super("whale");
    }

    move(): void {
      console.log("Whale Moving");
    }
  }

  const cat = new Cat();
  cat.move();

  const whale = new Whale();
  whale.move();
}
