import React from "react";
import { useContext } from "react";
import Footer from "./Footer";
import NavBar from "./UI/NavBar";
import FestLandPage from "./FestLandPage";
import ArtistPage from "./ArtistPage";
import ProgramPage from "./ProgramPage";
import FaellesCardPage from "./FaellesCardPage";
import { BandsContext } from "../Contexts/BandsContext.js";
import { LoginContext } from "../Contexts/LoginContext.js";
import { TicketsContext } from "../Contexts/TicketsContext.js";
import { ScheduleContext } from "../Contexts/ScheduleContext.js";

function FestApp() {
  const { setIsLogin } = useContext(LoginContext);
  function handleClick() {
    console.log("login");
    setIsLogin(true);
  }
  <button onClick={handleClick}>Click</button>;

  return (
    <body>
      <NavBar />
      <FestLandPage />
      <ArtistPage />
      <ProgramPage />
      <FaellesCardPage />
      <Footer />
    </body>
  );
}

export default FestApp;
