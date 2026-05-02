import React from "react";
import Login from "@/components/Login/Login";

const LoginPage = async ({ searchParams }) => {
  const params = await searchParams;
  return (
    <div className="container mx-auto my-20">
      <Login searchParams={params} />
    </div>
  );
};

export default LoginPage;
