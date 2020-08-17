// generator
// function* foo(x) {
//     let y = 2 * (yield (x + 1))
//     let z = yield (y / 3)
//     return (x + y + z)
// }
// let it = foo(5);
// console.log(it.next());
// console.log(it.next(3));
// console.log(it.next(3));


// async await
// let a = { val: 0 };
// let c = a;
// let b = async () => {
//     console.log(c);
//     c.val = c.val + await 10;
//     console.log('2', c);
// }
// b()
// a.val++
// console.log('1', a, c)


// event loop in browser
// const async1 = async () => {
//     await console.log(1);
//     await console.log(2);
// }
// async1();
// console.log(3);


// event loop in node
// setTimeout(() => {
//     console.log('setTimeout')
// }, 0)
// setImmediate(() => {
//     console.log('setImmediate')
// })

const fs = require('fs')

fs.readFile(__filename, () => {
    setTimeout(() => {
        console.log('timeout');
    }, 0)
    setImmediate(() => {
        console.log('immediate')
    })
})

// setTimeout(() => {
//     console.log('timer1')

//     Promise.resolve().then(function () {
//         console.log('promise1')
//     })
// }, 0)
// process.nextTick(() => {
//     console.log('nextTick')
//     process.nextTick(() => {
//         console.log('nextTick')
//         process.nextTick(() => {
//             console.log('nextTick')
//             process.nextTick(() => {
//                 console.log('nextTick')
//             })
//         })
//     })
// })