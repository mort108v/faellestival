import React, { useContext, useState } from "react";
import { BandsContext } from "../../Contexts/BandsContext.js";
import ArtistCard from "./ArtistCard.jsx";
import ScrollElm from "../sections/ScrollElm";

function Carrousel(props) {
    const [pickedId, setPickedId] = useState();
      const artists = useContext(BandsContext);
      function showNext() {
          console.log("showNext")
      }

      function showPrev() {
        console.log("showPrev")
    }


  return (
    <div className="carrousel">
      <ScrollElm className="prev" action={showPrev} />
      <article className="artistGrid">
      {artists.map((artist) => <ArtistCard key={artist.id} content={artist.name} className="artistCard" img={artist.logo} action={function() {
          setPickedId(artist.id);
          console.log("gotoArtist", pickedId);
      }
} />)}
      </article>
      <ScrollElm className="next" action={showNext} />
    </div>
  );
}

export default Carrousel;
