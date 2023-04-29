import React from "react";
import "@/styles/globals.css";
import footerLogo from "../public/assests/footerLogo.svg";

import Image from "next/image";
const BottomNav = () => {
  return (
    
      <div className="sticky bottom-0 bg-secoundry_red  font-semibold text-[14px] text-white w-[100vw] tracking-wide items-center justify-between flex gap-4 h-[auto] py-2 p-4">
          <Image
            src={footerLogo}
            height={50}
            width={50}
            className=""
            alt="RedOwlSchools Logo"
          />
        <div className="grid grid-cols-4 gap-4 items-center ">
          <p className=""><span>© 2023 RedOwl,</span><span>All Rights Reserved</span></p>
          <p className="">+91-8168391461,+91-8853667396</p>
          <p className=""> redowlschool@gmail.com</p>
          <p className="">C/102-103, Sector-4, Noida, Uttar Pradesh-201301</p>
        </div>
      </div>
  
  );
};

export default BottomNav;
