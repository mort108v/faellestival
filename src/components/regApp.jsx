import React, { useContext, useState } from "react";
// import { BandsContext } from "../Contexts/BandsContext.js";
import { LoginContext } from "../Contexts/LoginContext.js";

// import { TicketsContext } from "../Contexts/TicketsContext.js";
// import { ScheduleContext } from "../Contexts/ScheduleContext.js";
import { ScheduleContext } from "../Contexts/ScheduleContext.js";
import NavBar from "./UI/NavBar.jsx";
import LandingPage from "./LandingPage";
import LineupPage from "./LineupPage";
import TicketsPage from "./TicketsPage";
import Footer from "./Footer";
import FaqPage from "./FaqPage.jsx";
import BurgerMenu from "./UI/BurgerMenu.jsx";

function RegApp(props) {
  const { isLogin, setIsLogin } = useContext(LoginContext);
  // const scheduleData = useContext(ScheduleContext);
  // const bandsData = useContext(BandsContext);
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
        {...props}
        setShowTicketsPage={setShowTicketsPage}
        setShowLineup={setShowLineup}
        setShowLandPage={setShowLandPage}
        className="regNavBar"
        showLandPage={showLandPage}
        showTicketsPage={showTicketsPage}
        showLineup={showLineup}
      />
        {/* const [showBurgerMenu, setShowBurgerMenu] = useState(false); */}
{props.showBurgerMenu && <BurgerMenu
        {...props}
        setShowTicketsPage={setShowTicketsPage}
        setShowLineup={setShowLineup}
        setShowLandPage={setShowLandPage}
        className="mobileBurgerMenu"
        showLandPage={showLandPage}
        showTicketsPage={showTicketsPage}
        showLineup={showLineup}
      />}
      {showLandPage && (
        <LandingPage
          setShowTicketsPage={setShowTicketsPage}
          setShowLineup={setShowLineup}
          setShowLandPage={setShowLandPage}
// {<<<<<<< who-is-playing-now
          setShowFaqPage={setShowFaqPage}
// =======}
//             {>>>>>>> main}
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
      {/* {<<<<<<< who-is-playing-now} */}
      {showFaqPage && (
        <FaqPage
          setShowTicketsPage={setShowTicketsPage}
          setShowLineup={setShowLineup}
          setShowLandPage={setShowLandPage}
          setShowFaqPage={setShowFaqPage}
        />
      )}
      
      <button onClick={handleClick}>Click LOGIN</button>
      <Footer setShowTicketsPage={setShowTicketsPage} setShowLineup={setShowLineup} setShowLandPage={setShowLandPage} setShowFaqPage={setShowFaqPage} />
    </>
  );
}

export default RegApp;
