import React from "react";

import Image from "next/image";

import a from "../../public/post.png";

import Footer from "../(compoments)/footer/footer";

import Head from "../(compoments)/head/head";

export default function page() {
  return (
    <>
      <Head title="Blog" />
      <div className="lg:grid lg:grid-cols-2 max-w-[1300px] mx-auto gap-10 mt-16">
        <div className="max-w-[600px] md:mx-auto">
          <p className="text-black text-2xl md:text-3xl lg:text-4xl font-semibold mt-7">
            Our Certificate & Online Program
          </p>
          <p className="text-[#24f8c7] font-bold">Aug 1, 2021</p>
          <Image src={a} alt="" />
          <p className="pt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            dolor consequatur, nobis quae obcaecati delectus at aspernatur,
            placeat quasi iure mollitia. Repellendus a ut nostrum dolore velit
            odit cumque, quos doloribus sint id aperiam eius aliquam quo modi
            sequi rem quia exercitationem laborum, ratione expedita! Deleniti
            velit officia incidunt illum.
          </p>

          <p className="pt-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            corrupti blanditiis deserunt incidunt itaque ut laudantium a amet
            omnis nihil, dolor doloribus. Voluptatum, accusantium? Quo, aperiam
            nobis labore pariatur, esse vitae amet repellendus libero architecto
            nisi facere unde ducimus perspiciatis, laudantium alias porro.
            Sapiente voluptatem eligendi at voluptatum optio facilis?
          </p>

          <p className="pt-5">
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            corrupti blanditiis deserunt incidunt itaque ut laudantium a amet
            omnis nihil, dolor doloribus. Voluptatum, accusantium? Quo, aperiam
            nobis labore pariatur, esse vitae amet repellendus libero architecto
            nisi facere unde ducimus perspiciatis, laudantium alias porro.
            Sapiente voluptatem eligendi at voluptatum optio facilis?
          </p>

          <p className="pt-5">
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            corrupti blanditiis deserunt incidunt itaque ut laudantium a amet
            omnis nihil, dolor doloribus. Voluptatum, accusantium? Quo, aperiam
            nobis labore pariatur, esse vitae amet repellendus libero architecto
            nisi facere unde ducimus perspiciatis, laudantium alias porro.
            Sapiente voluptatem eligendi at voluptatum optio facilis?
          </p>
        </div>
        <div className="max-w-[450px] md:mx-auto lg:ml-56 mt-6">
          <p className="text-2xl px-16 py-1 text-center bg-[#24f8c7] text-white font-semibold">
            Post Categories
          </p>
          <p className="flex justify-between my-4 hover:text-[#24f8c7]">
            Business Analytics<span>12</span>
          </p>
          <p className="flex justify-between my-4 hover:text-[#24f8c7]">
            Machine Learning<span>12</span>
          </p>
          <p className="flex justify-between my-4 hover:text-[#24f8c7]">
            Computer Science<span>12</span>
          </p>
          <p className="flex justify-between my-4 hover:text-[#24f8c7]">
            Data Analytics<span>12</span>
          </p>
          <p className="flex justify-between my-4 hover:text-[#24f8c7]">
            Data Analytics<span>32</span>
          </p>
        </div>
      </div>
      <div className="mt-12 flex flex-col max-w-[600px] md:mx-auto m-1 lg:ml-32 space-y-10 border-2 py-10 px-5 ">
        <p className="text-black-200">Leave a Comment</p>

        <input
          className="bg-[#f0f0f0] py-3 px-3 outline-none"
          type="text"
          placeholder="Name"
        />

        <input
          className="bg-[#f0f0f0] py-3 px-3 outline-none"
          type="text"
          placeholder="Email"
        />

        <input
          className="bg-[#f0f0f0] py-3 px-3 outline-none"
          type="text"
          placeholder="Your Comments"
        />

        <button className="border border-blue-700 w-44 px-5 py-3   ">
          Post Comment
        </button>
      </div>

      <Footer />
    </>
  );
}
