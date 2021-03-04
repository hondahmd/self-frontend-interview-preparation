const concurrent = (funcs, cb) => {
  const max = 5;
  const result = [];

  const tasks = Array(max).fill().map(() => (
    new Promise((resolve) => {
      const run = () => {
        // finished
        if (funcs.length <= 0) {
          resolve();
          return;
        }
        // pick a func to run
        const current = funcs.shift();
        current.then((data) => {
          result.push(data);
          // this thread is idle, turn into next round
          run();
        })
      }
      run();
    })
  ));

  Promise.all(tasks)
  .then(() => cb(results));
};
