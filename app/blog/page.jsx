"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";
import b1 from "../../public/assests/b1.svg";
import b2 from "../../public/assests/b2.svg";
import b3 from "../../public/assests/b3.svg";
import menu from "../../public/assests/menu.svg";
import cancel from "../../public/assests/cancel.svg";

const Blogpage = () => {
   return (
    <div className="w-[100vw] tracking-wide">
      <h2 className="w-[100vw] my-2 text-center font-bold text-[24px]">
        Blogs
      </h2>
      <section className=" w-[100vw] min-h-[100vh] gap-8 justify-center items-center flex flex-col md:flex-row  ">
        <div className="flex p-4 rounded-lg flex-col shadow-xl shadow-black-500/50 justify-center md:items-baseline items-center h-[auto] w-[20rem] md:w-[12rem] gap-4">
          <Image src={b1} alt="blog 1 image" />
          <h3 className="text-[16px] font-semibold">
            RedOwls new smart ID card’s full working{" "}
          </h3>
          <button className="bg-secoundry_red border-none py-2 text-white w-full rounded-md">
            Read More
          </button>
        </div>
        <div className="flex p-4 rounded-lg flex-col shadow-xl shadow-black-500/50 justify-center md:items-baseline items-center h-[auto] w-[20rem] md:w-[12rem] gap-4">
          <Image src={b2} alt="blog 1 image" />
          <h3 className="text-[16px] font-semibold">
            Make your libraries smarter with redowl
          </h3>
          <button className="bg-secoundry_red border-none py-2 text-white w-full rounded-md">
            Read More
          </button>
        </div>
        <div className="flex p-4 rounded-lg flex-col shadow-xl shadow-black-500/50 justify-center md:items-baseline items-center h-[auto] w-[20rem] md:w-[12rem] gap-4">
          <Image src={b3} alt="blog 1 image" />
          <h3 className="text-[16px] font-semibold">
            5 new Campuses made smarted by RedOwl{" "}
          </h3>
          <button className="bg-secoundry_red border-none py-2 text-white w-full rounded-md">
            Read More
          </button>
        </div>
      </section>
    </div>
  );
};

export default Blogpage;
