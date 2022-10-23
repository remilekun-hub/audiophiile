export const getprodcategory = async (category) => {
  const res = await fetch("http://localhost:3000/api/products");
  const products = await res.json();
  const prodcat = products.filter((prod) => prod.category === category);
  return prodcat;
};
