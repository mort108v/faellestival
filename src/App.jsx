import React, { useState, useEffect } from "react";
import { BandsContext } from "./Contexts/BandsContext.js";
import { LoginContext } from "./Contexts/LoginContext.js";
import { TicketsContext } from "./Contexts/TicketsContext.js";
import { ScheduleContext } from "./Contexts/ScheduleContext.js";
import { AvailableContext } from "./Contexts/AvailableContext.js";
import FestApp from "./components/FestApp";
import RegApp from "./components/RegApp";

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
  const [ticketsData, setTicketsData] = useState([]);
  const [availableData, setAvailable] = useState([]);
  const ticketsJsonFile = "./content.json";

  useEffect(() => {
    fetch(ticketsJsonFile)
      .then((res) => res.json())
      .then((data) => {
        setTicketsData(data);
        console.log(data);
      });
  }, []);

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

  useEffect(() => {
    fetch(envData.availableSpots)
      .then((res) => res.json())
      .then((tdata) => {
        setAvailable(tdata);
        console.log(tdata);
      });
  }, []);

  return (
    <>
      <BandsContext.Provider value={bandsData}>
        <ScheduleContext.Provider value={scheduleData}>
          <LoginContext.Provider value={{ isLogin, setIsLogin }}>
            <TicketsContext.Provider value={ticketsData}>
              <AvailableContext.Provider value={availableData}>
                {isLogin ? <FestApp /> : <RegApp />}
              </AvailableContext.Provider>
            </TicketsContext.Provider>
          </LoginContext.Provider>
        </ScheduleContext.Provider>
      </BandsContext.Provider>
    </>
  );
}

export default App;