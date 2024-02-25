"use client";
import React, { useState } from "react";
import signUpImage from "../../assets/login-animation.gif";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Login = () => {
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { email, password } = data;

      const res = await fetch("http://localhost:8080/user/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resData = await res.json();

      console.log(resData);
      router.push("/");
      // use redux to dispatch user info
    } catch (error) {
      // use redux to dispatch login errors

      console.log(error);
    }

    // if (email && password) {
    //   alert("Please enter required fields");
    // } else {
    //   alert("Please enter required fields");
    // }
  };
  return (
    <div className=" p-3 md:p-4">
      <div className="w-full max-w-sm items-center flex flex-col bg-white m-auto p-4">
        {/* <h1 className="text-center text-2xl font-bold">SignUp</h1> */}
        <div className="w-20 overflow-hidden rounded-full shadow-md drop-shadow-md">
          <Image src={signUpImage} className="w-full" alt="signup" />
        </div>
        <form onSubmit={handleSubmit} className="w-full py-3 flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.email}
            onChange={handleOnchange}
          />
          <label htmlFor="password">Password</label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
            <input
              type="password"
              id="password"
              name="password"
              className=" w-full bg-slate-200 border-none outline-none "
              value={data.password}
              onChange={handleOnchange}
            />
          </div>

          <button className="max-w-[120px] w-full text-white text-xl text-center font-medium py-1 rounded-full mt-4 bg-primary hover:opacity-80 cursor-pointer m-auto">
            LogIn
          </button>
        </form>
        <p>
          Do't Have an Account ?{" "}
          <Link className="text-blue-700 font-bold" href="./signUp">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
