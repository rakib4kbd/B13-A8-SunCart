const fetchProducts = async () => {
  const res = await fetch("http://localhost:3000/products.json");
  return res.json();
};

export default fetchProducts;
