namespace ReadonlyModifier {
  class Person {
    readonly gender: string = "Male";
  }

  const person = new Person();
  console.log("LOG -> ", person);
}
