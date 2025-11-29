interface Developer<T, X = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    released: string;
  };
  smartWatch: T;
  bike: X;
}

interface NonBrandWatch {
  heartRate: number;
  stopWatch: boolean;
}

interface BrandWatch {
  heartRate: number;
  callSupport: boolean;
  calculator: boolean;
}

const poorDeveloper: Developer<NonBrandWatch, { brand: string }> = {
  name: "Mr. Poor",
  salary: 2000,
  device: {
    brand: "lenevo",
    model: "a112",
    released: "30-10-2003",
  },
  smartWatch: {
    heartRate: 120,
    stopWatch: true,
  },
  bike: {
    brand: "Yamaha",
  },
};
const richDeveloper: Developer<BrandWatch> = {
  name: "Mr. Rich",
  salary: 4000,
  device: {
    brand: "Lenevo",
    model: "a112",
    released: "30-10-2003",
  },
  smartWatch: {
    heartRate: 120,
    calculator: true,
    callSupport: true,
  },
  bike: null,
};
