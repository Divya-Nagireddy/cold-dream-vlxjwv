// no need to modify
const data = {
  products: [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      image: "https://loremflickr.com/640/480",
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      image: "https://loremflickr.com/640/480",
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
      image: "https://loremflickr.com/640/480",
    },
  ],
};

// no need to modify
export const getData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};

// no need to modify
export const processProductAnalytics = (productId) => {
  console.log("[Analytics] Product clicked: ", productId);
};
