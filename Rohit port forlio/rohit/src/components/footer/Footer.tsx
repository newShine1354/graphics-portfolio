import React from "react";
import FooterHeader from "./FooterHeader";
import phone from "../../utils/svg/phone.svg";
import location from "../../utils/svg/location.svg";
import mail from "../../utils/svg/mail.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <FooterHeader />
      <div className="p-28 px-[450px] flex justify-between flex-wrap">
        <div className="flex flex-col items-center">
          <Image src={phone} alt="contact us" />
          <h1 className="font-semibold text-xl my-5 designed-text">Call center</h1>
          <div className="">
            <p className="">+02 5421234560</p>
            <p className="">+02 5541234560</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Image src={mail} alt="Email us" />
          <h1 className="font-semibold text-xl my-5 designed-text">Email</h1>
          <div className="">
            <p className="">portfolio@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="p-2 flex justify-between px-20 border-t-slate-300 border-t-[1px]">
        <p className="">Copyright © 2023. All rights reserved.</p>
        <p className="flex gap-5 ">
          <span>Privacy</span>
          <span>|</span>
          <span>Terms and conditions</span>
        </p>
      </div>
    </>
  );
};

export default Footer;
