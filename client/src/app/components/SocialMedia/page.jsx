import React from "react";
import { BsFacebook, BsInstagram, BsTiktok, BsYoutube } from "react-icons/bs";
import {
  FACEBOOK,
  YOUTUBE,
  INSTAGRAM,
  TIKTOK,
} from "../../constants/SocialMedia";
import Link from "next/link";

const SocialMedia = () => {
  return (
    <>
      <div className="bg-transparent m-1 shadow-md rounded-md p-[6px] text-[18px] cursor-pointer hover:bg-accent hover:text-white">
        <Link target="_blank" href={TIKTOK}>
          <BsTiktok />
        </Link>
      </div>
      <div className="bg-transparent m-1 shadow-md rounded-md p-[6px] text-[18px] cursor-pointer hover:bg-accent hover:text-white">
        <Link target="_blank" href={YOUTUBE}>
          <BsYoutube />
        </Link>
      </div>

      <div className="bg-transparent m-1 shadow-md rounded-md p-[6px] text-[18px] cursor-pointer hover:bg-accent hover:text-white">
        <Link target="_blank" href={INSTAGRAM}>
          <BsInstagram />
        </Link>
      </div>
      <div className="bg-transparent m-1 shadow-md rounded-md p-[6px] text-[18px] cursor-pointer hover:bg-accent hover:text-white">
        <Link target="_blank" href={FACEBOOK}>
          <BsFacebook />
        </Link>
      </div>
    </>
  );
};

export default SocialMedia;
