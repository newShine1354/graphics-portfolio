import React from "react";
import Navbar from "./Navbar";
import Btn from "./Btn";
import Image from "next/image";
import insta from "../../utils/svg/insta.svg";
import linkedIn from "../../utils/svg/linkedIn.svg";

const Header = () => {
  
  return (
    <div className=" pb-20">
      <Navbar />
      <div className="pl-28">
        <div className="w-[55%] flex flex-col gap-5 pt-10">
          <h2 className="text-2xl">-Hello, I’ am</h2>
          <h1 className="text-8xl">Arinna Arra Suzanyta</h1>
          <h2 className="text-2xl">UI/UX Designer, Development</h2>
          <p className="">
            Li Europan lingues es membres del sam familie. Lor separat
            existentie es un myth. Por scientie, musica, sport etc, litot Europa
            usa li sam vocabular. Li lingues differe solmen in li grammatica, li
            pronunciation e li plu commun vocabules.{" "}
          </p>
        </div>
        {/* For Image */}
        <div className="w-[45%] mt-8">
          <Btn />
        </div>
        <div className="flex gap-6 items-center my-8">
          <p className="text-lg">Follow me on:</p>
          <div className="flex gap-10 items-center">
            <Image src={insta} alt="jd" />
            <div className="bg-[#444444] p-[16px] rounded-full">
              <Image src={linkedIn} alt="jd" />
            </div>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="ellipse" />
      </div>
    </div>
  );
};

export default Header;
