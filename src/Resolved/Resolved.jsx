import React from "react";

const Resolved = ({ completeTicket }) => {
  return (
    <div className=" p-2 bg-white mt-5 rounded-xl min-h-[200px] ">
      <h1 className="text-2xl font-semibold pt-2">Resolved Task</h1>

      {completeTicket.map((ticket) => (
        <div className="h-[100px] w-[358px]  bg-[#c5e9d2] p-3 my-2 rounded-xl">
          <h1 className="text-xl font-semibold">{ticket.title}</h1>
          <h2 className="font-semibold text-green-600 h-[43px] w-full bg-[#c5e9d2] rounded-xl mt-2">
            Completed
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Resolved;
