import React from "react";
import "@/styles/globals.css";
import logo from "../assests/logo_final.svg";
import Image from "next/image";
import Link from "next/link";
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
            <Link href={"/"} className="border-none px-4 pointer-cursor">
            Home
            </Link>
          </li>
          <li>
            <Link href={"/page/services"} className="border-none px-4 pointer-cursor">
            Services
            </Link>
          </li>
          <li>
            <Link href={"/get-in-touch"} className="border-none px-4 pointer-cursor">
            Get in Touch
            </Link>
          </li>
          <li>
            <Link href={"/"} className="border-none px-4 pointer-cursor">
            Forms
            </Link>
          </li>
          <li>
            <Link href={"/blog"} className="border-none px-4 pointer-cursor">
            Blogs
            </Link>
          </li>
        </ul>
        <div className="flex gap-2 text-[14px]">
          <Link href={""}className="flex justify-center items-center min-w-[8rem] p-[4px] font-semibold rounded-md border-[2px] border-black">
            Login
          </Link>
          <Link href={""} className="flex justify-center min-w-[8rem] items-center p-[4px] font-semibold border-none rounded-md bg-secoundry_red text-white">
            Brouche
          </Link>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
