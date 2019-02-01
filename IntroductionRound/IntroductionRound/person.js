let gender;
let hobbies;

function Person(firstName, lastName, gender, hobbies) {
    this.name = {
        fist: firstName,
        last: lastName
    };
    this.gender = gender;
    this.hobbies = hobbies;
}

Person.prototype.sayHello = function() {
    console.log(`Hello. My name is ${this.name.fist} ${this.name.last}.`);
};

Person.prototype.tellHobbies = function() {
    if (this.hobbies.length > 0) {
        if (this.hobbies.length > 1) {
            console.log('My hobbies are:');
            for (let i in this.hobbies) {
                console.log(`- ${this.hobbies[i]}`);
            }
        } else {
            console.log(`My only hobbie is ${this.hobbies}`)
        }
    } else {
        console.log('I have no hobbies.');
    }
};

module.exports = Person;