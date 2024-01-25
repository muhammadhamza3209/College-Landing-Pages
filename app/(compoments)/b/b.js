import React from "react";
import Image from "next/image";

export default function B(props) {
  return (
    <>
      <div className="max-w-[400px]">
        <Image className="hover:shadow-2xl" src={props.t} width={400} alt="" />
        <p className="text-xl font-bold pt-8 ">{props.n}</p>
        <p className="max-w-[400px] mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          omnis asperiores atque aperiam.
        </p>
      </div>
    </>
  );
}
