'use strict';

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
 }

    sayName(name) {
        console.log(name);

        return this;
    }

    sayAge(age) {
        console.log(age);

        return this;
    }
}

module.exports = Person;
