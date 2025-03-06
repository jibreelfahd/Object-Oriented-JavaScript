/* 

1. Create an Animal class. The class will have name, age, color, legs properties and create different methods
2. Create a Dog and Cat child class from the Animal Class. 

*/

class Animal {
  constructor(public name: string, public age: number, public color: string, public legs?: number) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }

  description() {
    console.log(
      `My name is: ${this.name}, i am ${this.age} years old, i have ${this.legs} legs and i am ${this.color} in complexion`
    ); //i dont know how to spell the word 😂
  }
}

class Dog extends Animal {
  constructor(public name: string, public age: number, public color: string, public bark?: string) {
    super(name, age, color);
    this.legs = 4;
    this.bark = "I bark anytime i need food";
  }

  description() {
    console.log(
      `My name is: ${this.name}, i am ${this.age} years old, i have ${this.legs} legs, i am ${this.color} and ${this.bark}.`
    );
  }
}

class Cat extends Animal {
  constructor(name: string, age: number, color: string, public meow?: string) {
    super(name, age, color);
    this.legs = 4;
    this.meow = "My meow is cute";
  }

  description() {
    console.log(
      `My name is: ${this.name}, i am ${this.age} years old, i have ${this.legs} legs and i am ${this.color}. FYI, ${this.meow}.`
    );
  }
}

const animalOne = new Animal("Bird", 4, "dark", 2);
const dogOne = new Dog("Bingo", 5, "white");
const catOne = new Cat("Damian", 9, "golden");

animalOne.description();
dogOne.description();
catOne.description();
