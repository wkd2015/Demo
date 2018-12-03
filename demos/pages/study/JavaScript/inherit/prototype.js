function inheritPrototype(subType, superType) {
    let prototype = Object.create(superType.prototype); //创建对象
    // prototype.constructor = subType; //增强对象
    Reflect.defineProperty(prototype, 'constructor', {
        enumerable: false,
        value: subType
    })
    subType.prototype = prototype; //指定对象
}
function Parent(info) {
    this.name = info.name;
    this.age = info.age;
    this.height = info.height;
}
Parent.prototype.selfIntroduce = function () {
    console.log(`Hello, My name is ${this.name}, ${this.age} years old, ${this.height} cm`);
}

function Person(info, school) {
    Parent.call(this, info);
    this.school = school;
}
inheritPrototype(Person, Parent);
Person.prototype.introduceSchool = function () {
    console.log(`My School is ${this.school}`);
}

