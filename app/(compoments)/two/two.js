import React from "react";

import Image from "next/image";

import g from "../../../public/user.png";

export default function Two() {
  return (
    <>
      <div className="md:flex items-center md:px-4  px-10 py-12 bg-[#fff3f3] gap-4 mt-12 max-w-[600px]">
        <Image src={g} className="w-[80px] mx-auto mb-5 h-[80px]" alt="user" />
        <div>
          <p className="opacity-70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            maiores in nostrum rerum voluptatem praesentium veritatis alias
            omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
            deserunt. In quia repellat maxime.
          </p>
          <p className="font-semibold text-xl mt-3">Student Name</p>
        </div>
      </div>

      {/* imag back */}
    </>
  );
}
