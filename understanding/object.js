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

// const test3_1 = new Person3('Honda');
// const test3_2 = new Person3('Juele');
// test3_1.showName();
// test3_2.showName();
// console.log(test3_1.showName === test3_2.showName);

/** 继承 */
// 借用构造函数
function Super1 () {
  this.colors = [];
}

function Sub1 () {
  Super1.call(this);
}

// const test4_1 = new Sub1();
// const test4_2 = new Sub1();
// console.log(test4_1 === test4_2);

// 组合继承
function Super2 (name) {
  this.name = name;
}

Super2.prototype.showName = function () {
  console.log(this.name);
}

function Sub2 (name) {
  Super2.call(this, name);
}

Sub2.prototype = new Super2();
Sub2.prototype.constructor = Sub2;

const test5_1 = new Sub2('Honda');
const test5_2 = new Sub2('Wow');
console.log(test5_1 instanceof Super2);
console.log(test5_1.showName === test5_2.showName);

// 寄生组合式继承
function Super3 (name) {
  this.name = name;
  this.colors = [];
}

function Sub3 (name) {
  Super3.call(this, name);
}

// Sub的原型需要是super的原型的副本，用一个持有super原型的新的构造函数来构建sub的原型
// 这里的prototypeFn其实就是替换了组合继承中的Super构造函数
function inheritPrototype (subType, superType) {
  const prototypeFn = function () {};
  prototypeFn.prototype = superType.prototype;
  const prototype = new prototypeFn();
  prototype.constructor = subType;
  subType.prototype = prototype;
}

inheritPrototype(Sub3, Super3);

const test6_1 = new Sub3('Honda');
const test6_2 = new Sub3('How');
test6_1.colors.push('red');
console.log(test6_1, test6_2);
console.log(test6_1 instanceof Super3);
