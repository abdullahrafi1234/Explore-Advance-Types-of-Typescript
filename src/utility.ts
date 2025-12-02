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
