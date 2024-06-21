import React from "react";
import { MdOutlinePhonelinkSetup } from "react-icons/md";

const Page2 = () => {
  return (
    <div className="h-screen py-16 text-center">
      <div className="flex flex-col gap-5 items-center">
        <h1 className="designed-text text-2xl italic">-Service Me-</h1>
        <h1 className="text-5xl font-bold">My Awesome Service</h1>
        <p className="px-[400px]">
          Li Europan lingues es membres del sam familie. Lor separat existentie
          es un myth. Por scientie, musica, sport etc, litot Europa usa li sam
          vocabular.
        </p>
      </div>
      <div className="flex gap-10 justify-center px-28">
        <div className="flex flex-col items-center p-10 gap-5 bg-[#181827] mt-20">
          <MdOutlinePhonelinkSetup className="text-5xl text-purple-500 text-purple-500" />
          <h1 className="text-3xl">Developer</h1>
          <p className="">
            Li Europan lingues es membres del sam familie. Lor separat
            existentie es un myth.
          </p>
          <p className="designed-text">Learn more...</p>
        </div>
        <div className="flex flex-col items-center p-10 gap-5 bg-[#181827] mt-20">
          <MdOutlinePhonelinkSetup className="text-5xl text-purple-500" />
          <h1 className="text-3xl">Developer</h1>
          <p className="">
            Li Europan lingues es membres del sam familie. Lor separat
            existentie es un myth.
          </p>
          <p className="designed-text">Learn more...</p>
        </div>
        <div className="flex flex-col items-center p-10 gap-5 bg-[#181827] mt-20">
          <MdOutlinePhonelinkSetup className="text-5xl text-purple-500" />
          <h1 className="text-3xl">Developer</h1>
          <p className="">
            Li Europan lingues es membres del sam familie. Lor separat
            existentie es un myth.
          </p>
          <p className="designed-text">Learn more...</p>
        </div>
      </div>
    </div>
  );
};

export default Page2;
