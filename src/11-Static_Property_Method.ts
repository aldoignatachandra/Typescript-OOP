namespace StaticPropertyMethod {
  class Chicken {
    static legs: number = 2;

    static walk() {
      console.log(`Chicken walks with ${this.legs} legs`);
    }

    getLegs() {
      console.log(Chicken.legs);
    }
  }

  //Try Static Method
  Chicken.walk();

  const chicken = new Chicken();
  chicken.getLegs();

  //-------------------------
  const chicken1 = new Chicken();
  const chicken2 = new Chicken();
  const chicken3 = new Chicken();
  const chicken4 = new Chicken();
  const chicken5 = new Chicken();

  chicken1.getLegs();
  chicken2.getLegs();
  chicken3.getLegs();
  chicken4.getLegs();
  chicken5.getLegs();

  //Change Static Variable
  Chicken.legs = 4;

  chicken1.getLegs();
  chicken2.getLegs();
  chicken3.getLegs();
  chicken4.getLegs();
  chicken5.getLegs();
}
