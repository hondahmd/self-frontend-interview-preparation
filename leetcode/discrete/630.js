var scheduleCourse = function (courses) {
  const findUrgeCourse = (courses) => {
    let resultIndex = 0;
    let resultOffset = courses[0][1] - courses[0][0];
    courses.forEach((course, index) => {
      if ((course[1] - course[0]) < resultOffset) {
        resultOffset = course[1] - course[0];
        resultIndex = index;
      }
    })
    return resultIndex;
  };

  const clone = (arr) => arr.map(course => [...course]);

  let result = 0;
  while (courses.length > 0) {
    const temp = clone(courses);
    let loopResult = 0;
    let current = 0;
    while (temp.length > 0) {
      const next = findUrgeCourse(temp);
      if (current + temp[next][0] <= temp[next][1]) {
        current += temp[next][0];
        loopResult++;
      }
      temp.splice(next, 1);
    }
    result = Math.max(result, loopResult);
    courses.splice(findUrgeCourse(courses), 1);
  }

  return result;
};

const courses = [[7, 16], [2, 3], [3, 12], [3, 14], [10, 19], [10, 16], [6, 8], [6, 11], [3, 13], [6, 16]];
console.log(scheduleCourse(courses));
