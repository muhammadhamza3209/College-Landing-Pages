import React from "react";

import Image from "next/image";

import Footer from "../(compoments)/footer/footer";

import img1 from "../../public/about.png";

import Head from "../(compoments)/head/head";

export default function page() {
  return (
    <>
      <Head title="About" />
      <div className=" lg:flex lg:flex-row  max-w-[1200px] mt-32 space-y-7 gap-16 sm:mx-[250px]">
        <div className="max-w-[500px] ">
          <p className="font-bold text-4xl text-[#24f8c7]">
            WE ARE THE WORLD'S LARGEST UNIVERSITY
          </p>
          <p className="pt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            cumque in accusantium molestias maiores fuga vitae eos, ducimus
            officiis repudiandae voluptatem error. Laboriosam, numquam
            blanditiis aspernatur, nobis tempora consequatur id aliquam
            asperiores voluptatum iste animi voluptatem fugiat totam excepturi
            dolor.
          </p>
          <button className="mt-10  px-9 py-4 hover:bg-[#24f8c7] border-blue-400 border-2">
            ENPOLOR NOW
          </button>
        </div>

        <div className="max-w-[600px]">
          <Image src={img1} width={900} alt="" />
        </div>
      </div>

      <Footer />
    </>
  );
}
