"use client";
import { authClient } from "@/lib/auth-client"; //import the auth client
import { useForm } from "react-hook-form";
import React from "react";

const RegisterPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (formData) => {
    const { name, email, photoUrl, password } = formData;
    const { data, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      // image: photoUrl,
      callbackURL: "/login",
    });
    console.log("data", data, error);
  };

  return (
    <div className="container mx-auto flex items-center justify-center my-30">
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
  );
};

export default RegisterPage;
