import React, {useContext} from 'react';
import { BandsContext } from "../Contexts/BandsContext";
import Artist from "./Artist"


function FullLineup(props) {
    const artists = useContext(BandsContext);


        console.log("artists", artists);
        // artists.map((artist) => <li>{}</li>)


    return (
        <>
          <p styles={props.styles}>
              {artists.map((artist) => <Artist key={Math.random()} content={artist.name} />)}
          </p>
        </>
    )
}

export default FullLineup
