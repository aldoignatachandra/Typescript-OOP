namespace Constructor2 {
  class Animal {
    name: string;
    legs: number;

    constructor(name: string, legs: number) {
      this.name = name;
      this.legs = legs;
    }
  }

  const bird = new Animal("Bird", 2);
  console.log("LOG -> ", bird);
}
