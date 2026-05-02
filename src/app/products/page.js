import ProductCategorySelector from "@/components/ProductCategorySelector/ProductCategorySelector";
import ProductsByCategory from "@/components/ProductsByCategory/ProductsByCategory";
import { CategoryProvider } from "@/context/CategoryContext";
import fetchProducts from "@/lib/fetchProducts";
import React, { use } from "react";

export const metadata = {
  title: "Shop | Sun Cart",
  description:
    "Instant Vacation. Your premium destination for summer lifestyle and sun-care essentials.",
};

const ProductsPage = () => {
  const productPromise = fetchProducts();
  const products = use(productPromise);
  const productCategory = [];

  products.forEach((product) => {
    if (!productCategory.includes(product.category)) {
      productCategory.push(product.category);
    }
  });

  return (
    <CategoryProvider>
      <div className="container mx-auto md:my-20 px-2 md:px-0">
        <div className="flex items-center justify-between"></div>
        <div className="grid grid-cols-5">
          <div className="hidden md:block">
            <h1 className="text-2xl font-semibold text-amber-500">
              Categories
            </h1>

            <ProductCategorySelector productCategory={productCategory} />
          </div>
          <div className="col-span-5 md:col-span-4">
            <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-4 my-3 ">
              <ProductsByCategory products={products} />
            </div>
          </div>
        </div>
      </div>
    </CategoryProvider>
  );
};

export default ProductsPage;
