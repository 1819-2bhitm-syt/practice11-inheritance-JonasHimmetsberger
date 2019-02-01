let gender;
let hobbies;
let subject;

const Person = require('./person');

function Teacher(firstName, lastName, gender, hobbies, subject) {
    Person.call(this, firstName, lastName, gender, hobbies);
    this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.sayHello = function() {
    let gender;

    if(this.gender == 'male') gender = 'Mr.';
    else gender = 'Mrs.';

    console.log(`Hello. My name is ${gender} ${this.name.last} and I teach ${this.subject}`);
};

module.exports = Teacher;