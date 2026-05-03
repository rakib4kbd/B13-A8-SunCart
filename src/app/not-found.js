import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="container mx-auto my-5 md:my-20 px-2 md:px-0">
      <div className="flex items-center justify-center min-h-100 shadow-lg relative rounded-lg">
        <Image
          src={"https://images.unsplash.com/vector-1738866252023-eee24be8748c"}
          fill
          alt=""
          className="object-fill rounded-lg"
        />
        <p className="absolute top-50 text-5xl font-semibold text-white">404</p>
      </div>
      <Link href={"/"} className="my-3 btn btn-block bg-amber-500 rounded-md">
        Back to Home!
      </Link>
    </div>
  );
};

export default NotFound;
