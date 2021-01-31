namespace DependencyInjection {
  interface IStore {
    name: string;
    profit: number;
    getProfit(): number;
  }

  class StoreA implements IStore {
    name: string = "Store A";
    profit: number = 1000;

    getName(): string {
      return this.name;
    }

    getProfit(): number {
      return this.profit;
    }
  }

  class StoreB implements IStore {
    name: string = "Store B";
    profit: number = 2500;

    getName(): string {
      return this.name;
    }

    getProfit(): number {
      return this.profit;
    }
  }

  class MaterialProduct {
    private store: IStore;
    private name: String;
    private price: number;

    constructor(store: IStore, name: string, price: number) {
      this.name = name;
      this.price = price;
      this.store = store;
    }

    sell(): void {
      console.log(
        `The selling price of ${this.name} is ${
          this.store.getProfit() + this.price
        }`
      );
    }
  }

  class FoodProduct {
    private store: IStore;
    private name: String;
    private price: number;

    constructor(store: IStore, name: string, price: number) {
      this.name = name;
      this.price = price;
      this.store = store;
    }

    sell(): void {
      console.log(
        `The selling price of ${this.name} is ${
          this.store.getProfit() + this.price
        }`
      );
    }
  }

  const storeA = new StoreA();
  const storeB = new StoreB();

  const material = new MaterialProduct(storeA, "brick", 10000);
  material.sell();

  const food = new FoodProduct(storeB, "Nasi Goreng", 80000);
  food.sell();
}
