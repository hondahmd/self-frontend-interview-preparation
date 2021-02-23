// 'bind'
function bind (context, ...bindArgs) {
  const target = this;

  return function fn (...targetArgs) {
    if (this instanceof fn) {
      return new target(...bindArgs, ...targetArgs);
    }

    return target.call(context, ...bindArgs, targetArgs);
  }
}

Function.prototype.myBind = bind;

function showName () {
  console.log(this.name);
}

const obj = { name: 'hh???' };

const boundShowName = showName.myBind(obj);
boundShowName();

// call
function call (context, ...args) {
  const target = context || window;

  target.fn = this;
  return target.fn(...args);
}

Function.prototype.myCall = call;

function sayHi (sentence) {
  console.log('Hi ', this.name, sentence);
}

const obj2 = { name: 'Honda' };

sayHi.myCall(obj2, ' my bro');
