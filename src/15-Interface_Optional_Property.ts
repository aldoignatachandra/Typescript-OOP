namespace InterfaceOptionalProperty {
  interface Teacher {
    name: string;
    age: number;
    phone?: string;
  }

  let teacher: Teacher = { name: "Aldo", age: 19 };
  console.log("TEACHER =>", teacher);
}
