//链式调用-js

function Person(options) {
    this.name = options.name;
    this.age = options.age;
    this.height = options.height;
}

Person.prototype.sayName = function () {
    console.log(this.name);
    return this; //返回执行的当前上下文环境
}
Person.prototype.changeName = function (name) {
    this.name = name;
    console.log(this.name);
    return this;
}
Person.prototype.sayAge = function () {
    console.log(this.age);
    return this;
}
Person.prototype.sayHeight = function () {
    console.log(this.height);
    return this;
}