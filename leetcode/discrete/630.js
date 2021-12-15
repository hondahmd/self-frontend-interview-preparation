var scheduleCourse = function (courses) {
  const terms = [];
  courses
    .forEach((course, index) => {
      const exist = terms.findIndex(term => term.end === course[1]);
      if (exist !== -1) {
        terms[exist].list.push(index);
      } else {
        terms.push({
          end: course[1],
          list: [index],
        })
      }
    })
  terms.sort((a, b) => a.end - b.end);
  terms.forEach(term => {
    courses.forEach((course, index) => {
      if (course[0] <= term.end && course[1] > term.end) {
        term.list.push(index);
      }
    });
    term.list = Array.from(new Set(term.list));
    term.list.sort((a, b) => courses[a][0] - courses[b][0]);
  });

  let current = 0;
  const finished = [];
  terms.forEach(term => {
    term.list.forEach(index => {
      if (!finished.includes(index) && current + courses[index][0] <= term.end) {
        current += courses[index][0];
        finished.push(index);
      }
    })
  });

  return finished.length;
};

const courses = [[5,15],[3,19],[6,7],[2,10],[5,16],[8,14],[10,11],[2,19]];
console.log(scheduleCourse(courses));
