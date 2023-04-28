import React from "react";
import "@/styles/globals.css";
import logo from "../assests/logo_final.svg";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="sticky top-0">
      <header className="sticky top-0 bg-white w-[100vw] tracking-wide items-center justify-between flex gap-4 h-[auto] py-2 p-4">
        <div className="flex gap-2 items-center ">
          <Image
            src={logo}
            height={75}
            width={75}
            className=""
            alt="RedOwlSchools Logo"
          />
          <p className="font-bold text-[30px] text-black">
            Red<span className="text-secoundry_red">Owl</span>
          </p>
        </div>
        <ul className="flex text-[15px] font-bold gap-4">
          <li>
            <button className="border-none pointer-cursor">
            Home
            </button>
          </li>
          <li>
            <button className="border-none pointer-cursor">
            Services
            </button>
          </li>
          <li>
            <button className="border-none pointer-cursor">
            Get in Touch
            </button>
          </li>
          <li>
            <button className="border-none pointer-cursor">
            Forms
            </button>
          </li>
          <li>
            <button className="border-none pointer-cursor">
            Blogs
            </button>
          </li>
        </ul>
        <div className="flex gap-2 text-[14px]">
          <button className="w-[8rem] p-[4px] font-semibold rounded-md border-[2px] border-black">
            Login
          </button>
          <button className="w-[8rem] p-[4px] font-semibold border-none rounded-md bg-secoundry_red text-white">
            Brouche
          </button>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
