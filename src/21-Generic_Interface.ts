namespace GenericInterface {
  interface Generics<T> {
    prop: T;
  }

  function genericsFunction<T>(value: T): Generics<T> {
    let data: Generics<T> = {
      prop: value,
    };

    return data;
  }

  console.log(genericsFunction<string>("Testing"));
  console.log(genericsFunction<number>(123));
  console.log(genericsFunction<boolean>(true));
}
