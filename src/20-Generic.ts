namespace Generic {
  function getData<T>(value: T) {
    return value;
  }

  const dataNumber = getData<number>(123);
  console.log("Data Number =>", dataNumber);

  const dataString = getData<string>("Test");
  console.log("Data String =>", dataString);
}
