class Parent {
    constructor (info) {
        this.name = info.name;
        this.age = info.age;
        this.height = info.height;
    }
    selfIntroduce(){
        console.log(`Hello, My name is ${this.name}, ${this.age} old, ${this.height} cm`);
    }
}

class People extends Parent{
    constructor(info, school) {
        super(info);
        this.school = school;
    }
    introduceSchool(){
        console.log(`My School is ${this.school}`);
    }
}