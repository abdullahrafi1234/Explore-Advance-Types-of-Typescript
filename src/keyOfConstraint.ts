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

const user = {
  id: 222,
  name: "Rafi",
  address: {
    city: "ctg",
  },
};

// const myId = user.id  // dot notation
const myId = user["id"]; // bracket notation

// const getPropertyFromObject = (obj: object, key: string)
