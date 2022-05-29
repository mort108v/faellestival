import React, { useState, useContext } from "react";
import Footer from "./Footer";
import NavBar from "./UI/NavBar";
import FestLandPage from "./FestLandPage";
import ArtistPage from "./ArtistPage";
import ProgramPage from "./ProgramPage";
import FaellesCardPage from "./FaellesCardPage";
import { LoginContext } from "../Contexts/LoginContext.js";

// import { AvailableContext } from "../Contexts/AvailableContext.js";
// import { ScheduleContext } from "../Contexts/ScheduleContext.js";


function FestApp() {
  const { setIsLogin } = useContext(LoginContext);

  const [showFestLandPage, setShowFestLandPage] = useState(true);
  const [showArtistPage, setShowArtistPage] = useState(false);
  const [showProgramPage, setShowProgramPage] = useState(false);
  const [showFCardPage, setShowFCardPage] = useState(false);
  const [pickedId, setPickedId] = useState([]);

  return (
    <>
      <NavBar
        setShowFestLandPage={setShowFestLandPage}
        setShowArtistPage={setShowArtistPage}
        setShowProgramPage={setShowProgramPage}
        isLogin={setIsLogin}
      />




      {showFestLandPage && (
        <FestLandPage
          setShowFestLandPage={setShowFestLandPage}
          setShowArtistPage={setShowArtistPage}
          setShowProgramPage={setShowProgramPage}
          setShowFCardPage={setShowFCardPage}
          pickedId={pickedId}
          setPickedId={setPickedId}
        />
      )}
      {showArtistPage && (
        <ArtistPage
          setShowFestLandPage={setShowFestLandPage}
          setShowArtistPage={setShowArtistPage}
          setShowProgramPage={setShowProgramPage}
          pickedId={pickedId}
          setPickedId={setPickedId}
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
      <Footer
        setShowFestLandPage={setShowFestLandPage}
        setShowArtistdPage={setShowArtistPage}
        setShowProgramPage={setShowProgramPage}
        setShowFCardPage={setShowFCardPage}
      />
    </>
  );
}

export default FestApp;
