"use client";
import React, { useRef } from "react";
import Image from "next/image";
import network from "../public/assests/connect.png";
import group from "../public/assests/grp.png";
import support from "../public/assests/support.png";
import MainImg from "../public/assests/Asset1.svg";
import idCard from "../public/assests/idCard.svg";
import smartGate from "../public/assests/smartGate.svg";
import school from "../public/assests/school.svg";
import screen from "../public/assests/screen.svg";
import { useEffect } from "react";
import { useCallback } from "react";
import Footer from "../components/BottomNav";
import BottomNav from "../components/BottomNav";
const page = () => {
  return (
    <div className="w-[100vw] h-auto tracking-wider  grid grid-cols-2">
      <main className="flex col-span-2 min-h-[80vh] items-center pl-[4rem] pr-[4rem] justify-between">
        <div className="flex flex-col w-[20rem] gap-4">
          <h1 className="font-extrabold text-[48px]">School ERP System</h1>
          <p className="font-semibold">
            Student&apos;s 360º spectrum through an integrated ERP
          </p>
          <button className="w-[10rem] m-0 p-[8px] font-semibold border-none rounded-md bg-secoundry_red text-white">
            Get in Touch
          </button>
        </div>
        <Image src={MainImg} alt="RedOwlSchools display Image" />
      </main>
      <section id="services"className="grid content-center gap-5 grid-col-2 col-span-2 h-[100vh] my-4 pl-[4rem] pr-[4rem]">
        <h2 className="font-extrabold col-span-2 w-[55vw] text-[36px]">
          Providing Best Services To Top Educational Institutes
        </h2>
        <h4 className="col-span-2 text-[16px] font-semibold">
          Some of our achivements with our clients
        </h4>
        <div className="grid grid-cols-3 gap-5 w-full col-span-2 justify-between">
          <div className="flex-col gap-3">
            <Image alt="RedOwlSchools Network" src={group} />
            <h3 className="font-semibold text-[20px]">5000+ Network</h3>
            <p className="">Network of students,teacher and athorities </p>
          </div>
          <div className="flex-col gap-3">
            <Image alt="RedOwlSchools support" src={support} />
            <h3 className="font-semibold text-[20px]">24*7 Support</h3>
            <p>FUll time support everytime for every query and problems</p>
          </div>
          <div className="flex-col gap-3">
            <Image alt="RedOwlSchools connections" src={network} />
            <h3 className="font-semibold text-[20px]">10+ Schools</h3>
            <p>
              Successfully established in more than 10+ schools and universities
            </p>
          </div>
        </div>
      </section>

      <section className="grid grid-col-2 col-span-2 h-[auto] my-8 mb-[8rem] gap-8 pl-[4rem] pr-[4rem]  ">
        <h2 className="font-extrabold col-span-2 w-[55vw] text-[36px]">
          Don&apos;t Let Administration Activities Interfere with Education
        </h2>
        <div className="col-span-2 justify-between flex w-full">
          <div className="mt-4 min-h-[20rem] min-w-[40rem] flex flex-col leading-tighter justify-center rounded-r-[150px] px-[4rem] bg-primary_red text-white">
            <h3 className="text-[34px] font-bold mb-[8px]">Smart ID Cards</h3>
            <span className="font-semibold mb-[12px]">
              The Future of School Management
            </span>
            <ul className="list-decimal">
              <li>Equipped with RFID, UFID and AI technology</li>
              <li>Tracks employee and student time and attendance</li>
              <li>Works seamlessly with RedOwl’s smart gates </li>
              <li>Offers flexible remote connectivity</li>
              <li>Enhances time management and security</li>
            </ul>
          </div>
          <Image alt="RedOwlSchools Idcard" src={idCard} />
        </div>
        <div className="col-span-2 justify-between flex w-full">
          <Image alt="RedOwlSchools smart gate" src={smartGate} />
          <div className="mt-4 min-h-[20rem] min-w-[40rem] flex flex-col  leading-tighter justify-center rounded-l-[150px] pr-[3rem] pl-[8rem] bg-primary_red text-white">
            <h3 className="text-[34px] font-bold mb-[8px]">Smart Gates</h3>
            <span className="font-semibold mb-[12px]">
            No more physical attendance 
            </span>
            <ul className="list-decimal">
              <li>Mark attendance just by passing through it</li>
              <li>Interconnected network all over campus</li> 
              <li>Get instant location of any student </li>
            </ul>
          </div>
        </div>
        <div className="col-span-2 justify-between flex w-full">
          <div className="mt-4 min-h-[20rem] min-w-[40rem] flex flex-col leading-tighter justify-center rounded-r-[150px] px-[4rem] bg-primary_red text-white">
            <h3 className="text-[34px] font-bold mb-[8px]">VTS</h3>
            <span className="font-semibold mb-[12px]">
            Stay Informed and In Control
            </span>
            <ul className="list-decimal">
              <li>Track vehicle location at any time</li>
              <li>Convenient web-based application</li>
              <li>GPS location and stoppage points</li>
              <li>Complete route and speed statistics</li>
            </ul>
          </div>
          <div className="w-[24rem]">
            <Image alt="RedOwlSchools smart campus" src={school} />
          </div>
        </div>
      </section>

      <section className=" col-span-2 h-auto my-4 gap-8 pl-[4rem] pr-[4rem] justify-center ">
        <h2 className="mb-4 col-span-3 font-extrabold w-[55vw] text-[36px]">
          School Mobile App
        </h2>
        <h4 className="col-span-3 text-[16px] mb-8 font-semibold">
          RedOwl SMS helps to instantly communicate with parents about their
          ward&apos;s attendance, result, fees & notices. Schools can also schedule
          single/bulk SMS. RedOwl SMS is a reliable & cost-effective solution
          with pre- defined & custom template facility
        </h4>
        <div className="items-center grid col-span-3 grid-cols-3 grid-rows-2 pb-8">
          <div className="flex flex-col text-[20px]">
            <h3 className="font-bold ">Parent, Teacher & Management App</h3>
            <p className="font-semibold text-[14px] text-primary_red">
              35+ Modules with Personalized School Logo- Exam Result,
              Attendance, Homework, Timetable
            </p>
          </div>
          <Image
            alt="RedOwlSchools Mobile App"
            src={screen}
            className="row-span-2"
          />
          <div className="flex flex-col text-[20px]">
            <h3 className="font-bold ">Inbuilt Integration for Easy Access</h3>
            <p className="font-semibold text-[14px] text-primary_red">
              Auto Mechanism For Fee Defaulters
            </p>
          </div>
          <div className="flex flex-col text-[20px]">
            <h3 className="font-bold ">
              Academic Management with online Learning
            </h3>
            <p className="font-semibold text-[14px] text-primary_red">
              Online Payment, Bus Tracking
            </p>
          </div>
          <div className="flex flex-col text-[20px]">
            <h3 className="font-bold ">
              App Lock/Unlock Facility Messaging Platform{" "}
            </h3>
            <p className="font-semibold text-[14px] text-primary_red">
              Quick Notification With Attachment & Integrated SMS
            </p>
          </div>
        </div>
      </section>
    <BottomNav/>
    </div>
  );
};

export default page;
