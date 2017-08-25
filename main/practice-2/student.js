const Person = require('./person');
module.exports = class Student extends Person{
    constructor(name , age , clazz){
        super(name , age);
        this.clazz = clazz;
    }
    introduce() {
        if (this.clazz.leader === this.name) {
            return super.introduce() + " I am a Student. I am Leader of Class " + this.clazz.number + ".";
        } else {
            return super.introduce() + " I am a Student. I am at Class " + this.clazz.number + ".";

        }
    }
};