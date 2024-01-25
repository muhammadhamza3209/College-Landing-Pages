import React from "react";

import Navber from "../navber/navber";

export default function Head(props) {
  return (
    <>
      <div className="max-w[1400px] h-screen w-[100%]  im ">
        <Navber />
        <div className="max-w-[800px] mt-10 text-center mx-auto ">
          <p className="mt-24 text-green-500 text-4xl text-center pb-28 font-bold ">
            {props.title}
          </p>
        </div>
      </div>
    </>
  );
}
