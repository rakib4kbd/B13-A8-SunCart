"use client";

import Link from "next/link";
import Logo from "../Logo/Logo";
import { usePathname } from "next/navigation";
import { CircleUserRound } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const navLinks = [
    { label: "Home", navigation: "/" },
    { label: "Products", navigation: "/products" },
  ];

  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="navbar bg-base-100 shadow-sm px-2 md:px-5">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks.map((nav, index) => (
              <li key={index}>
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
                className={`${nav.navigation == pathname && "text-amber-500 border-b-3 border-b-amber-500"} btn btn-ghost flex items-center justify-center flex-row px-4 gap-1`}
              >
                {nav.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        {isLoggedIn ? (
          <div className="dropdown dropdown-bottom dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="m-1 btn btn-ghost rounded-full"
            >
              <CircleUserRound />
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <Link href={"/profile"}>My Profile</Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  onClick={() => {
                    setIsLoggedIn(false);
                  }}
                >
                  Log Out
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <ul className="flex">
            <Link
              href={"/login"}
              className={`${pathname == "/login" && "text-amber-500 border-b-3 border-b-amber-500"} btn btn-ghost flex items-center justify-center flex-row px-4 gap-1`}
              onClick={() => {
                setIsLoggedIn(true);
              }}
            >
              Login
            </Link>
            <Link
              href={"/register"}
              className={`${pathname == "/register" && "border-b-3 border-b-amber-600"} btn text-white flex items-center justify-center flex-row px-4 gap-1 bg-amber-500`}
              onClick={() => {
                setIsLoggedIn(true);
              }}
            >
              Register
            </Link>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
