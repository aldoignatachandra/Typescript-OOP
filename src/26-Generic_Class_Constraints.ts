namespace GenericClassConstraints {
  interface Product {
    sell(): void;
  }

  class CarProduct implements Product {
    sell(): void {
      console.log("Log => Sell A Car !!");
    }
  }

  class MotorCycleProduct implements Product {
    sell(): void {
      console.log("Log => Sell A Motor Cycle !!");
    }
  }

  function sellPorducts<T extends Product>(products: T[]): void {
    products.forEach((product) => product.sell());
  }

  const car = new CarProduct();
  const motor = new MotorCycleProduct();

  sellPorducts([car, motor]);
}
