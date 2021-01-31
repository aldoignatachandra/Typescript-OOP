namespace SuperConstructor {
  class Animal {
    name: string;
    legs: number;

    constructor(name: string, legs: number) {
      this.name = name;
      this.legs = legs;
    }
  }

  class Bull extends Animal {
    poison: boolean;

    constructor(name: string, legs: number, poison: boolean) {
      super(name, legs);
      this.poison = poison;
    }
  }

  const bull = new Bull("Bull", 4, false);
  console.log("LOG ->", bull);
}
