const obj = { age: 22 };

obj.__proto__ = null;
console.log(obj.__proto__);
console.log(Object.getPrototypeOf(obj)); 

obj.__proto__ = null;
console.log(obj.__proto__);
console.log(Object.getPrototypeOf(obj));

obj.__proto__ = { gender: 'male' };
console.log(obj.__proto__);
console.log(Object.getPrototypeOf(obj));    


function Student () {}
const studentA = new Student();

console.log(Student.prototype === studentA.__proto__);
console.log(Student.__proto__ === studentA.__proto__);


function Super () {}
function Sub () {}
Sub.prototype = Object.create(Super.prototype);
console.log(Sub.prototype.__proto__ === Super.prototype);
console.log(Sub.prototype.constructor === Super.prototype.constructor);
Sub.prototype.constructor = Sub;
Sub.__proto__ = Super;


Object.prototype.hack = '???';
const corrupted = { salary: 1 };
for (const key in corrupted) {
    console.log(key);
    if (corrupted.hasOwnProperty(key)) {
        console.log(corrupted[key]);
    }
}