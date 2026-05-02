import { CircleUserRoundIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import ProfileActions from "./ProfileActions/ProfileActions";

const Profile = ({ user }) => {
  return (
    <div className="card w-full shadow-xl border-t border-t-amber-500">
      <figure />

      <div className="card-body items-center text-center">
        <div className="flex items-center justify-center">
          <CircleUserRoundIcon size={200} />
        </div>

        <div className="flex flex-col items-center justify-center">
          <h2 className="card-title text-xl font-bold">{user.name}</h2>

          <p className="text-black/50 text-sm">{user.email}</p>

          <div className="mt-2">
            {user.emailVerified ? (
              <span className="badge badge-success">Verified</span>
            ) : (
              <span className="badge badge-warning">Not Verified</span>
            )}
          </div>

          <p className="text-xs text-gray-400 mt-2">
            Joined{" "}
            {new Date(user.createdAt).toLocaleDateString("en-BD", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <ProfileActions />
      </div>
    </div>
  );
};

export default Profile;
