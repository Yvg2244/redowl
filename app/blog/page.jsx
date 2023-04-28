import React from "react";
import Image from "next/image";
import b1 from "../../assests/b1.svg";
import b2 from "../../assests/b2.svg";
import b3 from "../../assests/b3.svg";
const page = () => {
  return (
    <div className="w-[100vw] tracking-wide">
      <h2 className="w-[100vw] text-center font-bold text-[24px]">Blogs</h2>
      <section className=" w-[100vw] min-h-[100vh] gap-8 justify-center flex ">
        <div className="flex p-4 rounded-lg flex-col shadow-xl shadow-black-500/50 justify-center items-center h-[25rem] w-[12rem] gap-4">
          <Image src={b1} alt="blog 1 image" />
          <h3 className="text-[16px] font-semibold">
            RedOwls new smart ID card’s full working{" "}
          </h3>
          <button className="bg-secoundry_red border-none py-2 text-white w-full rounded-md">
            Read More
          </button>
        </div>
        <div className="flex p-4 rounded-lg flex-col shadow-xl shadow-black-500/50 justify-center items-center h-[25rem] w-[12rem] gap-4">
          <Image src={b2} alt="blog 1 image" />
          <h3 className="text-[16px] font-semibold">
            Make your libraries smarter with redowl
          </h3>
          <button className="bg-secoundry_red border-none py-2 text-white w-full rounded-md">
            Read More
          </button>
        </div>
        <div className="flex p-4 rounded-lg flex-col shadow-xl shadow-black-500/50 justify-center items-center h-[25rem] w-[12rem] gap-4">
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

export default page;
