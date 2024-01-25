import React from "react";

import Image from "next/image";

import { FaHome } from "react-icons/fa";

import { IoCallOutline } from "react-icons/io5";

import { MdOutlineMailOutline } from "react-icons/md";
import Footer from "../(compoments)/footer/footer";

import Head from "../(compoments)/head/head";

export default function page() {
  return (
    <>
      <Head title="Contect" />
      <div className="lg:grid lg:grid-cols-2 mt-10 md:px-16 px-3">
        <div className="max-w-[600px] md:pl-16">
          <div className="flex flex-row gap-7">
            <div className="text-green-500 text-4xl pt-3">
              <FaHome />
            </div>
            <div>
              <p className="font-bold text-xl">NH9 Road, ABC Building</p>
              <p>Ghaziabad, Uttar Pradesh, IN</p>
            </div>
          </div>

          <div className="flex flex-row gap-7 pt-7">
            <div className="text-green-600 text-4xl pt-3">
              <IoCallOutline />
            </div>
            <div>
              <p className="font-bold text-xl">+91 7445546525</p>
              <p>Ghaziabad, Uttar Pradesh, IN</p>
            </div>
          </div>

          <div className="flex flex-row gap-7 pt-7">
            <div className="text-green-600 text-4xl pt-3">
              <MdOutlineMailOutline />
            </div>
            <div>
              <p className="font-bold text-xl">xyz@email.com</p>
              <p>Ghaziabad, Uttar Pradesh, IN</p>
            </div>
          </div>
        </div>

        <div className="max-w-[600px] lg:flex lg:flex-col space-y-6 mt-20 md:mt-0 gap-7 ">
          <input
            className="border-2 py-4 px-3 w-[100%] outline-none"
            type="text"
            placeholder="Enter Name"
          />

          <input
            className="border-2 py-4 px-3 w-[100%] outline-none"
            type="text"
            placeholder="Enter Email"
          />

          <input
            className="border-2 py-4 px-3 w-[100%] outline-none"
            type="text"
            placeholder="Enter Subject"
          />

          <textarea
            className="border-2 py-4 px-3 w-[100%] outline-none"
            placeholder="Message"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>

          <div className="max-w-40">
            <button className="mt-10 py-3 px-5 rounded-[10px]  hover:bg-[#24f8c7] border-blue-400 border-2">
              Send Message
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
