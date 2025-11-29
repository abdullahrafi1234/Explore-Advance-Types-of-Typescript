// dynamically generalize

type GenericArray<T> = Array<T>;

// const friends: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];

// Array Constructor
const friends: Array<string> = ["Mr. X", "Mr. Y", "Mr. Z"];
const friends2: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

// const rollNumber: number[] = [2, 34, 43, 24];
const rollNumber: GenericArray<number> = [2, 34, 43, 24];

// const isEligible: boolean[] = [true, false, true];
const isEligible: GenericArray<boolean> = [true, false, true];

// Function
const sqrFunc = (value: number) => {
  return value * value;
};

sqrFunc(8);

const userList: GenericArray<{ name: string; age: number }> = [
  {
    name: "Abir",
    age: 22,
  },
  {
    name: "Sabbir",
    age: 23,
  },
];
