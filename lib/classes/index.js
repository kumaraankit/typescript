"use strict";
class Animal {
    // private
    //protected
    constructor(name) {
        this.name = name;
    }
    move(x) {
        console.log(` i have number ${x}`);
    }
}
let cat = new Animal('cat');
cat.move(10);
cat.name = "yyyy";
class newAnimal extends Animal {
    newMethod(y) {
        console.log(`newMethod ${this.name} and ${y}`);
    }
}
