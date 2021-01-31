namespace MythAnimal {
  export class Dragon {
    log(type: String): void {
      console.log(`Summon ${type} Dragon`);
    }
  }

  export class Cerberus {
    log(type: String): void {
      console.log(`Summon ${type} Cerberus`);
    }
  }
}

const fireDragon = new MythAnimal.Dragon();
fireDragon.log("Fire");

const darkCerberus = new MythAnimal.Cerberus();
darkCerberus.log("Dark");
