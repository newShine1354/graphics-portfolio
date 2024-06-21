import React from "react";

const HeaderFooter = () => {
  return (
    <>
      <div className="flex text-center p-16 justify-between bg-gray-950 px-40 ">
        <div className="">
          <h1 className="designed-text text-4xl font-semibold">10+</h1>
          <p className="">Experience</p>
        </div>
        <div className="">
          <h1 className="designed-text text-4xl font-semibold">500+</h1>
          <p className=""> Our Project Done</p>
        </div>
        <div className="">
          <h1 className="designed-text text-4xl font-semibold">99%</h1>
          <p className="">Happy Clients</p>
        </div>
        <div className="">
          <h1 className="designed-text text-4xl font-semibold">24/7</h1>
          <p className="">Online Support</p>
        </div>
      </div>
    </>
  );
};

export default HeaderFooter;
