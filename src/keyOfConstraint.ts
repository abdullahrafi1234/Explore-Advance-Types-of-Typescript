// keyof : type operator

type RichPeoplesVehicles = {
  car: string; // key: value
  bike: string;
  cng: string;
};

type MyVehicle1 = "bike" | "car" | "cng";
type MyVehicle2 = keyof RichPeoplesVehicles;

const myVehicle1: MyVehicle1 = "cng";
const myVehicle2: MyVehicle2 = "car";
// 1. This method is dynamic. If you add `plane: string` to the RichPeoplesVehicles type in the future, `MyVehicle2` will automatically include `"plane"`. But you will have to

type User = {
  id: number;
  name: string;
  address: {
    city: string;
  };
};

const user: User = {
  id: 222,
  name: "Rafi",
  address: {
    city: "ctg",
  },
};

// const myId = user.id  // dot notation
const myId = user["id"]; // bracket notation
const myName = user["name"];
const myAddress = user["address"];

// console.log({ myId, myName, myAddress });

// const getPropertyFromObject = (obj: User, key: "name"| "id" |"address") => {
//   return obj[key];
// };

// const getPropertyFromObjectKeyof = (obj: User, key: keyof User) => {
//   return obj[key];
// };
const getPropertyFromObject = <X>(obj: X, key: keyof X) => {
  return obj[key];
};

// const result = getPropertyFromObject(user, "name");
// console.log(result);
// const result2 = getPropertyFromObject(user, "name");
// console.log(result2);

const product = {
  brand: "HP",
};

const result3 = getPropertyFromObject(product, "brand");
console.log(result3);
