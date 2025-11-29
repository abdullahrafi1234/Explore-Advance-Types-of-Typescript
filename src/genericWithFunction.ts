// Generic Function

// const createArrayWithString = (value: string) => [value];

// const createArrayWithNumber = (value: number) => [value];

// const createArrayWithObject = (value: { id: number; name: string }) => {
//   return [value];
// };

const createArrayWithGeneric = <T>(value: T) => {
  [value];
};

const arrString = createArrayWithGeneric("Apple");
console.log(arrString);
const arrNum = createArrayWithGeneric(222);
const arrObj = createArrayWithGeneric({ id: 23, name: "Shanu" });

// Tuple
const createArrayWithTuple = (param1: string, param2: number) => [
  param1,
  param2,
];

// Generic Tuple
const createArrayWithGenericTuple = <X, Y>(param1: X, param2: Y) => [
  param1,
  param2,
];

const res1 = createArrayWithGenericTuple("Maruf", 222);
const res2 = createArrayWithGenericTuple(222, { name: "Abir" });

const addStudentToCourse = <T>(studentInfo: T) => {
  return {
    course: "Next Level",
    ...studentInfo,
  };
};

const student1 = {
  name: "abir",
  id: 123,
  hasPen: true,
};

const result = addStudentToCourse(student1);
console.log(result);
