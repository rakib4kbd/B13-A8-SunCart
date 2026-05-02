"use client";
import toast from "react-hot-toast";

import { authClient, signIn, useSession } from "@/lib/auth-client"; //import the auth client
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";

const RegisterPage = () => {
  const [passVis, setPassVis] = useState(false);
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const session = useSession();
  if (session?.data) {
    router.push("/");
  }

  const onSubmit = async (formData) => {
    const { name, email, photoUrl, password } = formData;
    const { data, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photoUrl,
      callbackURL: "/login",
    });

    if (error) {
      toast.error(error.message);
    }

    if (data) {
      toast.success(`User Registered: ${data.user.name}`);
      router.replace("/login");
    }
  };

  const handleGoogleLogin = () => {
    signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="container mx-auto my-20 px-2 md:px-0">
      <div className="flex flex-col items-center justify-center">
        <button
          className="btn bg-amber-500 gap-2 w-sm md:w-md"
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
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm md:w-md border p-4">
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
              placeholder="johndoe@localhost.com"
              defaultValue={"johndoe@localhost.com"}
              {...register("email", { required: true })}
            />

            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input w-full"
              placeholder="https://placeholder.com"
              {...register("photoUrl")}
            />

            <label className="label">Password</label>
            {passVis ? (
              <label className="input w-full">
                <input
                  type="text"
                  placeholder="Password"
                  defaultValue={"12345678"}
                  {...register("password", { required: true })}
                />
                <button
                  type="button"
                  onClick={() => {
                    setPassVis(!passVis);
                  }}
                >
                  <Eye />
                </button>
              </label>
            ) : (
              <label className="input w-full">
                <input
                  type="password"
                  placeholder="Password"
                  defaultValue={"12345678"}
                  {...register("password", { required: true })}
                />
                <button
                  type="button"
                  onClick={() => {
                    setPassVis(!passVis);
                  }}
                >
                  <EyeOff />
                </button>
              </label>
            )}

            <button className="btn btn-ghost btn-block bg-amber-500 mt-4">
              Register
            </button>

            <div className="mt-5 flex items-end justify-end gap-3">
              <p>Already Registered?</p>
              <Link href={"/login"} className="btn btn-xs btn-outline">
                Login Now
              </Link>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
