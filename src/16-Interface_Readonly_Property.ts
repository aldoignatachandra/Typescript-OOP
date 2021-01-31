namespace InterfaceReadonlyProperty {
  interface Student {
    readonly name: string;
    readonly age: number;
  }

  //Cannot Change The Interface Property After it Already Declare Once
  let student: Student = { name: "Aldo", age: 19 };
  console.log("STUDENT => ", student);
}
