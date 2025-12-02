// Utility type

type Product = {
  id: number;
  name: string;
  price: string;
  stock: number;
  color?: string;
};

// type ProductSummery = {
//   id: number;
//   name: string;
//   price: string;
// };

// Pick <T, K>
type ProductSummery = Pick<Product, "name" | "id" | "stock">;

// Omit <T, K>
type OmitProducts = Omit<Product, "price" | "color">;

// Required all product
type ProductWithColor = Required<Product>;

const product: ProductWithColor = {
  id: 22,
  name: "rafi",
  price: "200",
  stock: 25,
  color: "red",
};

// Optional all product
type OptionalProduct = Partial<Product>;

type ReadOnlyProducts = Readonly<Product>;

// empty object ( it help us to understand that the key is string)

const emptyObject: Record<string, unknown> = {};

// Exclude<T, U>
type Letters = "A" | "B" | "C";
type ExcludedLetters = Exclude<Letters, "A">; // "B" | "C"

// Extract<T, U>
type Numbers = 1 | 2 | 3;
type ExtractedNumbers = Extract<Numbers, 2 | 3 | 4>; // 2 | 3

// NonNullable<T>
type NullableType = string | null | undefined;
type NonNullableType = NonNullable<NullableType>; // string

// ReturnType<T>
function getUser() {
  return { name: "Karim", age: 28 };
}
type UserType = ReturnType<typeof getUser>;

// Parameters<T>
function sum(a: number, b: number): number {
  return a + b;
}
type SumParameters = Parameters<typeof sum>; // [number, number]
