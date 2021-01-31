namespace Interface {
  interface AndroidPhone {
    name: string;
    menu(): void;
    home(): void;
    back(): void;
  }

  class Samsung implements AndroidPhone {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    menu(): void {
      console.log("Menu Tapped");
    }

    home(): void {
      console.log("Home Tapped");
    }

    back(): void {
      console.log("Back Tapped");
    }
  }

  class Asus implements AndroidPhone {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    menu(): void {
      console.log("Menu Tapped");
    }

    home(): void {
      console.log("Home Tapped");
    }

    back(): void {
      console.log("Back Tapped");
    }
  }
}
