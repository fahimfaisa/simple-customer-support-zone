import React, { use } from "react";
import { toast } from "react-toastify";

const Maincointainer = ({
  ticketsPromise,
  setCount,
  count,
  setSelectedTicket,
  selectedTicket,
}) => {
  const ticketData = use(ticketsPromise);
  const handleSingle = (ticketData) => {
    const update = count + 1;
    setCount(update);
    setSelectedTicket([...selectedTicket, ticketData]);
    toast("In Progress!");
  };

  return (
    <div className="grid grid-cols-2 gap-5">
      {/* --------- */}
      {ticketData.map((ticket) => (
        <div
          onClick={() => {
            handleSingle(ticket);
          }}
          className="h-[148px] w-[513px]  p-5 bg-white "
        >
          <div className="flex justify-between">
            <h1 className="text-xl font-semibold">{ticket.title}</h1>
            <button
              className={`btn h-[32px]   rounded-4xl ${
                ticket.status === "Open"
                  ? "bg-[#B9F8CF] text-[#0B5E06]"
                  : "bg-[#F8F3B9] text-[#9C7700] list-image-none"
              }`}
            >
              {ticket.status}
            </button>
          </div>
          <p className="text-[#627382]">{ticket.description}</p>
          <div className="flex justify-between">
            <div className="flex mt-3">
              <p className="text-[#627382]">
                #100<span>{ticket.id}</span>{" "}
              </p>
              <p className="ml-4 ">
                <span
                  className={`${
                    ticket.priority === "High"
                      ? "text-red-600"
                      : "text-green-500"
                  }`}
                >
                  {ticket.priority} PRIORITY
                </span>
              </p>
            </div>
            <div className="flex mt-3">
              <p className="text-[#627382] mr-3">{ticket.customer}</p>
              <p className="text-[#627382]">{ticket.createdAt}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Maincointainer;
