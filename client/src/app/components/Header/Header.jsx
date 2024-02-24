"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import icon from "../../../assets/icon.png";
import { BsCartFill } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    <header className=" shadow-md w-full h-16 px-2 md:px-4 z-50 bg-primary">
      {/* desktop */}
      <div className="flex items-center h-full justify-between">
        <Link href={"/"} className="">
          <div className="h-14">
            <Image className="h-full w-20" src={icon} alt="icon" />
          </div>
        </Link>
        <div className="flex items-center gap-4 md:gap-7">
          <nav className="gap-4 md:gap-6 text-base md:text-lg hidden md:flex">
            <Link className="text-white font-bold" href="/">
              Home
            </Link>
            <Link className="text-white font-bold" href="/categories">
              Categories
            </Link>
            <Link className="text-white font-bold" href="/about">
              About
            </Link>
            <Link className="text-white font-bold" href="/contact">
              Contact
            </Link>
          </nav>
          <div className="text-2xl relative text-white">
            <BsCartFill />
            <div className="absolute -top-1 -right-1 text-white bg-accent text-sm p-0 m-0 w-4 rounded-lg text-center">
              10
            </div>
          </div>
          <div onClick={handleShowMenu} className=" text-slate-600">
            <div className="text-3xl cursor-pointer text-white">
              <HiOutlineUserCircle />
            </div>
            {showMenu && (
              <div className="flex flex-col absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md">
                <Link
                  href="./newProduct"
                  className="whitespace-nowrap cursor-pointer"
                >
                  New Product
                </Link>
                <Link
                  href="./login"
                  className="whitespace-nowrap cursor-pointer"
                >
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* mobile */}
    </header>
  );
};

export default Header;
