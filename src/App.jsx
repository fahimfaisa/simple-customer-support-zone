import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Button from "./components/Button/Button";
import Maincointainer from "./maincointainer/Maincointainer";
import { Suspense, useState } from "react";
import Task from "./components/Task_Section/Task";
import Resolved from "./Resolved/Resolved";
const fetchTickets = async () => {
  const res = await fetch("/ticket.json");
  return res.json();
};

function App() {
  const ticketsPromise = fetchTickets();

  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [selectedTicket, setSelectedTicket] = useState([]);
  const [completeTicket, setCompleteTicket] = useState([]);
  const removeTicket = (p) => {
    const filteredData = selectedTicket.filter((tik) => tik.id !== p.id);
    setSelectedTicket(filteredData);
    console.log(filteredData);
    setCount(count - 1);
    setTotal(total + 1);
    toast("Completed!");
  };
  return (
    <>
      <Navbar></Navbar>
      <Button total={total} count={count}></Button>
      <div className="max-w-[1600px] mx-auto bg-gray-100">
        <h1 className="text-2xl font-bold ml-20 mb-4">Customer Tickets</h1>
        <div className=" max-w-[1600px] mx-auto bg-gray-100 px-18 gap-7 pb-15 flex">
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
              setCompleteTicket={setCompleteTicket}
              completeTicket={completeTicket}
              removeTicket={removeTicket}
              selectedTicket={selectedTicket}
            ></Task>
            <Resolved completeTicket={completeTicket}></Resolved>
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
