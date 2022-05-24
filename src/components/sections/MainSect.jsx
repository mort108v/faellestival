import React from "react";
import Breadcrumbs from "../UI/Breadcrumbs";
import HeaderBg from "../HeaderBg";
import MainTitle from "../UI/MainTitle";

function MainSect(props) {
  function goToRegApp() {
    props.setShowTicketsPage(false);
    props.setShowLineup(false);
    props.setShowLandPage(true);
  }
  // function goToFestApp() {
  //     props.setShowArtistPage(false);
  //     props.setShowProgram(false);
  //     props.setShowFCardPage(false);
  //     props.setShowFLandPage(true);
  // }
  return (
    <section className={props.className}>
      {props.bcReg && (
        <Breadcrumbs
          className="breadCrumbs"
          bc={props.bcReg}
          action={goToRegApp}
        />
      )}
      {/* {props.bcFest && <Breadcrumbs bc={props.bcFest} action={goToFestApp} />} */}
      <HeaderBg className="heroBg" />
      <MainTitle className="mainTitle" content={props.content} />
    </section>
  );
}

export default MainSect;
