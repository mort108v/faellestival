import React, { useState, useEffect } from "react";
import { BandsContext } from "./Contexts/BandsContext.js";
import { LoginContext } from "./Contexts/LoginContext.js";
import { TicketsContext } from "./Contexts/TicketsContext.js";
import { ScheduleContext } from "./Contexts/ScheduleContext.js";
import { EventsContext } from "./Contexts/EventsContext.js";
// import { Contexts } from "./Contexts/Contexts.js";
import FestApp from "./components/FestApp";
import RegApp from "./components/RegApp";

function App() {
  const [bandsData, setBandsData] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [scheduleData, setScheduleData] = useState([]);
  const [ticketsData, setTicketsData] = useState([]);
  const [eventsData, setEventsData] = useState({});

  const envData = {
    availableSpots: import.meta.env.VITE_FAELLESTIVAL_AVAILABLE_SPOTS,
    bands: import.meta.env.VITE_FAELLESTIVAL_BANDS,
    events: import.meta.env.VITE_FAELLESTIVAL_EVENTS,
    schedule: import.meta.env.VITE_FAELLESTIVAL_SCHEDULE,
  };
  useEffect(() => {
    fetch(envData.availableSpots)
      .then((res) => res.json())
      .then((tdata) => {
        setTicketsData(tdata);
        console.log(tdata);
      });
  }, []);

  useEffect(() => {
    // Make a promise to fetch bands
    const bandsFetch = fetch(envData.bands);
    // Make a promise to fetch events
    const eventsFetch = fetch(envData.events);
    // Make a promise to fetch schedule
    const scheduleFetch = fetch(envData.schedule);
    // Run all promises and spit out the arrays
    Promise.all([bandsFetch, eventsFetch, scheduleFetch])
      .then((valueArray) => {
        return Promise.all(valueArray.map((r) => r.json()));
      })
      // Then forward the arrays to be setState
      .then(([bands, events, schedule]) => {
        setScheduleData(schedule);
        setBandsData(bands);
        setEventsData(events);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <BandsContext.Provider value={bandsData}>
        <ScheduleContext.Provider value={scheduleData}>
          <TicketsContext.Provider value={ticketsData}>
            <EventsContext.Provider value={eventsData}>
              <LoginContext.Provider value={{ isLogin, setIsLogin }}>
                {isLogin ? <FestApp /> : <RegApp />}
              </LoginContext.Provider>
            </EventsContext.Provider>
          </TicketsContext.Provider>
        </ScheduleContext.Provider>
      </BandsContext.Provider>
    </>
  );
}

export default App;
