namespace ReturnType {
  class Bird {
    private legs: number = 2;

    getLegs(): number {
      return this.legs;
    }

    fly(): void {
      console.log("Fly");
    }

    async eat(): Promise<string> {
      return "Eat";
    }
  }
}
