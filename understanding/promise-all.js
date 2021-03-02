const all = (asyncs) => (
  new Promise((resolve) => {
    const result = [];
    let count = 0;
    asyncs.forEach((func, index) => {
      func.then((data) => {
        result[index] = data;
        count++;
        if (count === asyncs.length) {
          resolve(result);
        }
      })
    })
  })
);
