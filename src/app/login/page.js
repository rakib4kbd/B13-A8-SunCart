import React from "react";
import Login from "@/components/Login/Login";

export const metadata = {
  title: "Sun Cart | Login",
  description:
    "Instant Vacation. Your premium destination for summer lifestyle and sun-care essentials.",
};

const LoginPage = async ({ searchParams }) => {
  const params = await searchParams;
  return (
    <div className="container mx-auto my-20 px-2 md:px-0">
      <Login searchParams={params} />
    </div>
  );
};

export default LoginPage;
