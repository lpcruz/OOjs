'use strict';

class Hobbies {
    constructor(firstHobby, secondHobby, thirdHobby) {
        this.firstHobby = firstHobby;
        this.secondHobby = secondHobby;
        this.thirdHobby = thirdHobby;
 }

    getHobbies(firstHobby, secondHobby, thirdHobby) {
        console.log('Hi there, my hobbies include ' + firstHobby + ', ' + secondHobby +  ' and ' + thirdHobby);

        return this;
    }

}

module.exports = Hobbies;
