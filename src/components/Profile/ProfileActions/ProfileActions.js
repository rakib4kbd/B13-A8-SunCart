"use client";
import { signOut } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const ProfileActions = () => {
  const params = useSearchParams();
  const router = useRouter();
  return (
    <div className="card-actions my-2">
      <Link href={"/profile/edit"} className="btn btn-outline btn-sm">
        Edit Profile
      </Link>
      <button
        className="btn btn-sm btn-warning"
        onClick={() => {
          signOut();
          router.replace("/login");
          router.refresh();
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default ProfileActions;
