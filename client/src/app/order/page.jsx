"use client";
import React, { useState } from "react";
import { PRODUCTS } from "@/data/products";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import Link from "next/link";
import OrderItem from "../components/OrderItem/page";
import Payment from "../components/Payment/Payment";
const Order = () => {
  const [openOrder, setOpenOrder] = useState(false);
  const [openPersonalInfo, setOpenPersonalInfo] = useState(false);
  const [openAddresses, setOpenAddresses] = useState(false);
  const [openPaymentMethod, setOpenPaymentMethod] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");

  const handleOpenOrder = () => {
    setOpenOrder((prev) => !prev);
  };
  const handleOpenPersonalInfo = () => {
    setOpenPersonalInfo((prev) => !prev);
  };

  const handleOpenAddresses = () => {
    setOpenAddresses((prev) => !prev);
  };
  const handleOpenPaymentMethod = () => {
    setOpenPaymentMethod((prev) => !prev);
  };
  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };
  return (
    <div className="p-6 flex gap-2">
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
              <p>Connected As Mohammed</p>
              <p className="pt-4">
                Not you?{" "}
                <span className="hover:text-primary cursor-pointer ">
                  Log out
                </span>{" "}
              </p>
              <p className="text-xs text-slate-500 pt-4">
                If you sign out now, your cart will be emptied
              </p>
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
            <form className="pl-8 w-1/2 flex flex-col gap-4">
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
                  Address
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
            onClick={handleOpenPaymentMethod}
            className="flex justify-between  cursor-pointer"
          >
            <div className="flex gap-2 items-center">
              {openPaymentMethod ? (
                <p className="font-bold">1</p>
              ) : (
                <FaCheck className="text-accent" />
              )}
              <p>Payment Method</p>
            </div>
            <div className="flex gap-1 items-center">
              <MdEdit className="" />
              <p>Edit</p>
            </div>
          </div>
          {openPaymentMethod && (
            <div className="flex flex-col">
              <div className="flex flex-col">
                <div className="pl-8 flex items-center gap-2 py-2  ">
                  <input
                    name="paymentRadio"
                    type="radio"
                    className="mt-1"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={handlePaymentMethodChange}
                  />
                  <label className="text-center" htmlFor="payment">
                    Card
                  </label>
                </div>
                {paymentMethod === "card" && (
                  <div className="ml-16 my-4">
                    <Payment />
                  </div>
                )}
              </div>
              <div className="pl-8 flex items-center gap-2 py-2  ">
                <input
                  name="paymentRadio"
                  type="radio"
                  className="mt-1"
                  value="cash"
                  checked={paymentMethod === "cash"}
                  onChange={handlePaymentMethodChange}
                />
                <label className="text-center" htmlFor="payment">
                  Cash on Delivery
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-1/3 px-4 border h-full py-4 rounded-sm">
        <div className="border-b flex flex-col gap-4 ">
          <div className="flex justify-between">
            <p className="text-slate-500">{PRODUCTS.length} Items</p>
          </div>
          <div
            onClick={handleOpenOrder}
            className="flex pb-4 gap-2 items-center hover:text-primary cursor-pointer w-[115px] "
          >
            <p className="w-[110px]">Show Details</p>
            {openOrder ? (
              <MdKeyboardArrowUp className="pt-1" size={18} />
            ) : (
              <MdKeyboardArrowDown className="pt-1" size={18} />
            )}
          </div>
          {openOrder && (
            <div className="pb-4 ">
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
        <div className=" flex flex-col py-4 gap-2 ">
          <div className="flex justify-between">
            <p className="">Subtotal</p>
            <p className="text-primary">$385</p>
          </div>
          <div className="flex justify-between">
            <p className="">Shipping</p>
            <p className="text-primary">$5</p>
          </div>
          <div className="flex justify-between">
            <p className="">Taxes</p>
            <p className="text-primary">$10</p>
          </div>
          <div className="flex justify-between">
            <p className="">Total</p>
            <p className="text-primary">$400</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
