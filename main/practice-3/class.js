// Write your code here
module.exports = class Class{
    constructor(number ){
        this.number = number;
        this.member = [];
        this.leader;
        this.teacher;
    }
    assignLeader(student) {
        this.leader = student.name;
        if (!this.member.includes(student)) {
            return "It is not one of us.";
        } else {
            if (this.leader === student.name) {
                if(this.teacher) {
                    this.teacher.notifyLeaderAssigned(student.name + " become Leader of Class " + student.clazz.number);
                }
                return "Assign team leader successfully.";
            }
        }
    }
    appendMember(student){
        this.member.push(student);
        if(this.teacher){
            this.teacher.notifyStudentAppended(student.name + " has joined Class "+ student.clazz.number);
        }
    }
    hasStudent(student){
        return this.member.includes(student);
    }

};