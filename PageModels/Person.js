'use strict';

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
 }

    getName(name) {
        console.log(name);

        return this;
    }

    getAge(age) {
        console.log(age);

        return this;
    }
}

module.exports = Person;
