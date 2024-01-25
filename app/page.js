import Image from "next/image";

import Div from "./(compoments)/div/div";

import Card from "./(compoments)/card/card";
import A from "./(compoments)/a/a";
import B from "./(compoments)/b/b";
import Two from "./(compoments)/two/two";
import Footer from "./(compoments)/footer/footer";

import Navber from "./(compoments)/navber/navber";

export default function Home() {
  return (
    <>
      <div className="dr">
        <Navber />

        <p className="max-w-[580px] mx-auto text-8xl text-[#24f8c7] lg:pt-64 md:pt-52 pt-24 text-center leading-[75%] font-black ">
          GET READY{" "}
          <span className="text-[#c8fff2] text-5xl">TO DISCIVER CAMPUS</span>
        </p>
        <p className="text-center text-white max-w-[900px] mx-auto pt-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
          consequuntur corrupti sapiente aut porro esse blanditiis in quae
          perspiciatis quo.
        </p>
        <div className="text-center pt-12 pb-7">
          <button className="border-2 px-9 py-4 hover:bg-[#24f8c7] text-white duration-[0.5s]">
            visit To Know More
          </button>
        </div>
        <br />
      </div>
      <Div />

      <p className="max-w-[550px] text-[#24f8c7] mx-auto text-center md:text-5xl text-3xl">
        EXPLORE OUR 60+MAJOR PROGRAMS
      </p>
      <p className="max-w-[600px] mx-auto text-center  pt-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit
      </p>

      {/* Card 1 Satrt */}

      <div className="max-w-[1500px] grid lg:grid-cols-3 md:grid-cols-2  gap-7 px-20 pt-[60px] mb-10">
        <Card />
        <Card />
        <Card />
      </div>

      {/* Card 1 Close */}

      <Div />

      <p className="max-w-[800px] text-[#24f8c7] mx-auto text-center lg:text-6xl md:text-4xl text-3xl">
        TAKE OUR VIRTUAL TOUR
      </p>
      <p className="max-w-[600px] mx-auto text-center pt-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>

      {/* Card 2 start */}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:px-10 px-2 gap-5 mx-auto mt-16 mb-12 max-w-[1400px]">
        <A sr={require("../public/Campus1.png")} tit="DELHI" />
        <A sr={require("../public/Campus2.png")} tit="HYDERABAD" />
        <A sr={require("../public/Campus3.png")} tit="MUMBAI" />
      </div>

      <Div />

      <p className="max-w-[800px] text-[#24f8c7] mx-auto text-center lg:text-6xl md:text-4xl text-3xl">
        OUR FACILITIES
      </p>
      <p className="max-w-[600px] mx-auto text-center pt-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>

      <div className="grid lg:grid-cols-3 md:grid-cols-2  max-w-[1400px] mx-auto justify-center  gap-10 px-[20px] pt-9 mb-12">
        <B t={require("../public/libary.png")} n="Best Libary" />
        <B t={require("../public/playground.png")} n="Athletics" />
        <B t={require("../public/food.png")} n="Tasty and Healthy Food" />
      </div>

      <Div />

      <p className="max-w-[800px] text-[#24f8c7] mx-auto text-center lg:text-6xl md:text-4xl text-3xl">
        WHAT OUR STUDENT SAYS
      </p>
      <p className="max-w-[600px] mx-auto text-center pt-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>

      <div className="lg:grid lg:grid-cols-2  gap-6 mx-auto mt-28 max-w-[1400px]">
        <Two />
        <Two />
      </div>

      {/* imag center */}

      <div className="jj mt-28 max-w-[1400px] mx-auto">
        <p className="pt-36 text-white lg:text-5xl font-black md:text-4xl text-3xl text-center">
          GET READY FOR A BRIGHT FUTURE
        </p>
        <div className="text-center pt-10">
          <button className="border lg:px-16 lg:py-5 px-10 py-3  hover:bg-[#24f8c7] text-white duration-[0.5s] mb-[60px]">
            Contect us
          </button>
        </div>
      </div>

      {/* imag close */}

      {/* footer */}

      <Footer />
    </>
  );
}
