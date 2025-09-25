import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Button from "./components/Button/Button";
import Maincointainer from "./maincointainer/Maincointainer";
import { Suspense } from "react";
const fetchTickets = async () => {
  const res = await fetch("/ticket.json");
  return res.json();
};

function App() {
  const ticketsPromise = fetchTickets();
  return (
    <>
      <Navbar></Navbar>
      <Button></Button>

      <div className="max-w-[1600px] mx-auto bg-gray-100 flex border-2 border-red-600 px-18 gap-7 pb-15">
        <Suspense
          fallback={
            <div className="items-center mx-auto">
              <span className="loading loading-dots loading-xl"></span>
            </div>
          }
        >
          <Maincointainer ticketsPromise={ticketsPromise}></Maincointainer>
        </Suspense>
        <div className="w-[360px] border-1 border-red-600">
          <h1 className="font-semibold text-3xl">Task Status</h1>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
