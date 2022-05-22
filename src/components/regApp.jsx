import React from "react";
import { useContext, useState } from "react";
import { BandsContext } from "../Contexts/BandsContext.js";
import { LoginContext } from "../Contexts/LoginContext.js";
import { TicketsContext } from "../Contexts/TicketsContext.js";
import { ScheduleContext } from "../Contexts/ScheduleContext.js";
import NavBar from "./NavBar.jsx";
import LandingPage from "./LandingPage";
import LineupPage from "./LineupPage";
import TicketsPage from "./TicketsPage";
import Footer from "./Footer";

function RegApp() {
  const  { setIsLogin }  = useContext(LoginContext);
  const scheduleData = useContext(ScheduleContext);
  const bandsData = useContext(BandsContext);
  const ticketsData = useContext(TicketsContext);
  const [showLineup, setShowLineup ] = useState(false); 
  const [showLandPage, setShowLandPage] = useState(true);
  const [showTicketsPage, setShowTicketsPage] = useState(false);

  function handleClick() {
    console.log("login");
    setIsLogin(true);
  }

  function handleClick2() {
    console.log(bandsData);
  }

  return (
    <body>
    <NavBar setShowTicketsPage={setShowTicketsPage} setShowLineup={setShowLineup} setShowLandPage={setShowLandPage} isLogin={setIsLogin} />
   { showLandPage &&   <LandingPage  setShowTicketsPage={setShowTicketsPage} setShowLineup={setShowLineup} setShowLandPage={setShowLandPage}/> }
   { showLineup && <LineupPage setShowTicketsPage={setShowTicketsPage} setShowLineup={setShowLineup} setShowLandPage={setShowLandPage}  />}
   { showTicketsPage && <TicketsPage setShowTicketsPage={setShowTicketsPage} setShowLineup={setShowLineup} setShowLandPage={setShowLandPage} />}
      <button onClick={handleClick}>Click LOGIN</button> 
       <button onClick={handleClick2}>Click2 SHOW BANDS</button>
      <Footer />
    </body>
  );
}

export default RegApp;
