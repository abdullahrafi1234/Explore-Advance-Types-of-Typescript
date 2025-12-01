// conditional type :

type A = null;
type B = undefined;

type C = A extends number ? true : B extends undefined ? true : false;

type Vehicles = {
  bike: string;
  car: string;
  ship: string;
};

// type CheckVehicle<T> = T extends "bike" | "car" | "ship" ? true : false;

// Using keyof operator
type CheckVehicle<T> = T extends keyof Vehicles ? true : false;

type HasBike = CheckVehicle<"cycle">;
