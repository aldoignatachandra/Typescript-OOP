namespace GenericClass2 {
  class AClass {
    name: string = "Class A";
  }

  class NewClass<T> {
    classProp: T;

    constructor(classProp: T) {
      this.classProp = classProp;
    }
  }

  const classA = new AClass();
  console.log("TESTING GENERIC CLASS 1 => ", classA);

  const newClass = new NewClass(classA);
  console.log("TESTING GENERIC CLASS 2 => ", newClass);
}
