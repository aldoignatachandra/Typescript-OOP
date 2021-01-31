namespace GetterSetter {
  class Product {
    private _price: number = 0;
    private discount: number = 0.05;

    //Getter
    get price() {
      return this._price;
    }

    //Setter
    set price(value: number) {
      this._price = value - value * this.discount;
    }
  }

  const product = new Product();
  product.price = 2000;
  console.log("LOG PRICE ->", product.price);
}
