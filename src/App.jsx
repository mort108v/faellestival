import React, { useState, useEffect } from "react";
import { BandsContext } from "./Contexts/BandsContext.js";
import { LoginContext } from "./Contexts/LoginContext.js";
import { TicketsContext } from "./Contexts/TicketsContext.js";

// export const envData = {
//   availableSpots: process.env.FAELLESTIVAL_AVAILABLE_SPOTS,
//   bands: process.env.FAELLESTIVAL_BANDS,
//   events: process.env.FAELLESTIVAL_EVENTS,
//   fullfillReservation: process.env.FAELLESTIVAL_FULLFILL_RESERVATION,
//   schedule: process.env.FAELLESTIVAL_SCHEDULE,
//   reserveSpot: process.env.FAELLESTIVAL_RESERVE_SPOT,
//   settings: process.env.FAELLESTIVAL_SETTINGS,
// };

function App() {
  const [bandsData, setBandsData] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    fetch("https://a3m-festival.herokuapp.com/bands")
      .then((res) => res.json())
      .then((data) => {
        setBandsData(data);
        console.log(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://a3m-festival.herokuapp.com/schedule")
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
  return <h1>Faellestival</h1>;
}

export default App;
