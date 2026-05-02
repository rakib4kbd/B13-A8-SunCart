import Profile from "@/components/Profile/Profile";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const ProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  return (
    <div className="container mx-auto my-20 flex justify-center">
      <Profile user={user} />
    </div>
  );
};

export default ProfilePage;
