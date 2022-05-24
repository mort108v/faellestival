import React from "react";
import { useContext, useState } from "react";
import { BandsContext } from "../Contexts/BandsContext.js";
import { LoginContext } from "../Contexts/LoginContext.js";
import { TicketsContext } from "../Contexts/TicketsContext.js";
import { ScheduleContext } from "../Contexts/ScheduleContext.js";
import NavBar from "./UI/NavBar.jsx";
import LandingPage from "./LandingPage";
import LineupPage from "./LineupPage";
import TicketsPage from "./TicketsPage";
import Footer from "./Footer";
import FaqPage from "./FaqPage.jsx";

function RegApp() {
  const { setIsLogin } = useContext(LoginContext);
  const scheduleData = useContext(ScheduleContext);
  const bandsData = useContext(BandsContext);
  const ticketsData = useContext(TicketsContext);
  const [showLineup, setShowLineup] = useState(false);
  const [showLandPage, setShowLandPage] = useState(true);
  const [showTicketsPage, setShowTicketsPage] = useState(false);
  const [showFaqPage, setShowFaqPage] = useState(false);

  function handleClick() {
    console.log("login");
    setIsLogin(true);
  }

  return (
    <>
      <NavBar
        setShowTicketsPage={setShowTicketsPage}
        setShowLineup={setShowLineup}
        setShowLandPage={setShowLandPage}
        isLogin={setIsLogin}
      />
      {showLandPage && (
        <LandingPage
          setShowTicketsPage={setShowTicketsPage}
          setShowLineup={setShowLineup}
          setShowLandPage={setShowLandPage}
          setShowFaqPage={setShowFaqPage}
        />
      )}
      {showLineup && (
        <LineupPage
          setShowTicketsPage={setShowTicketsPage}
          setShowLineup={setShowLineup}
          setShowLandPage={setShowLandPage}
        />
      )}
      {showTicketsPage && (
        <TicketsPage
          setShowTicketsPage={setShowTicketsPage}
          setShowLineup={setShowLineup}
          setShowLandPage={setShowLandPage}
        />
      )}
      {showFaqPage && (
        <FaqPage
          setShowTicketsPage={setShowTicketsPage}
          setShowLineup={setShowLineup}
          setShowLandPage={setShowLandPage}
          setShowFaqPage={setShowFaqPage}
        />
      )}
      <button onClick={handleClick}>Click LOGIN</button>
      <Footer />
    </>
  );
}

export default RegApp;
