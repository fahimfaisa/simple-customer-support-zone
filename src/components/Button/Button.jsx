import React from "react";
import bgImg from "../../assets/vector1.png";
const Button = ({ count, total }) => {
  return (
    <div>
      <div className="mx-auto max-w-[1600px] grid grid-cols-2 p-[80px]  bg-gray-100">
        <div className="flex rounded-md text-white h-[250px] w-[708px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-center  ">
          <img src={bgImg} className="h-full w-[300px]" alt="" />
          <div className="mt-10">
            <h1 className="text-[25px]">In-Progress</h1>
            <p className="font-semibold text-[60px]">{count}</p>
          </div>
          <img
            src={bgImg}
            className="rotate-y-180 ml-6 h-full w-[250px] "
            alt=""
          />
        </div>
        <div className="flex rounded-md text-white h-[250px] bg-gradient-to-r from-[#54CF68] to-[#00827A]  w-[708px] text-center   ">
          <img src={bgImg} className="h-full w-[300px]" alt="" />
          <div className="mt-10">
            <h1 className="text-[25px]">Resolved</h1>
            <p className="font-semibold text-[60px]">{total}</p>
          </div>
          <img src={bgImg} className="rotate-y-180" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Button;
