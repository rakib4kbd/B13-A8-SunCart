import { ShieldCheck } from "lucide-react";
import { Snowflake } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { ArrowRightToLine } from "lucide-react";
import { GlassWater } from "lucide-react";
import Link from "next/link";
import React from "react";

const careTips = [
  {
    icon: <GlassWater />,
    fg: "text-amber-500",
    bg: "bg-amber-100",
    title: "Stay Hydrated",
    content:
      "Drink plenty of water throughout the day and include electrolyte-rich drinks to stay energized and prevent dehydration in the summer heat.",
  },
  {
    icon: <ShieldCheck />,
    fg: "text-blue-500",
    bg: "bg-blue-100",
    title: "Protect Your Skin",
    content:
      "Apply sunscreen with at least SPF 30 before going outside and reapply every few hours to protect your skin from harmful UV rays.",
  },
  {
    icon: <Snowflake />,
    fg: "text-cyan-500",
    bg: "bg-cyan-100",
    title: "Keep Cool",
    content:
      "Wear light, breathable clothing and try to stay in shaded or air-conditioned areas to avoid overheating during peak sun hours.",
  },
];

const CareTips = () => {
  return (
    <div className="container mx-auto my-20">
      <h1 className="text-3xl font-semibold text-amber-500">
        Summer Care Tips
      </h1>

      <div className="grid grid-cols-3 gap-4 my-5">
        {careTips.map((item, index) => (
          <div
            key={index}
            className="flex flex-col p-6 items-start gap-3 shadow-xl border border-amber-500 rounded-2xl"
          >
            <span
              className={`flex rounded-full w-10 h-10 items-center justify-center ${item.bg} ${item.fg}`}
            >
              {item.icon}
            </span>
            <h1 className="text-xl text-black/80">{item.title}</h1>
            <p className="text-sm text-black/50">{item.content}</p>
            <Link
              href={"/#"}
              className="text-amber-500 text-sm flex items-center gap-0.5"
            >
              <p>READ ARTICLE</p>
              <ArrowRight width={15} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareTips;
