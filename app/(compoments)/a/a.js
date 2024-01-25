import React from "react";

import Image from "next/image";

export default function A(props) {
  return (
    <>
      <div className="hr mt-1 max-w-[400px]">
        <Image className="rounded-2xl img" src={props.sr} alt="" />
        <div className="ll">
          <h3 className="text-center  text-white text-3xl pt-32">
            {props.tit}
          </h3>
        </div>
      </div>
    </>
  );
}
