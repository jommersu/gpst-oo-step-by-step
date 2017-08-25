const Person = require('./person');
const Class = require('./class');
module.exports = class Teacher extends Person{
    constructor(name, age , clazz){
        super(name, age);
        this.classes = clazz;
    }
    introduce(){
        return super.introduce() + " I am a Teacher. I teach "+ this.getClazz() + ".";
    }
    getClazz(){
        if(this.classes.length === 0){
            return "No Class";
        }else {
            let arr = [];
            arr.push(this.classes.map( ele => ele.number));
            return "Class "+ arr.join(",");
        }
    }
};