namespace Visibility {
  // VISIBILITY
  // 1 -> PUBLIC
  // 2 -> PROTECTED
  // 3 -> PRIVATE

  class Animal {
    public name: string;
    private legs: number;
    protected mammals: boolean;

    constructor(name: string, legs: number, mammals: boolean) {
      this.name = name;
      this.legs = legs;
      this.mammals = mammals;
    }

    walking() {}
  }

  class Shark extends Animal {
    private eggAge: number = 4;
    private smallSharkAge: number = 7;
    private sharkAge: number = 60;

    getAge(): number {
      return this.eggAge + this.smallSharkAge + this.sharkAge;
    }
  }

  const shark = new Shark("blue", 4, false);
  console.log("LOG -> ", shark);
  console.log("LOG GET AGE -> ", shark.getAge());
}
