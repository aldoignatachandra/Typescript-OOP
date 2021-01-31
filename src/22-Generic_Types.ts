namespace GenericTypes {
  type Generics<T> = T;

  function genericsFunction2<T>(value: T): Generics<T> {
    return value;
  }

  console.log(genericsFunction2<string>("Testing"));
}
