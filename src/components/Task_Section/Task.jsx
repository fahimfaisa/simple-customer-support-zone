import React from "react";
import Complete from "../complete/Complete";

const Task = ({
  selectedTicket,
  removeTicket,
  completeTicket,
  setCompleteTicket,
}) => {
  return (
    <div>
      <div className="w-[380px] min-h-[200px]  bg-white pl-[10px] rounded-xl">
        <h1 className="font-semibold text-2xl mb-2 pt-4">Task Status</h1>

        {selectedTicket.map((ticket) => (
          <Complete
            completeTicket={completeTicket}
            setCompleteTicket={setCompleteTicket}
            removeTicket={removeTicket}
            ticket={ticket}
          ></Complete>
        ))}
      </div>
    </div>
  );
};

export default Task;
