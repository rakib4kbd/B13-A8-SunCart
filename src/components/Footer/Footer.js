import { Sun, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  const socialLinks = [
    "/assets/facebook.png",
    "/assets/Instagram.png",
    "/assets/twitter.png",
  ];

  return (
    <footer className="bg-amber-50 text-black/60 mt-20 px-4 md:px-0">
      <div className="container mx-auto py-12 md:py-16 flex flex-col md:flex-row gap-10">
        <div className="flex flex-col gap-4 flex-1">
          <div className="flex items-center gap-1 text-2xl md:text-3xl font-semibold text-amber-500">
            <Sun strokeWidth={2.2} size={32} className="md:w-9 md:h-9" />
            <p>SunCart</p>
          </div>

          <p className="text-sm max-w-full md:max-w-sm">
            Instant Vacation. Your premium destination for summer lifestyle and
            sun-care essentials.
          </p>

          <div className="flex gap-3">
            {socialLinks.map((link, index) => (
              <div key={index} className="p-3 rounded-full relative w-10 h-10">
                <Image src={link} alt={link} fill className="object-contain" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          <div className="flex flex-col gap-3">
            <h2 className="font-semibold text-lg text-black/80">Quick Links</h2>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-semibold text-lg text-black/80">Contact</h2>

            <a
              href="mailto:support@suncart.com"
              className="flex items-center gap-2 text-sm"
            >
              <Mail size={16} />
              support@suncart.com
            </a>

            <a
              href="tel:+8801234567890"
              className="flex items-center gap-2 text-sm"
            >
              <Phone size={16} />
              +880 1234-567890
            </a>

            <div className="flex items-center gap-2 text-sm">
              <MapPin size={16} />
              Dhaka, Bangladesh
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-amber-100 py-5 text-center text-sm text-gray-500">
        © 2026 SunCart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
