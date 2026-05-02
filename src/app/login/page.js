"use client";

import { authClient, signIn, useSession } from "@/lib/auth-client";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const params = useSearchParams();

  const onSubmit = async (formData) => {
    const { email, password } = formData;
    const { data, error } = await signIn.email({
      email: email,
      password: password,
      callbackURL: params.get("callbackUrl") || "/",
    });
    if (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    const { data, error } = await signIn.social({
      provider: "google",
      callbackURL: params.get("callbackUrl") || "/",
    });
    if (error) {
      toast.error(error.message);
    }
  };

  const router = useRouter();
  const session = useSession();
  console.log("session:", session);
  if (session?.data) {
    router.push("/");
  }

  const [passVis, setPassVis] = useState(false);

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
            <legend className="fieldset-legend">Login</legend>

            <label className="label">Email</label>
            <input
              type="email"
              className="input w-full"
              placeholder="Email"
              defaultValue={"johndoe@localhost.com"}
              {...register("email", { required: true })}
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
              Login
            </button>

            <div className="mt-5 flex items-end justify-end gap-3">
              <p>Not registered?</p>
              <Link href={"/register"} className="btn btn-xs btn-outline">
                Register Now
              </Link>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
