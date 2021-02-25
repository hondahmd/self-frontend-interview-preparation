// Simple Promises/A+
// https://promisesaplus.com/

// 2.1 states
const PENDING = 'PENDING';
const RESOLVED = 'RESOLVED';
const REJECTED = 'REJECTED';

// 2.3 The Promise Resolution Procedure
const resolvePromise = (promise, x, resolve, reject) => {
  // 2.3.1
  if (promise === x) {
    reject(new TypeError('Cycle detected!'));
    return;
  }
  // 2.3.2
  if (x instanceof MyPromise) {
    if (x.status === RESOLVED) {
      resolve(x.value);
    } else if (x.status === REJECTED) {
      reject(x.reason);
    } else {
      x.then(resolve, reject);
    }
    return;
  }
  const xType = typeof x;
  // 2.3.4
  if (xType !== 'object' && xType !== 'function') {
    resolve(x);
  }
  // 2.3.3
  else {
    if (x === null) {
      resolve(x);
    }

    try {
      const then = x.then;
      // 2.3.3.3
      if (typeof then === 'function') {
        then.call(
          x,
          (y) => resolvePromise(promise, y, resolve, reject),
          (r) => reject(r),
        )
      } else {
        resolve(x);
      }
    } catch (e) {
      reject(e)
    }
  }
}

class MyPromise {
  constructor(executor) {
    this.status = PENDING;
    // 1.3
		this.value = undefined;
    // 1.5
		this.reason = undefined;
    this.onFulfilledCBs = [];
    this.onRejectedCBs = [];

    const resolve = (value) => {
      if (this.status === PENDING) {
        this.value = value;
        this.status = RESOLVED;
        this.onFulfilledCBs.forEach(fn => fn(this.value));
      }
    }

    const reject = (reason) => {
      if (this.status === PENDING) {
        this.reason = reason;
        this.status = REJECTED;
        this.onRejectedCBs.forEach(fn => fn(this.reason));
      }
    }

    try {
      executor(resolve, reject);
    } catch (e) {
      console.log('Promise Error:', e);
      reject(e);
    }
  }

  // 2.2 Then Method
  then(onFulfilled, onRejected) {
    const promise2 = new MyPromise((resolve, reject) => {
      if (this.status === RESOLVED) {
        // 2.2.2.1
        const x = onFulfilled(this.value);
        // 2.2.7.1
        resolvePromise(promise2, x, resolve, reject);
      }
      if (this.status === REJECTED) {
        // 2.2.3.1
        const x = onRejected(this.reason);
        // 2.2.7.1
        resolvePromise(promise2, x, resolve, reject);
      }
      if (this.status === PENDING) {
        // 2.2.2.2
        this.onFulfilledCBs.push((value) => {
          const x = onFulfilled(value);
          resolvePromise(promise2, x, resolve, reject);
        });
        // 2.2.3.2
        this.onRejectedCBs.push((reason) => {
          const x = onRejected(reason);
          resolvePromise(promise2, x, resolve, reject);
        });
      }
    });

    // 2.2.7
    return promise2;
  }
}

const promise = new MyPromise((resolve, reject) => {
  console.log('async start');
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

const promise1 = promise.then((data) => {
  console.log('then ', data);
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 1000);
  });
}, (e) => {
  return e;
});

const promise2 = promise1.then((data) => {
  console.log('then ', data);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    }, 1000);
  })
}, (e) => {
  console.log(e);
  return e;
});

const promise3 = promise2.then((data) => {
  console.log('then ', data);
})
