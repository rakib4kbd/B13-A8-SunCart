import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export const proxy = async (request) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session?.user) {
    return NextResponse.next();
  }

  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);
  return NextResponse.redirect(loginUrl);
};

export const config = {
  matcher: ["/products/:path", "/profile", "/profile/:path", "/cart"],
};
