// 'new'
function Person1 (name, age) {
    this.name = name;
    this.age = age;
}

const create = (constructor, ...args) => {
    const newObj = {};
    constructor.call(newObj, ...args);
    newObj.__proto__ = constructor.prototype;
    return newObj;
}

// const test1 = create(Person1, 'Honda', 24);
// console.log(test1 instanceof Person1);

/** 创建对象 */
// 组合使用构造函数和原型
function Person2 (name) {
    this.name = name;
}

Person2.prototype.showName = function () {
    console.log(this.name);
}

// const test2 = new Person2('Honda');
// test2.showName();

// 动态原型
function Person3 (name) {
    this.name = name;

    if (typeof this.showName !== 'function') {
        Person3.prototype.showName = function () {
            console.log(this.name);
        }
    }
}

const test3_1 = new Person3('Honda');
const test3_2 = new Person3('Juele');
// test3_1.showName();
// test3_2.showName();
// console.log(test3_1.showName === test3_2.showName);
