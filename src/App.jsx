import "./App.css";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Button from "./components/Button/Button";
import Maincointainer from "./maincointainer/Maincointainer";
import { Suspense, useState } from "react";
import Task from "./components/Task_Section/Task";
const fetchTickets = async () => {
  const res = await fetch("/ticket.json");
  return res.json();
};

function App() {
  const ticketsPromise = fetchTickets();

  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [selectedTicket, setSelectedTicket] = useState([]);
  const removeTicket = (p) => {
    const filteredData = selectedTicket.filter((tik) => tik.id !== p.id);
    setSelectedTicket(filteredData);
    setCount(count - 1);
    setTotal(total + 1);
    toast("Completed!");
  };
  return (
    <>
      <Navbar></Navbar>
      <Button total={total} count={count}></Button>
      <div className="max-w-[1600px] mx-auto bg-gray-100">
        <h1 className="text-2xl font-bold ml-20">Customer Tickets</h1>
        <div className="max-w-[1600px] mx-auto bg-gray-100 flex px-18 gap-7 pb-15">
          <Suspense
            fallback={
              <div className="items-center mx-auto">
                <span className="loading loading-dots loading-xl"></span>
              </div>
            }
          >
            <Maincointainer
              selectedTicket={selectedTicket}
              setSelectedTicket={setSelectedTicket}
              setCount={setCount}
              count={count}
              ticketsPromise={ticketsPromise}
            ></Maincointainer>
          </Suspense>
          <div>
            <Task
              removeTicket={removeTicket}
              selectedTicket={selectedTicket}
            ></Task>
            <div className="border-1 p-2 bg-white mt-5 rounded-xl min-h-[200px] ">
              <h1 className="text-2xl font-semibold">Resolved Task</h1>
              {selectedTicket.map((ticket) => (
                <div className="h-[100px] w-[358px]  bg-[#c5e9d2] p-3 my-2 rounded-xl">
                  <h1 className="text-xl font-semibold">{ticket.title}</h1>
                  <h2 className="font-semibold text-green-600 h-[43px] w-full bg-[#c5e9d2] rounded-xl mt-2">
                    Complete
                  </h2>
                </div>
              ))}
            </div>
            {/* ----------- */}
          </div>
        </div>
      </div>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
