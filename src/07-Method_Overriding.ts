namespace MethodOverriding {
  class Animal {
    name: string = "";

    breathing() {
      console.log("Breathing");
    }
  }

  class Snake extends Animal {
    //Overriding Method
    breathing() {
      console.log("Is Breathing");
    }
  }

  const snake = new Snake();
  snake.breathing();
}
