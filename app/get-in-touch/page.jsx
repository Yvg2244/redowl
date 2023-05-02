"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import redBg from "../../public/assests/redBg.svg";
import logo from "../../public/assests/logo.svg";
import Atsign from "../../public/assests/Atsign.png";
import Map from "../../public/assests/Map.svg";
import mainBg from "../../public/assests/mainBg.svg";
import Ringer from "../../public/assests/Ringer.svg";
import Navbar from "../../components/Navbar";
const Touchpage = () => {
  return (
    <div className="w-[100vw] mt-[4rem] h-[80vh] md:grid md:grid-cols-12 tracking-wide ">
      <div className="absolute md:hidden w-[100vw] h-[100vh] -z-10">
        <Image src={redBg} layout="fill" objectFit="cover" quality={100} />
      </div>
      <section className=" hidden relative md:flex items-center justify-center col-span-4">
        <Image src={redBg} layout="fill" objectFit="cover" />
        <div className="flex absolute w-[20rem] text-white justify-center items-center flex-col gap-2 ">
          <Image src={logo} height={100} alt={"logo"} />
          <p className="font-bold text-[30px] text-black">
            Red<span className="text-white">Owl</span>
          </p>
          <p className="font-bold text-[25px]">Simplifing Learning</p>
          <div className="flex flex-col mt-4 gap-4 w-full">
            <p className="flex text-[14px] gap-4">
              <Image height={25} width={25} src={Atsign} />
              <span>redowlschool@gmail.com </span>
            </p>
            <p className="flex text-[14px] gap-4">
              <Image height={25} width={25} src={Map} />
              <span> C/102-103, Sector-4, Noida, Uttar Pradesh -201301</span>
            </p>{" "}
            <p className="flex text-[14px] gap-4">
              <Image height={25} width={25} src={Ringer} />
              <span> +91-8168391461 +91-8853667396 </span>
            </p>
          </div>
        </div>
      </section>
      <section className="col-span-8 w-full text-white md:text-black  flex flex-col justify-start items-start gap-8 p-4  ">
        <h2 className="font-bold text-center w-full text-[24px]">
          Get in touch
        </h2>
        <div className="flex flex-col gap-8">
          <div className="flex gap-2 flex-col">
            <label className="font-semibold">First Name</label>
            <input
              className="border-none"
              type="text"
              placeholder="FirstName"
              name=""
              id=""
            />
          </div>
          <div className="flex gap-2 flex-col">
            <label className="font-semibold">Last Name</label>
            <input
              className="border-none"
              type="text"
              placeholder="LastName"
              name=""
              id=""
            />
          </div>
        </div>
        <div className="flex gap-2 flex-col">
          <label className="font-semibold ">Email</label>
          <input
            className="border-none"
            type="email"
            placeholder="Email"
            name=""
            id=""
          />
        </div>
        <div className="flex gap-2 flex-col">
          <label className="font-semibold ">Your Message</label>
          <textarea
            className="w-[90vw] md:w-[30rem] border-black rounded-lg p-2"
            type="textarea"
            rows="4"
            cols="40"
            placeholder="Message"
            name=""
            id=""
          />
        </div>
        <button className="bg-white md:bg-secoundry_red font-semibold text-black  md:text-white m-0 py-2 px-8 border-none rounded-md">
          Get In Touch
        </button>
      </section>
      {/* <BottomNav /> */}
    </div>
  );
};

export default Touchpage;
