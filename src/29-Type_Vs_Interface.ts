//1-> Type Can Declare (Number, String, Array, Object, Boolean)
type name = string;
type password = number;

//1-> Interace Can Declare Only Object
interface User {
  name: string;
  password: Number;
}

//2 -> Same Name Type Will Throw Error Duplicate
type Dino = { name: string };

//2 -> Same Name Interface Can Merge Inside One Class
interface Dinosaurus {
  name: string;
}

interface Dinosaurus {
  weight: number;
}

class TRex implements Dinosaurus {
  name: string;
  weight: number;

  constructor(name: string, weight: number) {
    this.name = name;
    this.weight = weight;
  }
}

//3 -> Interface Can Extends A Class
//3 -> Type Can Not Extends A Class

//4 -> Way To Merge Different Type
type Name = { name: string };

type Age = { age: number };

type Employee = Name & Age;

const employee: Employee = {
  name: "Aldo Ignata Chandra",
  age: 17,
};

//5 -> Recommended Use Type In Variable / Function
//5 -> Recommended Use Interface In Class
