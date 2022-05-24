import React, { useState, useContext } from "react";
import Footer from "./Footer";
import NavBar from "./UI/NavBar";
import FestLandPage from "./FestLandPage";
import ArtistPage from "./ArtistPage";
import ProgramPage from "./ProgramPage";
import FaellesCardPage from "./FaellesCardPage";
// import { BandsContext } from "../Contexts/BandsContext.js";
import { LoginContext } from "../Contexts/LoginContext.js";
// import { TicketsContext } from "../Contexts/TicketsContext.js";
// import { ScheduleContext } from "../Contexts/ScheduleContext.js";

function FestApp() {
  const { setIsLogin } = useContext(LoginContext);

  const [showFestLandPage, setShowFestLandPage] = useState(true);
  const [showArtistPage, setShowArtistPage] = useState(false);
  const [showProgramPage, setShowProgramPage] = useState(false);
  const [showFCardPage, setShowFCardPage] = useState(false);

  return (
    <>
      <NavBar
        setShowFestLandPage={setShowFestLandPage}
        setShoArtistdPage={setShowArtistPage}
        setShowProgramPage={setShowProgramPage}
        isLogin={setIsLogin}
      />

      {showFestLandPage && (
        <FestLandPage
          setShowFestLandPage={setShowFestLandPage}
          setShowArtistdPage={setShowArtistPage}
          setShowProgramPage={setShowProgramPage}
          setShowFCardPage={setShowFCardPage}
        />
      )}
      {showArtistPage && (
        <ArtistPage
          setShowFestLandPage={setShowFestLandPage}
          setShowArtistdPage={setShowArtistPage}
          setShowProgramPage={setShowProgramPage}
        />
      )}
      {showProgramPage && (
        <ProgramPage
          setShowFestLandPage={setShowFestLandPage}
          setShowProgramPage={setShowProgramPage}
        />
      )}
      {showFCardPage && (
        <FaellesCardPage
          setShowFestLandPage={setShowFestLandPage}
          setShowFCardPage={setShowFCardPage}
        />
      )}
      <Footer />
    </>
  );
}

export default FestApp;
