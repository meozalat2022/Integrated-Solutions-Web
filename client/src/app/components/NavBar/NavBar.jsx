import Link from "next/link";
import React from "react";
import NavBarLinks from "./NavBarLinks";

const NavBar = () => {
  return (
    <nav className="gap-4 md:gap-6 text-base md:text-lg hidden md:flex">
      <div>
        <ul className="flex gap-8 uppercase items-center">
          <li>
            <Link
              className="text-white font-bold hover:underline hover:opacity-80"
              href="/"
            >
              Home
            </Link>
          </li>
          <NavBarLinks />
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
