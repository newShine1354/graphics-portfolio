"use client";

import React from "react";
import { PiGreaterThan } from "react-icons/pi";

const Btn = () => {
  return (
    <button className=" flex items-center gap-2 bg-gradient-to-r from-[#6b12e6] via-[#eb01f3] to-[#fc0120] px-4 py-2 rounded-lg">
      Contact Us
      <PiGreaterThan />
      
    </button>
  );
};

export default Btn;
