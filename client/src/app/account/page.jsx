"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { PRODUCTS } from "@/data/products";
import OrderItem from "../components/OrderItem/page";
import Image from "next/image";
import Link from "next/link";

const Account = () => {
  const { error, loading, currentUser } = useSelector((state) => state.user);
  const hotOffers = useSelector((state) => state.product.bestDeals).slice(0, 5);
  const [openOrder, setOpenOrder] = useState(false);
  const [openPersonalInfo, setOpenPersonalInfo] = useState(false);
  const [openAddresses, setOpenAddresses] = useState(false);
  const [openWishList, setOpenWishList] = useState(false);

  const handleOpenOrder = () => {
    setOpenOrder((prev) => !prev);
  };
  const handleOpenPersonalInfo = () => {
    setOpenPersonalInfo((prev) => !prev);
  };

  const handleOpenAddresses = () => {
    setOpenAddresses((prev) => !prev);
  };
  const handleWishList = () => {
    setOpenWishList((prev) => !prev);
  };

  // const sortedProducts = PRODUCTS.sort(function (a, b) {
  //   return b.promotionRate - a.promotionRate;
  // });
  return (
    <div className="p-6 flex gap-2">
      <div className="w-1/3 px-4 border h-full py-4 rounded-sm">
        <div className="border-b flex flex-col gap-4 ">
          <div className="flex justify-between">
            <p className="text-slate-500">Hot Offers</p>
          </div>
        </div>
        <div className=" flex flex-col py-4 gap-2 ">
          {hotOffers.map((item) => (
            <Link
              href={`/productDetails/:${item._id}`}
              className="flex justify-between items-center border p-2 rounded-md mb-2"
            >
              <Image
                src={item.imageUrl[0]}
                width={75}
                height={75}
                alt={item.title}
              />
              <p>{item.title}</p>
              <p className="text-primary font-semibold">
                {item.promotionRate}%
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-2/3 ">
        <div className="flex flex-col border p-4 rounded-sm gap-4">
          <div
            onClick={handleOpenPersonalInfo}
            className="flex justify-between  cursor-pointer"
          >
            <div className="flex gap-2 items-center">
              {openPersonalInfo ? (
                <p className="font-bold">1</p>
              ) : (
                <FaCheck className="text-accent" />
              )}
              <p>Personal Information</p>
            </div>
            <div className="flex gap-1 items-center">
              <MdEdit className="" />
              <p>Edit</p>
            </div>
          </div>
          {openPersonalInfo && (
            <div className="pl-8 ">
              <form className="pl-8 w-full flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <label className="w-1/3" htmlFor="address">
                    First Name
                  </label>
                  <input className="w-2/3 rounded-md px-4 py-2" type="text" />
                </div>
                <div className="flex justify-between items-center">
                  <label className="w-1/3" htmlFor="address">
                    Last Name
                  </label>
                  <input className="w-2/3 rounded-md px-4 py-2" type="text" />
                </div>
                <div className="flex justify-between items-center">
                  <label className="w-1/3" htmlFor="address">
                    Email
                  </label>
                  <input className="w-2/3 rounded-md px-4 py-2" type="email" />
                </div>
                <div className="flex justify-between items-center">
                  <label className="w-1/3" htmlFor="address">
                    City
                  </label>
                  <input className="w-2/3 rounded-md px-4 py-2" type="text" />
                </div>
                <div className="flex justify-between items-center">
                  <label className="w-1/3" htmlFor="address">
                    Phone
                  </label>
                  <input className="w-2/3 rounded-md px-4 py-2" type="text" />
                </div>
                <div className="flex justify-end">
                  <button className="uppercase text-white bg-primary px-8 py-4 rounded-md hover:bg-black ease-in-out delay-200 transition">
                    submit
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
        <div className="flex flex-col border p-4 rounded-sm gap-4">
          <div
            onClick={handleOpenAddresses}
            className="flex justify-between  cursor-pointer"
          >
            <div className="flex gap-2 items-center">
              {openAddresses ? (
                <p className="font-bold">2</p>
              ) : (
                <FaCheck className="text-accent" />
              )}
              <p>Addresses</p>
            </div>
            <div className="flex gap-1 items-center">
              <MdEdit className="" />
              <p>Edit</p>
            </div>
          </div>
          {openAddresses && (
            <form className="pl-8 w-full flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <label className="w-1/3" htmlFor="address">
                  Address
                </label>
                <input className="w-2/3 rounded-md px-4 py-2" type="text" />
              </div>
              <div className="flex justify-between items-center">
                <label className="w-1/3" htmlFor="address">
                  State
                </label>
                <input className="w-2/3 rounded-md px-4 py-2" type="text" />
              </div>
              <div className="flex justify-between items-center">
                <label className="w-1/3" htmlFor="address">
                  City
                </label>
                <input className="w-2/3 rounded-md px-4 py-2" type="text" />
              </div>
              <div className="flex justify-between items-center">
                <label className="w-1/3" htmlFor="address">
                  Phone
                </label>
                <input className="w-2/3 rounded-md px-4 py-2" type="text" />
              </div>
              <div className="flex justify-end">
                <button className="uppercase text-white bg-primary px-8 py-4 rounded-md hover:bg-black ease-in-out delay-200 transition">
                  submit
                </button>
              </div>
            </form>
          )}
        </div>
        <div className="flex flex-col border p-4 rounded-sm gap-4">
          <div
            onClick={handleWishList}
            className="flex justify-between  cursor-pointer"
          >
            <div className="flex gap-2 items-center">
              {openWishList ? (
                <p className="font-bold">3</p>
              ) : (
                <FaCheck className="text-accent" />
              )}
              <p>My Wishlist</p>
            </div>
            <div className="flex gap-1 items-center">
              <MdEdit className="" />
              <p>Edit</p>
            </div>
          </div>
          {openWishList && (
            <div className="ml-10 flex flex-col w-4/5">
              {PRODUCTS.map((item) => (
                <div className="transition duration-500 ease-in ">
                  <OrderItem
                    id={item.id}
                    imageUrl={item.imageUrl}
                    title={item.title}
                    price={item.price}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Account;
