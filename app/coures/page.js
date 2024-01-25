import React from "react";

import Footer from "../(compoments)/footer/footer";

import Card from "../(compoments)/card/card";

import Head from "../(compoments)/head/head";

import B from "../(compoments)/b/b";

export default function page() {
  return (
    <>
      <Head title="Our Courese" />

      <div className="mt-[7%]">
        <p className="max-w-[800px] text-[#24f8c7] mx-auto text-center lg:text-6xl md:text-4xl text-3xl">
          COURSE WE OFFER
        </p>
        <p className="max-w-[600px] mx-auto text-center pt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="max-w-[1500px] grid lg:grid-cols-3 md:grid-cols-2  gap-7 px-20 pt-[60px] mb-10">
        <Card />
        <Card />
        <Card />
      </div>

      <div className="max-w-[1400px] grid lg:grid-cols-3 md:grid-cols-2  gap-14  mx-20  pt-[60px] mb-10">
        <B t={require("../../public/course2.png")} n="Web Developmen" />
        <B
          t={require("../../public/course1.png")}
          n="Artificial Intelligence"
        />
        <B t={require("../../public/course3.png")} n="Data Science" />
      </div>

      <Footer />
    </>
  );
}
