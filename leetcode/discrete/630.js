var scheduleCourse = function (courses) {
  courses.sort((a, b) => a[1] - b[1]);

  const result = [];

  let current = 0;
  courses.forEach(course => {
    if (current + course[0] <= course[1]) {
      current += course[0];
      result.push(course[0]);
    } else if (result.length > 0 && result[result.length - 1] > course[0]) {
      current -= result.pop();
      current += course[0];
      result.push(course[0]);
    }
    result.sort((a, b) => a - b)
  });

  return result.length;
};

const courses = [[7,17],[3,12],[10,20],[9,10],[5,20],[10,19],[4,18]];
console.log(scheduleCourse(courses));
