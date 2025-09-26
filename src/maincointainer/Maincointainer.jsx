import React, { use } from "react";
import { toast } from "react-toastify";
import CustomerTicket from "../components/CustomerTicket/CustomerTicket";

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
    <div className="grid md:grid-cols-2 gap-5 sm:grid-cols-1 justify-center items-center mx-auto">
      {/* --------- */}
      {ticketData.map((ticket) => (
        <CustomerTicket
          handleSingle={handleSingle}
          ticket={ticket}
        ></CustomerTicket>
      ))}
    </div>
  );
};

export default Maincointainer;
