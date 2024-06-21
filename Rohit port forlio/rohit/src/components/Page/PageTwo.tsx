import React from "react";

const PageTwo = () => {
  return (
    <>
      <div className="bg-gray-950 px-20 flex justify-between">
        <div className="w-[40%] text-left py-24">
          <div className="flex">
            <h1 className="designed-text text-2xl italic text-left">
              -Service Me-
            </h1>
          </div>
          <h1 className="text-5xl font-bold my-5">My Awesome Service</h1>
          <p className="">
            Li Europan lingues es membres del sam familie. Lor separat
            existentie es un myth. Por scientie, musica, sport etc, litot Europa
            usa li sam vocabular.
          </p>
        </div>
        <div className="w-[40%] py-16">
          <div className="my-4">
            <div className="flex justify-between w-full font-bold mb-1">
              <h1 className="">Development</h1>
              <p className="">70%</p>
            </div>
            <progress className=" w-full" value="70" max="100" />
          </div>
          <div className="my-4">
            <div className="flex justify-between w-full font-bold mb-1">
              <h1 className="">Development</h1>
              <p className="">65%</p>
            </div>
            <progress className=" w-full" value="65" max="100" />
          </div>
          <div className="my-4">
            <div className="flex justify-between w-full font-bold mb-1">
              <h1 className="">Development</h1>
              <p className="">95%</p>
            </div>
            <progress className=" w-full" value="70" max="100" />
          </div>
          <div className="my-4">
            <div className="flex justify-between w-full font-bold mb-1">
              <h1 className="">Development</h1>
              <p className="">70%</p>
            </div>
            <progress className=" w-full" value="70" max="100" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PageTwo;
