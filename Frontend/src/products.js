export const products = [
  {
    _id: "1",
    name: "Fleshy Red Printed Mask",
    image: "/images/p1.jpeg",
    imageSet: ["/images/p1.jpeg", "/images/p1-2.jpeg"],
    price: 40,
    inStock: true,
    shortDesc:
      "Non Surgical Face Mask. breathable and reusable mask made with fine weaved cotton.",
    desc:
      "Non Surgical Face Mask. breathable and reusable mask made with fine weaved cotton with 2 layers. Wider face coverage for maximum protection   ",
  },
  {
    _id: "2",
    name: "Warli Print Mask",
    image: "/images/p2.jpeg",
    imageSet: ["/images/p2.jpeg", "/images/p2-2.jpeg"],
    price: 40,
    inStock: true,
    shortDesc:
      "Non Surgical Face Mask. breathable and reusable mask made with fine weaved cotton.",
    desc:
      "Non Surgical Face Mask. breathable and reusable mask made with fine weaved cotton with 2 layers. Wider face coverage for maximum protection   ",
  },
  {
    _id: "3",
    name: "Black Bagh Print Mask",
    image: "/images/p3.jpeg",
    imageSet: ["/images/p3.jpeg", "/images/p3-2.jpeg"],
    price: 40,
    inStock: true,
    shortDesc:
      "Non Surgical Face Mask. breathable and reusable mask made with fine weaved cotton.",
    desc:
      "Non Surgical Face Mask. breathable and reusable mask made with fine weaved cotton with 2 layers. Wider face coverage for maximum protection   ",
  },
  {
    _id: "4",
    name: "Chaos Yellow Mask",
    image: "/images/p4.jpeg",
    imageSet: ["/images/p4.jpeg", "/images/p4-2.jpeg"],
    price: 40,
    inStock: true,
    shortDesc:
      "Non Surgical Face Mask. breathable and reusable mask made with fine weaved cotton.",
    desc:
      "Non Surgical Face Mask. breathable and reusable mask made with fine weaved cotton with 2 layers. Wider face coverage for maximum protection   ",
  },
];

export const getById = (id) => {
  return products.find((item) => item._id === id);
};
