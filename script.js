// Constructor function for Person
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Add a greet method to the Person prototype
Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Constructor function for Employee, which inherits from Person
function Employee(name, age, jobTitle) {
    // Call the Person constructor to set the name and age properties
    Person.call(this, name, age);
    this.jobTitle = jobTitle;
}

// Inherit the Person prototype into the Employee prototype
Employee.prototype = Object.create(Person.prototype);

// Add a jobGreet method to the Employee prototype
Employee.prototype.jobGreet = function () {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
