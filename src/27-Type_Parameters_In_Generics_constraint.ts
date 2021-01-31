namespace TypeParametersInGenericConstraint {
  function getProperty<T, U extends keyof T>(obj: T, key: U) {
    return obj[key];
  }

  let numbers = { a: 1, b: 3, c: 7, d: 17, e: 100 };

  console.log(`Log Property a => `, getProperty(numbers, "a"));
  console.log(`Log Property b => `, getProperty(numbers, "b"));
  console.log(`Log Property c => `, getProperty(numbers, "c"));
  console.log(`Log Property d => `, getProperty(numbers, "d"));
  console.log(`Log Property e => `, getProperty(numbers, "e"));
}
