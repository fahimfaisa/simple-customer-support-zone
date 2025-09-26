import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm md:max-w-[1600px] h-[80px] mx-auto px-[80px] sm:justify-center items-center gap-3">
      <div className="flex-1">
        <h1 className="md:text-2xl font-bold sm:text-xl">CS — Ticket System</h1>
      </div>
      <div>
        <a href="" className="mr-[32px]">
          Home
        </a>
        <a href="" className="mr-[32px]">
          FAQ
        </a>
        <a href="" className="mr-[32px]">
          Change log
        </a>
        <a href="" className="mr-[32px]">
          Blog
        </a>
        <a href="" className="mr-[32px]">
          Download
        </a>
        <a href="" className="mr-[32px]">
          Contact
        </a>
        <button className="btn mr-[32px] h-[43px] w-[145px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
          + New Ticket
        </button>
      </div>
    </div>
  );
};

export default Navbar;
