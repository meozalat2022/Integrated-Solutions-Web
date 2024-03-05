"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import logo from "../../../assets/logo.jpg";
import { BsCartFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { FaHeart } from "react-icons/fa";
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
    <header className="mb-1 shadow-md w-full h-[250px]  z-50 bg-primary flex flex-col">
      {/* language currency */}

      <div className="w-full flex justify-center md:justify-end px-8">
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
          <div className="flex gap-2 text-white md:hidden ml-16 justify-center">
            <Link className="hover:text-slate-700" href={"./login"}>
              Login
            </Link>
            <p>/</p>
            <Link className="hover:text-slate-700" href={"./signUp"}>
              Register
            </Link>
            <div className="flex gap-4 pl-10">
              <Link
                href={"./cart"}
                className="text-2xl cursor-pointer relative text-white hover:opacity-85"
              >
                <BsCartFill />
                <div className="absolute -top-1 -right-1 text-white bg-accent text-xs p-0 m-0 w-4 rounded-lg text-center">
                  12
                </div>
              </Link>
              <div>
                <Link
                  className="text-2xl cursor-pointer relative text-white hover:opacity-85"
                  href={"./favorite"}
                >
                  <FaHeart />
                  <div className="absolute -top-1 -right-1 text-white bg-accent text-xs p-0 m-0 w-4 rounded-lg text-center">
                    12
                  </div>
                </Link>
              </div>
            </div>
          </div>
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
          <div className="h-14  lg:w-[150px] md:w-[100px] ">
            <Image className="h-full w-full" src={logo} alt="icon" />
          </div>
        </Link>
        {/* search */}
        <form className="flex flex-1 mx-10 gap-2 items-center justify-center">
          <input
            className="h-10 lg:w-full w-[250px] rounded-md px-2 outline-none"
            type="text"
            placeholder="Search..."
          />
          <button className="bg-accent rounded-lg h-10 lg:text-lg md:text-xs lg:w-[120px] w-[50px] text-white text-center hover:opacity-85">
            Search
          </button>
        </form>
        {/* authentication */}
        <div className="md:flex gap-2 text-white hidden">
          <Link className="hover:text-slate-700" href={"./login"}>
            Login
          </Link>
          <p>/</p>
          <Link className="hover:text-slate-700" href={"./signUp"}>
            Register
          </Link>
          <div className="flex gap-4 pl-10">
            <Link
              href={"./cart"}
              className="text-2xl cursor-pointer relative text-white hover:opacity-85"
            >
              <BsCartFill />
              <div className="absolute -top-1 -right-1 text-white bg-accent text-xs p-0 m-0 w-4 rounded-lg text-center">
                12
              </div>
            </Link>
            <div>
              <Link
                className="text-2xl cursor-pointer relative text-white hover:opacity-85"
                href={"./favorite"}
              >
                <FaHeart />
                <div className="absolute -top-1 -right-1 text-white bg-accent text-xs p-0 m-0 w-4 rounded-lg text-center">
                  12
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* horizontal line break */}
      <div className="relative flex py-2 items-center">
        <div class="flex-grow border-t border-white mx-4"></div>
      </div>

      {/* navigator */}
      <div className="flex items-center justify-center md:justify-start md:mt-6 mx-6 ">
        <Link
          className="md:flex hidden gap-4 mr-4 items-center"
          href="?modal=true"
        >
          <div>
            <GiHamburgerMenu className="text-white text-lg" />
          </div>
          <div>
            <p className="text-white font-semibold lg:text-sm">
              Shop By Category
            </p>
          </div>
          <div>
            <MdKeyboardArrowDown className="text-white text-lg" />
          </div>
        </Link>

        <div className="">
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
