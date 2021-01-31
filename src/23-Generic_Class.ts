namespace GenericClass {
  interface Generics<T> {
    prop: T;
    method(): T;
  }

  class GenericClass<T> implements Generics<T> {
    prop: T;

    constructor(prop: T) {
      this.prop = prop;
    }

    method(): T {
      return this.prop;
    }
  }

  const genericClassNumber = new GenericClass<number>(123);
  console.log("TESTING 1 GENERIC CLASS => ", genericClassNumber.method());

  const genericClassString = new GenericClass<string>("Testing");
  console.log("TESTING 2 GENERIC CLASS => ", genericClassString.method());
}
