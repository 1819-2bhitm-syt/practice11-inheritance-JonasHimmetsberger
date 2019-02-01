let subject;

const Person = require('./person');

function Student(firstName, lastName, gender, hobbies, subject) {
    Person.call(this, firstName, lastName, gender, hobbies);
    this.subject = subject;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;


Student.prototype.sayHello = function() {
    let gender;

    if(this.gender != null) console.log(`Hi. I'm ${this.name.fist} and I study ${this.subject}`);
    else console.log(`Hi. I'm ${this.name.fist} and what the hell is studying`);
};

module.exports = Student;