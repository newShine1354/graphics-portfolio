import React from "react";
import Btn from "./Btn";

const Navbar = () => {
  return (
    <>
      <nav className="flex py-8 px-28 justify-between items-center relative z-10">
        <div className="">
          <p className="text-3xl">
            <span className="designed-text">Hi.</span>
            <span className="">Port</span>
          </p>
        </div>
        <div className="flex gap-8">
          <p className="nav-text">Home</p>
          <p className="nav-text">About Us</p>
          <p className="nav-text">Project</p>
          <p className="nav-text">Price</p>
        </div>
        <div className="">
          <Btn />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
