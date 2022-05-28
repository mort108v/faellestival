import React from "react";
import ProgramCard from "../UI/ProgramCard";
import MainTitle from "../UI/MainTitle";
import Breadcrumbs from "../UI/Breadcrumbs";

function ArtistHeader(props) {
  function goToMain() {
    console.log("gotomain");
    props.setShowArtistPage(false);
    props.setShowFestLandPage(true);
  }
  let imgPath;
  let img = props.pickedId.logo;
  img.startsWith("http")
    ? (imgPath = props.pickedId.logo)
    : (imgPath = "https://a3m-festival.herokuapp.com/logos/" + img);

  return (
    <section className="artistHeader">
      <Breadcrumbs bc="Main" className="breadCrumbs" action={goToMain} />
      <img src={imgPath} alt={props.pickedId.name} />
      <MainTitle className="mainTitle" content={props.pickedId.name} />
      <ProgramCard {...props} />
    </section>
  );
}

export default ArtistHeader;
