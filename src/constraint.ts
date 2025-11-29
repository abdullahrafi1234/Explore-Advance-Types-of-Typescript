// Constraint :  set strict rules

const addStudentToCourse = <
  T extends { id: number; name: string; class: string }
>(
  studentInfo: T
) => {
  return {
    course: "Next Level",
    ...studentInfo,
  };
};

const student1 = {
  name: "abir",
  id: 123,
  hasPen: true,
  class: "five",
};

const result = addStudentToCourse(student1);
console.log(result);
