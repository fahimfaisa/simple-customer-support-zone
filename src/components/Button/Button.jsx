import React from "react";
import bgImg from "../../assets/vector1.png";
const Button = () => {
  return (
    <div>
      <div className="mx-auto max-w-[1600px] grid grid-cols-2 p-[80px]  bg-gray-100">
        <div className="flex rounded-md text-white h-[250px] w-[708px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-center  ">
          <img src={bgImg} className="h-full w-[300px]" alt="" />
          <div className="mt-10">
            <h1 className="text-[30px]">In-Progress</h1>
            <p className="font-semibold text-[60px]">0</p>
          </div>
          <img src={bgImg} className="rotate-y-180" alt="" />
        </div>
        <div className="flex rounded-md text-white h-[250px] bg-gradient-to-r from-[#54CF68] to-[#00827A]  w-[708px] text-center   ">
          <img src={bgImg} className="h-full w-[300px]" alt="" />
          <div className="mt-10">
            <h1 className="text-[30px]">Resolved</h1>
            <p className="font-semibold text-[60px]">0</p>
          </div>
          <img src={bgImg} className="rotate-y-180" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Button;
