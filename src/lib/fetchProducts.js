import products from "@/data/products";

const fetchProducts = async () => {
  const res = await products;
  return res;
};

export default fetchProducts;
