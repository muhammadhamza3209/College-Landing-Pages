import React from "react";
import Image from "next/image";

import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";

export default function Footer() {
  return (
    <>
      <hr className="text-2xl mt-[10%] w-[100%] border-1 border-black" />

      <div className="max-w-[1600px] mt-8 justify-center text-center mx-auto">
        <p className="text-3xl font-bold items-center">About Us</p>
        <p className="mt-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima
          incidunt odio nam facilis, eligendi Itaque fugiat cupiditate
          consectetur. Aliquid ab deserunt exercitationem, illum molestiae
          dolorem.
        </p>

        <div className="flex justify-center items-center gap-8 mt-6 mx-auto">
          <FaFacebookF className="text-3xl text-blue-600 hover:text-green-400 " />
          <FaTwitter className="text-3xl text-blue-600 hover:text-green-400 " />
          <IoLogoInstagram className="text-3xl text-blue-600 hover:text-green-400 " />
          <FaLinkedinIn className="text-3xl text-blue-600 hover:text-green-400 " />
        </div>
        <div className="flex justify-center items-center mt-7">
          <p className="flex">
            Made With <GiSelfLove className="text-green-700 mt-1 text-2xl" /> by
            <span className="text-blue-700">Hamza Developers</span>
          </p>
        </div>
        <p className="text-xl justify-center items-center mt-3">
          Copyright © 2021 Xplore College. All Rights Reserved
        </p>
      </div>
    </>
  );
}
