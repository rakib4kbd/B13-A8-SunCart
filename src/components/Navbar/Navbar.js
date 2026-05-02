"use client";

import Link from "next/link";
import Logo from "../Logo/Logo";
import { usePathname, useRouter } from "next/navigation";
import { CircleUserRound } from "lucide-react";
import { signOut, useSession } from "@/lib/auth-client";
import Image from "next/image";
import { LogOut } from "lucide-react";

const Navbar = () => {
  const navLinks = [
    { label: "Home", navigation: "/" },
    { label: "Products", navigation: "/products" },
  ];

  const pathname = usePathname();
  const { data, isPending } = useSession();
  const user = data?.user;
  const router = useRouter();
  return (
    <div className="navbar shadow-sm px-2 md:px-5 border-b border-b-amber-500">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks.map((nav) => (
              <li key={nav.navigation}>
                <Link href={nav.navigation}>{nav.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href={"/"}>
          <Logo />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks.map((nav, index) => (
            <li key={index}>
              <Link
                href={nav.navigation}
                className={`btn btn-ghost flex items-center justify-center flex-row px-4 gap-1 ${
                  nav.navigation === pathname
                    ? "text-amber-500 border-b-3 border-b-amber-500"
                    : ""
                }`}
              >
                {nav.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        {isPending ? (
          <div className="flex items-center justify-center">
            <span className="loading loading-spinner"></span>
          </div>
        ) : user ? (
          <div className="dropdown dropdown-bottom dropdown-end">
            <div className="flex items-center gap-4">
              {user?.image ? (
                <Link href={"/profile"} className="relative w-10 h-10">
                  <Image
                    src={user?.image}
                    alt="profile"
                    fill
                    className="rounded-full object-cover"
                  />
                </Link>
              ) : (
                <Link href={"/profile"}>
                  <CircleUserRound />
                </Link>
              )}
              <button
                className="btn btn-ghost btn-circle"
                onClick={async () => {
                  await signOut();
                  router.refresh();
                }}
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <Link
              href={"/login"}
              className={`${pathname == "/login" && "text-amber-500 border-b-3 border-b-amber-500"} btn btn-ghost flex items-center justify-center flex-row px-4 gap-1`}
            >
              Login
            </Link>
            <Link
              href={"/register"}
              className={`${pathname == "/register" && "border-b-3 border-b-amber-600"} btn text-white flex items-center justify-center flex-row px-4 gap-1 bg-amber-500`}
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
