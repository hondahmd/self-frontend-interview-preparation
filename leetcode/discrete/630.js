var scheduleCourse = function(courses) {
  let result = 0;
  const oneLayer = (left, current) => {
    if ((courses.length - left.length) > result) {
      result = courses.length - left.length;
    }
    if (left.length === 0) {
      return;
    }
    left.forEach(course => {
      if ((current + courses[course][0]) <= courses[course][1]) {
        oneLayer(left.filter(item => item !== course), current + courses[course][0]);
      }
    });
  };
  oneLayer(courses.map((item, index) => index), 0);
  return result;
};

const courses = [[100, 200], [200, 1300], [1000, 1250], [2000, 3200]];
console.log(scheduleCourse(courses));
