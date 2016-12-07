var Hobbies = require('../PageModels/Hobbies.js');

function testWhatILikeToDo() {
    var myHobbiesInclude = new Hobbies(this.firstHobby, this.secondHobby, this.thirdHobby);

    myHobbiesInclude
        .getHobbies('hiking', 'photography', 'writing code');
}

testWhatILikeToDo();
