"use client";
import { authClient, signIn } from "@/lib/auth-client"; //import the auth client
import { useForm } from "react-hook-form";
import React from "react";
import Image from "next/image";

const RegisterPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (formData) => {
    const { name, email, photoUrl, password } = formData;
    const { data, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photoUrl,
      callbackURL: "http://localhost:3000/login",
    });
  };

  const handleGoogleLogin = () => {
    signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="container mx-auto my-30">
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
          <span>Register with Google</span>
        </button>
        <div className="divider">Or</div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-4">
            <legend className="fieldset-legend">Register</legend>

            <label className="label">Name</label>
            <input
              type="name"
              className="input w-full"
              placeholder="Name"
              defaultValue={"John Doe"}
              {...register("name", { required: true })}
            />

            <label className="label">Email</label>
            <input
              type="email"
              className="input w-full"
              placeholder="Email"
              defaultValue={"johndoe@localhost"}
              {...register("email", { required: true })}
            />

            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input w-full"
              placeholder="https://placeholder.com"
              defaultValue={"https://placeholder.com"}
              {...register("photoUrl")}
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
              Register
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
