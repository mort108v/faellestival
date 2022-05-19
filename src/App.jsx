import React, { useState, useEffect } from "react";
import { BandsContext } from "./Contexts/BandsContext.js";
import { LoginContext } from "./Contexts/LoginContext.js";
import { TicketsContext } from "./Contexts/TicketsContext.js";

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
  return (
    <>
      <BandsContext.Provider value={bandsData}>
        <TicketsContext.Provider value={scheduleData}>
          <LoginContext.Provider value={isLogin}>
            {isLogin ? <FestApp /> : <RegApp />}
          </LoginContext.Provider>
        </TicketsContext.Provider>
      </BandsContext.Provider>
    </>
  );
}

function RegApp() {
  return <h1>VITE_Faellestival</h1>;
}

export default App;
