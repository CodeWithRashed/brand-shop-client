export const fetchProductData = () => {
  return fetch("https://brand-shop-back-end.vercel.app/api/getProduct")
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      console.error(error);
    });
};
