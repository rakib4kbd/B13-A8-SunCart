import ProfileEdit from "@/components/ProfileEdit/ProfileEdit";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const ProfileEditPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  return (
    <div className="container mx-auto my-20">
      <ProfileEdit user={user} />
    </div>
  );
};

export default ProfileEditPage;
