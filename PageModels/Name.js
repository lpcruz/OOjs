'use strict';

class Name {

    // initialize an instance to a valid state
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        console.log(`${this._firstName} ${this._lastName}`);

        return this;
    }




}

// Returns this Page Model
module.exports = Name;
