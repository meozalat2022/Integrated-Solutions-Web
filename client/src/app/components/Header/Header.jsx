"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import logo from "../../../assets/logo.jpg";
import { BsCartFill } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import {
  signoutStart,
  signoutFailure,
  signoutSuccess,
} from "@/redux/user/userSlice";
import LanguageButton from "../LanguageButton/LanguageButton";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const [authUser, setAuthUser] = useState(false);
  const [toggleLanguage, setToggleLanguage] = useState(false);
  const [toggleCurrency, setToggleCurrency] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const [selectedCurrency, setSelectedCurrency] = useState("usd");
  const { error, loading, currentUser } = useSelector((state) => state.user);

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const handleLanguageToggle = () => {
    setToggleLanguage((prev) => !prev);
  };
  const handleCurrencyToggle = () => {
    setToggleCurrency((prev) => !prev);
  };

  useEffect(() => {
    if (currentUser) {
      setAuthUser(true);
    }
  }, []);

  const handleSignout = async () => {
    try {
      dispatch(signoutStart());
      const res = await fetch("http://localhost:8080/user/signout");
      const data = await res.json();
      if (data.success === false) {
        dispatch(signoutFailure(data.message));
        return;
      }
      dispatch(signoutSuccess(data));
      toast.success("Successfully Sign Out", {
        hideProgressBar: false,
      });
      router.push("./login");
    } catch (error) {
      dispatch(signoutFailure(error.message));
    }
  };
  // console.log(selectedCurrency);

  return (
    <header className=" shadow-md w-full h-full  z-50 bg-primary flex flex-col">
      {/* language currency */}

      <div className="w-full flex justify-end px-8">
        {selectedLanguage === "arabic" ? (
          <div className="flex justify-end">
            <div onClick={handleLanguageToggle} className="flex flex-col w-24 ">
              <LanguageButton lang="AR" code="EG" />

              {toggleLanguage && <LanguageButton lang="EN" code="GB" />}
            </div>
          </div>
        ) : (
          <div className="flex justify-end">
            <div
              onClick={handleLanguageToggle}
              className="flex flex-col w-24 absolute z-50"
            >
              <LanguageButton lang="EN" code="GB" />

              {toggleLanguage && <LanguageButton lang="AR" code="EG" />}
            </div>
          </div>
        )}
        <p className="mt-2 text-white">|</p>
        <div className="pt-2 px-2 flex justify-end pl-4 mr-2">
          {selectedCurrency === "usd" ? (
            <div>
              <div
                className="cursor-pointer absolute z-50"
                onClick={handleCurrencyToggle}
              >
                <p className="text-white mb-2">USD</p>
                {toggleCurrency && <p className="text-white">EGP</p>}
              </div>
            </div>
          ) : (
            <div>
              <div
                className="cursor-pointer absolute z-50"
                onClick={handleCurrencyToggle}
              >
                <p className="text-white mt-2">EGP</p>
                {toggleCurrency && <p className="text-white">USD</p>}
              </div>
            </div>
          )}
        </div>
      </div>
      {/* horizontal line break */}
      <div className="relative flex py-2 items-center">
        <div class="flex-grow border-t border-white mx-4"></div>
      </div>

      {/* logo search authentication */}

      <div className="flex justify-between mx-8 my-6 items-center">
        {/* logo */}
        <Link just href={"/"} className="">
          <div className="h-14 w-[250px]">
            <Image className="h-full w-full" src={logo} alt="icon" />
          </div>
        </Link>
        {/* search */}
        <form className="flex flex-1 mx-10 gap-2 items-center ">
          <input
            className="h-10 w-full rounded-md px-2 outline-none"
            type="text"
            placeholder="Search..."
          />
          <button className="bg-accent rounded-lg h-10 w-[120px] text-white text-center hover:opacity-85">
            Search
          </button>
        </form>
        {/* authentication */}
        <div className="flex gap-2 text-white">
          <Link className="hover:text-slate-700" href={"./login"}>
            Login
          </Link>
          <p>/</p>
          <Link className="hover:text-slate-700" href={"./signUp"}>
            Register
          </Link>
          <div className="flex gap-4 pl-10">
            <div>
              <p>Cart</p>
            </div>
            <div>
              <p>Heart</p>
            </div>
          </div>
        </div>
      </div>
      {/* horizontal line break */}
      <div className="relative flex py-2 items-center">
        <div class="flex-grow border-t border-white mx-4"></div>
      </div>

      {/* navigator */}
      <div className="flex items-center mt-6 mx-6">
        <div className="w-[200px]">
          <p>Modal</p>
        </div>
        <div>
          <NavBar />
        </div>
      </div>
    </header>
  );
};

export default Header;

{
  /* <div className="flex items-center h-full justify-between">
        <Link just href={"/"} className="">
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
              {authUser ? (
                <Image
                  src={currentUser.imageUrl}
                  width={500}
                  height={500}
                  className="h-full w-12"
                />
              ) : (
                <HiOutlineUserCircle />
              )}
            </div>
            {showMenu && (
              <div className="flex flex-col absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md">
                <Link
                  href="./newProduct"
                  className="whitespace-nowrap cursor-pointer"
                >
                  New Product
                </Link>
                {currentUser ? (
                  <span
                    onClick={handleSignout}
                    className="whitespace-nowrap cursor-pointer"
                  >
                    Sign Out
                  </span>
                ) : (
                  <Link
                    href="./login"
                    className="whitespace-nowrap cursor-pointer"
                  >
                    Login
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div> */
}
