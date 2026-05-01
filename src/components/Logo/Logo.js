import { Sun } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-0.5 text-2xl font-semibold text-amber-500">
      <Sun strokeWidth={2.5} />
      <p>SunCart</p>
    </div>
  );
};

export default Logo;
