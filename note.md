**url**: http://note.youdao.com/noteshare?id=14d507a5d5652aaa33c537abe83092b3

**基础**

- [原始类型](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)：
    1. number, string, bigint, boolean, undefined, symbol, null. null是原始类型是因为它的行为类似于原始类型，但从另一个角度来说所有object是从null演变而来，所以typeof null返回的是object
    2. symbol的作用就是创建一个独一无二的值，可以用Symbol().for()来创建一个全局变量

- 深浅拷贝
    1. Object.assign和...都是浅拷贝，当有值为object时这两种方法拷贝的还是reference
    2. 使用`JSON.parse(JSON.stringify(obj))`进行深拷贝，但是这种方法不可拷贝函数。可以用[immutability-helper](https://github.com/kolodny/immutability-helper)这种库来完成深拷贝，实际上是嵌套object.assign的语法糖
    3. redux中使用...这种是防止reducer被mutate，由于react使用三等号来比较前后state决定是否render，所以只要返回一个新的state reference即可

- 变量名提升
    1. js会在编译阶段将变量的生命提前放到内存里，在执行阶段再对这些变量进行赋值。从程序员层面来看，就像是变量声明被提升至代码顶端

- 作用域
    1. lexical scope(词法作用域): 作用域是指一个变量可以被使用的范围，这个范围是在编译阶段被决定的。理解作用域可以减少bug产生的可能。每一对花括号就是一个作用域。

- this
    1. 使用call或者apply可以设定在函数运行时this指向哪里
    2. 使用bind可以让函数的this永远指向指定的变量
    3. 箭头函数的this指向上一层语义作用域，当初始化的时候就被决定并且永远不改变
    4. object内函数的this指向object
    5. 对于原型链上的this，仍然指向被调用时所处的object
    6. 当new一个新对象时，this指向这个新实例

- 原型链？