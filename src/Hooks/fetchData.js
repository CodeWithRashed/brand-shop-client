export const fetchProductData = async () => {
  return await fetch("https://brand-shop-back-end.vercel.app/api/getProduct")
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      console.error(error);
    });
};
