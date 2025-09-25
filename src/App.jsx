import "./App.css";
import { ToastContainer } from "react-toastify";
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
          <Task
            removeTicket={removeTicket}
            selectedTicket={selectedTicket}
          ></Task>
        </div>
      </div>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
