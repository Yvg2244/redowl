import React from "react";
import Image from "next/image";
import redBg from "../../assests/redBg.svg";
import logo from "../../assests/logo_final.svg";
import Atsign from "../../assests/Atsign.png";
import Map from "../../assests/Map.svg";
import Ringer from "../../assests/Ringer.svg";
const page = () => {
  return (
    <div className="w-[100vw] z h-[80vh] grid grid-cols-12 tracking-wide">
      <section className="relative flex items-center justify-center col-span-4">
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
      <section className="col-span-8 text-black grid grid-cols-2 items-start p-4 gap-4">
        <label className="font-semibold">First Name</label>
        <label className="font-semibold">Last Name</label>
        <input type="text" placeholder="FirstName" name="" id="" />
        <input type="text" placeholder="LastName" name="" id="" />
        <label className="font-semibold col-span-2">Email</label>
        <input type="email" placeholder="Email" name="" id="" />
        <label className="font-semibold col-span-2">Your Message</label>
        <input type="textarea" cols="60" rows="5"  placeholder="Message" name="" id="" />
        <button className="bg-secoundry_red font-bold text-white col-span-2 p-4 border-none rounded-md">Get In Touch</button>
      </section>
    </div>
  );
};

export default page;
