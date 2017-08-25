const Person = require('./person');
const Class = require('./class');
module.exports = class Teacher extends Person{
    constructor(name, age , classes){
        super(name, age);
        this.classes = classes;
        this.notifyObject(classes);
    }
    introduce(){
        return super.introduce() + " I am a Teacher. I teach "+ this.getClazz() + ".";
    }
    isTeaching(student) {
        let arr = [];
        for(let item of this.classes){
            arr.push(item.number);
        }
        console.log(arr);
        if(student.clazz.hasStudent(student) && arr.includes(student.clazz.number)){
            return true;
        }else {
            return false;
        }
    }
    /*notifyStudentAppended(student){
        if(this.classes.member.includes(student.name)){
            if(this.classes.leader === student.name){
                return "I am "+ this.name + "." +" I know " + student.name+" has joined " + this.getClazz();
            }
            return "I am "+ this.name + "." +" I know " + student.name+" become Leader of " + this.getClazz();
        }
    }*/
    getClazz(){
        if(this.classes.length === 0){
            return "No Class";
        }else {
            let arr = [];
            arr.push(this.classes.map( ele => ele.number));
            return "Class "+ arr.join(",");
        }
    }
    notifyStudentAppended(){};
    notifyLeaderAssigned(){};
    notifyObject(classes){
        classes.forEach( ele => ele.teacher = this);
    }

};