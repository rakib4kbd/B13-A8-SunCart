"use client";

import { authClient, signIn, useSession } from "@/lib/auth-client";
import { useForm } from "react-hook-form";
import React, { use } from "react";
import Image from "next/image";

const RegisterPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (formData) => {
    const { email, password } = formData;
    const { data, error } = await authClient.signIn.email({
      email: email,
      password: password,
      callbackURL: "http://localhost:3000/",
    });
  };

  const handleGoogleLogin = () => {
    signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="container mx-auto my-20">
      <div className="flex flex-col items-center justify-center">
        <button
          className="btn bg-amber-500 gap-2 w-md"
          onClick={() => {
            handleGoogleLogin();
          }}
        >
          <Image
            src={"/assets/google.png"}
            alt="google"
            width={20}
            height={20}
          />{" "}
          <span>Login with Google</span>
        </button>
        <div className="divider"> Or </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-4">
            <legend className="fieldset-legend">Register</legend>

            <label className="label">Email</label>
            <input
              type="email"
              className="input w-full"
              placeholder="Email"
              defaultValue={"johndoe@localhost"}
              {...register("email", { required: true })}
            />

            <label className="label">Password</label>
            <input
              type="password"
              className="input w-full"
              placeholder="Password"
              defaultValue={"12345678"}
              {...register("password", { required: true })}
            />

            <button className="btn btn-ghost btn-block bg-amber-500 mt-4">
              Login
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
