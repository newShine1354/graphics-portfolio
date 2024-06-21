import React from "react";
import icons from "../../utils/svg/icons.svg";
import Image from "next/image";

const FooterHeader = () => {
  return (
    <>
      <div className="px-20 flex justify-between items-center py-3 border-b-slate-300 border-b-[1px] ">
        <div className="">
          <Image src={icons} alt="icons" />
        </div>
        <div className="">
          <p className="text-3xl font-bold">
            <span className="designed-text">Hi.</span>
            <span className="">Port</span>
          </p>
        </div>
        <div className="">
          <p className="">Portfolio Design</p>
        </div>
      </div>
    </>
  );
};

export default FooterHeader;
