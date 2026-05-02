"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

export default function App() {
  const sliderList = [
    {
      id: 1,
      title: "Summer Sale 50% OFF",
      subtitle:
        "Refresh your summer essentials with our exclusive seasonal collection. From sun-drenched accessories to ocean-ready gear.",
      imgSrc: "https://images.unsplash.com/photo-1640269974484-bdde0af439ef",
      btns: [
        { label: "Shop the Sale", style: "btn", navigation: "/products" },
        {
          label: "View Collection",
          style: "btn btn-outline",
          navigation: "/products",
        },
      ],
    },
    {
      id: 2,
      title: "Hot Deals 🔥",
      subtitle:
        "Grab the hottest summer deals on Suncart! Limited-time discounts on must-have items to keep you cool and stylish.",
      imgSrc: "https://images.unsplash.com/photo-1635867264346-ed6a8d912ecf",
      btns: [
        { label: "Shop Deals", style: "btn", navigation: "/products" },
        {
          label: "See Offers",
          style: "btn btn-outline",
          navigation: "/products",
        },
      ],
    },
    {
      id: 3,
      title: "New Arrivals Just Dropped",
      subtitle:
        "Stay ahead of the trends with our latest arrivals. Fresh styles curated for your everyday wardrobe.",
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1661690737930-f7506263d22c",
      btns: [
        { label: "Shop New", style: "btn", navigation: "/products" },
        {
          label: "Browse All",
          style: "btn btn-outline",
          navigation: "/products",
        },
      ],
    },
  ];
  return (
    <div className="my-5 px-2 md:px-0 md:my-20">
      <div className="container mx-auto">
        <div className="relative">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {sliderList.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="relative w-full">
                  <div className="card bg-base-100 image-full">
                    <figure className="aspect-2/1">
                      <Image
                        src={slide.imgSrc}
                        alt={slide.title}
                        fill
                        className="rounded-2xl"
                      />
                    </figure>

                    <div className="card-body grid md:px-20">
                      <div className="flex flex-col items-center md:items-start justify-around md:justify-center gap-3 min-h-100">
                        <div></div>
                        <div className="flex flex-col items-start gap-3">
                          <h2 className="card-title text-4xl">{slide.title}</h2>
                          <p className="text-lg">{slide.subtitle}</p>
                        </div>

                        <div className="card-actions flex justify-start">
                          {slide.btns.map((btn, index) => (
                            <Link
                              href={btn.navigation}
                              className={btn.style}
                              key={index}
                            >
                              {btn.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
