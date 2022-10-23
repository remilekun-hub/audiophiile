export const getprodcategory = async (category) => {
  const res = await fetch("https://audiophileapi.vercel.app/api/products");
  const products = await res.json();
  const prodcat = products.filter((prod) => prod.category === category);
  return prodcat;
};
