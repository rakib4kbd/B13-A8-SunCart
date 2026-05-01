import { Sun } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  const socialLinks = [
    "/assets/instagram.png",
    "/assets/facebook.png",
    "/assets/twitter.png",
  ];

  return (
    <div className="px-2 my-5">
      <div className="flex flex-col gap-10 items-center justify-center container mx-auto">
        <div className="flex flex-col gap-3 pt-20 items-center justify-center text-center">
          <div className="flex items-center gap-0.5 text-4xl font-semibold text-amber-500">
            <Sun strokeWidth={2.5} height={50} width={50} />
            <p>SunCart</p>
          </div>
          <p className="text-sm text-black/70">
            Instant Vacation.
            <br /> Your premium destination for summer lifestyle and sun-care
            essentials.
          </p>

          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-xl">Social Links</h1>
            <div className="flex gap-4 items-center justify-center">
              {socialLinks.map((link, index) => (
                <Image
                  src={link}
                  key={index}
                  alt={link}
                  width={40}
                  height={40}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="border border-b-white/25 w-full"></div>
        <div className="flex flex-col-reverse md:flex-row items-center pb-7.5 text-black/60 gap-3 w-full">
          <p className="md:me-auto">© 2026 SunCart. All rights reserved.</p>
          <div className="flex gap-3">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
