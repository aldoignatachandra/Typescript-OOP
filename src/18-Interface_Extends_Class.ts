namespace InterfaceExtendsClass {
  class Animal {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  interface IDolphine extends Animal {
    swim(): void;
  }

  class Dolphine implements IDolphine {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    swim(): void {
      console.log("Dolphine Is Swim");
    }
  }

  let dolphine = new Dolphine("Dolphine");
  dolphine.swim();
  console.log("Dolphine => ", dolphine);
}
