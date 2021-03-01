// 让sum(1)(2)(3)和sum(1, 2, 3)输出都是6，并且要支持无限个参数
function sum (number1) {
  if (arguments.length > 1) {
    return Array.prototype.reduce.call(arguments, (acc, cur) => acc += cur, 0);
  }

  let result = number1;

  function add (number2) {
    // extra empty brackets at the end
    if (!number2) {
      return result;
    }
    result += number2;
    return add;
  }

  add.toString = function() {
    return result;
  }

  return add;
}

// seems that whether `toString` works here depends on how the author implements `console` api
console.log(sum(1)(2)(3)(4)(5).toString());
console.log(sum(1, 2, 3, 4, 5));
