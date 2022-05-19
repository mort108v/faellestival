import React, { useState, useEffect } from "react";
import { BandsContext } from "./Contexts/BandsContext.js";
import { LoginContext } from "./Contexts/LoginContext.js";
// import { TicketsContext } from "./Contexts/TicketsContext.js";
import { ScheduleContext } from "./Contexts/ScheduleContext.js";

export const envData = {
  availableSpots: import.meta.env.VITE_FAELLESTIVAL_AVAILABLE_SPOTS,
  bands: import.meta.env.VITE_FAELLESTIVAL_BANDS,
  events: import.meta.env.VITE_FAELLESTIVAL_EVENTS,
  fullfillReservation: import.meta.env.VITE_FAELLESTIVAL_FULLFILL_RESERVATION,
  schedule: import.meta.env.VITE_FAELLESTIVAL_SCHEDULE,
  reserveSpot: import.meta.env.VITE_FAELLESTIVAL_RESERVE_SPOT,
  settings: import.meta.env.VITE_FAELLESTIVAL_SETTINGS,
};

function App() {
  const [bandsData, setBandsData] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [scheduleData, setScheduleData] = useState([]);
  // const [ticketData, setTicketData] = useState([]);

  useEffect(() => {
    fetch(envData.bands)
      .then((res) => res.json())
      .then((data) => {
        setBandsData(data);
        console.log(data);
      });
  }, []);

  useEffect(() => {
    fetch(envData.schedule)
      .then((res) => res.json())
      .then((sdata) => {
        setScheduleData(sdata);
        console.log(sdata);
      });
  }, []);

  // useEffect(() => {
  //   fetch(envData.reserveSpot)
  //     .then((res) => res.json())
  //     .then((tdata) => {
  //       setTicketData(tdata);
  //       console.log(tdata);
  //     });
  // }, []);

  return (
    <>
      <BandsContext.Provider value={bandsData}>
        <ScheduleContext.Provider value={scheduleData}>
          <LoginContext.Provider value={isLogin}>
            {isLogin ? <FestApp /> : <RegApp />}
          </LoginContext.Provider>
        </ScheduleContext.Provider>
      </BandsContext.Provider>
    </>
  );
}

function RegApp() {
  return <h1>Faellestival</h1>;
}

export default App;
