var Person = require('../PageModels/Name.js');

function testNameAndAge() {
    var nameAndAge = new Person(this.name, this.age);

    nameAndAge
        .sayName('John')
        .sayAge('25');
}

testNameAndAge();
