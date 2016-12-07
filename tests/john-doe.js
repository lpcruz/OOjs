var Name = require('../PageModels/Name.js');

function getName(firstName, lastName) {

    this.name = new Name(this.firstName, this.lastName);
    
    console.log(firstName, lastName);

}

getName(firstName, lastName);
