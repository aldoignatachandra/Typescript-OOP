namespace InterfaceInheritance {
  interface Vehicle {
    name: string;
    wheels: number;
  }

  interface ICar extends Vehicle {
    doors: number;
  }

  class Civic implements ICar {
    name: string = "";
    wheels: number = 0;
    doors: number = 0;
  }

  let civic = new Civic();
  civic.name = "Honda Civic";
  civic.wheels = 4;
  civic.doors = 5;

  console.log("CIVIC => ", civic);
}
