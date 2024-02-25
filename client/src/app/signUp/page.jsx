"use client";
import React, { useState } from "react";
import signUpImage from "../../assets/login-animation.gif";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ImageToBase64 } from "../../util/ImageToBase64";
import { toast } from "react-toastify";

const SignUp = () => {
  const router = useRouter();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    imageUrl: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleUploadProfileImage = async (e) => {
    const data = await ImageToBase64(e.target.files[0]);
    setData((prev) => {
      return {
        ...prev,
        imageUrl: data,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { firstName, lastName, email, password, confirmPassword } = data;

      if (firstName && lastName && email && password && confirmPassword) {
        if (password === confirmPassword) {
          const res = await fetch("http://localhost:8080/user/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });

          const resData = await res.json();

          if (resData.success === false) {
            setLoading(false);
            setError(resData.message);
            toast.success(error, {
              hideProgressBar: false,
            });
            return;
          }
          setLoading(false);
          setError(null);
          // console.log(resData);
          // alert("Successfully signed Up");
          toast.success("Successfully signed Up", {
            hideProgressBar: false,
          });
          router.push("/login");
        } else {
          toast.success("Password and confirm password does not match", {
            hideProgressBar: false,
          });
          // alert("Password and confirm password does not match");
        }
      } else {
        toast.success("Please enter required fields", {
          hideProgressBar: false,
        });
        // alert("Please enter required fields");
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    <div className=" p-3 md:p-4">
      <div className="w-full max-w-sm items-center flex flex-col bg-white m-auto p-4">
        {/* <h1 className="text-center text-2xl font-bold">SignUp</h1> */}
        <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative">
          <Image
            width={500}
            height={500}
            src={data.imageUrl ? data.imageUrl : signUpImage}
            className="w-full h-full"
            alt="signup"
          />
          <label htmlFor="profileImage">
            <div className="absolute bottom-0 h-1/3 bg-slate-500 w-full text-center">
              <p className="text-xs p-1 text-white text-center cursor-pointer">
                Upload
              </p>
            </div>
            <input
              onChange={handleUploadProfileImage}
              type="file"
              id="profileImage"
              hidden
              accept="image/*"
            />
          </label>
        </div>
        <form onSubmit={handleSubmit} className="w-full py-3 flex flex-col">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.firstName}
            onChange={handleOnchange}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.lastName}
            onChange={handleOnchange}
          />
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

          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2  focus-within:outline focus-within:outline-blue-300">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className=" w-full bg-slate-200 border-none outline-none "
              value={data.confirmPassword}
              onChange={handleOnchange}
            />
          </div>
          <button className="max-w-[120px] w-full text-white text-xl text-center font-medium py-1 rounded-full mt-4 bg-primary hover:opacity-80 cursor-pointer m-auto">
            Sign Up
          </button>
          {error && <p className="text-red-500 mt-5 text-center">{error}</p>}
        </form>
        <p>
          Already Have an Account ?{" "}
          <Link className="text-blue-700 font-bold" href="./login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
