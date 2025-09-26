import React from "react";
import ticket from "../../assets/fi_5969020.png";
import group from "../../assets/Group.png";
import facebook from "../../assets/fi_5968764.png";
import message from "../../assets/fi_6244710.png";
const Footer = () => {
  return (
    <div className="max-w-[1600px] min-h-[435px] mx-auto pt-[80px]  px-[80px] bg-black">
      <div className="flex gap-[70px] border-b-1 border-gray-600 pb-10 ">
        <div className="max-w-[350px] text-white">
          <h1 className="text-2xl font-bold">CS — Ticket System</h1>
          <p className="mt-3 text-[#A1A1AA]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className=" max-h-[150px] w-[220px] text-white">
          <h1 className="font-bold text-xl mb-2">Company</h1>
          <a href="" className=" mb-3 text-[#A1A1AA] ">
            About Us
          </a>
          <br />
          <a href="" className=" text-[#A1A1AA]">
            Our Mission
          </a>
          <br />
          <a href="" className=" text-[#A1A1AA]">
            Contact Saled
          </a>
        </div>
        <div className="max-h-[150px] w-[220px] text-white">
          <h1 className="font-bold text-xl mb-2">Services</h1>
          <a href="" className="text-[#A1A1AA]">
            Products & Services
          </a>
          <br />
          <a href="" className="text-[#A1A1AA]">
            Customer Stories
          </a>
          <br />
          <a href="" className=" text-[#A1A1AA]">
            Download Apps
          </a>
        </div>
        <div className="max-h-[150px] w-[220px]  text-white">
          <h1 className="font-bold text-xl mb-2">Information</h1>
          <a href="" className=" text-[#A1A1AA]">
            Privacy Policy
          </a>
          <br />
          <a href="" className=" text-[#A1A1AA]">
            Terms & Conditions
          </a>
          <br />
          <a href="" className=" text-[#A1A1AA]">
            Join Us
          </a>
        </div>
        <div className="max-h-[150px] w-[220px] text-white">
          <h1 className="font-bold text-xl mb-2">Social Links</h1>
          <div className="flex mt-2">
            <img src={ticket} alt="" className="h-[20px] mr-2" />
            <a href="" className=" text-[#A1A1AA]">
              @CS — Ticket System
            </a>
          </div>
          <div className="flex mt-3">
            <img src={group} alt="" className="h-[20px] mr-2" />
            <a href="" className=" text-[#A1A1AA]">
              @CS — Ticket System
            </a>
          </div>
          <div className="flex mt-3">
            <img src={facebook} alt="" className="h-[20px] mr-2" />
            <a href="" className=" text-[#A1A1AA]">
              @CS — Ticket System
            </a>
          </div>
          <div className="flex mt-3">
            <img src={message} alt="" className="h-[20px] mr-2" />
            <a href="" className=" text-[#A1A1AA]">
              support@cst.com
            </a>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-[#FAFAFA] text-center mt-10 ">
          © 2025 CS — Ticket System. All rights reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
