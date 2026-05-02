import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export const proxy = async (request) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  console.log(session?.user);
  if (session?.user) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/login", request.url));
};

// Alternatively, you can use a default export:
// export default function proxy(request) { ... }

export const config = {
  matcher: ["/products/:path", "/profile", "/profile/edit"],
};
