import React from "react";

const Complete = ({ ticket, removeTicket }) => {
  const handleRemove = () => {
    removeTicket(ticket);
  };
  return (
    <div className="h-[115px] w-[358px]  bg-gray-100 p-3 mb-2 rounded-xl">
      <h1 className="text-xl font-semibold">{ticket.title}</h1>
      <button
        onClick={handleRemove}
        className="btn h-[43px] w-full bg-[#02A53B] text-white rounded-xl mt-2"
      >
        Complete
      </button>
    </div>
  );
};

export default Complete;
