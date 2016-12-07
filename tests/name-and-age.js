var Person = require('../PageModels/Person.js');

function testNameAndAge() {
    var nameAndAge = new Person(this.name, this.age);

    nameAndAge
        .getName('John')
        .getAge('25');
}

testNameAndAge();
