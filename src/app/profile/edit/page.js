import ProfileEdit from "@/components/ProfileEdit/ProfileEdit";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

export const generateMetadata = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  if (!user) {
    return {
      title: "Product Not Found",
      description: "This product does not exist",
    };
  }

  return {
    title: `${user.name} @ Sun Cart`,
    description: user.description || "Profile details page",
  };
};

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
