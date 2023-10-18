export const fetchProductData = () => {
  return fetch("http://localhost:3000/api/getProduct")
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      console.error(error);
    });
};
