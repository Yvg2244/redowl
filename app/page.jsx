"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import network from "../public/assests/connect.png";
import group from "../public/assests/grp.png";
import support from "../public/assests/support.png";
import MainImg from "../public/assests/Asset1.svg";
import cardIcon from "../public/assests/cardIcon.svg";
import appleStore from "../public/assests/appleStore.svg";
import googleButton from "../public/assests/googleButton.svg";
import windowButton from "../public/assests/appleStore.svg";
import gate from "../public/assests/gate.svg";
import track from "../public/assests/track.svg";
import screen from "../public/assests/screen.svg";
import rocket from "../public/assests/rocket.svg";
import BottomNav from "../components/BottomNav";

const Mainpage = () => {
  return (
    <div className="w-[100vw] h-auto tracking-wider  grid grid-cols-2">
      <div className="col-span-2 mainSection">
        <main className="flex text-white mainSectionDiv mt-[0rem] md:mt-[5rem] relative h-[50vh] md:min-h-[80vh] items-center px-[1rem] md:pl-[4rem] md:pr-[4rem] justify-between">
          <div className="flex flex-col  w-[28rem] md:w-[20rem] gap-4">
            <h1 className="font-extrabold text-[27px] md:text-[48px] xl:text-[56px]">
              School ERP System
            </h1>
            <p className="font-semibold text-[12px] md:[18px] xl-[22px]">
              Student&apos;s 360º spectrum through an integrated ERP
            </p>
            <button className="w-[8rem] md:w-[10rem] m-0 p-[8px] font-semibold border-none rounded-md bg-white text-black text-[10px] md:text-[14px]">
              Get in Touch
            </button>
          </div>
          <div className="w-[28rem]">
            <Image src={MainImg} alt="RedOwlSchools display Image" />
          </div>
        </main>
      </div>
      <section className="flex flex-wrap mt-[4rem] justify-around gap-[4rem] md:mt-[6rem] w-[100vw] px-[1rem] md:pl-[4rem] md:pr-[4rem]">
        <div className="flex flex-col p-2 b-shadow w-[25rem] md:w-[20rem]  rounded-lg items-center relative ">
          <div className="flex w-[6rem] b-shadow aspect-square absolute top-[-10%] justify-center bg-white items-center rounded-[50%]">
            <Image src={cardIcon} alt="icon"></Image>
          </div>
          <h3 className="text-[20px] mt-[4rem] font-extrabold">
            Smart ID card
          </h3>
          <ul className="list-disc p-[2rem]  text-[14px] leading-7">
            <li>RFID, UFID and AI technology</li>
            <li>Tracks employee and student time and attendance</li>
            <li>Works seamlessly with RedOwl&apos;s smart gates </li>
            <li>flexible remote connectivity</li>
            <li>Enhances time management and security</li>
          </ul>
          <Link
            href={"/get-in-touch"}
            className="w-[100%] m-0 p-[8px] font-semibold border-none text-center rounded-md bg-secoundry_red text-white"
          >
            Know More
          </Link>
        </div>
        <div className="flex flex-col p-2 b-shadow w-[25rem] md:w-[20rem] justify-between rounded-lg items-center relative ">
          <div className="flex w-[6rem] b-shadow aspect-square absolute top-[-10%] justify-center bg-white items-center rounded-[50%]">
            <Image src={track} alt="icon"></Image>
          </div>
          <h3 className="text-[20px] mt-[4rem] font-extrabold">VTS</h3>
          <ul className="list-disc p-[2rem]  text-[14px] leading-7">
            <li>Track vehicle location at any time</li>
            <li>Convenient web-based application</li>
            <li>GPS location and stoppage points</li>
            <li>Complete route and speed statistics</li>
          </ul>
          <Link
            href={"/get-in-touch"}
            className="w-[100%] m-0 p-[8px] font-semibold border-none text-center rounded-md bg-secoundry_red text-white"
          >
            Know More
          </Link>
        </div>
        <div className="flex flex-col p-2 b-shadow w-[25rem] md:w-[20rem] justify-between rounded-lg items-center relative ">
          <div className="flex w-[6rem] b-shadow aspect-square absolute top-[-10%] justify-center bg-white items-center rounded-[50%]">
            <Image src={gate} alt="icon"></Image>
          </div>
          <h3 className="text-[20px] mt-[4rem] font-extrabold">Smart Gate</h3>
          <ul className="list-disc p-[2rem]  text-[14px] leading-7">
            <li>Mark attendance just by passing through it</li>
            <li>Interconnected network all over campus</li>
            <li>Get instant location of any student </li>
          </ul>
          <button
            href={"/get-in-touch"}
            className="w-[100%] m-0 p-[8px] font-semibold border-none text-center rounded-md bg-secoundry_red text-white"
          >
            Know More
          </button>
        </div>
      </section>
      <section
        id="services"
        className="grid content-center gap-6 mt-[5rem] grid-col-2 col-span-2 h-auto my-4 px-[1rem] md:pl-[4rem] md:pr-[4rem]"
      >
        <h2 className="font-extrabold col-span-2 w-[100%] text-[24px] md:text-[48px] xl:text-[56px]">
          Providing Best Services To Top Educational Institutes
        </h2>
        <h4 className="col-span-2 text-[16px] xl:text-[22px] font-semibold">
          Some of our achivements with our clients
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-5 w-full col-span-2 justify-between">
          <div className="flex-col gap-5">
            <Image alt="RedOwlSchools Network" src={group} />
            <h3 className="font-semibold text-[20px] xl:text-[24px]">5000+ Network</h3>
            <p className="">Network of students,teacher and athorities </p>
          </div>
          <div className="flex-col gap-5">
            <Image alt="RedOwlSchools support" src={support} />
            <h3 className="font-semibold text-[20px] xl:text-[24px]">24*7 Support</h3>
            <p>FUll time support everytime for every query and problems</p>
          </div>
          <div className="flex-col gap-5">
            <Image alt="RedOwlSchools connections" src={network} />
            <h3 className="font-semibold text-[20px] xl:text-[24px]">10+ Schools</h3>
            <p>
              Successfully established in more than 10+ schools and universities
            </p>
          </div>
        </div>
      </section>
      <section className="mt-[4rem] col-span-2 h-auto my-4 gap-10 px-[1rem] md:pl-[4rem] md:pr-[4rem] justify-center ">
        <h2 className="font-extrabold text-[27px] md:text-[48px] xl:text-[56px]">
          School Mobile App
        </h2>

        <div className="items-center grid gap-4 col-span-3 grid-cols-2 p-8">
          <div className="grid text-[12px] text-secoundry_red md:text-black md:text-[20px] xl:text-[24px]">
            <div>
              <Image src={rocket} />
            </div>
            <h3 className="font-bold ">Parent, Teacher & Management App</h3>
            <p className="font-semibold  hidden md:block text-[14px] xl:text-[18px] text-primary_red">
              35+ Modules with Personalized School Logo- Exam Result,
              Attendance, Homework, Timetable
            </p>
          </div>
          <div className="grid text-[12px] text-secoundry_red md:text-black md:text-[20px] xl:text-[24px]">
            <div>
              <Image src={rocket} />
            </div>
            <h3 className="font-bold ">Inbuilt Integration for Easy Access</h3>
            <p className="font-semibold hidden md:block text-[14px] xl:text-[18px] text-primary_red">
              Auto Mechanism For Fee Defaulters
            </p>
          </div>
          <div className="grid text-[12px] text-secoundry_red md:text-black md:text-[20px] xl:text-[24px]">
            <div>
              <Image src={rocket} />
            </div>
            <h3 className="font-bold ">
              Academic Management with online Learning
            </h3>
            <p className="font-semibold hidden md:block text-[14px] xl:text-[18px] text-primary_red">
              Online Payment, Bus Tracking
            </p>
          </div>
          <div className="grid text-[12px] text-secoundry_red md:text-black md:text-[20px] xl:text-[24px]">
            <div>
              <Image src={rocket} />
            </div>
            <h3 className="font-bold ">
              App Lock/Unlock Facility Messaging Platform{" "}
            </h3>
            <p className="font-semibold hidden md:block text-[14px] xl:text-[18px] text-primary_red">
              Quick Notification With Attachment & Integrated SMS
            </p>
          </div>
        </div>
      </section>
      <section className="mt-[4rem] col-span-2 h-auto my-4 flex flex-col items-center gap-6 px-[1rem] md:pl-[4rem] md:pr-[4rem] justify-center ">
        <div className="px-[4rem]">
          <Image src={screen} />
        </div>
        <h3 className="text-[20px] xl:text-[24px] font-bold">Download Our App</h3>
        <p>
          {" "}
          RedOwl SMS is a reliable & cost-effective solution with pre- defined &
          custom template facility
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-[10rem]">
            <Image src={appleStore} />
          </div>
          <div className="w-[10rem]">
            <Image src={googleButton} />
          </div>
          <div className="w-[10rem]">
            <Image src={windowButton} />
          </div>
        </div>
      </section>
      <BottomNav />
    </div>
  );
};

export default Mainpage;
