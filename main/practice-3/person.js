// Write your code here
module.exports = function Person(name ,age) {
    this.id = 123;
    this.name = name;
    this.age = age;
    Person.prototype.introduce = function () {
        return "My name is " + this.name + ". I am " + this.age + " years old.";

    };
};

