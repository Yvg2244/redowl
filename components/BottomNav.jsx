import React from "react";
import "@/styles/globals.css";
import footerLogo from "../public/assests/footerLogo.svg";

import Image from "next/image";
const BottomNav = () => {
  return (
    <div className=" bg-secoundry_red   text-[10px] md:text-[12px] 2xl:text-[18px] text-white w-[100vw] tracking-wide items-center justify-between flex gap-4 h-[auto] p-2 md:py-2 md:p-4">
      <div className="flex justify-center flex-col">
        <Image
          src={footerLogo}
          height={50}
          width={50}
          className=""
          alt="RedOwlSchools Logo"
        />
        <p className="">
          <span>© 2023 RedOwl,</span>
          <span>All Rights Reserved</span>
        </p>
      </div>
      <div className="flex gap-2 justify-center flex-col">
        <p className="">Contact</p>
        <p className="">Services</p>
        <p className="">Blog</p>
      </div>
      <div className="flex gap-2 justify-center flex-col">
        <p className="">+91-8168391461,+91-8853667396</p>
        <p className=""> redowlschool@gmail.com</p>
        <p className="">C/102-103, Sector-4, Noida, Uttar Pradesh-201301</p>
      </div>
    </div>
  );
};

export default BottomNav;
