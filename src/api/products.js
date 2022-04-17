import http from "../http-common";

// const products = async() => {
//   const response = await http.post("/")
// }

export const products = [
  {
    productId: 1,
    name: "Black Gate",
    price: 150000,
    categoryId: 2,
    // oldPrice: 200000,
    description:
      "A solid back gate with that stands 10ft high and made from a random description about the gate follows here",
    imageUrls: [
      "https://res.cloudinary.com/conclase/image/upload/v1650063980/products/ejcksmahx8en3gi0r1vf.jpg",
    ],
    quantity: 100,
    createdBy: "admin",
    kind: "normal",
    Metadata: [
      { Name: "weight", Value: "100" },
      { Name: "Color", Value: "black" },
    ],
  },
  {
    productId: 2,
    name: "Steel chair",
    price: 10000,
    categoryId: 3,
    // oldPrice: 200000,
    description:
      "A solid back gate with that stands 10ft high and made from a random description about the gate follows here",
    imageUrls: [
      "https://res.cloudinary.com/conclase/image/upload/v1650063980/products/ejcksmahx8en3gi0r1vf.jpg",
    ],
    quantity: 100,
    createdBy: "admin",
    kind: "measurable",
    Metadata: [
      { Name: "weight", Value: "100" },
      { Name: "Color", Value: "black" },
    ],
  },
];
