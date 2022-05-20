import React from "react";
import { useContext, useState } from "react";
import { BandsContext } from "../Contexts/BandsContext.js";
import { LoginContext } from "../Contexts/LoginContext.js";
import { TicketsContext } from "../Contexts/TicketsContext.js";
import { ScheduleContext } from "../Contexts/ScheduleContext.js";
import { Contexts } from "../Contexts/Contexts.js";
import LandingPage from "./LandingPage";
import LineupPage from "./LineupPage";
import TicketsPage from "./TicketsPage";
import NavBar from "./NavBar";
import Footer from "./Footer";

function RegApp() {
  const { setIsLogin } = useContext(LoginContext);
  const contextsData = useContext(Contexts);
  const scheduleData = useContext(ScheduleContext);
  const bandsData = useContext(BandsContext);
  const ticketsData = useContext(TicketsContext);
  const [showLineup, setShowLineup] = useState(false);
  const [showLandPage, setShowLandPage] = useState(true);
  const [showTicketsPage, setShowTicketsPage] = useState(false);

  function handleClick() {
    console.log("login");
    setIsLogin(true);
  }

  function handleClick2() {
    console.log(contextsData.bands);
  }

  return (
    <>
      <NavBar />
      {showLandPage && (
        <LandingPage
          setShowTicketsPage={setShowTicketsPage}
          setShowLineup={setShowLineup}
          setShowLandPage={setShowLandPage}
        />
      )}
      {showLineup && <LineupPage />}
      {showTicketsPage && <TicketsPage />}
      <button onClick={handleClick}>Click LOGIN</button>
      <button onClick={handleClick2}>Click2 SHOW BANDS</button>
      <Footer />
    </>
  );
}

export default RegApp;