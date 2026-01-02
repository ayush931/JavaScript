let marks = [80, 90, 75, 85, 95];

let highestMarks = marks.reduce(function(a, b) {
  return Math.max(a, b);
});

let student = marks.indexOf(highestMarks) + 1;

console.log(`Student ${student} scored the highest marks: ${highestMarks}`);
