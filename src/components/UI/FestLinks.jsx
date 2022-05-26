import React, { useContext } from "react";
import Link from "./Link";
import {LoginContext} from "../../Contexts/LoginContext"

function FestLinks(props) {
  const { setIsLogin } = useContext(LoginContext);

  function goToProgramPage() {
    props.setShowProgramPage(true);
    props.setShowFestLandPage(false);
    props.setShowArtistdPage(false);
    props.setShowFCardPage(false);
    console.log("go to programpage");
  }
  function goToArtistsPage() {
    props.setShowArtistdPage(true);
    props.setShowFestLandPage(false);
    props.setShowProgramPage(false);
    props.setShowFCardPage(false);
    console.log("go to artistprogrampage");
  }

  function goTomainPage() {
    console.log("go to mainpage");
    setIsLogin(false);
  }
  function goTofaellescardPage() {
    props.setShowFestLandPage(false);
    props.setShowArtistdPage(false);
    props.setShowProgramPage(false);
    props.setShowFCardPage(true);
    console.log("go to mainpage");
  }
  return (
    <ul>
      <Link className="link" content="Program" action={goToProgramPage} />
      <Link className="link" content="Artists" action={goToArtistsPage} />
      <Link className="link" content="Main Page" action={goTomainPage} />
      <Link
        className="link"
        content="Your Faelles Card"
        action={goTofaellescardPage}
      />
    </ul>
  );
}

export default FestLinks;
