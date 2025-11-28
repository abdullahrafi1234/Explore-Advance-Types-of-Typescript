type TUser = {
  name: string;
  age: number;
};

// Interface

interface IUser {
  name: string;
  age: number;
}

type Role = {
  role: "admin" | "user";
};

type UserWithRole = TUser & Role;

interface IUserWithRole extends IUser {
  role: "admin" | "user";
}

// const user1: TUser = {
//   name: "Abir",
//   age: 30,
// };
// const Iuser: IUser = {
//   name: "Abir",
//   age: 30,
// };
const user2: IUserWithRole = {
  name: "Abir",
  age: 30,
  role: "admin",
};

type Friends = string[];
const friends: Friends = ["A", "B", "C"];

interface IFriends {
  [index: number]: string;
}

const Ifriends: IFriends = ["A", "B", "C"];
// function on type alias
type Add = (num1: number, num2: number) => number;

const add: Add = (num1, num2) => num1 + num2;

interface IAdd {
  (num1: number, num2: number): number;
}
const add2: IAdd = (num1, num2) => num1 + num2;
