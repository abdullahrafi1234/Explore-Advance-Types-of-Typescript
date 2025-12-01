// mapped types

// map

const arrayOfNum: number[] = [1, 3, 4];

const arrayOfString: string[] = ["1", "3", "4"];

const arrayOfStringMap: string[] = arrayOfNum.map((num) => num.toString());

console.log(arrayOfStringMap);

type AreaOfNum = {
  height: number;
  width: number;
};

// type height = AreaOfNum["height"];

// type AreaOfString = {
//   [key in "height" | "width"]: string;
// };
// type AreaOfStringKeyof = {
//   [key in keyof AreaOfNum]: string;
// };

type Area<T> = {
  [key in keyof T]: T[key];
};

const area1: Area<{ height: string; width: boolean }> = {
  height: "50",
  width: false,
};
