"use client";
import { CircleUserRoundIcon } from "lucide-react";
import React from "react";
import Image from "next/image";
import { User } from "lucide-react";
import { Focus } from "lucide-react";
import { useForm } from "react-hook-form";
import { updateUser } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const ProfileEdit = ({ user }) => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = async (formData) => {
    const { name, photoUrl } = formData;
    const { data, error } = await updateUser({
      name: name,
      image: photoUrl,
    });

    if (error) {
      toast.error(error);
    }
    router.push("/profile");
  };

  return (
    <div className="card w-full border border-amber-500 shadow-xl">
      <figure />

      <div className="card-body items-center text-center">
        {user?.image ? (
          <div className="border border-amber-500 rounded-full ">
            <Image
              src={user?.image}
              alt={user?.name}
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <CircleUserRoundIcon size={200} />
          </div>
        )}

        <div className="flex flex-col items-center justify-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
              <label className="input w-full my-1">
                <User />
                <input
                  type="text"
                  placeholder="Name"
                  defaultValue={user?.name}
                  {...register("name")}
                ></input>
              </label>
              <label className="input w-full my-1">
                <Focus />
                <input
                  type="text"
                  placeholder="Photo URL"
                  defaultValue={user?.image}
                  {...register("photoUrl")}
                ></input>
              </label>
            </fieldset>
            <button className="btn bg-amber-500 my-2 btn-block">
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
