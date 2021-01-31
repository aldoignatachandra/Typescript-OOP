namespace GenericConstraints {
  interface Length {
    length: number;
  }

  function generics<T extends Length>(arg: T): T {
    console.log("Length => ", arg.length);
    return arg;
  }

  const genericString = generics("Testing");
  console.log("Testing Generic Constraint 1 => ", genericString);

  const genericNumber = generics({ length: 123, value: 123 });
  console.log("Testing Generic Constraint 2 => ", genericNumber);
}
