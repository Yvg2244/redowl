"use client";
import React, { useEffect, useState } from "react";
import "@/styles/globals.css";
import logo from "../public/assests/logo.svg";
import Image from "next/image";
import Link from "next/link";
import menu from "../public/assests/menu.svg";
import cancel from "../public/assests/cancel.svg";
const MobileNav = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav className={"fixed md:top-0 h-[100vh] md:h-[auto] z-10 "+(show?'top-0':'top-[-100vh]')}>
        <div
          onClick={() => {
            setShow(!show);
          }}
          className={`fixed top-4 right-4 md:hidden`}
        >
          {show ? (
            <Image height={45} width={45} src={cancel} />
          ) : (
            <Image height={45} width={45} src={menu} />
          )}
        </div>
        <header className="bg-white p-[1.5rem] w-[100vw] tracking-wide items-center flex flex-col justify-between md:flex-row lg:justify-between lg:gap-4 h-[100%] md:h-[auto] lg:py-2 lg:p-4">
          <div className="flex flex-col md:flex-row  gap-[2rem] items-center ">
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
          <ul className="flex flex-col md:flex-row text-[20px] text-center md:text-[15px] font-bold gap-[2rem]">
            <li>
              <Link
                onClick={()=>{
                  setShow(false)
                }}
                href={"/"}
                className="border-none px-4 pointer-cursor"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={()=>{
                  setShow(false)
                }}
                href="#services"
                className="border-none px-4 pointer-cursor"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                onClick={()=>{
                  setShow(false)
                }}
                href={"/get-in-touch"}
                className="border-none px-4 pointer-cursor"
              >
                Get in Touch
              </Link>
            </li>
            <li>
              <Link
                onClick={()=>{
                  setShow(false)
                }}
                href={"/"}
                className="border-none px-4 pointer-cursor"
              >
                Forms
              </Link>
            </li>
            <li>
              <Link
                onClick={()=>{
                  setShow(false)
                }}
                href={"/blog"}
                className="border-none px-4 pointer-cursor"
              >
                Blogs
              </Link>
            </li>
          </ul>
          <div className="flex gap-2 text-[14px]">
            <Link
              onClick={()=>{
                setShow(false)
              }}
              href={""}
              className="flex justify-center items-center min-w-[8rem] p-[4px] font-semibold rounded-md border-[2px] border-black"
            >
              Login
            </Link>
            <Link
              onClick={()=>{
                setShow(false)
              }}
              href={""}
              className="flex justify-center min-w-[8rem] items-center p-[4px] font-semibold border-none rounded-md bg-secoundry_red text-white"
            >
              Brouche
            </Link>
          </div>
        </header>
      </nav>
    </>
  );
};

export default MobileNav;
