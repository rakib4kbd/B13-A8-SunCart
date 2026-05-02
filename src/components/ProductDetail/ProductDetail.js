import Image from "next/image";
import Link from "next/link";

const ProductDetail = ({ product }) => {
  return (
    <div className="container mx-auto my-20 px-4">
      <div className="flex flex-row border border-amber-500 rounded-2xl">
        <div className="p-6 flex flex-col relative">
          <div className="absolute flex w-full justify-start bottom-10 -right-10">
            {product.popular && (
              <span className="badge badge-lg badge-warning">Popular</span>
            )}
          </div>
          <Image
            src={product.image}
            alt={product.image}
            width={500}
            height={500}
            className="rounded-2xl"
          />
        </div>
        <div className="p-6 flex flex-col flex-1 justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-black/60">Brand: {product.brand}</p>
              <p className="text-sm text-black/60">
                Category: {product.category}
              </p>
            </div>
            <h1 className="text-4xl font-semibold">{product.name}</h1>
            <h1 className="text-2xl font-bold text-amber-500">
              ${product.price}
            </h1>
            <p className="text-black/60 text-sm">{product.description}</p>
            <div className="flex justify-between">
              <div className="rating rating-sm text-sm text-black/60">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="mask mask-star bg-amber-500"
                    aria-label="1 star"
                    aria-current={
                      i < Math.round(Number(product.rating)) ? "true" : "false"
                    }
                  ></div>
                ))}
              </div>
              <div>
                <p className="text-sm text-black/60 flex items-center gap-0">
                  {product.stock > 0 ? (
                    <span className="text-green-700">
                      In Stock: {product.stock}
                    </span>
                  ) : (
                    <span className="">Out of Stock</span>
                  )}
                </p>
              </div>
            </div>
          </div>

          <button className="btn btn-block bg-amber-500 rounded-lg">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
