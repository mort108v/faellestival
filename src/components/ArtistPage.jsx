import React, { useContext } from "react";
import ArtistBio from "./UI/ArtistBio";
import ArtistsSection from "./sections/ArtistsSection";
import ArtistHeader from "./sections/ArtistHeader";

function ArtistPage(props) {
  // const bands = useContext(BandsContext);
  console.log("artist", props.pickedId);

  return (
    <>
      <ArtistHeader {...props} />
      <ArtistBio {...props} />
      <ArtistsSection
        content="See More Artists"
        className="artistSection"
        {...props}
      />
    </>
  );
}

export default ArtistPage;
