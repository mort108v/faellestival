import React, { useContext, useState } from "react";
import { BandsContext } from "../../Contexts/BandsContext.js";
import ArtistCard from "./ArtistCard.jsx";
import ScrollElm from "../sections/ScrollElm";

function Carrousel(props) {
  const [pic1, setPick1] = useState(0);
  const [pic2, setPick2] = useState(1);
  const [pic3, setPick3] = useState(2);
  const [pic4, setPick4] = useState(3);

  const artists = useContext(BandsContext);

  function showNext() {
    console.log("showNext");
    props.setPick1((old) => old + 4);
    props.setPick2((old) => old + 4);
    props.setPick3((old) => old + 4);
    props.setPick4((old) => old + 4);
  }

  function showPrev() {
    console.log("showPrev");
    props.setPick1((old) => old - 4);
    props.setPick2((old) => old - 4);
    props.setPick3((old) => old - 4);
    props.setPick4((old) => old - 4);
  }


  return (
    <div className="carrousel">
      <ScrollElm className="prev" action={showPrev} />
      <article className="artistGrid">

        <ArtistCard
          key={pic1}
          id={artists[pic1].name}
          content={artists[pic1].name}
          className="artistCard"
          img={artists[pic1].logo}
          action={() => {
            props.setPickedId(artists[pic1].name);
            console.log("gotoArtist", props.pickedId);
          }}
        />

        <ArtistCard
          key={pic2}
          id={artists[pic2].name}
          content={artists[pic2].name}
          className="artistCard"
          img={artists[pic2].logo}
          action={() => {
            props.setPickedId(artists[pic2].name);
            console.log("gotoArtist", props.pickedId);
          }}
        />

        <ArtistCard
          key={pic3}
          id={artists[pic3].name}
          content={artists[pic3].name}
          className="artistCard"
          img={artists[pic3].logo}
          action={() => {
            props.setPickedId(artists[pic3].name);
            console.log("gotoArtist", props.pickedId);
          }}
        />

        <ArtistCard
          key={pic4}
          id={artists[pic4].name}
          content={artists[pic4].name}
          className="artistCard"
          img={artists[pic4].logo}
          action={() => {
            props.setPickedId(artists[pic4].name);
            console.log("gotoArtist", props.pickedId);
          }}
        />
      </article>
      <ScrollElm className="next" action={showNext} />
    </div>
  );
}

export default Carrousel;
